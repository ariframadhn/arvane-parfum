"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FragrancesSection.module.css";

const notes = [
  { name: "Citrus", image: "/asset/fragrance/citrus.png" },
  { name: "Floral", image: "/asset/fragrance/floral.png" },
  { name: "Fruity", image: "/asset/fragrance/fruity.png" },
  { name: "Gourmand", image: "/asset/fragrance/gourmand.png" },
  { name: "Musky", image: "/asset/fragrance/musky.png" },
  { name: "Woody & Vanilla", image: "/asset/fragrance/woody and vanilla.png" }
];

export default function FragrancesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={styles.title}>The Olfactory Journey</h2>
          <p className={styles.subtitle}>Explore the pure essences that define ARVANE.</p>
        </motion.div>

        <div className={styles.notesGrid}>
          {notes.map((note, idx) => (
            <motion.div 
              key={idx} 
              className={styles.noteCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={note.image} 
                  alt={note.name} 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
                <div className={styles.overlay}>
                  <h3 className={styles.noteName}>{note.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
