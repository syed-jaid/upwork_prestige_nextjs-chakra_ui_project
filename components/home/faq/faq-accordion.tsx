'use client'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const FaqAccordion = ({ qusText, ansText }: any) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    return (
        <Box
            maxWidth='768px'
            marginX='auto'
            marginBottom='20px'
        >
            <Accordion allowMultiple>
                <AccordionItem
                    background='gray.900'
                    padding={{
                        base: '10px 6px',
                        sm: '15px 10px'
                    }}
                    borderRadius='3xl'
                    border='1px solid #2D3748'
                    _hover={!isPanelOpen ?
                        { background: 'gray.800', transition: 'background 0.1s ease 0.1s' } : undefined
                    }
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                    <AccordionButton justifyContent='space-between'>
                        <Text
                            as="span"
                            color='white'
                            textStyle='md/semibold'
                            textAlign='left'
                        >
                            {qusText}
                        </Text>
                        <AccordionIcon color='white' />
                    </AccordionButton>
                    <AccordionPanel>
                        <Text
                            as="span"
                            color='gray.400'
                            textStyle='md'
                            textAlign='left'
                        >
                            {ansText}
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default FaqAccordion;