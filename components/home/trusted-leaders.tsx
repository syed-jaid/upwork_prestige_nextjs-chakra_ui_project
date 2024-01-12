import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import LeadersLogo from './leaders-logo';

const TrustedByLeaders = () => {
    return (
        <Box marginTop={{ base: '60px', sm: '100px' }} marginBottom={{ base: '80px', sm: '120px' }}>
            <Text color='white' fontSize='lg' fontWeight='semibold' textAlign='center'>
                Trusted by the world leaders
            </Text>
            <LeadersLogo />
        </Box>
    );
};

export default TrustedByLeaders;