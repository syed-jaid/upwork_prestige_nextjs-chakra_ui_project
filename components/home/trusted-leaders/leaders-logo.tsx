'use client'
import { useRef } from "react";
import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SiFramer } from "react-icons/si";

interface ParallaxProps {
    children: any;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(30);

    const x = useTransform(baseX, (v) => `${wrap(0, -500, v)}px`)

    const directionFactor = useRef<number>(2);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <Box
            h='100px'
            background='#0f0f0f'
            position="relative"
            maxWidth={{ base: '300px', sm: '400px', md: '800px' }}
            marginX='auto'
            overflow='hidden'
        >
            <motion.div style={{ x }}>
                {children}
            </motion.div>
            <Box
                top={0}
                zIndex={1}
                width={{ base: '300px', sm: '400px', md: '800px' }}
                height="100px"
                position='absolute'
                background={`linear-gradient(to right,#0f0f0f, rgba(255,0,0,0))`}
            >
            </Box>
            <Box
                top={0}
                zIndex={1}
                width={{ base: '300px', sm: '400px', md: '800px' }}
                height="100px"
                position='absolute'
                background={`linear-gradient(to left,#0f0f0f, rgba(255,0,0,0))`}
            >
            </Box>
        </Box>
    );
}

export default function LeadersLogo() {
    return (
        <ParallaxText baseVelocity={-9}>
            <Flex
                background='global_bg'
                gap='50px'
                paddingTop='35px'
                paddingX='20px'
            >
                {Array(30).fill(null).map(() =>
                    <Flex
                        gap='10px'
                        alignItems='center'
                    >
                        <SiFramer style={{ color: 'white', fontSize: '30px' }} />
                        <Text
                            color='white'
                            textStyle='xl/bold'
                        >
                            Framer
                        </Text>
                    </Flex>
                )}
            </Flex>
        </ParallaxText>
    );
}
