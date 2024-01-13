import ReusableFeatureCard from '@/components/core/home-page/reusable-feature-card';
import ReusableSmallCard from '@/components/core/home-page/reusable-small-card';
import { Box, Flex, Img } from '@chakra-ui/react';
import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { GoPeople } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';

const EasyCollaboration = () => {
    return (
        <Box>
            <Flex
                alignItems='center'
                justifyContent='space-between'
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Box maxWidth={{ base: '100%', md: '560px' }}>
                    <ReusableFeatureCard
                        background='yellow.900'
                        border='1px solid #F6AD55'
                        smallText='Easy Collaboration'
                        smallTextColor='orange.300'
                        icon={<GoPeople style={{ color: '#F6AD55', fontSize: '24px' }} />}
                        headerText='The best solution for seamless productive teamwork'
                        description='Working together on documents has never been easier, allowing you and your team to collaborate and provide feedback.'
                        buttonCenter='start'
                        btnOff={true}
                    />
                </Box>
                <Flex
                    color='white'
                    textStyle='md'
                    gap='5px'
                    maxWidth='160px'
                    marginTop='50px'
                    padding='14px 16px'
                    borderRadius='40px'
                    alignItems='center'
                    justifyContent='center'
                    border='1px solid #4A5568'
                    background='gray.800'
                    _hover={{ background: 'gray.700' }}

                >
                    Learn more<IoIosArrowForward />
                </Flex>
            </Flex>
            <Flex flexWrap='wrap' marginTop='50px' >
                <Box maxWidth={{ base: '100%', lg: '378px' }} marginX='auto'>
                    <Img
                        marginX='auto'
                        marginBottom='30px'
                        maxWidth={{ sm: '378px' }}
                        borderRadius='3xl'
                        src='../Images/easy-collaboration-1.webp'
                    />
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#F6AD55", fontSize: '20px' }} />}
                        headerText='Video editing'
                        description='The ability to set varying levels of permissions for different users, ensuring data security and full access control.'
                    />
                </Box>
                <Box maxWidth={{ base: '100%', lg: '378px' }} marginX='auto'>
                    <Img
                        marginX='auto'
                        marginBottom='30px'
                        borderRadius='3xl'
                        maxWidth={{ sm: '378px' }}
                        src='../Images/easy-collaboration-2.webp'
                    />
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#F6AD55", fontSize: '20px' }} />}
                        headerText='Video editing'
                        description='The ability to set varying levels of permissions for different users, ensuring data security and full access control.'
                    />
                </Box>
                <Box maxWidth={{ base: '100%', lg: '378px' }} marginX='auto'>
                    <Img
                        marginX='auto'
                        marginBottom='30px'
                        maxWidth={{ sm: '378px' }}
                        borderRadius='3xl'
                        src='../Images/easy-collaboration-3.webp'
                    />
                    <ReusableSmallCard
                        icon={<FaRegCirclePlay style={{ color: "#F6AD55", fontSize: '20px' }} />}
                        headerText='Video editing'
                        description='The ability to set varying levels of permissions for different users, ensuring data security and full access control.'
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default EasyCollaboration;