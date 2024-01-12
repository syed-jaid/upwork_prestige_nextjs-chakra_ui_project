"use client";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarItems from "./navbar-items";
import NavbarItemsHover from "./navbar-items-hover";
import NavbarMobileView from "./navbar-mobile-view";
import NavbarEnd from "./navbar-end";
import NavbarLogo from "./navbar-logo";

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
        background="#0f0f0f"
        borderBottom="1px solid #2d2d2d"
      >
        <Box
          maxWidth="1280px"
          padding="20px"
          marginX='auto'
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Website logo */}
          <NavbarLogo />

          {/* Navbar mobile view */}
          <NavbarMobileView />

          {/* Navbar Items */}
          <Flex display={{ base: 'none', md: 'flex' }}>
            <NavbarItemsHover />
            <NavbarItems />
          </Flex>

          {/* Sign in and sign up button */}
          <Box display={{ base: 'none', md: 'block' }}>
            <NavbarEnd />
          </Box>

        </Box>
      </Box>
    </motion.div>
  );
};

export default Navbar;
