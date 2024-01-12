import { Flex, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const NavbarLogo = () => {
    return (
        <Link href={"/"}>
            <Flex alignItems={"center"} gap={"4px"}>
                <Img
                    width={"22px"}
                    height={"20px"}
                    marginBottom={"1"}
                    src="../Images/logo.png"
                    alt="website logo"
                />
                <Text fontSize={"18px"} fontWeight={"medium"} color={'white'}>
                    Prestige
                </Text>
            </Flex>
        </Link>
    );
};

export default NavbarLogo;