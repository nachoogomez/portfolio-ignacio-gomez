import emailjs from "@emailjs/browser";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
			// EmailJS configuration - These values are safe to expose in the client
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

			// Reset success message after 5 seconds
			setTimeout(() => setStatus("idle"), 5000);
		} catch (error) {
			console.error("Failed to send email:", error);
			setStatus("error");
			setErrorMessage(t("contact.error"));

			// Reset error message after 5 seconds
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
		<section id="contact" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					<div className="space-y-3 mb-12">
						<h2 className="text-4xl font-bold text-balance">
							{t("contact.title")}
						</h2>
						<p className="text-lg text-muted-foreground text-pretty">
							{t("contact.subtitle")}
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Información de contacto */}
						<div className="space-y-6">
							<Card className="p-6 space-y-6">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-primary/10">
										<Mail className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">{t("contact.email")}</h3>
										<a
											href="mailto:ignaciogomezdev@gmail.com"
											className="text-muted-foreground hover:text-foreground transition-colors"
										>
											ignaciogomezdev@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-primary/10">
										<MapPin className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">
											{t("contact.location")}
										</h3>
										<p className="text-muted-foreground">
											{t("contact.locationValue")}
										</p>
									</div>
								</div>
							</Card>
						</div>

						{/* Formulario de contacto */}
						<Card className="p-6">
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-2">
									<label htmlFor="name" className="text-sm font-medium">
										{t("contact.name")}
									</label>
									<Input
										id="name"
										name="name"
										placeholder={t("contact.namePlaceholder")}
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="space-y-2">
									<label htmlFor="email" className="text-sm font-medium">
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
									/>
								</div>

								<div className="space-y-2">
									<label htmlFor="message" className="text-sm font-medium">
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
									/>
								</div>

								<Button
									type="submit"
									className="w-full gap-2"
									disabled={status === "sending"}
								>
									<Send className="h-4 w-4" />
									{status === "sending"
										? t("contact.sending")
										: t("contact.send")}
								</Button>

								{status === "success" && (
									<div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
										<CheckCircle2 className="h-5 w-5" />
										<p className="text-sm font-medium">
											{t("contact.success")}
										</p>
									</div>
								)}

								{status === "error" && (
									<div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
										<AlertCircle className="h-5 w-5" />
										<p className="text-sm font-medium">{errorMessage}</p>
									</div>
								)}
							</form>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
