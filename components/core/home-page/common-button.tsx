import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const CommonButton = ({ icon, text }: any) => {
    return (
        <Flex alignContent='center' justifyContent='center'>
            <Flex gap='5px' background='#112220' padding='5px 12px' borderRadius='3xl' border='1px solid #236456' alignItems='center'>
                {icon}
                <Text color='teal.300' textStyle='sm/medium'>
                    {text}
                </Text>
            </Flex>
        </Flex>
    );
};

export default CommonButton;