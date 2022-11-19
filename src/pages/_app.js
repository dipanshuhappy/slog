import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import CustomTheme from "../../theme";
import { useMemo, useState, useEffect } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

function MyApp({ Component, pageProps }) {
  const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const handleChange = (event) => {
    switch (event.target.value) {
      case "devnet":
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
      case "mainnet":
        setNetwork(WalletAdapterNetwork.Mainnet);
        break;
      case "testnet":
        setNetwork(WalletAdapterNetwork.Testnet);
        break;
      default:
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
    }
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <ChakraProvider theme={CustomTheme}>
          <Navigation />
          <Component {...pageProps} />
        </ChakraProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
