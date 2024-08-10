import React from "react";
import { Link } from 'react-router-dom'
import {Box, Flex, VStack, HStack} from "@chakra-ui/react";
import seal from './images/seal.png';
import emailicon from './images/mail-open.svg';

const Footer = () => {
  return (
    <Box backgroundColor="#CED5DF" style = {{height: '80px'}} marginTop = "auto">
      <footer style ={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%'}}>
        <Flex direction = "row" margin="0 auto" px={12} color="white" justifyContent="center" alignItems="center" maxWidth="1024px" height='100%' padding = '4' wrap = 'wrap'>
          <HStack spacing = {500} style = {{textShadow: '1px 1px 1px #CED5DF', color: '#234f72', fontFamily: 'Times New Roman', margin : '0'}}>
            <HStack>
              <Link to="/"className='navbar-logo'>
                <img src={seal} alt="logo" style = {{width: '25px', height: 'auto'}}></img>
              </Link>
              <VStack spacing = {0} align = "center">
                <p>The TaiChi Club © 2024</p>
              </VStack>
            </HStack>
              <HStack spacing = {8}>
              <img src={emailicon} alt=""style = {{width: '18px', alignItems: 'center'}}/> 
                <p>  Jie@manfamily.net</p>
              </HStack>
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
