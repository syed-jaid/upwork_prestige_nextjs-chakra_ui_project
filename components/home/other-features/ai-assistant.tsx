'use client'
import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import React from 'react';

const AiAssistant = ({ tab1 }: any) => {
    return (
        <Flex gap='20px' flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems='center' justifyContent='space-between'>
            <Box width={{ base: '100%', md: '50%' }}>
                <ReusableFeatureCard
                    background='teal.900'
                    border='1px solid #2C7A7B'
                    icon={<BsStars style={{ color: '#38B2AC', fontSize: '24px' }} />}
                    smallText='AI Assistant'
                    smallTextColor='teal.400'
                    headerText='Your new ultimate productivity companion'
                    description=' Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.'
                />
            </Box>
            <Box maxWidth={{ base: '100%', md: '400px' }} overflow='hidden' marginBottom={{ base: '50px', md: "0px" }} background='gray.900' borderRadius='24px'>
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: tab1 ? 0 : 200 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 8 }}
                >
                    <Img maxWidth={{ base: '100%', md: '400px' }} marginX='auto' src='../Images/ai-assistant-img.webp' />
                </motion.div>
            </Box>
        </Flex>
    );
};

export default AiAssistant;