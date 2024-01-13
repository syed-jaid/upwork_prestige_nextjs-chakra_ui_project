import { Box, Text } from '@chakra-ui/react';
import { CgProfile } from "react-icons/cg";
import React, { useState } from 'react';

const ProductItems = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName: any) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    const iconStyle = {
        color: '#9b9ca1',
        fontSize: '18px',
    };
    return (
        <>
            {[1, 2, 3].map((index) =>
                <Box
                    width='320px'
                    height='64px'
                    background='gray.800'
                    borderRadius='md'
                    display='flex'
                    gap='10px'
                    alignItems='center'
                    paddingLeft='15px'
                    _hover={{ background: 'gray.700' }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Box
                        width='32px'
                        height='32px'
                        background={hoveredItem === index ? 'teal.700' : 'gray.700'}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        borderRadius='md'
                        border={`1px solid ${hoveredItem === index ? '#38b2ac' : 'gray.600'}`}
                    >
                        <CgProfile style={iconStyle} mx='auto' />
                    </Box>
                    <Box cursor='pointer'>
                        <Text
                            color={hoveredItem === index ? 'teal.400' : 'gray.200'}
                            fontWeight='sm/semibold'
                        >
                            Profile management
                        </Text>
                        <Text
                            color='gray.400'
                            textStyle='sm'
                        >
                            Personalize experience for each user
                        </Text>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ProductItems;