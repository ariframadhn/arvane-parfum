"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./Faq.module.css";

const FAQS = [
  {
    question: "What makes ARVANE unique?",
    answer: "ARVANE is proudly formulated in Indonesia, combining rich local heritage with world-class perfumery techniques. We use the highest quality Extrait de Parfum concentration to ensure longevity and an unforgettable trail."
  },
  {
    question: "How long does the fragrance last?",
    answer: "Thanks to our Extrait de Parfum formulation, our fragrances typically last between 8 to 12 hours on skin, and even longer on fabric, depending on your body chemistry and environmental factors."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, absolutely. We are committed to ethical practices. None of our products or ingredients are tested on animals."
  },
  {
    question: "How should I store my ARVANE perfume?",
    answer: "To preserve the integrity of the notes, store your perfume in a cool, dry place away from direct sunlight and extreme temperatures. A drawer or a closet is ideal."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we focus on the Indonesian market to ensure the best possible experience and quality control. However, we are working on expanding our shipping destinations soon."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>Everything you need to know about ARVANE.</p>
        </motion.div>
      </header>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.accordion}>
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index} 
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button 
                  className={styles.faqQuestion} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className={styles.icon} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.answerContent}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
