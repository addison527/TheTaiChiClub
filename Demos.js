import React from 'react';
import { Box, VStack, Card } from "@chakra-ui/react";
import { CardBody, CardText } from 'react-bootstrap';

function Demonstration({ videoSrc, name, description }) {
  return (
    <Box
      bg="#f0f4f8"
      width="100vw"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)" // Creates two equal columns
      gap="20px" // Adds space between columns
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="20px" // Adds padding around the grid
      minHeight="100vh" // Ensures the container takes at least full viewport height
    >
      <VStack spacing={4} maxWidth="900px">
        <Box width="100%" display="flex" justifyContent="center">
          <video width="500px" height="400px" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="demo_vid_info">
            <h2>Title</h2>
            <p>description</p>
          </div>
        </Box>
        <Card>
          <CardBody>
            <CardText>
              {name}
            </CardText>
          </CardBody>
        </Card>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          {description}
        </p>
      </VStack>
    </Box>
  );
}

export default Demonstration;
