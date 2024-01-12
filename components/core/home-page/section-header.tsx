import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const SectionHeader = ({ headerText, description }: any) => {
    return (
        <Box maxWidth='768px' marginX='auto' marginBottom='80px'>
            <Text color='white' fontSize={{ base: '3xl', md: '5xl' }} fontWeight='semibold' textAlign='center' marginTop='10px'>
                {headerText}
            </Text>
            <Text color='gray.400' fontSize={{ base: 'sm', sm: 'lg' }} textAlign='center'>
                {description}
            </Text>
        </Box>
    );
};

export default SectionHeader;