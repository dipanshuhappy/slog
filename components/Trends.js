import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Wrapper from "./Wrapper";

const Trends = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  return (
    <Box as="section" minHeight={"70vh"} paddingBlock={4}>
      <Wrapper>
        <Heading size={"xl"}>Trends</Heading>
        <Stack
          direction="row"
          spacing={8}
          paddingBlock={8}
          justify={"center"}
          wrap="wrap"
        >
          {[1, 2, 4].map((card) => {
            return (
              <>
                <Card key={card} blog={{}} />
              </>
            );
          })}
        </Stack>
      </Wrapper>
    </Box>
  );
};

const Card = ({ blog }) => {
  return (
    <Box
      maxW={"300px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      position="relative"
    >
      <Image
        h={"150px"}
        w={"full"}
        src={
          "https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        objectFit={"cover"}
        borderTopRadius="md"
      />
      <Box p={6}>
        <Stack spacing={0} mb={5}>
          <Heading fontSize={"3xl"} fontWeight={600} fontFamily={"body"}>
            {blog.title ?? "Title"}
          </Heading>
          <Text fontSize={"xs"} color={"gray.500"}>
            {blog?.tags?.map((tag) => `${tag}`) ?? "#tech"}
          </Text>
        </Stack>
        <HStack fontSize={"xs"} spacing={4}>
          <Stack>
            <Text>{blog?.description}</Text>
          </Stack>
        </HStack>
        <Button
          w={"full"}
          mt={8}
          //   bg={useColorModeValue("#151f21", "gray.900")}
          colorScheme="yellow"
          //   transform={"translateY(30px)"}
          position="relative"
        >
          Read
        </Button>
      </Box>
    </Box>
  );
};

export default Trends;
