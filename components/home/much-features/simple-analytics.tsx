import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import ReusableSmallCard from '@/components/core/home-page/reusable-small-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import React from 'react';
import { BsStars } from 'react-icons/bs';
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbDeviceAnalytics } from 'react-icons/tb';

const SimpleAnalytics = () => {
    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} alignItems='center'>
            <Img
                maxWidth={{ base: '100%', md: '552px' }}
                marginRight='auto' marginLeft={{ base: 'auto', lg: '0' }}
                src='../Images/sa-img.webp'
            />
            <Box maxWidth={{ base: '100%', lg: '550px' }}>
                <ReusableFeatureCard
                    background='purple.900'
                    border='1px solid #9F7AEA'
                    smallText='Simple Analytics'
                    smallTextColor='purple.400'
                    icon={<TbDeviceAnalytics style={{ color: '#9F7AEA', fontSize: '24px' }} />}
                    headerText='Help you track what really matters to you'
                    description='It helps businesses make informed predictions and anticipate trends, enabling proactive decision-making and planning.'
                    buttonCenter='start'
                />
                <Flex flexDirection={{ base: 'column', sm: 'row' }} marginTop='50px' gap='40px'>
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#9F7AEA", fontSize: '20px' }} />}
                        headerText='Charts tracking'
                        description='Built-in analytics and reporting capabilities help gather insights.'
                    />
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#9F7AEA", fontSize: '20px' }} />}
                        headerText='Video editing'
                        description='Seamlessly transform raw footage into polished masterpieces.'
                    />
                </Flex>
            </Box>

        </Flex>
    );
};

export default SimpleAnalytics;