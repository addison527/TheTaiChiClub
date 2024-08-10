import {React} from 'react';
import '../App.css';
import { Button } from './Button';
import { Box, HStack, VStack } from "@chakra-ui/react";
import FullScreen from './FullScreen';

function HeroSection() {
  return (
    <FullScreen justifyContent="center" alignItems="center" backgroundColor="#b6c2dc">
        <VStack>
          <Box>
            <h1>The Tai Chi Club</h1>
            <h3>Baton Rouge, Louisiana</h3>
          </Box>
          <Button>
            About
          </Button>
        </VStack>
    </FullScreen>
  );
}

export default HeroSection;

{/* <div className='main-container'>
       <img src='/images/IMG_5794.JPG' /> 
      <h1>.</h1>
      <p>--</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > About
        </Button>
      </div>
    /div> */}