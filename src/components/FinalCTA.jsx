"use client";

import { motion } from "framer-motion";
import styles from "./FinalCTA.module.css";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.headline}>Discover Your Signature.</h2>
          <div className={styles.actions}>
            <Link href="/products" className={styles.primaryBtn}>
              Shop Collection
            </Link>
            <Link href="/catalogue" className={styles.secondaryBtn}>
              Explore Catalogue
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
