import { Text } from '@chakra-ui/react';
import React from 'react';

const HeaderText = () => {
    return (
        <>
            <Text
                color='white'
                fontWeight='semibold'
                textAlign='center'
                lineHeight='none'
                fontSize={{ base: '3xl', sm: '40px', md: '72px' }}
            >
                The best way to build your startup.
            </Text>
            <Text
                color='gray.500'
                fontWeight='medium'
                textAlign='center'
                marginTop='20px'
                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
            >
                Our app eliminates the need for complex spreadsheets, endless email threads, empowering businesses to achieve greater efficiency.
            </Text>
        </>
    );
};

export default HeaderText;