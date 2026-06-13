"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./Catalogue.module.css";

const COLLECTIONS = [
  {
    id: "signature",
    name: "Signature Collection",
    description: "The essence of our brand. Timeless, elegant, and unmistakably ARVANE.",
    image: "/asset/1 large.png",
    reverse: false
  },
  {
    id: "blue",
    name: "Blue Collection",
    description: "Fresh and dynamic. A tribute to the boundless ocean and sky.",
    image: "/asset/blue large.png",
    reverse: true
  },
  {
    id: "limited",
    name: "Limited Editions",
    description: "Rare ingredients. Unconventional blends. Once they are gone, they are gone forever.",
    image: "/asset/green large.png",
    reverse: false
  }
];

function CollectionSection({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacityText = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const yText = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [50, 0, -50]);

  return (
    <div ref={ref} className={`${styles.section} ${data.reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <motion.div style={{ y: yImage, width: '100%', height: '100%', position: 'relative' }}>
            <Image 
              src={data.image} 
              alt={data.name} 
              fill 
              style={{ objectFit: "contain", padding: "10%" }} 
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className={styles.textContent}
        style={{ opacity: opacityText, y: yText }}
      >
        <span className={styles.label}>Collection</span>
        <h2 className={styles.name}>{data.name}</h2>
        <p className={styles.description}>{data.description}</p>
        <Link href={`/products?category=${data.name.split(' ')[0]}`} className={styles.exploreBtn}>
          Explore Collection
        </Link>
      </motion.div>
    </div>
  );
}

export default function CataloguePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.headerContent}
        >
          <h1 className={styles.title}>The Catalogue</h1>
          <p className={styles.subtitle}>A curated journey through scent.</p>
        </motion.div>
      </header>

      <div className={styles.collections}>
        {COLLECTIONS.map(collection => (
          <CollectionSection key={collection.id} data={collection} />
        ))}
      </div>
    </div>
  );
}
