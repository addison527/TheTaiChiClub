import React from 'react';
import { Box, VStack, Card } from "@chakra-ui/react";
import { CardBody, CardText } from 'react-bootstrap';

function FollowAlong({ videoSrc, name, description }) {
  return (
    <Box
      bg="#f0f4f8"
      width="100vw"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)" // Creates two equal columns
      gap="20px" // Adds space between columns
      padding="20px" // Adds padding around the grid
      minHeight="100vh" // Ensures the container takes at least full viewport height
    >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <video width="100%" maxWidth="500px" height="auto" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="demo_vid_info" style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Box>
      <Box>
        <VStack spacing={4} align="stretch">
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
    </Box>
  );
}

export default FollowAlong;
