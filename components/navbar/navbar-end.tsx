import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const NavbarEnd = () => {
    return (
        <Box
            alignItems='center'
            flexDirection='column'
            display={{ base: 'flex', md: 'block' }}
        >
            <Link href="/log-in">
                <Button
                    cursor='pointer'
                    color="white"
                    background="transparent"
                    fontWeight="semibold"
                    _hover={{ background: "transparent" }}
                >
                    Log In
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button
                    cursor='pointer'
                    color="white"
                    background="gary.800"
                    padding="0 14px"
                    borderRadius="40px"
                    fontWeight="semibold"
                    border="1px solid #3b3b3b"
                    _hover={{ background: "gray.700" }}
                >
                    Get Started
                </Button>
            </Link>
        </Box>
    );
};

export default NavbarEnd;