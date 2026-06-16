"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Filter, ShoppingBag } from "lucide-react";
import styles from "./Products.module.css";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "ARVANE BLUE",
    volume: "100ml",
    price: 499000,
    category: "Blue",
    image: "/asset/blue large.png",
  },
  {
    id: 2,
    name: "ARVANE BLUE",
    volume: "50ml",
    price: 299000,
    category: "Blue",
    image: "/asset/blue.png",
  },
  {
    id: 3,
    name: "ARVANE SIGNATURE",
    volume: "100ml",
    price: 499000,
    category: "Signature",
    image: "/asset/1 large.png",
  },
  {
    id: 4,
    name: "ARVANE SIGNATURE",
    volume: "50ml",
    price: 299000,
    category: "Limited",
    image: "/asset/parfum1.png",
  },
  {
    id: 5,
    name: "ARVANE BLOOM",
    volume: "50ml",
    price: 349000,
    category: "Signature",
    image: "/asset/pink large.png",
  },
  {
    id: 6,
    name: "ARVANE BLOOM",
    volume: "100ml",
    price: 449000,
    category: "Signature",
    image: "/asset/pinky.png",
  },
  {
    id: 7,
    name: "ARVANE FOREST",
    volume: "100ml",
    price: 449000,
    category: "Limited",
    image: "/asset/green large.png",
  },
  {
    id: 8,
    name: "ARVANE FOREST",
    volume: "50ml",
    price: 299000,
    category: "Signature",
    image: "/asset/sorrento.png",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  }).sort((a, b) => {
    if (sortOrder === "price-low") return a.price - b.price;
    if (sortOrder === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Our Collection
        </motion.h1>
      </header>

      <div className={styles.container}>
        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <Search size={20} className={styles.icon} />
            <input
              type="text"
              placeholder="Search fragrances..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <Filter size={18} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Signature">Signature</option>
                <option value="Blue">Blue Collection</option>
                <option value="Limited">Limited Edition</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Sort by: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div className={styles.grid} layout>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.info}>
                <div>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.volume}>{product.volume}</p>
                </div>
                <div className={styles.priceRow}>
                  <p className={styles.price}>
                    IDR {product.price.toLocaleString("id-ID")}
                  </p>
                  <button className={styles.addBtn} aria-label="Add to cart">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className={styles.empty}>
            <p>No fragrances found matching your criteria.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
