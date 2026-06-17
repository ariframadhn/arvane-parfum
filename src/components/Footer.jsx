import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>ARVANE</h2>
            <p className={styles.description}>
              Crafted for those who leave an unforgettable impression. Fresh. Sophisticated. Timeless.
            </p>
          </div>
          
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3>Shop</h3>
              <Link href="/products">All Fragrances</Link>
              <Link href="/catalogue">Signature Collection</Link>
              <Link href="/catalogue">Blue Collection</Link>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>About</h3>
              <Link href="/about">Our Story</Link>
              <Link href="/ingredients">Ingredients</Link>
              <Link href="/sustainability">Sustainability</Link>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Contact</h3>
              <Link href="/contact">Customer Care</Link>
              <Link href="/faq">FAQ</Link>
              <div className={styles.socials}>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} ARVANE. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
