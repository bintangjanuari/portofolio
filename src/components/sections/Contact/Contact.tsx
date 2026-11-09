"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { profileData } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.scss";

export const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className={styles.contactSection} aria-label="Direct Contact">
      <Container size="default">
        {/* Main Stitch Glass Box Container */}
        <div className={styles.ctaGlassCard}>
          {/* Subtle Ambient Glow */}
          <div className={styles.cardGlow} aria-hidden="true" />

          <div className={styles.cardGrid}>
            {/* Left Column: Big Headline & Availability CTA */}
            <div className={styles.leftCol}>
              <div className={styles.eyebrowBadge}>
                <Sparkles size={16} className={styles.sparkleIcon} />
                <span>Ready for next engineering challenge</span>
              </div>

              <h2 className={styles.headline}>
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                EXTRAORDINARY
              </h2>

              <div className={styles.ctaActionBlock}>
                <p className={styles.availabilityNote}>
                  Available for full-time roles, freelance projects, and engineering collaborations.
                </p>

                <div className={styles.actionBtnRow}>
                  <a
                    href="mailto:akbarbintang9991@gmail.com"
                    className={styles.workTogetherBtn}
                  >
                    <span>Let&apos;s Work Together</span>
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </a>

                  <button
                    type="button"
                    className={styles.toggleFormBtn}
                    onClick={() => setShowForm(!showForm)}
                    aria-expanded={showForm}
                    aria-controls="direct-message-form"
                  >
                    <Send size={15} />
                    <span>{showForm ? "Hide Form" : "Send Quick Message"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Info List */}
            <div className={styles.rightCol}>
              <div className={styles.channelList}>
                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className={styles.channelRow}
                  aria-label={`Send email to ${profileData.email}`}
                >
                  <div className={styles.channelCircle}>
                    <Mail size={16} />
                  </div>
                  <span className={styles.channelText}>{profileData.email}</span>
                </a>

                {/* Phone & WhatsApp */}
                <div className={styles.phoneChannelCard}>
                  <div className={styles.channelRow}>
                    <div className={styles.channelCircle}>
                      <Phone size={16} />
                    </div>
                    <span className={styles.channelText}>{profileData.phone}</span>
                  </div>
                  <div className={styles.phoneSubActions}>
                    <a
                      href="https://wa.me/6281717425199"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.subActionWa}
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${profileData.phone.replace(/[\s-]/g, "")}`}
                      className={styles.subActionCall}
                      aria-label="Direct Phone Call"
                    >
                      <Phone size={13} />
                      <span>Call</span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className={styles.channelRow}>
                  <div className={styles.channelCircle}>
                    <MapPin size={16} />
                  </div>
                  <span className={styles.channelText}>Pandeglang Regency, Banten / Jakarta</span>
                </div>

                {/* Website */}
                <a
                  href="https://bintangdev.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelRow}
                >
                  <div className={styles.channelCircle}>
                    <Globe size={16} />
                  </div>
                  <span className={styles.channelText}>bintangdev.vercel.app</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/bintang-al-akbar-januari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelRow}
                >
                  <div className={styles.channelCircle}>
                    <Linkedin size={16} />
                  </div>
                  <span className={styles.channelText}>linkedin.com/in/bintang-al-akbar-januari</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/bintangjanuari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelRow}
                >
                  <div className={styles.channelCircle}>
                    <Github size={16} />
                  </div>
                  <span className={styles.channelText}>github.com/bintangjanuari</span>
                </a>
              </div>
            </div>
          </div>

          {/* Collapsible Direct Message Form */}
          {showForm && (
            <div id="direct-message-form" className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send a Direct Message</h3>
                <p className={styles.formSubtitle}>
                  Leave your details and message below. I will respond to your inquiry promptly.
                </p>
              </div>
              <ContactForm />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
