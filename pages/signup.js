import {
  Box,
  Flex,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
const SignUpInfo = () => {
  const signUpProcessInfo = ["Sign up with Email or Phone Number"];
  return (
    <Box textAlign="left">
      <Heading mb={4}>
        NFT at your finger tip, content maker NFT at your Screen and revolution
        at your door step
      </Heading>
      <Text fontSize="3xl">Following are steps to Sign Up</Text>
      <UnorderedList>
        {signUpProcessInfo.map((info, index) => (
          <ListItem key={index}>
            <Text fontSize="2xl">{info}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
const FormInput = ({ label, type, id, helperText, isError, errorText }) => {
  return (
    <>
      <FormLabel htmlFor={type}>{label}</FormLabel>
      <Input id={id} type={type} w={526} />
      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      )}
    </>
  );
};
const SignUpForm = () => {
  const [error] = useState(false);
  return (
    <FormControl
      isInvalid={error}
      width="auto"
      alignSelf="center"
      marginLeft="auto"
      marginRight="auto"
    >
      <FormInput
        label="Username"
        id="username"
        helperText="enter valid username"
        errorText="Username is required"
        type="email"
        isError={error}
      />
      <FormInput
        label="Email"
        id="email"
        helperText="enter valid email"
        errorText="Email is required"
      />
      <FormInput
        label="Password"
        id="password"
        type="password"
        isError={true}
      />
      <FormInput
        label="Confirm Password"
        id="confirm-password"
        type="password"
      />
      <Button backgroundColor="accent.600">Submit</Button>
    </FormControl>
  );
};
const SignUp = () => {
  return (
    <Wrapper>
      <Flex height="100vh" alignItems="center" justifyContent="space-around">
        <Box w="50%">
          <SignUpInfo />
        </Box>
        <Box>
          <SignUpForm />
        </Box>
      </Flex>
    </Wrapper>
  );
};
export default SignUp;
