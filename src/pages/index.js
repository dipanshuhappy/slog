import Head from "next/head";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Info from "../../components/Info";
import Nav from "../../components/Navigation";
import TopArtists from "../../components/TopArtists";
import Trends from "../../components/Trends";
import Categories from "../../components/Categories";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { MetaplexProvider } from "../providers/MetaplexProvider";
const Home = () => {
  return (
    <WalletModalProvider>
      <MetaplexProvider>
        <Hero />
        <WalletMultiButton />
        <Trends />
        <Info />
        {/* <TopArtists />
      <Categories /> */}
        <Footer />
        <Head>
          <title>Slog</title>
        </Head>
      </MetaplexProvider>
    </WalletModalProvider>
  );
};

export default Home;
