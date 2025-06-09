import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Drawer,
  ListItem,
  List,
  ListItemText,
  Box,
  CssBaseline
} from '@mui/material';
import PList from './List';
import PForm from './Form';
import FeedbackForm from './Feedback';
import MyEvents from './Myevents';
import MyCertificates from './Mycerts';
import Home from'../../Home/Home';

const drawerWidth = 240;

const ParticipantDashboard = () => {
  const [view, setView] = useState('list');
  const userName = 'Siva';
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => setView('list')}>
            <ListItemText primary=" Events List" />
          </ListItem>
          <ListItem button onClick={() => setView('form')}>
            <ListItemText primary=" Register an event " />
          </ListItem>
          <ListItem button onClick={() => setView('myevents')}>
            <ListItemText primary=" My Events " />
          </ListItem>
          <ListItem button onClick={() => setView('mycerts')}>
            <ListItemText primary=" My Certificates " />
          </ListItem>
          <ListItem button onClick={() => setView('feedback')}>
            <ListItemText primary=" Feedback" />
          </ListItem>
          <ListItem button onClick={() => setView('home')}>
            <ListItemText primary=" Home " />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">Participants Dashboard</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar>{firstLetter}</Avatar>
              <Button color="inherit">Logout</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Toolbar />

        <Typography variant="h4" gutterBottom>Dashboard</Typography>

      {view === 'list' && <PList />}
      {view === 'form' && <PForm />}
      {view === 'myevents' && <MyEvents />}
      {view === 'mycerts' && <MyCertificates />}
      {view === 'feedback' && <FeedbackForm />}
      {view === 'home' && <Home />}
      </Box>
    </Box>
  );
};

export default ParticipantDashboard;
