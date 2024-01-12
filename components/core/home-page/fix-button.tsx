import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { SiKibana } from 'react-icons/si';

const FixButton = () => {
    const buttonStyles = {
        gap: '10px',
        background: 'white',
        borderRadius: 'xl',
        padding: '8px 15px',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const iconStyles = { fontSize: '15px' };
    const madeInIconStyles = { fontSize: '14px' };

    return (
        <Box position="fixed" right="30px" bottom="20px" zIndex={2}>
            <Flex {...buttonStyles}>
                <FaShoppingCart style={iconStyles} />
                <Text fontSize="13px" fontWeight="bold">
                    Get template
                </Text>
            </Flex>
            <Flex {...buttonStyles}>
                <SiKibana style={madeInIconStyles} />
                <Text fontSize="13px" fontWeight="bold">
                    Made in Farmer
                </Text>
            </Flex>
        </Box>
    );
};

export default FixButton;
