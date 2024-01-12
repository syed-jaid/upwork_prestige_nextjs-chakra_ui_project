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
        <AccordionButton width={{ base: '100%', lg: '400px' }} paddingX='3px' justifyContent='space-between'>
            <Text as='span' paddingX='0px' color='white' fontSize='md' fontWeight='semibold' textAlign='left'>
                {title}
            </Text>
            <AccordionIcon color='white' />
        </AccordionButton>
        <AccordionPanel paddingX='3px'>
            <Text as='span' color='gray.400' fontSize='md' textAlign='left'>
                {description}
            </Text>
        </AccordionPanel>
        {(id === state) &&
            <Box
                width="100%"
                height="1px"
                bg=" gray.600"
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
        <Flex display={{ base: 'block', lg: 'flex' }} gap='40px' alignItems='center' justifyContent='space-between'>
            <Box maxWidth={{ base: '100%', lg: '400px' }}>
                <Accordion allowToggle index={state}>
                    {Accordion_Data.map((section) => (
                        <AccordionSection key={section.id} {...section} state={state} />
                    ))}
                </Accordion>
            </Box>
            <Box maxWidth={{ base: '100%', md: '600px' }} marginTop={{ base: '40px', lg: '0' }} marginX={{ base: 'auto', lg: "0px" }} overflow='hidden' marginBottom={{ base: '50px', md: '0px' }} background='gray.900' borderRadius='24px'>
                {Accordion_Data.map((section) => (
                    <>
                        {section.id === state &&
                            <motion.div
                                key={section.id}
                                initial={{ y: 200 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 50, damping: 8 }}
                            >
                                <Img marginX='auto' src={`../Images/${section.src}.webp`} />
                            </motion.div>
                        }
                    </>
                ))}
            </Box>

        </Flex>
    );
};

export default WorkflowAccordion
