import emailjs from "@emailjs/browser";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
	AlertCircle,
	CheckCircle2,
	Mail,
	MapPin,
	Send,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");
		setErrorMessage("");

		try {
			const serviceId = "service_56zhpb6";
			const templateId = "template_yue7ujf";
			const publicKey = "IXYu3jq_csIWLo-uB";

			await emailjs.send(
				serviceId,
				templateId,
				{
					user_name: formData.name,
					user_email: formData.email,
					message: formData.message,
				},
				publicKey,
			);

			setStatus("success");
			setFormData({ name: "", email: "", message: "" });
			setTimeout(() => setStatus("idle"), 5000);
		} catch (error) {
			console.error("Failed to send email:", error);
			setStatus("error");
			setErrorMessage(t("contact.error"));
			setTimeout(() => setStatus("idle"), 5000);
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

	return (
		<section id="contact" className="py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
					{/* Left: info */}
					<div className="space-y-8">
						<div className="space-y-4">
							<h2 className="text-3xl sm:text-4xl font-bold text-balance leading-tight">
								{t("contact.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{t("contact.subtitle")}
							</p>
						</div>

						<div className="space-y-4">
							<a
								href="mailto:ignaciogomezdev@gmail.com"
								className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
							>
								<div className="p-2 rounded-md bg-muted group-hover:bg-muted/70 transition-colors">
									<Mail className="h-4 w-4 text-foreground" />
								</div>
								<span className="text-sm">ignaciogomezdev@gmail.com</span>
							</a>

							<div className="flex items-center gap-3 text-muted-foreground">
								<div className="p-2 rounded-md bg-muted">
									<MapPin className="h-4 w-4 text-foreground" />
								</div>
								<span className="text-sm">{t("contact.locationValue")}</span>
							</div>
						</div>
					</div>

					{/* Right: form */}
					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-1.5">
								<label
									htmlFor="name"
									className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
								>
									{t("contact.name")}
								</label>
								<Input
									id="name"
									name="name"
									placeholder={t("contact.namePlaceholder")}
									value={formData.name}
									onChange={handleChange}
									required
									className="bg-background border-input focus:border-primary"
								/>
							</div>
							<div className="space-y-1.5">
								<label
									htmlFor="email"
									className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
								>
									{t("contact.email")}
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder={t("contact.emailPlaceholder")}
									value={formData.email}
									onChange={handleChange}
									required
									className="bg-background border-input focus:border-primary"
								/>
							</div>
						</div>

						<div className="space-y-1.5">
							<label
								htmlFor="message"
								className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
							>
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
								className="bg-background border-input focus:border-primary resize-none"
							/>
						</div>

						<Button
							type="submit"
							className="w-full gap-2"
							disabled={status === "sending"}
						>
							{status === "sending" ? t("contact.sending") : t("contact.send")}
							<Send className="h-4 w-4" />
						</Button>

						{status === "success" && (
							<div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-400">
								<CheckCircle2 className="h-5 w-5 shrink-0" />
								<p className="text-sm font-medium">{t("contact.success")}</p>
							</div>
						)}

						{status === "error" && (
							<div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-400">
								<AlertCircle className="h-5 w-5 shrink-0" />
								<p className="text-sm font-medium">{errorMessage}</p>
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
