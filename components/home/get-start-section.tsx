import { Box, Text } from "@chakra-ui/react";
import React from "react";

const GetStartSection = () => {
  return (
    <Box
      style={{
        backgroundImage: `url('../Images/bg-img.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height={"140vh"}
    ></Box>
  );
};

export default GetStartSection;
