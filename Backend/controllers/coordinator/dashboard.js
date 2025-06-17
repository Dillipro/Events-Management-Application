import TrainingProgramme from '../../models/TrainingProgramme.js';
import PDFDocument from 'pdfkit';

// Create a new training programme
export const createProgramme = async (req, res) => {
  console.log("📥 Received POST request");
  try {
    console.log(req.body);
    // Validate required fields
    if (!req.body.title || !req.body.startDate || !req.body.endDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const programme = new TrainingProgramme({
      title: req.body.title,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
      venue: req.body.venue,
      mode: req.body.mode || 'Online',
      duration: req.body.duration,
      type: req.body.type,
      objectives: req.body.objectives,
      outcomes: req.body.outcomes,
      budget: Number(req.body.budget) || 0,
      coordinators: JSON.parse(req.body.coordinators||'[]'),
      targetAudience: JSON.parse(req.body.targetAudience||'[]'),
      resourcePersons: JSON.parse(req.body.resourcePersons||'[]'),
      registrationFees: JSON.parse(req.body.registrationFees||'[]'),
      approvers: JSON.parse(req.body.approvers||'[]'),
      paymentDetails: JSON.parse(req.body.paymentDetails||'{}'),
      budgetBreakdown: JSON.parse(req.body.budgetBreakdown||'{}'),
      createdBy: req.user?._id || 'test-user'

    });

   if (req.file) {
  programme.brochure = {
    fileName: req.file.filename,
    filePath: req.file.path,
    contentType: req.file.mimetype
  };
}

    const savedProgramme = await programme.save();
    console.log("✅ Saved Programme:", savedProgramme);
    res.status(201).json(savedProgramme);
    
  } catch (error) {
    console.error('Error creating programme:', error);
    res.status(500).json({ 
      message: 'Error creating programme',
      error: error.message 
    });
  }
};

// Get all programmes
export const getProgrammes = async (req, res) => {
  try {
    const programmes = await TrainingProgramme.find({})
      .select('-brochure')
      .sort({ createdAt: -1 });
    res.json(programmes);
  } catch (error) {
    console.error('Error fetching programmes:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get single programme by ID
export const getProgrammeById = async (req, res) => {
  try {
    const programme = await TrainingProgramme.findById(req.params.id);

    if (!programme) {
      return res.status(404).json({ message: 'Programme not found' });
    }

    res.json(programme);
  } catch (error) {
    console.error('Error fetching programme:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update programme
export const updateProgramme = async (req, res) => {
  try {
    const programme = await TrainingProgramme.findById(req.params.id);

    if (!programme) {
      return res.status(404).json({ message: 'Programme not found' });
    }

    const {
      title, startDate, endDate, venue, mode, duration, type,
      objectives, outcomes, budget, coordinators, targetAudience,
      resourcePersons, registrationFees, approvers, paymentDetails,
      budgetBreakdown
    } = req.body;

    programme.title = title || programme.title;
    programme.startDate = startDate ? new Date(startDate) : programme.startDate;
    programme.endDate = endDate ? new Date(endDate) : programme.endDate;
    programme.venue = venue || programme.venue;
    programme.mode = mode || programme.mode;
    programme.duration = duration || programme.duration;
    programme.type = type || programme.type;
    programme.objectives = objectives || programme.objectives;
    programme.outcomes = outcomes || programme.outcomes;
    programme.budget = budget ? Number(budget) : programme.budget;
    programme.coordinators = coordinators ? JSON.parse(coordinators) : programme.coordinators;
    programme.targetAudience = targetAudience ? JSON.parse(targetAudience) : programme.targetAudience;
    programme.resourcePersons = resourcePersons ? JSON.parse(resourcePersons) : programme.resourcePersons;
    programme.registrationFees = registrationFees ? JSON.parse(registrationFees) : programme.registrationFees;
    programme.approvers = approvers ? JSON.parse(approvers) : programme.approvers;
    programme.paymentDetails = paymentDetails ? JSON.parse(paymentDetails) : programme.paymentDetails;
    programme.budgetBreakdown = budgetBreakdown ? JSON.parse(budgetBreakdown) : programme.budgetBreakdown;

    if (req.file) {
      programme.brochure = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        fileName: req.file.originalname
      };
    }

    const updatedProgramme = await programme.save();
    res.json(updatedProgramme);
  } catch (error) {
    console.error('Error updating programme:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete programme
export const deleteProgramme = async (req, res) => {
  try {
    const programme = await TrainingProgramme.findById(req.params.id);

    if (!programme) {
      return res.status(404).json({ message: 'Programme not found' });
    }

    await programme.deleteOne();
    res.json({ message: 'Programme removed' });
  } catch (error) {
    console.error('Error deleting programme:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
// controllers/coordinator/dashboard.js

// ... (your existing imports and other controller functions)

export const generateProgrammePDF =async (req, res) => {
  const programme = await TrainingProgramme.findById(req.params.id);



  if (!programme) {
    res.status(404);
    throw new Error('Programme not found');
  }

  // Create a PDF document
  const doc = new PDFDocument();
  const filename = `Programme_${programme._id}.pdf`;
  
  // Set response headers
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  
  // Pipe the PDF to the response
  doc.pipe(res);

  // Add content to the PDF in the required format
  doc.fontSize(12).text(`Centre : DEPARTMENT OF CSE & CENTRE FOR CYBER SECURITY`, { align: 'left' });
  doc.moveDown();
  doc.text(`Letter No.: Lr. No. 1/TrainingProgramme/CSE&CCS/${new Date().getFullYear()}`, { align: 'left' });
  doc.moveDown();
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, { align: 'left' });
  doc.moveDown(2);
  
  doc.fontSize(14).text('NOTE SUBMITTED TO THE CONVENOR COMMITTEE:', { align: 'center', underline: true });
  doc.moveDown();
  
  doc.fontSize(12).text(`Sub: DCSE & CCS – Request for Permission and Approval to conduct a ${programme.duration} ${programme.mode} Training Programme on "${programme.title}" - reg.,`);
  doc.moveDown();
  doc.text('******');
  doc.moveDown();
  
  // Add the main content
  doc.text(`The Department of Computer Science and Engineering (DCSE) and the Centre for Cyber Security (CCS) seek kind permission and approval to organize a ${programme.duration} ${programme.mode} Training Programme on ${programme.type}, titled "${programme.title}" in the month of ${new Date(programme.startDate).toLocaleString('default', { month: 'long' })}, ${new Date(programme.startDate).getFullYear()} [Tentative Dates: ${new Date(programme.startDate).toLocaleDateString('en-IN')} and ${new Date(programme.endDate).toLocaleDateString('en-IN')}] with ${programme.coordinators.map(c => `Dr. ${c.name}`).join(' and ')} as coordinators.`);
  doc.moveDown();
  
  doc.text(programme.objectives);
  doc.moveDown();
  
  // Add the training programme details table
  doc.text('The Training Programme Details are as follows:', { underline: true });
  doc.moveDown(0.5);
  
  const programmeDetails = [
    ['Mode', `: ${programme.mode} (via MS Teams)`],
    ['Duration', `: ${programme.duration} (4 sessions per day)`],
    ['Target Audience', `: ${programme.targetAudience.join(', ')}`],
    ['Resource Persons', `: ${programme.resourcePersons.join(', ')}`]
  ];
  
  programmeDetails.forEach(([label, value]) => {
    doc.text(`${label.padEnd(20)} ${value}`, { indent: 20 });
  });
  
  doc.moveDown();
  
  // Add the registration fee table
  doc.text('It is requested that permission may be granted to conduct the training programme and to host the details in the Anna University website. It is also requested that permission may be granted to collect registration fee from the participants as detailed in the table below. The tentative budget for the training programme is given in the annexure attached.');
  doc.moveDown();
  
  doc.text('Sl. No.    Category                            Registration Fee', { underline: true });
  programme.registrationFees.forEach((fee, index) => {
    doc.text(`${index + 1}.         ${fee.category.padEnd(30)} Rs. ${fee.amount}/- + ${fee.gstPercentage}% GST`);
  });
  
  doc.moveDown(3);
  doc.text('Hence, it is kindly requested that permission may be given to conduct the training programme and the registration fees may be collected in the form of Demand Draft / Online payment favouring "The Director, CSRC, Anna University, Chennai".');
  
  doc.moveDown(5);
  
  // Add the signature section
  doc.text('Co-ordinator(s)');
  programme.coordinators.forEach(coord => {
    doc.text(`(${coord.name})`);
    doc.text(`${coord.designation}, ${coord.department}`);
  });
  
  // Add the approval section
  doc.moveDown(2);
  doc.text('APPROVED / NOT APPROVED', { align: 'center' });
  doc.moveDown(3);
  doc.text('CHAIRMAN', { align: 'center' });
  doc.text('Convenor Committee, Anna University', { align: 'center' });
  
  // Add the budget section
  doc.addPage();
  doc.text('TENTATIVE BUDGET', { align: 'center', underline: true });
  doc.moveDown();
  
  // Budget table
  doc.text('Income', { underline: true });
  doc.text(`Registration fee = ${programme.budgetBreakdown.income.expectedParticipants} × Rs. ${programme.budgetBreakdown.income.perParticipantAmount} = Rs. ${programme.budgetBreakdown.income.total}/-`);
  
  doc.moveDown();
  doc.text('Expenditure', { underline: true });
  programme.budgetBreakdown.expenses.forEach(expense => {
    doc.text(`${expense.category.padEnd(30)} ${expense.amount}`);
  });
  doc.text(`University Overhead 30% ${programme.budgetBreakdown.universityOverhead}`);
  doc.text(`GST ${programme.budgetBreakdown.gstAmount}`);
  
  doc.moveDown();
  doc.text(`Total ${programme.budgetBreakdown.totalExpenditure}`);
  
  doc.moveDown();
  doc.text('The above budget is tentative. This may vary depending on the number of participants attending the program.');
  
  // Finalize the PDF
  doc.end();
};