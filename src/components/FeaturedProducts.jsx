"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedProducts.module.css";
import { Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ARVANE BLUE",
    volume: "100ml",
    price: "IDR 499.000",
    image: "/asset/blue large.png",
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: 2,
    name: "ARVANE SIGNATURE",
    volume: "50ml",
    price: "IDR 399.000",
    image: "/asset/1 large.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 3,
    name: "SORRENTO",
    volume: "50ml",
    price: "IDR 349.000",
    image: "/asset/sorrento.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 4,
    name: "PINK BLOOM",
    volume: "50ml",
    price: "IDR 349.000",
    image: "/asset/pink large.png",
    colSpan: 2,
    rowSpan: 1
  }
];

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Collection</h2>
          <Link href="/products" className={styles.viewAll}>
            View All Products
          </Link>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.cardWrapper}
              style={{
                gridColumn: `span ${product.colSpan}`,
                gridRow: `span ${product.rowSpan}`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className={`${styles.card} glass-card`}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    style={{ objectFit: "contain", padding: "20px" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.productInfo}>
                  <div>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDetails}>{product.volume} • {product.price}</p>
                  </div>
                  <button className={styles.addBtn} aria-label="Add to Cart">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
