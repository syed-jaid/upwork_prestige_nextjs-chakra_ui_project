import { Box, Img, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const ManyFeaturesCard = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName: any) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    return (
        <Box
            background='gray.900'
            padding={{ base: '15px', sm: '40px' }}
            border='1px solid #2D3748'
            borderRadius='3xl'
            maxWidth={{ base: '800px', md: '370px' }}
            onMouseEnter={() => handleMouseEnter(true)}
            onMouseLeave={handleMouseLeave}
        >
            <Box
                width='100%'
                overflow='hidden'
                background='gray.800'
                height={{ base: '300px', sm: '300px' }}
                borderRadius='3xl'
            >
                {hoveredItem ?
                    <Text
                        margin='20px'
                        color='green.500'
                        textStyle='sm/semibold'
                    >
                        21.32%
                    </Text>
                    :
                    <Text
                        margin='20px'
                        color='green.500'
                        textStyle='sm/semibold'
                    >
                        14.12%
                    </Text>
                }
                <motion.div
                    whileHover={{
                        x: -120,
                        transition: { duration: 0.2 },
                    }}
                    initial={{ x: 0 }}
                >

                    <Img maxWidth='470px' src='../Images/ai-line.webp' />
                </motion.div>
            </Box>
            <Text
                color='white'
                textStyle='lg/semibold'
                marginTop='20px'
            >
                Simple analytics
            </Text>
            <Text
                color='gray.400'
                textStyle='md'
            >
                Make informed decisions backed by data through our analytics tools.
            </Text>
        </Box>
    );
};

export default ManyFeaturesCard;