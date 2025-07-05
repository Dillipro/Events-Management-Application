import axios from 'axios';

const API_BASE = 'http://localhost:5050/api';

// Sample Users Data
const sampleUsers = [
  // HOD Users
  {
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@annauniv.edu',
    password: '$2b$10$example.hashed.password.here', // This should be hashed
    department: 'Computer Science and Engineering',
    role: 'hod'
  },
  {
    name: 'Dr. Priya Sharma',
    email: 'priya.sharma@annauniv.edu', 
    password: '$2b$10$example.hashed.password.here',
    department: 'Electronics and Communication Engineering',
    role: 'hod'
  },

  // Coordinator Users
  {
    name: 'Prof. Arjun Reddy',
    email: 'arjun.reddy@annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Computer Science and Engineering',
    role: 'coordinator'
  },
  {
    name: 'Prof. Meera Nair',
    email: 'meera.nair@annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Computer Science and Engineering', 
    role: 'coordinator'
  },
  {
    name: 'Dr. Suresh Babu',
    email: 'suresh.babu@annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Electronics and Communication Engineering',
    role: 'coordinator'
  },

  // Participant Users
  {
    name: 'Aditya Singh',
    email: 'aditya.singh@student.annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Computer Science and Engineering',
    role: 'participant'
  },
  {
    name: 'Kavya Reddy',
    email: 'kavya.reddy@student.annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Computer Science and Engineering',
    role: 'participant'
  },
  {
    name: 'Rohit Sharma',
    email: 'rohit.sharma@student.annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Electronics and Communication Engineering',
    role: 'participant'
  },
  {
    name: 'Ananya Iyer',
    email: 'ananya.iyer@student.annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Mechanical Engineering',
    role: 'participant'
  },
  {
    name: 'Vikram Patel',
    email: 'vikram.patel@student.annauniv.edu',
    password: '$2b$10$example.hashed.password.here',
    department: 'Civil Engineering',
    role: 'participant'
  }
];

