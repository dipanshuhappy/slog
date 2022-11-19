import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";

const Footer = () => {
  return (
    <Box as="footer" bg="purple.300" paddingBlock={8}>
      <Wrapper>
        <Stack>
          <Flex justify={"space-between"} align={"center"}>
            <Heading fontWeight={"black"}>SLOG</Heading>
            <Box>Twitter | Instagram</Box>
          </Flex>
          <Flex justify={"space-between"} align="center">
            <Box>©SLOG</Box>
            <Box>Made with Pain</Box>
          </Flex>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default Footer;
