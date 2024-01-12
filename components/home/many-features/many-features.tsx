'use client'
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { PiLightningBold } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from 'react';
import CommonButton from '../../core/home-page/common-button';
import SectionHeader from '../../core/home-page/section-header';

const ManyFeatures = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName: any) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    const controls = useAnimation();

    const handleHover = async () => {
        await controls.start({ opacity: 0, y: -20 });
        controls.start({ opacity: 1, y: 0 });
    };

    return (
        <Box maxWidth='1240px' marginX='auto' marginBottom={{ base: '150px', md: '300px' }} paddingX='20px'>
            <CommonButton icon={<PiLightningBold style={{ color: "#33c6ab" }} />} text={'Features'} />
            <SectionHeader
                headerText='And many other features'
                description='We take immense pride in presenting you with a comprehensive array of powerful tools and capabilities that are designed to elevate your experience and help you achieve more.'
            />
            <Flex maxWidth='1200px' marginX='auto' justifyContent='center' flexWrap='wrap' gap='32px'>
                <Box background='gray.900' padding={{ base: '15px', sm: '40px' }} border='1px solid #2D3748' borderRadius='3xl' maxWidth='790px'>
                    <Box background='gray.800' width='100%' height={{ base: '200px', sm: '300px' }} overflow='hidden' paddingX={{ base: '15px', sm: '40px' }} paddingTop={{ base: '15px', sm: '40px' }} borderRadius='3xl'>
                        <Img src='../Images/dashbard-img.webp' />
                    </Box>
                    <Text color='white' fontSize='lg' fontWeight='semibold' marginTop='20px'>
                        Dashboard
                    </Text>
                    <Text color='gray.400' fontSize='md'>
                        Our interactive dashboard provides an all-encompassing view of your projects, tasks, and collaborations. Monitor deadlines, track milestones, and stay updated on team activities.
                    </Text>
                </Box>
                {[1, 2, 3, 4].map(() =>
                    <Box
                        background='gray.900'
                        padding={{ base: '15px', sm: '40px' }}
                        border='1px solid #2D3748'
                        borderRadius='3xl'
                        maxWidth={{ base: '800px', md: '370px' }}
                        onMouseEnter={() => handleMouseEnter(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Box background='gray.800' width='100%' height={{ base: '300px', sm: '300px' }} overflow='hidden' borderRadius='3xl'>
                            {hoveredItem ?
                                <Text margin='20px' color='green.500' fontSize='sm' fontWeight='semibold'>
                                    21.32%
                                </Text>
                                :
                                <Text margin='20px' color='green.500' fontSize='sm' fontWeight='semibold'>
                                    14.12%
                                </Text>
                            }
                            <motion.div
                                whileHover={{
                                    x: -120,
                                    transition: { duration: 0.2 },
                                }}
                                initial={{ x: 0 }}
                            >

                                <Img maxWidth='470px' src='../Images/ai-line.webp' />
                            </motion.div>
                        </Box>
                        <Text color='white' fontSize='lg' fontWeight='semibold' marginTop='20px'>
                            Simple analytics
                        </Text>
                        <Text color='gray.400' fontSize='md'>
                            Make informed decisions backed by data through our analytics tools.
                        </Text>
                    </Box>
                )
                }

            </Flex>
        </Box>
    );
};

export default ManyFeatures;