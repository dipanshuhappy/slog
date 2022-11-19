import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import Wrapper from "./Wrapper";
const TopArtists = () => {
  return (
    <Box as="section" minHeight={"70vh"} paddingBlock={4}>
      <Wrapper>
        <Heading size={"xl"} textAlign="center">
          Top Users
        </Heading>
        <HStack wrap={"wrap"} spacing={8} justify="center" paddingBlock={8}>
          {[1, 2, 3].map((card, i) => {
            return <UserCard num={i} key={card} />;
          })}
        </HStack>
      </Wrapper>
    </Box>
  );
};

const UserCard = ({ num }) => {
  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      position="relative"
    >
      <Avatar
        size={"xl"}
        src={
          "https://www.cnet.com/a/img/resize/0b8aea076935c5f2921df9bb329af25b16277292/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&width=940"
        }
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        Lindsey James
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        @lindsey_jam3s
      </Text>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        A small paragraph about the user.
      </Text>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          #art
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          #photography
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          #music
        </Badge>
      </Stack>
      <Stack mt={8} direction={"row"} spacing={4}>
        <Button flex={1} fontSize={"sm"}>
          Message
        </Button>
        <Button flex={1} fontSize={"sm"}>
          Follow
        </Button>
      </Stack>
      <Text
        position={"absolute"}
        top={1}
        left={4}
        borderRadius={"full"}
        fontWeight={"bold"}
        fontSize={"4xl"}
      >
        {num + 1}
      </Text>
    </Box>
  );
};

export default TopArtists;
