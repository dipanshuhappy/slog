import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  chakra,
  Button,
  Avatar,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
const Hero = () => {
  const [recentBlog, setRecentBlog] = useState("");
  return (
    <Flex flexDir={"column"} justify="center" as="section" minHeight={"100vh"}>
      <Wrapper>
        <HStack spacing={16}>
          <Stack spacing={4}>
            <Tag size="lg" colorScheme="purple" borderRadius="full">
              <Avatar
                src="data:image/jpeg;base64,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"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              <TagLabel>{recentBlog}</TagLabel>
            </Tag>
            <Heading fontWeight={"medium"} fontSize={"6xl"}>
              <Box>
                Create,{" "}
                <Box as="span" fontWeight={"bold"}>
                  Explore
                </Box>
              </Box>
              <Box>& Buy </Box>
              <Box fontWeight={"bold"}>
                <Box as="span" paddingRight={6}>
                  Blogs
                </Box>
              </Box>
            </Heading>
            <Text>Read,Buy and Sell NFTs from the Blog Creators at Slog</Text>
            <HStack w="60%" spacing={4}>
              <Button p={4} colorScheme={"purple"} isFullWidth size={"lg"}>
                BUY
              </Button>
              <Button
                colorScheme={"purple"}
                isFullWidth
                variant={"outline"}
                size="lg"
                p={4}
              >
                CREATE
              </Button>
            </HStack>
          </Stack>
          <Box
            bg="red.300"
            shadow="lg"
            rounded="lg"
            height={"400px"}
            width="50%"
          ></Box>
        </HStack>
      </Wrapper>
    </Flex>
  );
};

export default Hero;
