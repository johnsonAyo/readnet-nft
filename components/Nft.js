import React from "react";
import { useEffect } from "react";
import { useNFTBalances } from "react-moralis";
import styles from "../styles/Home.module.scss";
import { Image } from "@chakra-ui/react";

const Nft = ({ user }) => {
  const { getNFTBalances, data } = useNFTBalances();
  useEffect(() => {
    getNFTBalances({
      params: {
        chain: "rinkeby",
        address: user.get("ethAddress"),
      },
    });
  }, []);

  console.log(data);

  return (
    <>
      <div className={styles.cards}>
        {data &&
          data.result.map((nft) => (
            <div className={styles.card} key={nft.token_uri}>
              {nft.image && (
                <Image
                  src={nft.image}
                  className={styles.card}
                  alt=""
                  width="100%"
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Nft;
