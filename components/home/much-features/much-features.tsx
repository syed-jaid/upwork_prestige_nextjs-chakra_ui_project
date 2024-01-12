import { Box } from '@chakra-ui/react';
import { PiLightningBold } from "react-icons/pi";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import { BsStars } from 'react-icons/bs';
import AiAssistant from './ai-assistant';
import SimpleAnalytics from './simple-analytics';
import EasyCollaboration from './easy-collaboration';

const MuchFeatures = () => {
    return (
        <Box maxWidth='1280px' marginX='auto' marginBottom={{ base: '150px', md: '300px' }} paddingX={{ base: '20px', sm: "40px" }}>
            <CommonButton icon={<PiLightningBold style={{ color: "#33c6ab" }} />} text={'Features'} />
            <SectionHeader
                headerText='And so much more'
                description='All the features you need to build a better experience, explore the possibilities, and unlock the full potential of what we have to offer.'
            />
            <Box marginBottom={{ base: '150px', md: '300px' }}>
                <AiAssistant />
            </Box>
            <Box marginBottom={{ base: '150px', md: '300px' }}>
                <SimpleAnalytics />
            </Box>
            <Box marginBottom={{ base: '150px', md: '300px' }}>
                <EasyCollaboration />
            </Box>
        </Box>
    );
};

export default MuchFeatures;