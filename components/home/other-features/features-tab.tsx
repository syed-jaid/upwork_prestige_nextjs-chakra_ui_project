'use client'
import React, { useState } from 'react';
import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { BsStars } from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { GoPeople } from 'react-icons/go';
import { PiCopySimple } from 'react-icons/pi';
import AiAssistant from './ai-assistant';
import SimpleAnalytics from './simple-analytics';
import EasyCollaboration from './easy-collaboration';
import SmartAutomation from './smart-automation';



const FeaturesTab = () => {
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)
    const [tab4, setTab4] = useState(false)
    const setAnimation = ({ tab }: any) => {
        console.log(tab)
        if (tab === 'AI Assistant') {
            setTab1(true)
            setTab2(false)
            setTab3(false)
            setTab4(false)
        }
        else if (tab === 'Simple Analytics') {
            setTab1(false)
            setTab2(true)
            setTab3(false)
            setTab4(false)
        }
        else if (tab === 'Easy Collaboration') {
            setTab1(false)
            setTab2(false)
            setTab3(true)
            setTab4(false)
        }
        else if (tab === 'Smart Automation') {
            setTab1(false)
            setTab2(false)
            setTab3(false)
            setTab4(true)
        }

    }
    return (
        <Box padding='20px' marginBottom={{ base: '150', md: '300px' }} maxWidth='920' marginX='auto'>
            <Tabs variant='unstyled'>
                <TabList
                    background='gray.900'
                    borderRadius='32px'
                    padding='4px'
                    border='1px solid #2D3748'
                    display={{ base: 'block', md: 'flex' }}
                >
                    <FeatureTab setAnimation={setAnimation} icon={<BsStars />} label='AI Assistant' />
                    <FeatureTab setAnimation={setAnimation} icon={<TbDeviceAnalytics />} label='Simple Analytics' />
                    <FeatureTab setAnimation={setAnimation} icon={<GoPeople />} label='Easy Collaboration' />
                    <FeatureTab setAnimation={setAnimation} icon={<PiCopySimple />} label='Smart Automation' />
                </TabList>
                <TabPanels marginTop='70px' >
                    <TabPanel>
                        <AiAssistant {...{ tab1 }} />
                    </TabPanel>
                    <TabPanel>
                        <SimpleAnalytics {...{ tab2 }} />
                    </TabPanel>
                    <TabPanel>
                        <EasyCollaboration {...{ tab3 }} />
                    </TabPanel>
                    <TabPanel>
                        <SmartAutomation {...{ tab4 }} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

const FeatureTab = ({ setAnimation, icon, label }: any) => (
    <Tab
        gap='10px'
        color='gray.400'
        width='100%'
        height='55px'
        borderRadius='full'
        _selected={{ color: 'white', bg: 'gray.700' }}
        onClick={() => setAnimation({ tab: label })}
    >
        {React.cloneElement(icon, { style: { marginRight: '8px' } })}
        {label}
    </Tab>
);
export default FeaturesTab;
