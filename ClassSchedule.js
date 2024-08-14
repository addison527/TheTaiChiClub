import React, {useState, useEffect} from 'react';
import FullScreen from '../FullScreen';
import {Box, Text} from "@chakra-ui/react";

const Contact = () => {
  const [isntMobile, setIsntMobile] = useState(window.innerWidth >= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsntMobile(window.innerWidth >= 1300);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iframeStyle = {
    border: 'solid 1px #777',
    width: '100%',
    height: isntMobile ? '80vh' : '60vh',
    frameBorder: '0',
    scrolling: 'no'
  };

  return (
    <FullScreen display = "flex" flexDirection = "column" padding="3rem 0">
        <Text alignItems={"center"}>
            <h1 style = {{marginBottom:'0px', padding: '1rem'}}>Class Schedule</h1>
            <p>Click on the Google Calendar Icon at the bottom right of the calendar to save to your personal calendar!</p>
        </Text>
        <Box justifyContent="center" margin = "0 auto" maxWidth = "1220px" width = {isntMobile? "1220px":"100%"} display="flex" padding={isntMobile?"2rem": "1rem"} boxSizing = "border-box">
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ced5df&src=NmE2ZWU0ODc0MjFjMzRlMGUyYmE2MzJlYmFhMjRiZDE3MWQzNjkzYzcyMTBiMDY0MTk2ZjVkMjJjZWE3YTkwMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
            //style={{border:"solid 1px #777", width:"1220px", height:"915px", frameborder:"0", scrolling:"no"}}></iframe>
            style={iframeStyle}></iframe>
        </Box>
    </FullScreen>
  );
};

export default Contact;
