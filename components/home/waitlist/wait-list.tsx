'use client'
import { Box, Flex, Img, Input, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const WaitList = () => {
    const [isMobile] = useMediaQuery("(max-width: 1101px)");
    return (
        <Box maxWidth='1240px' marginX='auto' paddingX='20px' marginY={{ base: '120px', md: '200px' }}>
            <Flex
                borderRadius='3xl'
                height={isMobile ? '670px' : '450px'}
                alignItems={isMobile ? '' : 'center'}
                justifyContent='center'
                position='relative'
                paddingX={isMobile ? '20px' : ''}
                style={{
                    backgroundImage: `url('../Images/small-bg.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Box maxWidth={isMobile ? '860px' : '500px'} marginTop={isMobile ? '30px' : ''}>
                    <Text
                        color='white'
                        fontSize={{ base: '3xl', md: '5xl' }}
                        fontWeight='semibold'
                        textAlign={{ base: 'center', md: 'start' }}
                    >
                        Start building today.
                    </Text>
                    <Text color='gray.400' fontSize={{ base: 'sm', sm: 'lg' }} textAlign={{ base: 'center', md: 'start' }} >
                        Our app eliminates the need for complex spreadsheets, endless email threads, empowering businesses to achieve greater efficiency.
                    </Text>
                    <Flex gap='5px' marginTop='25px' display={{ base: 'block', md: 'flex' }}>
                        <Input
                            height={{ base: '48px', sm: '56px' }}
                            type='email'
                            placeholder='your@gmail.com'
                            fontSize="md"
                            color="white"
                            background="gray.700"
                            padding={{ base: '12px 25px', sm: '16px 30px' }}
                            borderRadius="3xl"
                            border='none'
                            _placeholder={{ color: "white" }}
                        />
                        <Flex
                            minWidth={{ base: '100%', md: '150px' }}
                            color='black'
                            background='white'
                            padding={{ base: '12px 25px', sm: '16px 30px' }}
                            borderRadius='3xl'
                            alignItems='center'
                            justifyContent='center'
                            fontSize='md'
                            _hover={{ background: 'gray.100' }}
                            marginTop={{ base: '20px', md: '0' }}
                            cursor="pointer"
                        >
                            Join Waitlist
                        </Flex>

                    </Flex>
                </Box>
                <Box width={isMobile ? '' : '500px'}>
                </Box>
                <Img position='absolute' bottom='0' right='0' width='500px' src='../Images/small-dashboard.webp' />
            </Flex>
        </Box>

    );
};

export default WaitList;