import mongoose from 'mongoose';

const trainingProgrammeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  venue: { type: String, required: true },
  mode: { type: String, required: true, enum: ['Online', 'Offline', 'Hybrid'] },
  duration: { type: String, required: true },
  type: { type: String, required: true },
  objectives: { type: String, required: true },
  outcomes: { type: String, required: true },
  budget: { type: Number, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
  
  coordinators: [{
    name: String,
    designation: String,
    department: String
  }],
  targetAudience: [String],
  resourcePersons: [String],
  registrationFees: [{
    category: String,
    amount: Number,
    gstPercentage: Number
  }],
  approvers: [{
    name: String,
    role: String,
    status: { type: String, default: 'Pending' }
  }],
  paymentDetails: {
    mode: [String],
    payTo: String
  },
  budgetBreakdown: {
    income: {
      expectedParticipants: Number,
      perParticipantAmount: Number,
      total: Number
    },
    expenses: [{
      category: String,
      amount: Number
    }],
    totalExpenditure: Number,
    universityOverhead: Number,
    gstAmount: Number
  },
  
  brochure: {
    data: Buffer,
    contentType: String,
    fileName: String
  }
}, { timestamps: true });

const TrainingProgramme = mongoose.model('TrainingProgramme', trainingProgrammeSchema);
export default TrainingProgramme;
