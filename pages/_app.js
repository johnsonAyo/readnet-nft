import { MoralisProvider } from "react-moralis";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const appId = process.env.NEXT_PUBLIC_APPID;
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  return (
    <ChakraProvider>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
