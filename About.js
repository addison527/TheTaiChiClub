import image from '../images/MAN06589.JPG' //move to about section
// import imagee from '../images/MAN05714.JPG'
import React from 'react';
import '../../App.css';
//import Card from 'react-bootstrap/Card';
import { Box, VStack, Card } from "@chakra-ui/react";
import FullScreen from '../FullScreen';
import { CardBody, CardText } from 'react-bootstrap';

function About() {
  return (
    <>
     <FullScreen justifyContent="center" alignItems="center" backgroundColor="#ebeff3;">
        <Box marginTop = {'120px'}bg = '#95a2bc' height = {'auto'} width={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign ='center' borderRadius={'none'}>
            <img src = {image} alt = "img"style = {{maxWidth: '50%', display: 'block'}}/>
        </Box>
        <VStack style = {{fontFamily: 'Times New Roman'}}> 
            <Card>
                <CardBody >
                    <CardText>
                        Founder, Jie Gu
                    </CardText>
                </CardBody>
            </Card>
            <VStack spacing = {2} maxWidth={'900px'}>
                <p style={{fontSize : '1.25rem', fontStyle:'bold'}}>At the Tai Chi Club, our dedication to spreading joy and wellness through group practice is paramount. Free learning access to this ancient art form is offered biweekly with competition standards upheld in sessions. Since the club’s inception in Spring 2023, hundreds have participated the public sessions at different locations, Everyone is welcome to join and learn or join and help. Let’s join hands and champion our public Tai Chi initiative: </p>
                <h2>Embarking on the Tai Chi Journey, diligence we sow </h2>
                <h2>Embracing in Yin and Yang’s flow, wisdom gracefully grow </h2>
                <h2>Flourishing group connection, friendship ever glow </h2>
            </VStack>
        </VStack>
      </FullScreen>
    </>
  );
}

export default About;