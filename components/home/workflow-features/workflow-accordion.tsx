'use client';
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Img,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Accordion_Data } from '@/Data/workflow-data';

const AccordionSection = ({ id, title, description, state }: any) => (
    <AccordionItem
        paddingY='15px'
        paddingX='0px'
        borderBottom='1px solid #4A5568'
        borderTop='none'
    >
        <AccordionButton
            paddingX='3px'
            justifyContent='space-between'
            width={{ base: '100%', lg: '400px' }}
        >
            <Text
                as='span'
                paddingX='0px'
                color='white'
                textStyle='md/semibold'
                textAlign='left'
            >
                {title}
            </Text>
            <AccordionIcon color='white' />
        </AccordionButton>
        <AccordionPanel paddingX='3px'>
            <Text
                as='span'
                color='gray.400'
                textStyle='md'
                textAlign='left'
            >
                {description}
            </Text>
        </AccordionPanel>
        {(id === state) &&
            <Box
                width="100%"
                height="1px"
                background=" gray.600"
                bottom='-15px'
                position="relative"
                overflow="hidden"
            >
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 4 }}
                >
                    <Box border='1px solid #33c6ab'></Box>
                </motion.div>
            </Box>}
    </AccordionItem>
);

const WorkflowAccordion = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setState(prevState => (prevState + 1) % 3);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Flex
            gap='40px'
            alignItems='center'
            justifyContent='space-between'
            display={{ base: 'block', lg: 'flex' }}
        >
            <Box maxWidth={{ base: '100%', lg: '400px' }}>
                <Accordion allowToggle index={state}>
                    {Accordion_Data.map((section) => (
                        <AccordionSection key={section.id} {...section} state={state} />
                    ))}
                </Accordion>
            </Box>
            <Box
                background='gray.900'
                borderRadius='24px'
                overflow='hidden'
                maxWidth={{ base: '100%', md: '600px' }}
                marginTop={{ base: '40px', lg: '0' }}
                marginX={{ base: 'auto', lg: "0px" }}
                marginBottom={{ base: '50px', md: '0px' }}
            >
                {Accordion_Data.map((section) => (
                    <>
                        {section.id === state &&
                            <motion.div
                                key={section.id}
                                initial={{ y: 200 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 50, damping: 8 }}
                            >
                                <Img
                                    marginX='auto'
                                    src={`../Images/${section.src}.webp`}
                                />
                            </motion.div>
                        }
                    </>
                ))}
            </Box>
        </Flex>
    );
};

export default WorkflowAccordion
