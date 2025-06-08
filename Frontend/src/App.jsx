import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import ParticipantDashboard from './pages/Participants/Components/dashboard';
import CoordinatorDashboard from './pages/coordinator/dashboard';
import HodDashboard from './pages/HOD/dashboard';
import Feedback from './pages/Feedback/feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/participant/dashboard" element={<ParticipantDashboard/>}></Route>
        <Route path="/coordinator/dashboard" element={<CoordinatorDashboard/>}></Route>
        <Route path="/hod/dashboard" element={<HodDashboard/>}></Route>
        <Route path="/participant/feedback" element={<Feedback/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
