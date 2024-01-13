import { Avatar, AvatarGroup, Box, Text } from '@chakra-ui/react';
import React from 'react';

const AvatarStack = () => {
    return (
        <Box>
            <AvatarGroup size='sm' max={4} marginX='auto' width='100px' marginTop={{ base: '50', sm: '70px' }}>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            </AvatarGroup>
            <Text color='gray.500' textStyle='sm' textAlign='center' marginTop='15px'>
                <span style={{ fontWeight: '600' }}>1,200+</span> reviews (<span style={{ fontWeight: '600' }}>4.9</span> of <span style={{ fontWeight: '600' }}>5</span>)
            </Text>
        </Box>
    );
};

export default AvatarStack;