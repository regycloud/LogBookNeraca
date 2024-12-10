import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mendapatkan tanggal hari ini
  const today = time.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.timeContainer}>
        <div className={styles.time}>{time.toLocaleTimeString()}</div>
      </div>
      <div className={styles.runningText}>Selamat datang di sistem pencatatan log limbah B3!</div>
      <div className={styles.date}>{today}</div>
    </footer>
  );
};

export default Footer;