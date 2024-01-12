'use client'
import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import { GoPeople } from 'react-icons/go';
import { motion } from "framer-motion";
import React from 'react';

const EasyCollaboration = ({ tab3 }: any) => {
    return (
        <Flex gap='20px' flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems='center' justifyContent='space-between'>
            <Box width={{ base: '100%', md: '50%' }}>
                <ReusableFeatureCard
                    background='yellow.900'
                    border='1px solid #F6AD55'
                    smallText='Easy Collaboration'
                    smallTextColor='orange.300'
                    icon={<GoPeople style={{ color: '#F6AD55', fontSize: '24px' }} />}
                    headerText='Solution for seamless productive teamwork'
                    description='Working together on documents has never been easier, allowing you and your team to collaborate and provide constructive feedback.'
                />
            </Box>
            <Box maxWidth={{ base: '100%', md: '400px' }} overflow='hidden' marginBottom={{ base: '50px', md: "0px" }} background='gray.900' borderRadius='24px'>
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: tab3 ? 0 : 200 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 8 }}
                >
                    <Img maxWidth={{ base: '100%', md: '400px' }} marginX='auto' src='../Images/easy-collaboration-img.webp' />
                </motion.div>
            </Box>
        </Flex>
    );
};

export default EasyCollaboration;