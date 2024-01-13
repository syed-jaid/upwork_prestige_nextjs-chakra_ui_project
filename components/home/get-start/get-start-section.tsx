'use client'
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Badge from "./badge";
import AvatarStack from "./avatar-stack";
import GetButtons from "./get-buttons";
import HeaderText from "./header-text";

const GetStartSection = () => {


  return (
    <Box
      style={{
        backgroundImage: `url('../Images/bg-img.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height={{ base: '85vh', sm: "63vh" }}
      marginTop='83px'
    >
      <Box
        maxWidth='800px'
        paddingX='20px'
        marginX='auto'
        marginTop={{ base: '150px', md: '200px' }}
      >
        <Badge />
        <HeaderText />
        <GetButtons />
        <AvatarStack />
      </Box>
    </Box >
  );
};

export default GetStartSection;
