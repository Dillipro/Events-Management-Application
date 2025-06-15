import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Divider, 
  Chip,
  Avatar,
  useTheme
} from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import { ArrowUpward, ArrowDownward, AttachMoney } from '@mui/icons-material';

const FinancialEventCard = ({ event }) => {
  const theme = useTheme();
  
  // Data for the pie chart
  const pieData = [
    { name: 'Income', value: event.income },
    { name: 'Expenses', value: event.expenses }
  ];
  
  const COLORS = [theme.palette.success.main, theme.palette.error.main];
  
  const profit = event.income - event.expenses;
  const profitPercentage = (profit / event.budget) * 100;

  return (
    <Card 
      sx={{ 
        minWidth: 300, 
        maxWidth: 350, 
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6
        }
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="div" fontWeight="bold">
            {event.title}
          </Typography>
          <Chip 
            avatar={<Avatar><AttachMoney fontSize="small" /></Avatar>}
            label={`Budget: $${event.budget.toLocaleString()}`}
            color="primary"
            size="small"
          />
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">Income</Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <ArrowUpward color="success" fontSize="small" />
              <Typography variant="h6" color="success.main">
                ${event.income.toLocaleString()}
              </Typography>
            </Box>
          </Box>
          
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">Expenses</Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <ArrowDownward color="error" fontSize="small" />
              <Typography variant="h6" color="error.main">
                ${event.expenses.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Box display="flex" justifyContent="center" my={2}>
          <PieChart width={120} height={120}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </Box>
        
        <Box 
          bgcolor={profit >= 0 ? 'success.light' : 'error.light'} 
          p={1} 
          borderRadius={1} 
          textAlign="center"
          mb={2}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {profit >= 0 ? 'Profit' : 'Loss'}: ${Math.abs(profit).toLocaleString()}
          </Typography>
          <Typography variant="caption">
            ({profitPercentage.toFixed(1)}% of budget)
          </Typography>
        </Box>
        
        <Button 
          fullWidth 
          variant="contained" 
          color="primary"
          sx={{ 
            borderRadius: 1,
            py: 1,
            textTransform: 'none',
            fontWeight: 'bold'
          }}
        >
          View Full Financial Details
        </Button>
      </CardContent>
    </Card>
  );
};

// Example usage:
// <FinancialEventCard event={{
//   title: "Q3 Marketing Campaign",
//   budget: 50000,
//   income: 42000,
//   expenses: 38000
// }} />

export default FinancialEventCard;