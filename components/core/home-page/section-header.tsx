import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const SectionHeader = ({ headerText, description }: any) => {
    return (
        <Box maxWidth='768px' marginX='auto' marginBottom='80px'>
            <Text color='white' textStyle='5xl/semibold' textAlign='center' marginTop='10px'>
                {headerText}
            </Text>
            <Text color='gray.400' textStyle='lg/sm' textAlign='center'>
                {description}
            </Text>
        </Box>
    );
};

export default SectionHeader;