import { Box } from '@chakra-ui/react';
import { LuMessageSquare } from "react-icons/lu";
import React from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';
import TestimonialsCard from './testimonials-card';

const Testimonials = () => {
    return (
        <Box marginBottom={{ base: '120px', md: '230px' }}>
            <CommonButton icon={<LuMessageSquare style={{ color: "#33c6ab" }} />} text='Testimonials' />
            <SectionHeader
                headerText='What are people saying'
                description='Our customers continue to be the core of our business and their feedback vividly illustrates the success of our efforts.'
            />
            <TestimonialsCard />
        </Box>
    );
};

export default Testimonials;