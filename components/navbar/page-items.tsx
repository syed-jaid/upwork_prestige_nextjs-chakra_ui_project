import { pagesHoverItems } from '@/Data/navbar-data';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const PageItems = () => {
    return (
        <Box
            padding='32px'
            width='500px'
            display='flex'
            justifyContent={'space-between'}
        >
            {
                pagesHoverItems.map(({ itemName, listItems }) =>
                    <Box>
                        <Text
                            color='white'
                            textStyle='sm/semibold'
                        >
                            {itemName}
                        </Text>
                        {listItems.map((item) =>
                            <Link href='#'>
                                <Text
                                    cursor='pointer'
                                    textStyle='md'
                                    color='gray.500'
                                    marginTop='20px'
                                    _hover={{ color: 'white' }}
                                >
                                    {item}
                                </Text>
                            </Link>
                        )}
                    </Box>
                )
            }
        </Box>
    );
};

export default PageItems;