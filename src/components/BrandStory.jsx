"use client";

import { motion } from "framer-motion";
import styles from "./BrandStory.module.css";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className={styles.headline}>The Signature of Confidence.</h2>
          <p className={styles.copy}>
            ARVANE creates fragrances that embody sophistication, elegance, and individuality. 
            Designed for modern lifestyles and unforgettable moments. Every bottle is a testament 
            to masterful perfumery, blending the finest ingredients from around the world into 
            harmonious, lasting impressions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
