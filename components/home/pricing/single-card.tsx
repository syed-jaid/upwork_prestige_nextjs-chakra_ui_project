'use client'
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa6";
import React from 'react';

const SingleCard = ({ monthly }: any) => {
    return (
        <>
            <Box
                background='gray.900'
                marginBottom='30px'
                padding='72px 37px 37px'
                borderRadius='3xl'
                border='1px solid #2D3748'
                maxWidth={{ base: '100%', lg: '378px' }}
            >
                <Text color='white' textAlign='center' fontSize='32px'>
                    Starter
                </Text>
                <Text color='gray.500' fontSize='md' marginY='20px'>
                    For driven individuals who want to start with essential features and resources to kickstart your journey.
                </Text>
                <Flex alignItems='center' justifyContent='center' height='120px' marginY='30px' >
                    <Box>
                        <Text color='white' fontSize='4xl' fontWeight='semibold' textAlign='center'>
                            $9  <Text color='gray.500' display='inline' fontSize='md' marginLeft='-10px'>/month</Text>
                        </Text>
                        {!monthly && <Text color='teal.300' fontSize='md' >
                            Save 8% with annual billing
                        </Text>}
                    </Box>
                </Flex>
                <Divider></Divider>
                <Box marginY='40px'>
                    {[2, 2, 4, 4, 2].map(() =>
                        <Flex color='white' fontSize='md' gap='10px' alignItems='center' marginBottom='3px' >
                            <FaCheck style={{ display: 'inline' }} />
                            Standard analytics
                        </Flex>
                    )}
                </Box>
                <Flex
                    color='white'
                    background='gray.800'
                    gap='6px'
                    padding='16px 30px'
                    borderRadius='40px'
                    alignItems='center'
                    justifyContent='center'
                    border='1px solid #4A5568'
                    _hover={{ background: 'gray.700' }}
                >
                    Get started
                </Flex>
            </Box>
            <Box
                background='gray.900'
                marginBottom='30px'
                padding='72px 37px 37px'
                borderRadius='3xl'
                border='1px solid #2D3748'
                maxWidth={{ base: '100%', lg: '378px' }}
            >
                <Text color='white' textAlign='center' fontSize='32px'>
                    Starter
                </Text>
                <Text color='gray.500' fontSize='md' marginY='20px'>
                    For driven individuals who want to start with essential features and resources to kickstart your journey.
                </Text>
                <Flex alignItems='center' justifyContent='center' height='120px' marginY='30px' >
                    <Box>
                        <Text color='white' fontSize='4xl' fontWeight='semibold' textAlign='center'>
                            $9  <Text color='gray.500' display='inline' fontSize='md' marginLeft='-10px'>/month</Text>
                        </Text>
                        {!monthly && <Text color='teal.300' fontSize='md' >
                            Save 8% with annual billing
                        </Text>}
                    </Box>
                </Flex>
                <Divider></Divider>
                <Box marginY='40px'>
                    {[2, 2, 4, 4, 2].map(() =>
                        <Flex color='white' fontSize='md' gap='10px' alignItems='center' marginBottom='3px' >
                            <FaCheck style={{ display: 'inline' }} />
                            Standard analytics
                        </Flex>
                    )}
                </Box>
                <Flex
                    color='black'
                    background='white'
                    gap='6px'
                    padding='16px 30px'
                    borderRadius='40px'
                    alignItems='center'
                    justifyContent='center'
                    _hover={{ background: 'gray.100' }}
                >
                    Get started
                </Flex>
            </Box>
            <Box
                background='gray.900'
                marginBottom='30px'
                padding='72px 37px 37px'
                borderRadius='3xl'
                border='1px solid #2D3748'
                maxWidth={{ base: '100%', lg: '378px' }}
            >
                <Text color='white' textAlign='center' fontSize='32px'>
                    Starter
                </Text>
                <Text color='gray.500' fontSize='md' marginY='20px'>
                    For driven individuals who want to start with essential features and resources to kickstart your journey.
                </Text>
                <Flex alignItems='center' justifyContent='center' height='120px' marginY='30px' >
                    <Box>
                        <Text color='white' fontSize='4xl' fontWeight='semibold' textAlign='center'>
                            $9  <Text color='gray.500' display='inline' fontSize='md' marginLeft='-10px'>/month</Text>
                        </Text>
                        {!monthly && <Text color='teal.300' fontSize='md' >
                            Save 8% with annual billing
                        </Text>}
                    </Box>
                </Flex>
                <Divider></Divider>
                <Box marginY='40px'>
                    {[2, 2, 4, 4, 2].map(() =>
                        <Flex color='white' fontSize='md' gap='10px' alignItems='center' marginBottom='3px' >
                            <FaCheck style={{ display: 'inline' }} />
                            Standard analytics
                        </Flex>
                    )}
                </Box>
                <Flex
                    color='white'
                    background='gray.800'
                    gap='6px'
                    padding='16px 30px'
                    borderRadius='40px'
                    alignItems='center'
                    justifyContent='center'
                    border='1px solid #4A5568'
                    _hover={{ background: 'gray.700' }}
                >
                    Get started
                </Flex>
            </Box>
        </>
    );
};

export default SingleCard;