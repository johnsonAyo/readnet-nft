import React from "react";
import styles from "../styles/Home.module.scss";

const Card = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>Box 1</div>
      <div className={styles.card}>Box 2</div>
      <div className={styles.card}>Box 3</div>
      <div className={styles.card}>Box 4</div>
      <div className={styles.card}>Box 5</div>
      <div className={styles.card}>Box 6</div>
      <div className={styles.card}>Box 7</div>
      <div className={styles.card}>Box 8</div>
      <div className={styles.card}>Box 9</div>
    </div>
  );
};

export default Card;
