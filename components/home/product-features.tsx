import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import CommonButton from '../core/home-page/common-button';
import { PiLightningBold } from "react-icons/pi";
import SectionHeader from '../core/home-page/section-header';
import ProductFeaturesCard from '../core/home-page/product-features-card';

const ProductFeatures = () => {
    return (
        <Box
            maxWidth='1280px'
            marginX='auto'
            paddingX={{ base: '20px', sm: "40px" }}
            marginBottom={{ base: '150px', md: '300px' }}
        >
            <CommonButton icon={<PiLightningBold style={{ color: "#33c6ab" }} />} text={'Features'} />
            <SectionHeader
                headerText='Product features'
                description='Discover an extensive suite of robust tools and functionalities thoughtfully designed to enhance your interactions on our platform.'
            />
            <Grid
                gap='32px'
                templateColumns={{ lg: 'repeat(2, 1fr)', xl: "repeat(3, 1fr)" }}
            >
                <ProductFeaturesCard />
                <ProductFeaturesCard />
                <ProductFeaturesCard />
                <ProductFeaturesCard />
                <ProductFeaturesCard />
                <ProductFeaturesCard />
            </Grid>
        </Box>
    );
};

export default ProductFeatures;