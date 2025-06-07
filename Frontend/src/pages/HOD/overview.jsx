import React from 'react'
import Box from "@mui/material/Box";

const Overview = () => {
  return (
    <Box
      sx={{
        display : "flex",
        bgcolor:"rgb(239, 241, 242)",
        height:"300px",
        justifyContent : "center",
        
      }}
    >
      <Box sx={{
        bgcolor:"white",
        width: "50px",
        height : "50px"
        }}>hello</Box>

    </Box>
  )
}

export default Overview;