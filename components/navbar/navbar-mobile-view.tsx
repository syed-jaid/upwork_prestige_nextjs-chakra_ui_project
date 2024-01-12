import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import NavbarEnd from './navbar-end';
import { mobileNavbarItems } from '@/Data/navbar-data';

const NavbarMobileView = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [animate, setAnimate] = useState(false);

    const handleButtonClick = () => {
        onToggle();
        setAnimate(!animate);
    };

    const boxRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (boxRef.current && !boxRef.current.contains(event.target as Node) && isOpen) {
            onToggle();
            setAnimate(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const iconStyle = {
        color: 'black',
        fontSize: '25px',
    };

    return (
        <Box display={{ base: 'block', md: 'none' }}>
            <Box
                background='white'
                padding='8px'
                borderRadius='xl'
                onClick={handleButtonClick}
            >
                {isOpen ? <IoClose style={iconStyle} /> : <RiMenuLine style={iconStyle} />}
            </Box>
            <Box
                ref={boxRef}
                position="fixed"
                bottom={0}
                left={0}
                width="100%"
                height="90%"
                background="black"
                color="white"
                paddingTop='40px'
                paddingLeft='20px'
                visibility={isOpen ? 'visible' : 'hidden'}
                opacity={animate ? 1 : 0}
                transition="opacity 0.3s ease-in-out, top 0.3s ease-in-out"
                onAnimationEnd={() => setAnimate(false)}
                onAnimationStart={() => setAnimate(true)}
                style={{
                    height: animate ? '90%' : '0%',
                }}
            >
                {mobileNavbarItems.map((item) => (
                    <Text
                        key={item}
                        color='gray.500'
                        fontWeight='semibold'
                        fontSize='2xl'
                        marginBottom='20px'
                        _hover={{ color: 'white' }}
                    >
                        {item}
                    </Text>
                ))}
                <NavbarEnd />
            </Box>
        </Box>
    );
};

export default NavbarMobileView;
