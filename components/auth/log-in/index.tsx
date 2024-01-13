"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import AuthButton from "../../core/auth/auth-button";
import InputField from "../../core/auth/input-field";

const LogInPage = () => {
  const [show, setShow] = useState<any>(false);
  return (
    <Box
      maxWidth="380px"
      marginX="auto"
      marginTop={{ base: "100px", sm: "0" }}
      padding={{ base: "0px 25px", sm: "0px 20px" }}
    >
      <Link href="/">
        <Button
          cursor='pointer'
          position="fixed"
          top="20px"
          left="20px"
          fontSize="xs"
          borderRadius="xl"
          color="white"
          background="gray.700"
          _hover={{ background: "gray.600" }}
        >
          Back to Prestige
        </Button>
      </Link>
      <Img
        width="89px"
        marginX="auto"
        marginTop="20px"
        src="../Images/login-logo.webp"
      />
      <Text textStyle="3xl/bold" color="white" textAlign="center">
        Welcome back
      </Text>
      <Text color="gray.500" fontSize="xs" textAlign="center" marginTop="10px">
        First time here?
        <Link href="/sign-up">
          <span style={{ color: "#676cd4", marginLeft: "3px" }}>
            Sign up for free
          </span>
        </Link>
      </Text>
      <Box marginTop="30px">
        <InputField
          title="E-mail"
          type="email"
          placeholderText="Your Work e-mail"
        />

        {show && (
          <InputField
            title="Password"
            type="password"
            placeholderText=".............."
          />
        )}

        {show ? (
          <AuthButton text="Sign In" />
        ) : (
          <AuthButton text="Send me a magic link" />
        )}

        {show ? (
          <Text
            marginTop="20px"
            marginBottom="15px"
            textStyle="sm"
            color="gray.500"
            textAlign="center"
            onClick={() => setShow(false)}
          >
            Sign in using magic link
          </Text>
        ) : (
          <Text
            marginTop="20px"
            marginBottom="15px"
            textStyle="sm"
            color="gray.500"
            textAlign="center"
            onClick={() => setShow(true)}
          >
            Sign in using password
          </Text>
        )}
      </Box>
      <Flex alignItems="center" gap="10px" marginBottom="15px">
        <Divider />
        <Text color="gray.500" fontSize="xs">
          or
        </Text>
        <Divider />
      </Flex>
      <Button
        textStyle="sm"
        borderRadius="2xl"
        paddingY="22px"
        width="100%"
        color="white"
        background="gray.700"
        _hover={{ background: "gray.600" }}
      >
        Single sign-on (SSO)
      </Button>
      <Text marginTop="32px" fontSize="xs" color="gray.500" textAlign="center">
        You acknowledge that you read, and agree to our <br />
        <span style={{ fontWeight: "700" }}> Terms of Service</span> and our
        <span style={{ fontWeight: "700" }}> Privacy Policy.</span>
      </Text>
    </Box>
  );
};

export default LogInPage;