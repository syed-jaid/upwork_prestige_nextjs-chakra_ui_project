import { Button } from "@chakra-ui/react";
import React from "react";

const AuthButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button
      width="full"
      borderRadius="2xl"
      paddingY="24px"
      color="white"
      textStyle="sm/medium"
      bgGradient="linear-gradient(to right, purple.600, cyan.500)"
      _hover={{
        bgGradient: "linear-gradient(to right, purple.500, cyan.400)",
      }}
    >
      {text}
    </Button>
  );
};

export default AuthButton;
