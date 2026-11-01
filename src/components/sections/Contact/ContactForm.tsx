"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Contact.module.scss";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Please enter a subject (at least 3 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Thank you! Your message was delivered successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Failed to send message. Please try emailing directly.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setStatusMessage("An unexpected network error occurred. Please reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
      {submitStatus === "success" && (
        <div className={styles.alertSuccess} role="alert">
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className={styles.alertError} role="alert">
          <AlertCircle size={18} aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      )}

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="contact-name" className={styles.label}>
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className={styles.fieldError} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="contact-email" className={styles.label}>
            Email Address <span className={styles.required}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.fieldError} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="contact-subject" className={styles.label}>
          Subject <span className={styles.required}>*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Fullstack Developer Opportunity / Project Inquiry"
          className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
          aria-invalid={errors.subject ? "true" : undefined}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <span id="subject-error" className={styles.fieldError} role="alert">
            {errors.subject}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="contact-message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi Bintang, we came across your work and would love to discuss a project..."
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.fieldError} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        leftIcon={isSubmitting ? <Loader2 size={18} className={styles.spin} /> : <Send size={18} />}
      >
        {isSubmitting ? "Sending Message..." : "Send Message"}
      </Button>
    </form>
  );
};

