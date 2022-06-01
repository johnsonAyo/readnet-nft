import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Nft from "../components/Nft";
import styles from "../styles/Home.module.scss";
import { useMoralis } from "react-moralis";
import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isAuthenticated,
    authenticate,
    user,
    logout,
    isLoggingOut,
    isWeb3Enabled,
    enableWeb3,
    Moralis,
  } = useMoralis();

  async function authWalletConnect() {
    const user = authenticate({
      provider: "walletconnect",
      chainId: 56,
      mobileLinks: [
        "metamask",
        "trust",
        "rainbow",
        "ledger",
        "argent",
        "imtoken",
        "pillar",
      ],
      signingMessage: "Welcome!",
    });

    console.log(user);
  }

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated && !user) {
      enableWeb3({ provider: "walletconnect", chainId: 56 });
      console.log("web3 activated");
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3, user]);

  if (!isAuthenticated && !user) {
    return (
      <>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.Hero}>
            <h1 className={styles.h1}>gm</h1>

            <button className={styles.HeroButton} onClick={onOpen}>
              Connect Wallet
            </button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered variant="wide">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader className={styles.modalHeader}>
                  Connect your wallet
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div className={styles.walletConnect}>
                    <button
                      onClick={() =>
                        authenticate({
                          signingMessage: "sign to login to dashboard",
                        })
                      }
                    >
                      Metamask
                    </button>
                    <Image
                      src="/mm.png"
                      alt="Coinbase Wallet Logo"
                      width={30}
                      height={30}
                      borderRadius="3px"
                    />
                  </div>
                  <div className={styles.walletConnect}>
                    <button onClick={() => authWalletConnect()}>
                      WalletConnect
                    </button>
                    <Image
                      src="/wc.png"
                      alt="Coinbase Wallet Logo"
                      width={30}
                      height={30}
                      borderRadius="5px"
                    />
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Readnet Nft Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
      <Main user={user} />
      <Nft user={user} />
    </div>
  );
}
