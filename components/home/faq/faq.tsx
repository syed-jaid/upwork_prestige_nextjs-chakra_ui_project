'use client'
import { Box } from '@chakra-ui/react';
import { FaRegCircleQuestion } from "react-icons/fa6";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import FaqAccordion from './faq-accordion';
import { FAQ_Data } from '@/Data/faq-data';

const Faq = () => {
    return (
        <Box paddingX='20px' marginBottom='300px'>
            <CommonButton icon={<FaRegCircleQuestion style={{ color: "#33c6ab" }} />} text='FAQ' />
            <SectionHeader
                headerText='Some of the things you may want to know'
                description='We answered questions so you don’t have to ask them.'
            />
            {FAQ_Data.map(({ qusText, ansText }) =>
                <Box key={qusText}>
                    <FaqAccordion
                        qusText={qusText}
                        ansText={ansText}
                    />
                </Box>
            )}
        </Box>
    );
};

export default Faq;