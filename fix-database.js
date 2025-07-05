import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './Backend/.env' });

// Import models
import Event from './Backend/models/eventModel.js';
import User from './Backend/models/userModel.js';

async function fixEventCreatedBy() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Find a coordinator to use as default createdBy
    const coordinator = await User.findOne({ role: 'coordinator' });
    if (!coordinator) {
      console.log('No coordinator found in database');
      return;
    }
    
    console.log(`Using coordinator: ${coordinator.name} (${coordinator._id})`);

    // Find all events without createdBy
    const eventsWithoutCreatedBy = await Event.find({ 
      $or: [
        { createdBy: { $exists: false } },
        { createdBy: null }
      ]
    });

    console.log(`Found ${eventsWithoutCreatedBy.length} events without createdBy`);

    // Update all events without createdBy
    const updateResult = await Event.updateMany(
      { 
        $or: [
          { createdBy: { $exists: false } },
          { createdBy: null }
        ]
      },
      { 
        $set: { createdBy: coordinator._id }
      }
    );

    console.log(`Updated ${updateResult.modifiedCount} events`);

    // Verify the fix
    const allEvents = await Event.find().populate('createdBy', 'name email');
    console.log('\nAll events now:');
    allEvents.forEach(event => {
      console.log(`- "${event.title}" created by: ${event.createdBy?.name || 'Unknown'}`);
    });

    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
    console.log('✅ Fix completed successfully!');

  } catch (error) {
    console.error('Error:', error.message);
    await mongoose.connection.close();
  }
}

fixEventCreatedBy();
