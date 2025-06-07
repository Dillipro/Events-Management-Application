import { useState,createContext } from "react"
import NavbarHod from "./utils/navbar"
import Overview from "./overview"
import Proposals from "./proposals"
import ApprovedEvents from "./approvedEvents"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"


const HodDashboard = () => {

  const [activePage, setActivePage] = useState("overview");

  return (
    <Box>
      <NavbarHod activePage={activePage} setActivePage={setActivePage}></NavbarHod>
      <Box>
        {activePage === "overview" && <Overview/>}
        {activePage === "proposal" && <Proposals/>}
        {activePage === "approved" && <ApprovedEvents/>}
      </Box>
    </Box>
  )
}

export default HodDashboard;