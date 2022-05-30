import React from "react";
import Image from "next/Image";
import styles from "../styles/Home.module.scss";

const Main = () => {
  return (
    <div className={styles.header}>
      <div>
        <div>
          <Image
            src="https://www.eu-startups.com/wp-content/uploads/2021/10/READNET_PUBLICATIONS-03-scaled.jpg"
            alt=""
            className={styles.makeImageCircular}
            height={200}
            width={200}
          />
        </div>
        <h5>Watchen</h5>
        <h6> A network for Nft Enthusiasts</h6>
      </div>
      <div>
        <h3> Watchen Wallet Address</h3>
        <div className={styles.details}>
          <div>
            <p>13</p>
            <p> Assets</p>
          </div>
          <div>
            <p>1</p>
            <p> Following</p>
          </div>
          <div>
            <p>10</p>
            <p> Followers</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button className={styles.btn}> Follow </button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.msgbutton}>Message</button>
          <button className={styles.msgbutton2}>...</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
