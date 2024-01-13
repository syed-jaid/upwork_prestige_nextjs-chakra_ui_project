import { navbarItemsHover } from '@/Data/navbar-data';
import { Box, Flex, Text } from '@chakra-ui/react';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import React, { useState } from 'react';
import ProductItems from './product-items';
import PageItems from './page-items';

const NavbarItemsHover = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName: any) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    const iconStyle = {
        color: hoveredItem === 'Pages' ? 'white' : '#718096',
        fontSize: '14px',
        transition: 'transform 0.2s ease-in-out',
        transform: `rotate(${hoveredItem === 'Pages' ? '-180deg' : '0deg'})`,
    };
    return (
        <Flex gap="23px" alignItems="center" mr='23px'>
            {navbarItemsHover.map(({ itemName, route }) => (
                <Box
                    key={itemName}
                    position="relative"
                    onMouseEnter={() => handleMouseEnter(itemName)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href={route}>
                        <Flex
                            gap='5px'
                            alignItems='center'
                        >
                            <Text
                                cursor='pointer'
                                textStyle="md/medium"
                                color={hoveredItem === itemName ? "white" : "gray.500"}
                            >
                                {itemName}
                            </Text>

                            {'Pages' === itemName && <IoIosArrowDown style={iconStyle} />}

                        </Flex>
                    </Link>
                    {hoveredItem === itemName && (
                        <Box
                            position="absolute"
                            top="100%"
                            left="0"
                            background="gray.800"
                            padding="2"
                            borderRadius="md"
                            zIndex={10}
                        >
                            {hoveredItem === 'Product' && <ProductItems />}
                            {hoveredItem === 'Pages' && <PageItems />}
                        </Box>
                    )}
                </Box>
            ))}
        </Flex>
    );
};

export default NavbarItemsHover;