// Sample Events Data
const sampleEvents = [
  {
    title: 'AI and Machine Learning Workshop',
    startDate: new Date('2025-07-15'),
    endDate: new Date('2025-07-17'),
    venue: 'CSE Department Seminar Hall',
    mode: 'Offline',
    duration: '3 days',
    type: 'Workshop',
    objectives: 'To provide hands-on experience with AI/ML technologies and their practical applications in industry.',
    outcomes: 'Participants will gain practical knowledge of AI/ML algorithms, tools, and their real-world implementation.',
    budget: 50000,
    status: 'approved',
    coordinators: [
      {
        name: 'Prof. Arjun Reddy',
        designation: 'Associate Professor',
        department: 'Computer Science and Engineering'
      }
    ],
    targetAudience: ['Final Year Students', 'Research Scholars', 'Faculty Members'],
    resourcePersons: ['Industry Expert from TCS', 'Dr. AI Specialist from IIT'],
    approvers: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'HOD - CSE'
      }
    ],
    budgetBreakdown: {
      income: [
        {
          category: 'Registration Fee - Students',
          expectedParticipants: 40,
          perParticipantAmount: 500,
          gstPercentage: 18,
          income: 20000
        },
        {
          category: 'Registration Fee - Faculty',
          expectedParticipants: 10,
          perParticipantAmount: 1000,
          gstPercentage: 18,
          income: 10000
        }
      ],
      expenses: [
        {
          category: 'Resource Person Honorarium',
          amount: 15000
        },
        {
          category: 'Refreshments',
          amount: 8000
        },
        {
          category: 'Materials and Stationery',
          amount: 5000
        },
        {
          category: 'University Overhead',
          amount: 9000
        }
      ],
      totalIncome: 30000,
      totalExpenditure: 37000,
      universityOverhead: 9000
    }
  },
  {
    title: 'Blockchain Technology Seminar',
    startDate: new Date('2025-08-01'),
    endDate: new Date('2025-08-01'),
    venue: 'Main Auditorium',
    mode: 'Hybrid',
    duration: '1 day',
    type: 'Seminar',
    objectives: 'To create awareness about blockchain technology and its applications in various domains.',
    outcomes: 'Understanding of blockchain fundamentals, cryptocurrency, smart contracts, and their applications.',
    budget: 25000,
    status: 'pending',
    coordinators: [
      {
        name: 'Prof. Meera Nair',
        designation: 'Assistant Professor',
        department: 'Computer Science and Engineering'
      }
    ],
    targetAudience: ['UG Students', 'PG Students', 'Industry Professionals'],
    resourcePersons: ['Blockchain Developer from Infosys', 'Cryptocurrency Expert'],
    approvers: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'HOD - CSE'
      }
    ],
    budgetBreakdown: {
      income: [
        {
          category: 'Registration Fee',
          expectedParticipants: 50,
          perParticipantAmount: 300,
          gstPercentage: 18,
          income: 15000
        }
      ],
      expenses: [
        {
          category: 'Speaker Fee',
          amount: 8000
        },
        {
          category: 'Technical Setup',
          amount: 3000
        },
        {
          category: 'Refreshments',
          amount: 4000
        },
        {
          category: 'University Overhead',
          amount: 4500
        }
      ],
      totalIncome: 15000,
      totalExpenditure: 19500,
      universityOverhead: 4500
    }
  },
  {
    title: 'IoT and Smart Systems Conference',
    startDate: new Date('2025-08-20'),
    endDate: new Date('2025-08-22'),
    venue: 'ECE Department Conference Hall',
    mode: 'Offline',
    duration: '3 days',
    type: 'Conference',
    objectives: 'To showcase latest research and developments in IoT and smart systems technology.',
    outcomes: 'Research collaboration opportunities, industry insights, and networking with experts.',
    budget: 75000,
    status: 'approved',
    coordinators: [
      {
        name: 'Dr. Suresh Babu',
        designation: 'Professor',
        department: 'Electronics and Communication Engineering'
      }
    ],
    targetAudience: ['Research Scholars', 'Faculty', 'Industry Professionals'],
    resourcePersons: ['IoT Expert from Bosch', 'Smart City Consultant', 'Research Director from DRDO'],
    approvers: [
      {
        name: 'Dr. Priya Sharma',
        role: 'HOD - ECE'
      }
    ],
    budgetBreakdown: {
      income: [
        {
          category: 'Registration Fee - Students',
          expectedParticipants: 30,
          perParticipantAmount: 800,
          gstPercentage: 18,
          income: 24000
        },
        {
          category: 'Registration Fee - Faculty/Industry',
          expectedParticipants: 20,
          perParticipantAmount: 1500,
          gstPercentage: 18,
          income: 30000
        }
      ],
      expenses: [
        {
          category: 'Keynote Speaker Fees',
          amount: 25000
        },
        {
          category: 'Conference Kit',
          amount: 12000
        },
        {
          category: 'Catering',
          amount: 15000
        },
        {
          category: 'Publication',
          amount: 6000
        },
        {
          category: 'University Overhead',
          amount: 16200
        }
      ],
      totalIncome: 54000,
      totalExpenditure: 74200,
      universityOverhead: 16200
    }
  },
  {
    title: 'Web Development Bootcamp',
    startDate: new Date('2025-09-05'),
    endDate: new Date('2025-09-07'),
    venue: 'Computer Lab 1',
    mode: 'Offline',
    duration: '3 days',
    type: 'Bootcamp',
    objectives: 'Intensive hands-on training in modern web development technologies including React, Node.js, and databases.',
    outcomes: 'Participants will build complete web applications and gain industry-ready web development skills.',
    budget: 35000,
    status: 'rejected',
    reviewComments: 'Budget allocation exceeds department limits. Please revise the budget and resubmit.',
    coordinators: [
      {
        name: 'Prof. Arjun Reddy',
        designation: 'Associate Professor',
        department: 'Computer Science and Engineering'
      }
    ],
    targetAudience: ['Second Year Students', 'Third Year Students'],
    resourcePersons: ['Full Stack Developer from Zoho', 'Senior Developer from Freshworks'],
    approvers: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'HOD - CSE'
      }
    ],
    budgetBreakdown: {
      income: [
        {
          category: 'Registration Fee',
          expectedParticipants: 25,
          perParticipantAmount: 600,
          gstPercentage: 18,
          income: 15000
        }
      ],
      expenses: [
        {
          category: 'Trainer Fees',
          amount: 18000
        },
        {
          category: 'Software Licenses',
          amount: 5000
        },
        {
          category: 'Refreshments',
          amount: 6000
        },
        {
          category: 'Materials',
          amount: 2000
        },
        {
          category: 'University Overhead',
          amount: 4500
        }
      ],
      totalIncome: 15000,
      totalExpenditure: 35500,
      universityOverhead: 4500
    }
  },
  {
    title: 'Cybersecurity Awareness Program',
    startDate: new Date('2025-09-15'),
    endDate: new Date('2025-09-15'),
    venue: 'Online Platform',
    mode: 'Online',
    duration: '1 day',
    type: 'Workshop',
    objectives: 'To create awareness about cybersecurity threats and best practices for digital safety.',
    outcomes: 'Enhanced understanding of cybersecurity, threat identification, and protective measures.',
    budget: 15000,
    status: 'pending',
    coordinators: [
      {
        name: 'Prof. Meera Nair',
        designation: 'Assistant Professor',
        department: 'Computer Science and Engineering'
      }
    ],
    targetAudience: ['All Students', 'Faculty', 'Staff'],
    resourcePersons: ['Cybersecurity Expert from CERT-In', 'Ethical Hacker'],
    approvers: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'HOD - CSE'
      }
    ],
    budgetBreakdown: {
      income: [
        {
          category: 'Free for University Members',
          expectedParticipants: 100,
          perParticipantAmount: 0,
          gstPercentage: 0,
          income: 0
        }
      ],
      expenses: [
        {
          category: 'Expert Honorarium',
          amount: 8000
        },
        {
          category: 'Platform Charges',
          amount: 2000
        },
        {
          category: 'Digital Certificates',
          amount: 1000
        },
        {
          category: 'University Overhead',
          amount: 0
        }
      ],
      totalIncome: 0,
      totalExpenditure: 11000,
      universityOverhead: 0
    }
  }
];

