import { pagesHoverItems } from '@/Data/navbar-data';
import { Box, Text } from '@chakra-ui/react';
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
                            fontSize='md'
                            color='white'
                            fontWeight='semibold'
                        >
                            {itemName}
                        </Text>

                        {
                            listItems.map((item) =>
                                <Text
                                    fontSize='md'
                                    color='gray.500'
                                    marginTop='20px'
                                    _hover={{ color: 'white' }}
                                >
                                    {item}
                                </Text>
                            )
                        }
                    </Box>
                )
            }
        </Box>
    );
};

export default PageItems;