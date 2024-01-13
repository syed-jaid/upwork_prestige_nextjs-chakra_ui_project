'use client'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import SingleCard from './single-card';
import { MonthlyCardConfigs, YearlyCardConfigs, } from '@/Data/pricing-data';

const PricingCards = () => {
    return (
        <Box>
            <Tabs variant='unstyled' >
                <TabList
                    maxWidth='180px'
                    marginX='auto'
                    background='gray.900'
                    borderRadius='24px'
                    padding='4px'
                    border='1px solid #2D3748'
                >
                    <Tab
                        color='white'
                        borderRadius='24px'
                        _selected={{ bg: 'gray.700' }}
                    >
                        Monthly
                    </Tab>
                    <Tab
                        color='white'
                        borderRadius='24px'
                        _selected={{ bg: 'gray.700' }}
                    >
                        Yearly
                    </Tab>
                </TabList>
                <TabPanels
                    marginTop='70px'
                    maxWidth='1200px'
                    marginX='auto'
                >
                    <TabPanel display={{ base: 'block', lg: 'flex' }} columnGap='32px'>
                        {MonthlyCardConfigs.map((config, index) => (
                            <SingleCard key={index} {...config} monthly={true} />
                        ))}
                    </TabPanel>
                    <TabPanel display={{ base: 'block', lg: 'flex' }} columnGap='32px'>
                        {YearlyCardConfigs.map((config, index) => (
                            <SingleCard key={index} {...config} monthly={false} />
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default PricingCards;