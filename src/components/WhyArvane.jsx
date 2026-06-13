"use client";

import { motion } from "framer-motion";
import { Clock, Droplets, Gem } from "lucide-react";
import styles from "./WhyArvane.module.css";

const features = [
  {
    icon: <Clock size={40} />,
    title: "Long Lasting Formula",
    description: "Crafted for all-day confidence. Our Extrait de Parfum concentration ensures an enduring trail."
  },
  {
    icon: <Droplets size={40} />,
    title: "Premium Ingredients",
    description: "Carefully selected fragrance compositions sourced from the most exclusive origins."
  },
  {
    icon: <Gem size={40} />,
    title: "Luxury Experience",
    description: "Designed to elevate everyday moments. The epitome of modern sophistication."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function WhyArvane() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Why ARVANE</h2>
          <p className={styles.subtitle}>The architecture of perfection.</p>
        </motion.div>

        <motion.div 
          className={styles.features}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className={styles.feature} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
