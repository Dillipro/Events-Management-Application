import { useState, useEffect,createContext } from "react";
import NavbarHod from "./utils/navbar";
import Overview from "./drawerPages/overview";
import Proposals from "./drawerPages/proposals";
import ApprovedEvents from "./drawerPages/approvedEvents";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { eventState } from "../../context/eventProvider";
import PendingProposals from "./drawerPages/pendingProposals";
import Finance from "./drawerPages/Finance";

const HodDashboard = () => {
  
  const [activePage, setActivePage] = useState("overview");
  const {user, events, setEvents} = eventState();

  function fetchAllEvents(){
    
    const token = localStorage.getItem("token");

    try{

      fetch("http://localhost:5050/hod/allEvents/",{
        method: "GET",  
      /*  headers:{
          "authorization": `Bearer ${token}`,
          "Content-Type" : "application/json",
        }, */
      })
      .then(res => res.json())
      .then(data =>{
        setEvents(data);
      })

    }catch(error){
      console.log(error.message);
    }
  }

  useEffect(()=>{

    fetchAllEvents();

  }, [])

  return (
    <Box>
      <NavbarHod
        activePage={activePage}
        setActivePage={setActivePage}
      ></NavbarHod>
      <Box>
        {activePage === "overview" && (
          <Overview
            activePage={activePage}
            setActivePage={setActivePage}
          ></Overview>
        )}
        {activePage === "proposal" && <Proposals />}
        {activePage === "approved" && <ApprovedEvents />}
        {activePage === "pendingProposal" && <PendingProposals/>}
        {activePage === "finance" && <Finance/>}
      </Box>
    </Box>
  );
};

export default HodDashboard;
