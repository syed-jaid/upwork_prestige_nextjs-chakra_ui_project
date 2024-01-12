import { Img } from '@chakra-ui/react';
import React from 'react';

const DashboardImg = () => {
    return (
        <Img
            paddingX='20px'
            marginX='auto'
            maxWidth={{ base: '100%', sm: "380px", md: '800px', lg: '1000px', xl: '1250px' }}
            src="../Images/dashbard-img.webp"
            alt="Dashboard Image"
        />
    );
};

export default DashboardImg;