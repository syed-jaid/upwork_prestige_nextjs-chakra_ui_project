'use client'
import { Box } from '@chakra-ui/react';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import PricingCards from './pricing-cards';
const Pricing = () => {
    return (
        <Box paddingX='20px' marginBottom={{ base: '150px', md: '300px' }}>
            <CommonButton icon={<HiOutlineCurrencyDollar style={{ color: "#33c6ab" }} />} text='Pricing' />
            <SectionHeader
                headerText='Supercharge your growth'
                description="Whether you're a small startup, a growing mid-sized business, or a large enterprise, we have plans tailored to your specific demands."
            />
            <PricingCards />
        </Box>
    );
};

export default Pricing;