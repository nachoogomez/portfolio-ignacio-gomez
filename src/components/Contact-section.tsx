import emailjs from "@emailjs/browser";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
	AlertCircle,
	CheckCircle2,
	Loader2,
	Mail,
	MapPin,
	Send,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAILJS_SERVICE_ID = "service_56zhpb6";
const EMAILJS_TEMPLATE_ID = "template_yue7ujf";
const EMAILJS_PUBLIC_KEY = "IXYu3jq_csIWLo-uB";
const STATUS_RESET_MS = 5000;

const LABEL_CLASS =
	"text-xs font-semibold uppercase tracking-widest text-muted-foreground";

export function ContactSection() {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (resetTimer.current) {
				clearTimeout(resetTimer.current);
			}
		};
	}, []);

	const scheduleReset = () => {
		if (resetTimer.current) {
			clearTimeout(resetTimer.current);
		}
		resetTimer.current = setTimeout(() => setStatus("idle"), STATUS_RESET_MS);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");
		setErrorMessage("");

		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					user_name: formData.name,
					user_email: formData.email,
					message: formData.message,
				},
				EMAILJS_PUBLIC_KEY,
			);

			setStatus("success");
			setFormData({ name: "", email: "", message: "" });
			scheduleReset();
		} catch {
			setStatus("error");
			setErrorMessage(t("contact.error"));
			scheduleReset();
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const isSending = status === "sending";

	return (
		<section id="contact" className="py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
					{/* Left: info */}
					<div className="space-y-8">
						<div className="space-y-4">
							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance leading-tight">
								{t("contact.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed text-pretty">
								{t("contact.subtitle")}
							</p>
						</div>

						<div className="space-y-4">
							<a
								href="mailto:ignaciogomezdev@gmail.com"
								className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group rounded-md"
							>
								<div className="p-2 rounded-md bg-muted group-hover:bg-muted/70 transition-colors">
									<Mail
										className="h-4 w-4 text-foreground"
										aria-hidden="true"
									/>
								</div>
								<span className="text-sm break-all">
									ignaciogomezdev@gmail.com
								</span>
							</a>

							<div className="flex items-center gap-3 text-muted-foreground">
								<div className="p-2 rounded-md bg-muted">
									<MapPin
										className="h-4 w-4 text-foreground"
										aria-hidden="true"
									/>
								</div>
								<span className="text-sm">{t("contact.locationValue")}</span>
							</div>
						</div>
					</div>

					{/* Right: form */}
					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="space-y-1.5">
								<label htmlFor="name" className={LABEL_CLASS}>
									{t("contact.name")}
								</label>
								<Input
									id="name"
									name="name"
									autoComplete="name"
									placeholder={t("contact.namePlaceholder")}
									value={formData.name}
									onChange={handleChange}
									required
									className="bg-background"
								/>
							</div>
							<div className="space-y-1.5">
								<label htmlFor="email" className={LABEL_CLASS}>
									{t("contact.email")}
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									inputMode="email"
									autoComplete="email"
									spellCheck={false}
									autoCapitalize="none"
									placeholder={t("contact.emailPlaceholder")}
									value={formData.email}
									onChange={handleChange}
									required
									className="bg-background"
								/>
							</div>
						</div>

						<div className="space-y-1.5">
							<label htmlFor="message" className={LABEL_CLASS}>
								{t("contact.message")}
							</label>
							<Textarea
								id="message"
								name="message"
								placeholder={t("contact.messagePlaceholder")}
								rows={5}
								value={formData.message}
								onChange={handleChange}
								required
								className="bg-background resize-none"
							/>
						</div>

						<Button type="submit" className="w-full gap-2" disabled={isSending}>
							{isSending ? t("contact.sending") : t("contact.send")}
							{isSending ? (
								<Loader2
									className="h-4 w-4 animate-spin motion-reduce:animate-none"
									aria-hidden="true"
								/>
							) : (
								<Send className="h-4 w-4" aria-hidden="true" />
							)}
						</Button>

						{/* Async result must be announced — screen readers get no visual cue. */}
						<div aria-live="polite" aria-atomic="true">
							{status === "success" && (
								<div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400">
									<CheckCircle2
										className="h-5 w-5 shrink-0"
										aria-hidden="true"
									/>
									<p className="text-sm font-medium">{t("contact.success")}</p>
								</div>
							)}

							{status === "error" && (
								<div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-700 dark:text-red-400">
									<AlertCircle
										className="h-5 w-5 shrink-0"
										aria-hidden="true"
									/>
									<p className="text-sm font-medium">{errorMessage}</p>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
