import { Box } from '@chakra-ui/react';
import { PiLightningBold } from "react-icons/pi";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import FeaturesTab from './features-tab';

const OtherFeatures = () => {
    return (
        <Box>
            <CommonButton icon={<PiLightningBold style={{ color: "#33c6ab" }} />} text={'Features'} />
            <SectionHeader
                headerText='Other features'
                description='Our platform is designed to provide you with an exceptional user experience, catering to the needs of ambitious professionals and visionary entrepreneurs.'
            />
            <FeaturesTab />
        </Box>
    );
};

export default OtherFeatures;