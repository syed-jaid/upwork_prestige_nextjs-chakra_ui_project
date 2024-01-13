'use client'
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { PiLightningBold } from "react-icons/pi";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import ManyFeaturesCard from './many-features-card';

const ManyFeatures = () => {

    return (
        <Box
            maxWidth='1240px'
            paddingX='20px'
            marginX='auto'
            marginBottom={{ base: '150px', md: '300px' }}
        >
            <CommonButton icon={<PiLightningBold style={{ color: "#33c6ab" }} />} text='Features' />
            <SectionHeader
                headerText='And many other features'
                description='We take immense pride in presenting you with a comprehensive array of powerful tools and capabilities that are designed to elevate your experience and help you achieve more.'
            />
            <Flex
                gap='32px'
                maxWidth='1200px'
                marginX='auto'
                flexWrap='wrap'
                justifyContent='center'
            >
                <Box
                    background='gray.900'
                    maxWidth='790px'
                    borderRadius='3xl'
                    padding={{ base: '15px', sm: '40px' }}
                    border='1px solid #2D3748'
                >
                    <Box
                        width='100%'
                        overflow='hidden'
                        borderRadius='3xl'
                        background='gray.800'
                        height={{ base: '200px', sm: '300px' }}
                        paddingX={{ base: '15px', sm: '40px' }}
                        paddingTop={{ base: '15px', sm: '40px' }}
                    >
                        <Img src='../Images/dashbard-img.webp' />
                    </Box>
                    <Text
                        color='white'
                        textStyle='lg/semibold'
                        marginTop='20px'
                    >
                        Dashboard
                    </Text>
                    <Text
                        color='gray.400'
                        textStyle='md'
                    >
                        Our interactive dashboard provides an all-encompassing view of your projects, tasks, and collaborations. Monitor deadlines, track milestones, and stay updated on team activities.
                    </Text>
                </Box>
                {Array(4).fill(null).map(() =>
                    <ManyFeaturesCard />
                )}
            </Flex>
        </Box>
    );
};

export default ManyFeatures;