// Function to create sample data
async function createSampleData() {
  try {
    console.log('Creating sample users...');
    
    // Create users using the registration endpoint (which will hash passwords properly)
    for (const user of sampleUsers) {
      try {
        const response = await axios.post(`${API_BASE}/auth/register`, {
          name: user.name,
          email: user.email,
          password: 'password123', // Using a default password for all sample users
          department: user.department,
          role: user.role
        });
        console.log(`✅ Created user: ${user.name} (${user.role})`);
      } catch (error) {
        if (error.response?.data?.message === 'Already registered') {
          console.log(`⚠️  User already exists: ${user.name}`);
        } else {
          console.log(`❌ Error creating user ${user.name}:`, error.response?.data?.message || error.message);
        }
      }
    }

    console.log('\nCreating sample events...');
    
    // Create events using the sample creation endpoint
    for (const event of sampleEvents) {
      try {
        const response = await axios.post(`${API_BASE}/hod/createEvent`, event);
        console.log(`✅ Created event: ${event.title}`);
      } catch (error) {
        console.log(`❌ Error creating event ${event.title}:`, error.response?.data?.message || error.message);
      }
    }

    console.log('\n🎉 Sample data creation completed!');
    console.log('\n📋 Summary:');
    console.log(`👥 Users created: ${sampleUsers.length}`);
    console.log(`📅 Events created: ${sampleEvents.length}`);
    console.log('\n🔐 Login credentials for testing:');
    console.log('Email: any of the emails above');
    console.log('Password: password123');
    
  } catch (error) {
    console.error('Error creating sample data:', error.message);
  }
}

// Run the function
createSampleData();
