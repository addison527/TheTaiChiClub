import React, {useState, useEffect} from 'react';
import FullScreen from '../FullScreen';
import {VStack, Box, Text} from "@chakra-ui/react";

const Blogs = () => {
  const [isntMobile, setIsntMobile] = useState(window.innerWidth >= 1300);
  useEffect(() => {
    const handleResize = () => {
      setIsntMobile(window.innerWidth >= 1300);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FullScreen footerHeight={80} display = "flex" flexDirection = "column" alignItems={"center"}justifyContent = {"center"}>
      <div flex = '1' style ={{color: '#234f72'}} alignItems={"center"} justifyContent = {"center"} maxWidth ={"1220px"}>
        <Box style ={{margin:"1rem auto 0 auto"}}height={'400px'} bg = '#CED5DF' width={isntMobile ? '1220px' : '350px'} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign ='center' borderRadius={'8px'}>
          <VStack >
            <Text>Blogs Page</Text>
          </VStack>
        </Box>
        <Box style ={{margin:"1rem auto 0 auto"}}height={'300px'} bg = '#ebeff3'width={isntMobile ? '1220px' : '350px'} display={'flex'} justifyContent={'center'} alignItems = {'center'} textAlign ='center' borderRadius ={'8px'}>
          <VStack spacing = {0}>
            
          </VStack>
        </Box>
      </div>
    </FullScreen>
  );
};

export default Blogs;
