import {React} from 'react';
import '../App.css';
import { Button } from './Button';
import { Box, HStack, VStack } from "@chakra-ui/react";
import FullScreen from './FullScreen';

function HeroSection() {
  return (
    <FullScreen justifyContent="center" display= "flex" alignContent = "center" alignItems="center" backgroundColor="#CED5DF">
        <VStack direction = "column" align = "center" justifyContent="center" margin = "0" padding = "0">
          <Box >
            <h1>The Tai Chi Club</h1> 
            <h3></h3>
          </Box>
          <Button>
            About
          </Button>
        </VStack>
    </FullScreen>
  );
}

export default HeroSection;
