import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Nav from "../components/Navigation";
import TopArtists from "../components/TopArtists";
import Trends from "../components/Trends";
import Categories from "../components/Categories";
const Home = () => {
  return (
    <>
      <Hero />
      <Trends />
      <Info />
      {/* <TopArtists />
      <Categories /> */}
      <Footer />
      <Head>
        <title>Slog</title>
      </Head>
    </>
  );
};

export default Home;
