'use client'
import { Box, Flex } from '@chakra-ui/react';
import { useRef } from "react";
import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import TestimonialCard from './testimonial-card';

interface ParallaxProps {
    children: any;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(30);

    // const x = useTransform(baseX, (v) => `${wrap(0, -200, v)}%`);
    const x = useTransform(baseX, (v) => `${wrap(0, -200, v)}px`)

    const directionFactor = useRef<number>(2);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <Box
            h='300px'
            bg='#0f0f0f'
            position="relative"
            maxWidth={{ base: '300px', sm: '500px', md: '700', lg: '990px', xl: '1200px' }}
            marginX={'auto'}
            overflow='hidden'
        >
            <motion.div style={{ x }}>
                {children}
            </motion.div>
            <Flex
                top={0}
                zIndex={1}
                width={{ base: '100px', sm: '200px', md: '350px', lg: '455px', xl: '600px' }}
                height="300px"
                position='absolute'
                background={`linear-gradient(to right,#0f0f0f, rgba(255,0,0,0))`}
            >
            </Flex>
            <Flex
                width={{ base: '100px', sm: '200px', md: '350px', lg: '455px', xl: '600px' }}
                height="300px"
                align="center"
                justify="space-between"
                position='absolute'
                top={0}
                right={0}
                zIndex={1}
                background={`linear-gradient(to left,#0f0f0f, rgba(255,0,0,0))`}
            >
            </Flex>
        </Box>
    );
}

const TestimonialsCard = () => {
    return (
        <ParallaxText baseVelocity={-9}>
            <Flex bg={'#0f0f0f'} paddingX='20px' gap='30px'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </Flex>
        </ParallaxText>
    );
};

export default TestimonialsCard;