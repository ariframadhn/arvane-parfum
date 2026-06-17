"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>Our Story</span>
          <h1 className={styles.title}>The Art of Fine Perfumery</h1>
          <p className={styles.subtitle}>Proudly crafted in Indonesia. A dedication to world-class luxury from the heart of our local artisans.</p>
        </motion.div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div 
              className={styles.textColumn}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>From Local Heritage to Global Standard</h2>
              <p>
                ARVANE lahir dari sebuah visi sederhana: membuktikan bahwa Indonesia mampu menghasilkan karya seni wewangian dengan kualitas, kompleksitas, dan estetika yang sejajar dengan rumah parfum legendaris dunia. 
              </p>
              <p>
                Sebagai sebuah <strong>UMKM Indonesia</strong>, kami memadukan kekayaan bahan baku lokal pilihan dengan teknik perfumery modern. Setiap tetes ARVANE diracik dengan penuh ketelitian oleh artisan lokal kami, memastikan setiap botol menceritakan kisah tentang dedikasi, semangat kewirausahaan, dan kebanggaan akan karya anak bangsa.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.imageColumn}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src="/asset/1 large.png" 
                  alt="ARVANE Signature Perfume" 
                  fill 
                  style={{ objectFit: "contain", padding: "20px" }} 
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className={styles.quoteSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote>
              "Kami tidak hanya menciptakan parfum, kami membangun standar baru untuk produk lokal Indonesia."
            </blockquote>
            <cite>— Founder of ARVANE</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
