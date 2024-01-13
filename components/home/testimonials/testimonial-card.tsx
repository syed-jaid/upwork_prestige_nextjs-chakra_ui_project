import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { SiFramer } from "react-icons/si";
import React from 'react';

const TestimonialCard = () => {
    return (
        <Box
            background='gray.800'
            borderRadius='3xl'
            border='1px solid #4A5568'
            minWidth={{ base: '330px', md: '346px', lg: '376px' }}
            padding={{ base: '25px', sm: '30px' }}
        >
            <Text
                color='white'
                fontSize={{ base: 'sm', sm: 'md' }}
            >
                With its powerful help desk features and automation capabilities, we have been able to provide faster and more personalized support to our clients.
            </Text>
            <Flex
                marginTop='25px'
                alignItems='center'
                justifyContent='space-between'
            >
                <Flex>
                    <Avatar
                        width='40px'
                        height='40px'
                        name='Segun Adebayo'
                        src='https://bit.ly/sage-adebayo'
                    />
                    <Box marginLeft='10px'>
                        <Text color='white' textStyle='sm/semibold'>
                            Emily Johnson
                        </Text>
                        <Text color='white' textStyle='sm' >
                            Business Manager
                        </Text>
                    </Box>
                </Flex>
                <Flex gap='5px'>
                    <SiFramer style={{ color: 'white', fontSize: '20px' }} />
                    <Text color='white' textStyle='sm/bold'>
                        Framer
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TestimonialCard;