"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          
          {/* Info Section */}
          <motion.div 
            className={styles.infoSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>Connect with ARVANE</h1>
            <p className={styles.description}>
              Have a question about our fragrances, orders, or just want to say hello? 
              We are here to provide you with a premium experience.
            </p>

            <div className={styles.contactList}>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <div className={styles.iconBox}><MessageCircle size={24} /></div>
                <div>
                  <p className={styles.itemLabel}>WhatsApp</p>
                  <p className={styles.itemValue}>+62 812 3456 7890</p>
                </div>
              </a>
              
              <a href="mailto:hello@arvane.com" className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <p className={styles.itemLabel}>Email</p>
                  <p className={styles.itemValue}>hello@arvane.com</p>
                </div>
              </a>

              <a href="https://instagram.com/arvane.parfum" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <div className={styles.iconBox}><Instagram size={24} /></div>
                <div>
                  <p className={styles.itemLabel}>Instagram</p>
                  <p className={styles.itemValue}>@arvane.parfum</p>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div>
                  <p className={styles.itemLabel}>Location</p>
                  <p className={styles.itemValue}>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`${styles.formWrapper} glass-card`}>
              <h2 className={styles.formTitle}>Send a Message</h2>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option>Order Inquiry</option>
                    <option>Product Information</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
