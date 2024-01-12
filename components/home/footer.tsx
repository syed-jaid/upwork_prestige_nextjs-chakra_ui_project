'use client'
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import React from 'react';
import NavbarLogo from '../navbar/navbar-logo';
import Link from 'next/link';
import { footerItems } from '@/Data/footer-data';

const Footer = () => {
    return (
        <Box maxWidth='1280px' marginX='auto' padding='40px'>
            <Flex marginBottom='100px' display={{ base: 'block', md: 'flex' }} justifyContent='space-between'  >
                <Box width='300px'>
                    <NavbarLogo />
                </Box>
                {footerItems.map(({ itemName, listItems }) =>
                    <Box width='300px' marginTop={{ base: '30px', md: "10px" }} key={itemName}>
                        <Text
                            fontSize='md'
                            color='white'
                            fontWeight='semibold'
                        >
                            {itemName}
                        </Text>
                        {listItems.map((item) =>
                            <Flex>
                                <Link href='#' key={item}>
                                    <Text
                                        fontSize='md'
                                        color='gray.500'
                                        marginTop='15px'
                                        _hover={{ color: 'white' }}
                                    >
                                        {item}
                                        {item === 'Careers' &&
                                            <Text
                                                color='teal.300'
                                                fontSize='sm'
                                                fontWeight='medium'
                                                border='1px solid #236456'
                                                background='#112220'
                                                padding='2px 12px'
                                                borderRadius='3xl'
                                                display='inline'
                                                marginLeft='10px'
                                            >
                                                Hiring
                                            </Text>
                                        }
                                    </Text>
                                </Link>
                            </Flex>
                        )}
                    </Box>
                )}
            </Flex>
            <Flex justifyContent='end'>
                <Flex gap='5px' background='gray.900' borderRadius='3xl' padding='4px 10px' alignItems='center'>
                    <GoDotFill style={{ color: '#48BB78', fontSize: '20px', }} />
                    <Text color='gray.400' fontSize='sm'>
                        All systems normal
                    </Text>
                </Flex>
            </Flex>
            <Divider marginY='20px' />
            <Flex alignItems='center' justifyContent='space-between'>
                <Text color='gray.400' fontSize='sm'>
                    © 2023 Prestige. All rights reserved.
                </Text>
                <Flex gap='15px'>
                    <IoLogoLinkedin style={{ color: '#A0AEC0', fontSize: '22px' }} />
                    <IoLogoGithub style={{ color: '#A0AEC0', fontSize: '22px' }} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;