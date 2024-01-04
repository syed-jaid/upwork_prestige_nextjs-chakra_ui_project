import { navbarItems } from "@/Data/navbar-data";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavbarItems = () => {
  return (
    <Flex gap={"23px"} alignItems={"center"}>
      {navbarItems.map(({ itemName, route }) => (
        <Link href={route}>
          <Text
            fontSize={"md"}
            fontWeight="medium"
            color={"gray.500"}
            _hover={{ color: "white" }}
          >
            {itemName}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default NavbarItems;
