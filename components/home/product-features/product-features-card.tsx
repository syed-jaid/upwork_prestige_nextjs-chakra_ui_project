import { Box, Text } from '@chakra-ui/react';
import { MdAppRegistration } from "react-icons/md";
import React from 'react';

const ProductFeaturesCard = () => {
    return (
        <Box
            background='gray.900'
            borderRadius='3xl'
            padding={{ base: '30', sm: '40px' }}
            border='1px solid #2D3748'
        >
            <MdAppRegistration
                style={{ color: 'white', fontSize: '20px' }}
            />
            <Text
                color='white'
                textStyle='md/semibold'
                marginY='10px'
            >
                Data tracking
            </Text>
            <Text
                color='gray.400'
                fontSize={{ base: 'sm', sm: 'md' }}
            >
                Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.
            </Text>
        </Box>
    );
};

export default ProductFeaturesCard;