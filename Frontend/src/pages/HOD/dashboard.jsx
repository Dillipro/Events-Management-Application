import { useState, useEffect,createContext } from "react";
import NavbarHod from "./utils/navbar";
import Overview from "./overview";
import Proposals from "./proposals";
import ApprovedEvents from "./approvedEvents";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const HodDashboard = () => {
  
  const [activePage, setActivePage] = useState("overview");
  const [events, setEvents] = useState([]);

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
        console.log(data);
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
      </Box>
    </Box>
  );
};

export default HodDashboard;
