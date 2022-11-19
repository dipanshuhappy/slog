import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import Wrapper from "./Wrapper";
import { FaWallet, FaCentos, FaGrinHearts } from "react-icons/fa";
import { BsBarChartSteps } from "react-icons/bs";

const InfoList = [
  {
    title: "Setup Your wallet",
    content:
      "set up your wallet of your choice, connect it to oneoffkind by clicking the wallet icon in the top right corner",
    Icon: FaWallet,
  },

  {
    title: "Add your Arts",
    content:
      "Upload your blogs to your site ,read blogs , and buy and sell blogs",
    Icon: FaGrinHearts,
  },
];

const Info = () => {
  return (
    <Box minHeight={"50vh"} paddingBlock={4}>
      <Wrapper>
        <Heading fonSize="xl" textAlign="center">
          How to create and sell your NFTs
        </Heading>
        <HStack paddingBlock={8} justifyContent="center" wrap={"flex"}>
          {InfoList.map((info, i) => {
            return <InfoBox key={i} {...info} />;
          })}
        </HStack>
      </Wrapper>
    </Box>
  );
};

const InfoBox = ({ title, content, Icon }) => {
  return (
    <>
      <Box maxW={"300px"} textAlign="center" p={4}>
        <Stack direction="column" spacing={2} alignItems="center">
          <Icon size="60px" />
          <Heading fontSize={"lg"}>{title}</Heading>
          <Text fontSize={"md"}>{content}</Text>
        </Stack>
      </Box>
    </>
  );
};

export default Info;
