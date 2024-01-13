import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const GetButtons = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName: any) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    return (
        <Flex
            marginTop={{ base: '50', sm: '70px' }}
            textStyle='md/medium'
            justifyContent='center'
            alignItems='center'
            flexDirection={{ base: 'column', sm: 'row' }}
        >
            <Flex
                color='black'
                background='white'
                gap='6px'
                padding='16px 30px'
                borderRadius='40px'
                alignItems='center'
                justifyContent='center'
                _hover={{ background: 'gray.100' }}
            >
                Get started
                <IoIosArrowForward />
            </Flex>
            <Flex
                color='white'
                gap='6px'
                paddingX='32px'
                paddingY={{ base: '20px', sm: '0' }}
                borderRadius='40px'
                alignItems='center'
                justifyContent='center'
                onMouseEnter={() => handleMouseEnter(true)}
                onMouseLeave={handleMouseLeave}
                _hover={{ color: 'gray.300' }}
            >
                Documentation
                <IoIosArrowForward style={{ color: hoveredItem ? '#CBD5E0' : 'white' }} />
            </Flex>
        </Flex>
    );
};

export default GetButtons;