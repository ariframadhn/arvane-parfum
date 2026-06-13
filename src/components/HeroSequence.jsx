"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSequence.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 240;

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/asset/expload for view parfum signature/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === 1) {
          // Draw first frame as soon as it's ready
          requestAnimationFrame(() => drawImage(0));
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (frameIndex) => {
    if (!canvasRef.current || !images[frameIndex]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const img = images[frameIndex];
    if (!img.complete) return;

    // Maintain aspect ratio and cover canvas
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Update canvas on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (images.length === 0) return;
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(v * FRAME_COUNT)
      );
      requestAnimationFrame(() => drawImage(frameIndex));
    });

    return () => unsubscribe();
  }, [scrollYProgress, images]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentFrame = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        drawImage(currentFrame);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  // Text Animations mapped to scroll
  const opacityText1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const yText1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const display1 = useTransform(scrollYProgress, (v) => v > 0.15 ? "none" : "flex");

  const opacityText2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const scaleText2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0.8, 1, 1.2]);
  const display2 = useTransform(scrollYProgress, (v) => (v < 0.3 || v > 0.7) ? "none" : "flex");

  const opacityText3 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const yText3 = useTransform(scrollYProgress, [0.75, 0.9, 1], [50, 0, 0]);
  const display3 = useTransform(scrollYProgress, (v) => v < 0.7 ? "none" : "flex");

  return (
    <div ref={containerRef} className={styles.scrollytellingContainer}>
      <div className={styles.stickyCanvasContainer}>
        {/* Loading Indicator */}
        {imagesLoaded < FRAME_COUNT * 0.1 && (
          <div className={styles.loader}>Loading High-Res Experience...</div>
        )}
        
        <canvas ref={canvasRef} className={styles.canvas} />
        
        {/* Overlay Texts */}
        <div className={styles.textOverlay}>
          <motion.div 
            className={styles.copyBlock}
            style={{ opacity: opacityText1, y: yText1, display: display1 }}
          >
            <h1 className={styles.headline}>ARVANE</h1>
            <p className={styles.subheadline}>Crafted for those who leave an unforgettable impression.</p>
          </motion.div>

          <motion.div 
            className={`${styles.copyBlock} ${styles.copyCenter}`}
            style={{ opacity: opacityText2, scale: scaleText2, display: display2 }}
          >
            <h2 className={styles.headline}>Fresh. Sophisticated. Timeless.</h2>
            <p className={styles.subheadline}>Every note meticulously designed.</p>
          </motion.div>

          <motion.div 
            className={`${styles.copyBlock} ${styles.copyBottom}`}
            style={{ opacity: opacityText3, y: yText3, display: display3 }}
          >
            <h2 className={styles.headline}>The Masterpiece Assembled.</h2>
            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>Shop Now</button>
              <button className={styles.secondaryBtn}>Explore Collection</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
