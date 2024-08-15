import React from 'react';
import FullScreen from '../FullScreen';
import { VStack, Box, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <FullScreen 
      footerHeight={80} 
      display="flex" 
      flexDirection="column" 
      alignItems={"center"} 
      justifyContent={"center"} 
      padding={{ base: "1rem 0", md: "0" }} // Add padding for mobile
    >
      <div 
        flex='1' 
        style={{ color: '#234f72' }} 
        alignItems={"center"} 
        justifyContent={"center"} 
        maxWidth={"1220px"} 
        padding={{ base: "1rem", md: "0" }} // Add padding for mobile
      >
        <Box 
          style={{ margin: "1rem auto 0 auto" }} 
          height={{ base: 'auto', md: '400px' }} // Adjust height for mobile
          bg='#CED5DF' 
          width={'80vw'} 
          display={'flex'} 
          justifyContent={'center'} 
          alignItems={'center'} 
          textAlign='center' 
          borderRadius={'8px'} 
          padding={{ base: "1rem", md: "0" }} // Add padding inside the box for mobile
          marginTop={{ base: "2rem", md: "1rem" }} // Ensure space between box and navbar
        >
          <VStack>
            <Text 
              style={{ fontSize: '1.75rem', color: '#234f72', textDecoration: 'none', fontWeight: 'bold' }}
              textAlign={{ base: "center", md: "left" }} // Center text on mobile
            >
              Get to Know Us!
            </Text>
            <Text>
              <p>Reach out to us at</p>
              <a 
                href='mailto:Jie@manfamily.net' 
                style={{ fontSize: '2rem', color: '#234f72', textDecoration: 'none', fontWeight: 'bold', textShadow: '1px 1px 1px #fff' }} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Jie@manfamily.net
              </a>
            </Text>
          </VStack>
        </Box>
        <Box 
          style={{ margin: "1rem auto 0 auto" }} 
          height={{ base: 'auto', md: '300px' }} // Adjust height for mobile
          bg='#ebeff3' 
          width={'80vw'} 
          display={'flex'} 
          justifyContent={'center'} 
          alignItems={'center'} 
          textAlign='center' 
          borderRadius={'8px'} 
          padding={{ base: "1rem", md: "0" }} // Add padding inside the box for mobile
          marginTop={{ base: "2rem", md: "1rem" }} // Ensure space between box and navbar
        >
          <VStack spacing={0}>
            <Text marginBottom={0}>
              <h2>Want your own website?</h2>
            </Text>
            <Text marginBottom={"1.75rem"}>
              <p>Contact Addison Man for React services at:</p>
              <a 
                href='mailto:abm527@lehigh.edu' 
                style={{ fontSize: '1.25rem', color: '#234f72', textDecoration: 'none', fontWeight: 'bold' }} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                abm527@lehigh.edu
              </a>
              <br></br>
              <br></br>
              <p>Contact Vicky Villeta for web design at:</p>
              <a 
                href='mailto:viv226@lehigh.edu' 
                style={{ fontSize: '1.25rem', color: '#234f72', textDecoration: 'none', fontWeight: 'bold' }} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                viv226@lehigh.edu
              </a>
            </Text>
          </VStack>
        </Box>
      </div>
    </FullScreen>
  );
};

export default Contact;

