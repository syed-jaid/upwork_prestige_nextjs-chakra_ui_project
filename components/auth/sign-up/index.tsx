import { Box, Button, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import InputField from "../../core/auth/input-field";
import AuthButton from "../../core/auth/auth-button";

const SignUpPage = () => {
  return (
    <Box
      maxWidth="380px"
      marginX="auto"
      marginTop={{ base: "100px", sm: "0" }}
      padding={{ base: "0px 25px", sm: "0px 20px" }}
    >
      <Link href="/">
        <Button
          position="fixed"
          top={"20px"}
          left={"20px"}
          fontSize="xs"
          borderRadius="xl"
          color="white"
          fontWeight="normal"
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

      <Text
        fontSize={{ base: "xl", sm: "3xl" }}
        fontWeight="bold"
        color="white"
        textAlign="center"
      >
        Sign up for free
      </Text>

      <Text color="gray.500" fontSize="xs" textAlign="center" marginTop="10px">
        Already have an account?
        <Link href="/log-in">
          <span style={{ color: "#676cd4", marginLeft: "3px" }}>Sign In</span>
        </Link>
      </Text>

      <Box marginTop="30px">
        <InputField
          title={"E-mail"}
          type={"email"}
          placeholderText={"Your Work e-mail"}
        />

        <InputField
          title={"URL to monitor"}
          type={"url"}
          placeholderText={"https://www.microsoft.com/"}
        />

        <InputField
          title={"Your phone number"}
          type={"phone"}
          placeholderText={"+880"}
        />

        <AuthButton text="Sign Up" />
      </Box>
      <Text
        marginTop="32px"
        fontSize="12px"
        color="gray.500"
        textAlign="center"
      >
        You acknowledge that you read, and agree to our <br />
        <span style={{ fontWeight: "700" }}> Terms of Service</span> and our
        <span style={{ fontWeight: "700" }}> Privacy Policy.</span>
      </Text>
    </Box>
  );
};

export default SignUpPage;
