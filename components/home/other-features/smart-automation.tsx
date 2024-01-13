'use client'
import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import { PiCopySimple } from 'react-icons/pi';
import { motion } from "framer-motion";
import React from 'react';

const SmartAutomation = ({ tab4 }: any) => {
    return (
        <Flex gap='20px' flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems='center' justifyContent='space-between'>
            <Box width={{ base: '100%', md: '50%' }}>
                <ReusableFeatureCard
                    background='green.900'
                    border='1px solid #38A169'
                    smallText='Smart Automation'
                    smallTextColor='green.400'
                    icon={<PiCopySimple style={{ color: '#38A169', fontSize: '24px' }} />}
                    headerText='Streamline your entire workflow fast'
                    description='You can focus on the creative aspects of content creation while leaving time-consuming tasks to our intelligent system.'
                />
            </Box>
            <Box maxWidth={{ base: '100%', md: '400px' }} overflow='hidden' marginBottom={{ base: '50px', md: "0px" }} background='gray.900' borderRadius='24px'>
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: tab4 ? 0 : 200 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 8 }}
                >
                    <Img
                        maxWidth={{ base: '100%', md: '400px' }}
                        marginX='auto'
                        src='../Images/smart-automation-img.webp'
                        alt="Image"
                    />
                </motion.div>
            </Box>
        </Flex>
    );
};

export default SmartAutomation;