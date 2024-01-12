'use client'
import { Avatar, AvatarGroup, Box, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from 'react-icons/io'
import React, { useState } from "react";

const GetStartSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName: any) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Box
      style={{
        backgroundImage: `url('../Images/bg-img.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height={{ base: '85vh', sm: "62vh" }}
      marginTop='83px'
    >
      <Box maxWidth='800px' marginX='auto' marginTop={{ base: '150px', md: '200px' }} paddingX='20px'>
        <Flex
          gap='10px'
          alignItems='center'
          background='#112220'
          maxWidth='225px'
          marginX='auto'
          marginBottom='25px'
          padding='3px'
          borderRadius='2xl'
          border='0.5px solid #319795'
        >
          <Text display='inline' fontSize='sm' color='white' background='teal.300' padding='1px 7px' borderRadius='xl'>
            New
          </Text>
          <Text display='inline' fontSize='sm' color='teal.400' fontWeight='medium'>
            Introducing AI Editor
          </Text>
          <FaArrowRight style={{ color: '#38B2AC', fontSize: '15px' }} />
        </Flex>

        <Text color='white' fontSize={{ base: '3xl', sm: '40px', md: '72px' }} fontWeight='semibold' textAlign='center' lineHeight='none'>
          The best way to build your startup.
        </Text>

        <Text color='gray.500' fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} fontWeight='medium' textAlign='center' marginTop='20px'>
          Our app eliminates the need for complex spreadsheets, endless email threads, empowering businesses to achieve greater efficiency.
        </Text>

        <Flex
          fontSize='md'
          marginTop={{ base: '50', sm: '70px' }}
          fontWeight='medium'
          justifyContent='center'
          alignItems='center'
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          <Flex
            color='black'
            background='white'
            gap='6px'
            padding='16px 30px'
            borderRadius='40px'
            alignItems='center'
            justifyContent='center'
            _hover={{ background: 'gray.100' }}
          >
            Get started
            <IoIosArrowForward />
          </Flex>
          <Flex
            color='white'
            gap='6px'
            paddingX='32px'
            paddingY={{ base: '20px', sm: '0' }}
            borderRadius='40px'
            alignItems='center'
            justifyContent='center'
            onMouseEnter={() => handleMouseEnter(true)}
            onMouseLeave={handleMouseLeave}
            _hover={{ color: 'gray.300' }}
          >
            Documentation
            <IoIosArrowForward style={{ color: hoveredItem ? '#CBD5E0' : 'white' }} />
          </Flex>
        </Flex>
        <Box>
          <AvatarGroup size='sm' max={4} marginX='auto' width='100px' marginTop={{ base: '50', sm: '70px' }}>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          </AvatarGroup>
          <Text color='gray.500' fontSize='sm' textAlign='center' marginTop='15px'>
            <span style={{ fontWeight: '600' }}>1,200+</span> reviews (<span style={{ fontWeight: '600' }}>4.9</span> of <span style={{ fontWeight: '600' }}>5</span>)
          </Text>
        </Box>
      </Box>
    </Box >
  );
};

export default GetStartSection;
