"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingBag, X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const DUMMY_CART_ITEMS = [
  {
    id: 1,
    name: "ARVANE SIGNATURE",
    volume: "100ml",
    price: 499000,
    image: "/asset/1 large.png",
  },
  {
    id: 2,
    name: "ARVANE BLOOM",
    volume: "50ml",
    price: 499000,
    image: "/asset/pink large.png",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const totalCartPrice = DUMMY_CART_ITEMS.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  return (
    <>
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
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/products" className={styles.link}>
              Products
            </Link>
            <Link href="/catalogue" className={styles.link}>
              Catalogue
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>

          <div className={styles.actions}>
            <button className={styles.actionBtn} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={styles.actionBtn} aria-label="User Account">
              <User size={20} />
            </button>
            <button
              className={styles.actionBtn}
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Cart"
            >
              <ShoppingBag size={20} />
              <span className={styles.badge}>{DUMMY_CART_ITEMS.length}</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className={styles.cartBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              className={styles.cartDrawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              <div className={styles.cartHeader}>
                <h2>Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className={styles.closeBtn}
                >
                  <X size={24} />
                </button>
              </div>

              <div className={styles.cartItems}>
                {DUMMY_CART_ITEMS.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemImage}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className={styles.cartItemDetails}>
                      <h3>{item.name}</h3>
                      <p>{item.volume}</p>
                      <span>IDR {item.price.toLocaleString("id-ID")}</span>
                    </div>
                    <button
                      className={styles.removeBtn}
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.cartTotal}>
                  <span>Subtotal</span>
                  <span>IDR {totalCartPrice.toLocaleString("id-ID")}</span>
                </div>
                <p className={styles.cartTaxes}>
                  Taxes and shipping calculated at checkout.
                </p>
                <button className={styles.checkoutBtn}>
                  Proceed to Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
