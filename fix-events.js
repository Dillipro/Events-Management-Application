import axios from 'axios';

const API_BASE = 'http://localhost:5050/api';

// Function to get a coordinator user ID to use as default createdBy
async function fixEventCreatedBy() {
  try {
    console.log('Fixing events createdBy field...');
    
    // First, login as a coordinator to get a valid user ID
    const loginResponse = await axios.post(`${API_BASE}/auth/login`, {
      email: 'arjun.reddy@annauniv.edu',
      password: 'password123'
    });
    
    const coordinatorId = loginResponse.data._id;
    console.log('Using coordinator ID:', coordinatorId);
    
    // Now we need to update events directly in the database
    // Since we don't have a direct update endpoint, let's check the current events first
    const eventsResponse = await axios.get(`${API_BASE}/hod/allEvents`);
    const events = eventsResponse.data;
    
    console.log(`Found ${events.length} events`);
    
    // Log which events don't have createdBy
    events.forEach(event => {
      if (!event.createdBy) {
        console.log(`Event "${event.title}" is missing createdBy field`);
      } else {
        console.log(`Event "${event.title}" has createdBy: ${event.createdBy.name || event.createdBy}`);
      }
    });
    
  } catch (error) {
    console.error('Error:', error.response?.data?.message || error.message);
  }
}

// Run the function
fixEventCreatedBy();
