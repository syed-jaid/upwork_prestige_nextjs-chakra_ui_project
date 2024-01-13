"use client";
import { Input, Text, useTheme } from "@chakra-ui/react";
import React from "react";

interface InputFieldProps {
  title: string;
  type: string;
  placeholderText: string;
}

const InputField: React.FC<InputFieldProps> = ({
  title,
  type,
  placeholderText,
}) => {
  const theme = useTheme();

  return (
    <>
      <Text color="gray.500" textStyle="sm" marginLeft="1" marginBottom="2">
        {title}
      </Text>
      <Input
        type={type}
        placeholder={placeholderText}
        textStyle="sm"
        color="white"
        background="gray.700"
        border={`1px solid  ${theme.colors.gray[700]}`}
        padding="22px 20px"
        marginBottom="20px"
        borderRadius="2xl"
        _hover={{ border: `1px solid  ${theme.colors.gray[600]}` }}
        _placeholder={{ color: "white" }}
      />
    </>
  );
};

export default InputField;
