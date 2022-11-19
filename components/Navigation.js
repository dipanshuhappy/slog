import {
  Flex,
  List,
  ListItem,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  chakra,
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaHamburger, FaUserCircle, FaWallet } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillLightbulbFill } from "react-icons/bs";
import { SiConstruct3 } from "react-icons/si";
import { useState } from "react";
import { useRouter } from "next/router";
import Wrapper from "./Wrapper";
import Link from "next/link";
const DropDownMenu = ({ menuName, icon, menuItemsArray }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={icon}>
        {menuName}
      </MenuButton>
      <MenuList>
        {menuItemsArray.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
const SignUpAndLogin = () => {
  const router = useRouter();
  return (
    <>
      <Button variant="outline">Login In</Button>
      <Button
        onClick={() => router.push("/SignUp")}
        colorScheme="accent"
        variant="solid"
      >
        Sign Up
      </Button>
    </>
  );
};
const Nav = () => {
  const Links = ["Explore"];
  const { colorMode, toggleColorMode } = useColorMode();
  const [isUserLoggedIn, setUserLogin] = useState(false);
  const toggleUserLogin = () => setUserLogin(!isUserLoggedIn);
  return (
    <Box
      as="nav"
      position={"fixed"}
      top={0}
      left={0}
      w={"100%"}
      paddingBlock={4}
      style={{
        backdropFilter: "blur(8px)",
      }}
      zIndex={4}
    >
      <Wrapper>
        <Flex alignItems={"center"} gap={4}>
          <SiConstruct3 fontSize={30} />
          <List
            display={["none", "none", "flex"]}
            gap={4}
            textAlign="center"
            marginRight={"auto"}
            marginLeft={2}
          >
            {Links.map((link) => {
              return (
                <ListItem
                  _hover={{ color: "purple.200", textDecoration: "underline" }}
                  transition={"200ms"}
                  key={link}
                  cursor={"pointer"}
                  fontWeight={"bold"}
                >
                  {link}
                </ListItem>
              );
            })}
          </List>
          <InputGroup w="30%">
            <InputLeftElement pointerEvents="none">
              <BiSearchAlt />
            </InputLeftElement>
            <Input
              rounded="lg"
              focusBorderColor="purple.400"
              type="text"
              placeholder="Search anything"
              fontWeight={"bold"}
            />
          </InputGroup>
          <IconButton
            rounded={"lg"}
            aria-label="profile"
            icon={<BsFillLightbulbFill />}
            colorScheme="yellow"
            onClick={toggleColorMode}
          />
          {isUserLoggedIn ? (
            <DropDownMenu
              menuName="Profile"
              menuItemsArray={["My Collections", "Wishlist", "Logout"]}
              icon={<FaUserCircle />}
            />
          ) : (
            <SignUpAndLogin />
          )}
          <IconButton rounded={"lg"} aria-label="profile" icon={<FaWallet />} />
          {/* <IconButton
            display={["block", "block", "none"]}
            rounded={"lg"}
            aria-label="profile"
            icon={<FaHamburger />}
          /> */}
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Nav;
