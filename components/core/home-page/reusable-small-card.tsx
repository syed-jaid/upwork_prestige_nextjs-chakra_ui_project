import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ReusableSmallCard = ({ icon, headerText, description }: any) => {
    return (
        <Box >
            {icon}
            <Text color='white' textStyle='md/semibold' marginTop='12px'>
                {headerText}
            </Text>
            <Text color='gray.500' textStyle='md' marginTop='8px'>
                {description}
            </Text>
            <Flex
                color='white'
                textStyle='md'
                gap='5px'
                marginTop='15px'
                _hover={{ color: 'gray.400' }}
                alignItems='center'
                maxWidth='110px'
                fontWeight='semibold'
            >
                Learn more<IoIosArrowForward style={{ display: 'inline', }} />
            </Flex>
        </Box>
    );
};

export default ReusableSmallCard;