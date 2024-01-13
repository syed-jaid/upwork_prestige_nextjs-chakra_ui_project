import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Badge = () => <>
    <Flex
        cursor='pointer'
        gap='10px'
        alignItems='center'
        background='#112220'
        maxWidth='225px'
        marginX='auto'
        marginBottom='25px'
        padding='3px'
        borderRadius='2xl'
        border='0.5px solid #319795'
    >
        <Text
            display='inline'
            textStyle='sm'
            color='white'
            background='teal.300'
            padding='1px 7px'
            borderRadius='xl'
        >
            New
        </Text>
        <Text display='inline' textStyle='sm/medium' color='teal.400'>
            Introducing AI Editor
        </Text>
        <FaArrowRight style={{ color: '#38B2AC', fontSize: '15px' }} />
    </Flex>
</>

export default Badge;