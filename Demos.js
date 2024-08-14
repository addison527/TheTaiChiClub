import React from 'react';
import { Box } from "@chakra-ui/react";

function Demonstration({ videoSrc1, videoSrc2, name1, description1, name2, description2 }) {
  return (
    <Box
      bg="#f0f4f8"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding-top="20px"
      minHeight="100vh"
      paddingTop= "100px"
    >
      <h1 style={{ textAlign: 'center', width: '100%', paddingLeft: '40px' }}>Demonstrations</h1>

      {/* Grid Container for Videos */}
      <Box
        width="95%"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)" // Creates three equal columns
        gap="20px" // Adds space between columns
        justifyContent="center"
        alignItems="center"
        paddingBottom= "50px"
        paddingTop= "15px"
       
      >
        {/* First Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Second Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>
        
        {/* Third Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Fourth Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Fifth Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Sixth Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Seventh Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Eighth Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* Ninth Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 10th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 11th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>
        
        {/* 12th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 13th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 14th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 15th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 16th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 17th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>

        {/* 18th Video Box */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
          <video width="450px" height="300px" controls >
            <source src={videoSrc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box className="demo_vid_info" textAlign="center" mt="5px">
            <h2>Title</h2>
            <p>Description</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Demonstration;
