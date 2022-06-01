import React, { useEffect } from "react";
import Image from "next/Image";
import styles from "../styles/Home.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";

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
    <div className={styles.heroHeader}>
      <div>
        <Image
          src="https://www.eu-startups.com/wp-content/uploads/2021/10/READNET_PUBLICATIONS-03-scaled.jpg"
          alt=""
          className={styles.makeImageCircular}
          height={130}
          width={130}
        />
        <h5>Watchen</h5>
        <h6 className={styles.bio}> A network for Nft Enthusiasts</h6>
      </div>
      <div>
        <p className={styles.ens}>
          {user.getUsername()} &nbsp; &nbsp;
          {`${truncateEthAddress(user.get("ethAddress"))}`}
        </p>

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
      <div className={styles.twoButtons}>
        <button className={styles.btn}> Follow </button>
        <div className={styles.buttons}>
          <button className={styles.msgbutton}>
            <FaEnvelope className={styles.msgIcon} />
            Message
          </button>
          <button className={styles.msgbutton2}>
            <TbDotsVertical className={styles.verticalIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
