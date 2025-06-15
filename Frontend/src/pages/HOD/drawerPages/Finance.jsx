import { useState } from "react";
import { eventState } from "../../../context/eventProvider";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import FinancialEventCard from "../financeEventCard";

const Finance = () => {
  const events = [
    {
      title: "Annual Tech Conference 2025",
      budget: 500000,
      income: 750000,
      expenses: 450000,
    },
    {
      title: "Marketing Campaign Q3",
      budget: 200000,
      income: 150000,
      expenses: 180000,
    },
    {
      title: "Team Offsite",
      budget: 100000,
      income: 0,
      expenses: 95000,
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "10px",
      }}
    >
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar
          sx={{ justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccountBalanceIcon color="primary" />
            <Box>
              <Typography variant="h6" component="div" fontWeight="bold">
                Financial Overview
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage budgets, expenses and revenue of events
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Tooltip title="Filter View">
              <IconButton color="primary">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              color="primary"
            >
              Export
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <FinancialEventCard
        event={{
          title: "Annual Conference",
          budget: 75000,
          income: 68000,
          expenses: 72000,
        }}
      />

      <FinancialEventCard
        event={{
          title: "Annual Conference",
          budget: 75000,
          income: 68000,
          expenses: 72000,
        }}
      />

      <Box>

      </Box>
      <FinancialEventCard
        event={{
          title: "Annual Conference",
          budget: 75000,
          income: 78000,
          expenses: 62000,
        }}
      />
    </Box>
  );
};

export default Finance;

/* 
<Container sx={{ py: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Financial Overview of Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item key={index}>
            <EventFinanceCard
              title={event.title}
              budget={event.budget}
              income={event.income}
              expenses={event.expenses}
            />
          </Grid>
        ))}
      </Grid>
    </Container>

*/
