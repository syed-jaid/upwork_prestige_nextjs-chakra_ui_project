'use client'
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa6";
import React from 'react';

const SingleCard = ({ title, description, price, monthly, textColor, buttonColor, savingPeasant }: any) => {

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
                <Text color={textColor} textAlign='center' fontSize='32px'>
                    {title}
                </Text>
                <Text color='gray.500' textStyle='md' marginY='20px'>
                    {description}
                </Text>
                <Flex alignItems='center' justifyContent='center' height='120px' marginY='30px'>
                    <Box>
                        <Text color={textColor} textStyle='4xl/semibold' textAlign='center'>
                            {price}{' '}
                            {price === 'Custom' ?
                                ''
                                :
                                <Text color='gray.500' display='inline' textStyle='md' marginLeft='-10px'>
                                    {monthly ? "/month" : "/year"}
                                </Text>
                            }
                        </Text>
                        {!monthly && (
                            <>
                                {savingPeasant &&
                                    <Text color='teal.300' textStyle='md'>
                                        Save {savingPeasant} with annual billing
                                    </Text>}
                            </>
                        )}
                    </Box>
                </Flex>
                <Divider></Divider>
                <Box marginY='40px'>
                    {[2, 2, 4, 4, 2].map((item, index) => (
                        <Flex key={index} color={textColor} textStyle='md' gap='10px' alignItems='center' marginBottom='3px'>
                            <FaCheck style={{ display: 'inline' }} />
                            Standard analytics
                        </Flex>
                    ))}
                </Box>
                {title === 'Pro' ?
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
                    :
                    <Flex
                        color='white'
                        background={buttonColor}
                        gap='6px'
                        padding='16px 30px'
                        borderRadius='40px'
                        alignItems='center'
                        justifyContent='center'
                        border='1px solid #4A5568'
                        _hover={{ background: 'gray.700' }}
                    >
                        Get started
                    </Flex>}
            </Box>
        </>
    );
};

export default SingleCard;