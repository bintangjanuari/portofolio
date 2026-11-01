import React from "react";
import { Mail, Phone, MapPin, Clock, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { SocialLink } from "@/components/ui/SocialLink/SocialLink";
import { profileData } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.scss";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact Information">
      <Container size="xl">
        <SectionHeading
          badge="Get in Touch"
          title="Let's build something exceptional together"
          subtitle="Whether you have an upcoming project, are looking for an experienced fullstack developer, or just want to discuss modern software architecture — I am always open to connecting."
        />

        <div className={styles.contactGrid}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Direct Contact Channels</h3>
              <p className={styles.infoDescription}>
                Feel free to email me directly or connect through LinkedIn. I respond promptly within 24 hours.
              </p>

              <div className={styles.channelList}>
                <a href={`mailto:${profileData.email}`} className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Email Address</span>
                    <span className={styles.channelValue}>{profileData.email}</span>
                  </div>
                </a>

                <a href={`tel:${profileData.phone.replace(/[\s-]/g, "")}`} className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Phone / WhatsApp</span>
                    <span className={styles.channelValue}>{profileData.phone}</span>
                  </div>
                </a>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Location & Timezone</span>
                    <span className={styles.channelValue}>{profileData.location} (UTC+7)</span>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Clock size={20} aria-hidden="true" />
                  </div>
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Working Status</span>
                    <span className={styles.channelValue}>{profileData.availability}</span>
                  </div>
                </div>
              </div>

              <div className={styles.socialGroup}>
                <span className={styles.socialLabel}>Professional Networks:</span>
                <div className={styles.socialButtons}>
                  {profileData.socialLinks.map((link) => (
                    <SocialLink
                      key={link.platform}
                      platform={link.platform}
                      url={link.url}
                      ariaLabel={`Visit ${link.platform} profile`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <div className={styles.formWrapper}>
              <h3 className={styles.formHeading}>Send a Message</h3>
              <p className={styles.formSubheading}>
                Fill out the form below and I will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

