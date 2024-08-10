import React from 'react';
import FullScreen from '../FullScreen';
import {VStack, HStack, Box, Text} from "@chakra-ui/react";

const Contact = () => {
  return (
    <FullScreen display = "flex" flexDirection = "column">
      <HStack flex = '1'style ={{color: '#234f72'}} spacing = {'1rem'}  marginTop={'120px'} marginBottom = {'60px'}>
        <Box height={'400px'} bg = '#95a2bc' width={'400px'} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign ='center' borderRadius={'8px'}>
          <VStack>
            <Text><h1>Get to Know Us</h1></Text>
            <Text>
              <p >Reach out to us at</p>
              <a href='mailto:Jie@manfamily.net' style ={{fontSize : '1.75rem',color: '#234f72', textDecoration: 'none', fontWeight: 'bold',textShadow: '1px 1px 1px #CED5DF'}} target = "_blank" rel = "noopener noreferrer">Jie@manfamily.net</a>

            </Text>
          </VStack>
        </Box>
        <Box height={'400px'} bg = '#ebeff3' width={'400px'} display={'flex'} justifyContent={'center'} alignItems = {'center'} textAlign ='center' borderRadius ={'8px'}>
          <VStack spacing = {0}>
            <Text><h2>Want your own website?</h2></Text>
            <Text><p>Reach out to Addison Man at:</p>
              <a href='mailto:abm527@lehigh.edu' style ={{fontSize : '1.25rem',color: '#234f72', textDecoration: 'none', fontWeight: 'bold'}} target = "_blank" rel = "noopener noreferrer">abm527@lehigh.edu</a>
              <br></br>
              <br></br>
              <p>Reach out toVicky Villeta at:</p>
              <a href='mailto:viv226@lehigh.edu' style ={{fontSize : '1.25rem',color: '#234f72', textDecoration: 'none', fontWeight: 'bold'}} target = "_blank" rel = "noopener noreferrer">viv226@lehigh.edu</a>
            </Text>
          </VStack>
        </Box>
      </HStack>
    </FullScreen>
  );
};

export default Contact;
