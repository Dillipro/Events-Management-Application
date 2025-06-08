import React from 'react'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import NavbarHod from './utils/navbar';

const Overview = ({activePage, setActivePage}) => {

  const name = "senthil kumar";

  return (
    <Box
      sx={{
        display : "flex",
        height:"100vh",
        justifyContent : "center",
        position:"relative",
        zIndex:5,
      }}
    >


      <Box 
        sx={{
          height: "100px",
          backgroundImage: 'linear-gradient(to right, #6366f1, #4338ca)',
          color: '#fff',
          width:"60%",
          borderRadius:"8px",
          marginTop:"12px",
          display : "flex",
          flexDirection : "column",
          pt:4,
          pl:4,
          position:"relative",
          zIndex:1,
        }}
      >
        <Typography 
          sx={{
            fontFamily:"sans-serif",
            fontSize: 26,
            fontWeight:"bold"
          }}
        >
          {
            `Welcome back, DR.${name}`
          }
        </Typography>
        <Typography
          sx={{
              fontFamily:"sans-serif",
              fontWeight:"medium"
            }}
        >
          {
            `Here's an overview of the department events`
          }
        </Typography>
      </Box>

    </Box>
  )
}

export default Overview;