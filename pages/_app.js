import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import CustomTheme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Navigation/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
