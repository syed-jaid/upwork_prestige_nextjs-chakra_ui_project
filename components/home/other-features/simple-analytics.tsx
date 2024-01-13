'use client'
import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { motion } from "framer-motion";
import React from 'react';

const SimpleAnalytics = ({ tab2 }: any) => {
    return (
        <Flex gap='20px' flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems='center' justifyContent='space-between'>
            <Box width={{ base: '100%', md: '50%' }}>
                <ReusableFeatureCard
                    background='purple.900'
                    border='1px solid #9F7AEA'
                    smallText='Simple Analytics'
                    smallTextColor='purple.400'
                    icon={<TbDeviceAnalytics style={{ color: '#9F7AEA', fontSize: '24px' }} />}
                    headerText='Help you track what really matters to you'
                    description='Built-in analytics and reporting capabilities help businesses gather insights, track KPI, and make data-driven decisions.'
                />
            </Box>
            <Box maxWidth={{ base: '100%', md: '400px' }} overflow='hidden' marginBottom={{ base: '50px', md: "0px" }} background='gray.900' borderRadius='24px'>
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: tab2 ? 0 : 200 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 8 }}
                >
                    <Img
                        maxWidth={{ base: '100%', md: '400px' }}
                        marginX='auto'
                        src='../Images/simple-analytics-img.webp'
                        alt="Image"
                    />
                </motion.div>
            </Box>
        </Flex>
    );
};

export default SimpleAnalytics;