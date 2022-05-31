import React, { useEffect } from "react";
import Image from "next/Image";
import styles from "../styles/Home.module.scss";

import { useMoralisWeb3Api } from "react-moralis";

import truncateEthAddress from "truncate-eth-address";

const Main = ({ user }) => {
  const Web3Api = useMoralisWeb3Api();

  const fetchAddress = async () => {
    // get ENS domain of an address
    const options = { address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" };
    const resolve = await Web3Api.resolve.resolveAddress(options);
    console.log(resolve);
  };

  return (
    <div className={styles.header}>
      <div>
        <div>
          <Image
            src="https://www.eu-startups.com/wp-content/uploads/2021/10/READNET_PUBLICATIONS-03-scaled.jpg"
            alt=""
            className={styles.makeImageCircular}
            height={150}
            width={150}
          />
        </div>
        <h5>Watchen</h5>
        <h6> A network for Nft Enthusiasts</h6>
      </div>
      <div>
        <p className={styles.ens}>
          {user.getUsername()} {`${truncateEthAddress(user.get("ethAddress"))}`}
        </p>
        {/* {console.log({ user }, user.getUsername())} */}
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
