import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box maxWidth={"90%"} marginX="auto" w="100%">
      {children}
    </Box>
  );
};

export default Wrapper;
