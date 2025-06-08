import React,{useState}from 'react'
import {AppBar, ToolBar, Typography, Button, Avatar, Drawer, ListItem, List, ListItemText, Box} from '@mui/material';
import List from './List';
import Form from './Form';

const ParticipantDashboard = () => {
  return(
    <div>
        <Box sx={{display:'flex'}}>
          <Drawer variant="permanent" anchor="left">
                <List>
                    <ListItem button onClick={()=>setView('list')}>
                        <ListItemText primary=" Participants List "></ListItemText>
                    </ListItem>
                    <ListItem button onClick={()=>setView('form')}>
                        <ListItemText primary=" Add new Participant "></ListItemText>
                    </ListItem>
                </List>
          </Drawer>

          <Box sx={{flexGrow:1}}>
            <AppBar position="static" sx={{ml:'240px'}}>
                <ToolBar sx={{justifyContent:'space-between'}}>
                  <Topography variant="h6"> Participants Dashboard </Topography>
                  <Box sx={{display:'flex', alignItems:'center', gap:2 }}>
                      <Avatar>{firstLetter}</Avatar>
                      <Button color="inherit"> Logout </Button>
                  </Box>
                </ToolBar>
            </AppBar>

            <Box>
              {view==='list'?<List/> :<Form/>}
            </Box>
          </Box>
        </Box>

    </div>
  )
}

export default ParticipantDashboard;