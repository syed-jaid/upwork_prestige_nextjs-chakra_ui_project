import { Box } from '@chakra-ui/react';
import { PiLightningBold } from "react-icons/pi";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import WorkflowAccordion from './workflow-accordion';

const WorkflowFeatures = () => {
    return (
        <Box maxWidth='1140px' paddingX='20px' marginX='auto' marginBottom={{ base: '150px', md: '300px' }}>
            <CommonButton icon={<PiLightningBold style={{ color: "#33c6ab" }} />} text={'Features'} />
            <SectionHeader
                headerText='Speed up your workflow'
                description='We are excited to present our stunning solutions designed to address your unique needs and provide a seamless user experience.'
            />
            <WorkflowAccordion />
        </Box>
    );
};

export default WorkflowFeatures;