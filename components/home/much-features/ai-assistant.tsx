import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import ReusableSmallCard from '@/components/core/home-page/reusable-small-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import React from 'react';
import { BsStars } from 'react-icons/bs';
import { FaRegCirclePlay } from "react-icons/fa6";

const AiAssistant = () => {
    return (
        <Flex flexDirection={{ base: 'column-reverse', lg: 'row' }} alignItems='center'>
            <Box maxWidth={{ base: '100%', lg: '560px' }}>
                <ReusableFeatureCard
                    background='teal.900'
                    border='1px solid #2C7A7B'
                    icon={<BsStars style={{ color: '#38B2AC', fontSize: '24px' }} />}
                    smallText='AI Assistant'
                    smallTextColor='teal.400'
                    headerText='Your ultimate productivity and study companion'
                    description=' Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.'
                    buttonCenter='start'
                />
                <Flex flexDirection={{ base: 'column', sm: 'row' }} marginTop='50px' gap='40px'>
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#38B2AC", fontSize: '20px' }} />}
                        headerText='Video editing'
                        description='Seamlessly transform raw footage into polished masterpieces.'
                    />
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#38B2AC", fontSize: '20px' }} />}
                        headerText='Video editing'
                        description='Seamlessly transform raw footage into polished masterpieces.'
                    />
                </Flex>
            </Box>
            <Img maxWidth={{ base: '100%', md: '552px' }} marginLeft='auto' marginRight={{ base: 'auto', lg: '0' }} src='../Images/ai-img.webp' />
        </Flex>
    );
};

export default AiAssistant;