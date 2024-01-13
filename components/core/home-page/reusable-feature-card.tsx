import { Box, Flex, Text } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io'
import React from 'react';

const ReusableFeatureCard = ({
    background,
    border,
    smallTextColor,
    icon,
    smallText,
    headerText,
    description,
    buttonCenter,
    btnOff
}: any) => {
    return (
        <Box>
            <Flex gap='16px' alignItems='center'>
                <Flex
                    width='48px'
                    height='48px'
                    alignItems='center'
                    justifyContent='center'
                    borderRadius='12px'
                    background={background}
                    border={border}
                >
                    {icon}
                </Flex>
                <Text color={smallTextColor} textStyle='md/semibold'>
                    {smallText}
                </Text>
            </Flex>
            <Text color='white' fontSize={{ base: '26px', md: '32px' }} fontWeight='semibold' marginY='14px'>
                {headerText}
            </Text>
            <Text color='gray.400' textStyle='md' >
                {description}
            </Text>
            <Flex
                cursor='pointer'
                color='white'
                textStyle='md'
                gap='5px'
                maxWidth='160px'
                display={btnOff ? 'none' : 'flex'}
                marginX={buttonCenter ? buttonCenter : 'auto'}
                marginTop='50px'
                padding='14px 16px'
                borderRadius='40px'
                alignItems='center'
                justifyContent='center'
                border='1px solid #4A5568'
                background='gray.800'
                _hover={{ background: 'gray.700' }}

            >
                Learn more<IoIosArrowForward />
            </Flex>
        </Box>
    );
};

export default ReusableFeatureCard;