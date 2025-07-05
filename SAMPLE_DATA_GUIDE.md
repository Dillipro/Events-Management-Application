# Sample Data for Events Management Application

This document contains all the sample users and events created for testing the Events Management Application.

## Sample Users Created

### Head of Department (HOD) Users
1. **Dr. Rajesh Kumar**
   - Email: `rajesh.kumar@annauniv.edu`
   - Department: Computer Science and Engineering
   - Role: HOD
   - Password: `password123`

2. **Dr. Priya Sharma**
   - Email: `priya.sharma@annauniv.edu`
   - Department: Electronics and Communication Engineering
   - Role: HOD
   - Password: `password123`

### Coordinator Users
3. **Prof. Arjun Reddy**
   - Email: `arjun.reddy@annauniv.edu`
   - Department: Computer Science and Engineering
   - Role: Coordinator
   - Password: `password123`

4. **Prof. Meera Nair**
   - Email: `meera.nair@annauniv.edu`
   - Department: Computer Science and Engineering
   - Role: Coordinator
   - Password: `password123`

5. **Dr. Suresh Babu**
   - Email: `suresh.babu@annauniv.edu`
   - Department: Electronics and Communication Engineering
   - Role: Coordinator
   - Password: `password123`

### Participant Users
6. **Aditya Singh**
   - Email: `aditya.singh@student.annauniv.edu`
   - Department: Computer Science and Engineering
   - Role: Participant
   - Password: `password123`

7. **Kavya Reddy**
   - Email: `kavya.reddy@student.annauniv.edu`
   - Department: Computer Science and Engineering
   - Role: Participant
   - Password: `password123`

8. **Rohit Sharma**
   - Email: `rohit.sharma@student.annauniv.edu`
   - Department: Electronics and Communication Engineering
   - Role: Participant
   - Password: `password123`

9. **Ananya Iyer**
   - Email: `ananya.iyer@student.annauniv.edu`
   - Department: Mechanical Engineering
   - Role: Participant
   - Password: `password123`

10. **Vikram Patel**
    - Email: `vikram.patel@student.annauniv.edu`
    - Department: Civil Engineering
    - Role: Participant
    - Password: `password123`

## Sample Events Created

### 1. AI and Machine Learning Workshop
- **Status**: Approved ✅
- **Date**: July 15-17, 2025
- **Venue**: CSE Department Seminar Hall
- **Mode**: Offline
- **Duration**: 3 days
- **Budget**: ₹50,000
- **Coordinator**: Prof. Arjun Reddy
- **Target Audience**: Final Year Students, Research Scholars, Faculty Members

### 2. Blockchain Technology Seminar
- **Status**: Pending ⏳
- **Date**: August 1, 2025
- **Venue**: Main Auditorium
- **Mode**: Hybrid
- **Duration**: 1 day
- **Budget**: ₹25,000
- **Coordinator**: Prof. Meera Nair
- **Target Audience**: UG Students, PG Students, Industry Professionals

### 3. IoT and Smart Systems Conference
- **Status**: Approved ✅
- **Date**: August 20-22, 2025
- **Venue**: ECE Department Conference Hall
- **Mode**: Offline
- **Duration**: 3 days
- **Budget**: ₹75,000
- **Coordinator**: Dr. Suresh Babu
- **Target Audience**: Research Scholars, Faculty, Industry Professionals

### 4. Web Development Bootcamp
- **Status**: Rejected ❌
- **Date**: September 5-7, 2025
- **Venue**: Computer Lab 1
- **Mode**: Offline
- **Duration**: 3 days
- **Budget**: ₹35,000
- **Coordinator**: Prof. Arjun Reddy
- **Target Audience**: Second Year Students, Third Year Students
- **Rejection Reason**: Budget allocation exceeds department limits

### 5. Cybersecurity Awareness Program
- **Status**: Pending ⏳
- **Date**: September 15, 2025
- **Venue**: Online Platform
- **Mode**: Online
- **Duration**: 1 day
- **Budget**: ₹15,000
- **Coordinator**: Prof. Meera Nair
- **Target Audience**: All Students, Faculty, Staff

## How to Test the Application

### 1. Access the Application
- **Frontend URL**: http://localhost:5173
- **Backend API**: http://localhost:5050

### 2. Login with Different Roles

#### Test as HOD:
- Email: `rajesh.kumar@annauniv.edu` or `priya.sharma@annauniv.edu`
- Password: `password123`
- **Can do**: Approve/reject events, view all proposals, manage finances

#### Test as Coordinator:
- Email: `arjun.reddy@annauniv.edu` or `meera.nair@annauniv.edu`
- Password: `password123`
- **Can do**: Create events, manage event details, submit claims

#### Test as Participant:
- Email: `aditya.singh@student.annauniv.edu` or any other participant email
- Password: `password123`
- **Can do**: View events, register for events, provide feedback, download certificates

### 3. Test Scenarios

1. **Event Creation Flow**:
   - Login as coordinator
   - Create a new event
   - Fill all required details including budget breakdown

2. **Approval Workflow**:
   - Login as HOD
   - Review pending events
   - Approve or reject with comments

3. **Participant Registration**:
   - Login as participant
   - Browse available events
   - Register for approved events

4. **Certificate Generation**:
   - Login as participant
   - View completed events
   - Generate and download certificates

### 4. Database Access
- **MongoDB Connection**: mongodb://localhost:27017/events-management
- **Collections**: users, events, participantevents, feedbacks

## Notes
- All users have the same password: `password123`
- Events have realistic budget breakdowns with income and expenses
- Different event statuses (approved, pending, rejected) for testing workflows
- Multiple departments and roles for comprehensive testing
- Events span different dates to test various scenarios
