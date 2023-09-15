import React from "react";
import styles from "../styles/preloader.module.css"; // Import your CSS styles

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Preloader; 