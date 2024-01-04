"use client";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarItems from "./navbar-items";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop: number = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > lastScrollTop);
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: isScrolled ? -100 : 0 }}
      transition={{ ease: "easeOut", duration: 0.26 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isScrolled ? "blackAlpha.400" : "transparent",
        zIndex: 1000,
      }}
    >
      <Box
        maxWidth="1280px"
        paddingX="40px"
        paddingY="20px"
        background="#0f0f0f"
        color="white"
        borderBottom="1px solid #1f1e1e"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {/* Website logo */}
          <Link href={"/"}>
            <Flex alignItems={"center"} gap={"4px"}>
              <Img
                width={"22px"}
                height={"20px"}
                marginBottom={"1"}
                src="../Images/logo.png"
                alt="website logo"
              />
              <Text fontSize={"18px"} fontWeight={"600"}>
                Prestige
              </Text>
            </Flex>
          </Link>

          {/* Navbar Items */}
          <NavbarItems />
          {/* Sign in and sign up button */}

          <Box>
            <Link href={"/log-in"}>
              <Button
                color={"white"}
                background={"transparent"}
                fontWeight={"600"}
                _hover={{ background: "transparent" }}
              >
                Log In
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button
                color={"white"}
                background={"gary.800"}
                padding={"0 14px"}
                borderRadius={"40px"}
                fontWeight={"600"}
                border={"1px solid #3b3b3b"}
                _hover={{ background: "gray.700" }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Navbar;
