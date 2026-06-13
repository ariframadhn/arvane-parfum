"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ARVANE
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/catalogue" className={styles.link}>Catalogue</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <Search size={20} />
          </button>
          <button className={styles.actionBtn}>
            <User size={20} />
          </button>
          <button className={styles.actionBtn}>
            <ShoppingBag size={20} />
            <span className={styles.badge}>0</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
