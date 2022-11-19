import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  useColorModeValue,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Wrapper from "./Wrapper";

const categoriesArray = [
  {
    title: "Art",
    link: "/",
  },
  {
    title: "Collectibles",
    link: "/",
  },
  {
    title: "Metaverse",
    link: "/",
  },
  { title: "Domain Names", link: "/" },
  { title: "Music", link: "/" },
  { title: "Photography", link: "/" },
  { title: "Sports", link: "/" },
  { title: "Trading Card", link: "/" },
  {
    title: "Virtual World",
    link: "/",
  },
];

const Categories = () => {
  return (
    <>
      <Box minHeight={"50vh"} paddingBlock={4}>
        <Wrapper>
          <Heading fonSize="xl" textAlign="center">
            Categories we offer
          </Heading>
          <Grid
            templateColumns={"repeat(auto-fill, minmax(400px, 1fr))"}
            gap={6}
            paddingBlock={8}
          >
            {categoriesArray.map((category, i) => {
              return (
                <GridItem key={i}>
                  <Card {...category} />
                </GridItem>
              );
            })}
          </Grid>
        </Wrapper>
      </Box>
    </>
  );
};

const Card = ({ title, link }) => {
  return (
    <LinkBox>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"md"}
        overflow={"hidden"}
        position="relative"
        transition={"0.1s"}
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "2xl",
          zIndex: "5",
        }}
      >
        <Image
          h={"150px"}
          w={"full"}
          src={"https://picsum.photos/400/300"}
          objectFit={"cover"}
          borderTopRadius="md"
        />
        <Box p={6}>
          <LinkOverlay href={link}>
            <Heading
              fontSize={"2xl"}
              fontWeight={600}
              fontFamily={"body"}
              textAlign="center"
            >
              {title}
            </Heading>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default Categories;
