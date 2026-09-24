# 🤖 AI Interview System

An AI-powered full-stack interview platform designed to help students and job seekers practice realistic HR and Technical interviews based on their resume, skills, projects, experience, and selected role.

The platform provides an end-to-end interview preparation experience including authentication, resume analysis, AI-generated interview questions, voice and text-based answers, real-time feedback, performance reports, interview history, subscriptions, credits, and online payments.

---

## 🚀 Key Features

- 🔐 User Registration & Login
- 🔥 Firebase Google Authentication
- 🔑 JWT-based Authentication
- 📄 Resume Upload & Automatic Resume Analysis
- 🧠 AI-powered Interview Question Generation
- 💻 Technical Interviews
- 🧑‍💼 HR Interviews
- 🎙️ Voice-based Answering
- ⌨️ Text-based Answering
- 🔊 Voice Question Reading
- ⏱️ Timed Interview Questions
- 💬 Question-wise AI Feedback
- 📊 Detailed Interview Performance Analysis
- 📑 Automatic Interview Report Generation
- 📥 Downloadable PDF Reports
- 📤 Report Sharing
- 🕒 Previous Interview History
- 💳 Razorpay Payment Integration
- 💰 Multiple Subscription Plans
- 🎟️ Credit-based Interview System
- 📱 Responsive User Interface
- ☁️ Render Deployment

---

## 🧩 Complete Interview Workflow

The application provides a complete interview experience from registration to final performance report.

### 1️⃣ User Registration & Login

Users can create an account and securely access the platform.

The project implements two authentication mechanisms:

### Firebase Authentication

Users can directly register or log in using their Google account through Firebase Authentication.

The user can select their Google account and continue without manually entering all registration details.

### JWT Authentication

JWT (JSON Web Token) is used for secure authentication and authorization between the frontend and backend.

The authentication system helps protect user-specific resources and API endpoints.

---

## 2️⃣ Free Demo Credits

After successful registration, users receive **100 credits** that can be used to explore the interview functionality.

These demo credits allow new users to experience the platform before choosing a subscription plan.

---

## 3️⃣ Subscription & Payment System

The application provides multiple subscription options so users can choose a plan according to their requirements.

### 💳 Razorpay Payment Integration

Razorpay is integrated into the platform for online payments.

Users can make payments using supported payment methods such as:

- Credit Card
- Debit Card
- UPI
- Net Banking
- OTP-based payment verification where applicable

Users can select a subscription plan and complete the payment through Razorpay.

After successful payment, the corresponding subscription and credits are made available according to the selected plan.

---

## 📄 4️⃣ Resume Upload & Analysis

Before starting an interview, the user uploads their resume.

The system analyzes the uploaded resume and extracts relevant information such as:

- Name
- Skills
- Projects
- Work Experience
- Education
- Technical Information
- Other relevant resume details

This information is used to create a more personalized interview experience.

---

## 🎯 5️⃣ Interview Type Selection

After uploading the resume, the user can choose the type of interview they want to attempt.

The platform currently supports two major interview types:

### 💻 Technical Interview

Technical questions are generated according to the candidate's:

- Skills
- Projects
- Experience
- Resume information
- Selected role

### 🧑‍💼 HR Interview

The HR interview focuses on areas such as:

- Communication
- Confidence
- Behavioral questions
- Career-related questions
- Situational questions
- General HR interview preparation

The user can choose either Technical or HR Interview according to their preparation requirements.

---

## 🎤 6️⃣ AI Interview Process

Once the interview starts, the candidate receives a series of interview questions.

The interview consists of **5 questions per interview session**.

Each question can be:

- Read on the screen
- Repeated verbally
- Answered using text
- Answered using voice

This creates a more realistic interview experience.

---

## ⏱️ 7️⃣ Timed Answers

Each question provides a limited time window for the candidate to answer.

The configured answer duration can range from approximately **3 to 90 seconds**, depending on the interview configuration.

This helps candidates practice answering questions within a realistic interview time limit.

---

## 🎙️ 8️⃣ Voice & Text Answers

Candidates can answer questions in two ways:

### ⌨️ Text Answer

The candidate can type their answer directly into the application.

### 🎙️ Voice Answer

The candidate can answer verbally using their microphone.

This makes the system useful for practicing:

- Communication
- Speaking confidence
- Interview response quality
- Verbal explanation of technical concepts

---

## 🤖 9️⃣ AI-Powered Question-wise Feedback

After answering each question, the system provides AI-generated feedback.

The feedback can highlight areas such as:

### Communication
- Clarity of explanation
- Communication quality
- Answer structure

### Confidence
- Confidence-related improvement areas
- Delivery of the response

### Technical Knowledge
- Incorrect technical information
- Missing concepts
- Technical improvements
- Accuracy of the answer

### Overall Answer Quality
- What was done well
- What could be improved
- Suggestions for a better answer

This allows candidates to improve after every question instead of waiting until the end of the interview.

---

## 📊 🔟 Final Interview Report

After completing all five questions, the interview session ends and the system generates a detailed performance report.

The report can contain information such as:

- Overall Score
- Question-wise Performance
- Technical Performance
- Communication Analysis
- Confidence Analysis
- Areas of Improvement
- Strengths
- Weaknesses
- AI-generated Suggestions

The generated report can be:

- 📥 Downloaded
- 📤 Shared

The report provides candidates with a structured summary of their interview performance.

---

## 🕒 1️⃣1️⃣ Interview History

The platform also maintains previous interview information.

Users can access their previous interview history and review their earlier performance.

This allows users to:

- Track previous interviews
- View previous scores
- Compare performance
- Identify improvement areas
- Monitor interview preparation progress

---

## 💳 1️⃣2️⃣ Credit-Based System

The platform uses a credit-based system for interview usage.

New users receive demo credits after registration.

Users can purchase subscription plans according to their requirements and receive the corresponding credits/interview access.

This provides flexibility for users to select a plan according to their usage.

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         └──────────┬──────────┘
                                    │
                         REST API Requests
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Node.js + Express   │
                         │      Backend        │
                         └──────┬───────┬──────┘
                                │       │
                    ┌───────────┘       └────────────┐
                    ▼                                ▼
             ┌─────────────┐                 ┌─────────────┐
             │   MongoDB   │                 │  AI / LLM   │
             │   Database  │                 │   Service   │
             └─────────────┘                 └──────┬──────┘
                                                    │
                                                    ▼
                                           AI Interview Engine

             ┌─────────────────┐
             │ Firebase Auth   │
             │ Google Login    │
             └─────────────────┘

             ┌─────────────────┐
             │    Razorpay     │
             │ Payment Gateway │
             └─────────────────┘

# 📁 Project Structure

```text
AI_Interview/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md

# 🛠️ Technology Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Responsive UI

## Backend

- Node.js
- Express.js
- REST APIs

## Database

- MongoDB

## Authentication

- Firebase Authentication
- Google Authentication
- JSON Web Token (JWT)

## AI

- AI / Large Language Model Integration
- AI-powered Question Generation
- AI-powered Answer Analysis
- AI-powered Feedback Generation

## Payment

- Razorpay Payment Gateway
- Multiple Subscription Plans
- Credit-based Payment System

## Resume Processing

- Resume Upload
- Resume Information Extraction
- Skill Extraction
- Project Extraction
- Experience Extraction

## Interview System

- Technical Interview
- HR Interview
- Voice-based Answers
- Text-based Answers
- Timed Questions
- AI-generated Questions
- Question-wise Feedback

## Report Generation

- Interview Performance Report
- PDF Report Generation
- Downloadable Reports
- Shareable Reports

## Development Tools

- Git
- GitHub
- npm
- VS Code

## Deployment

- Render
- MongoDB Atlas / Cloud Database

⚙️ Installation & Setup
1. Clone the Repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd AI_Interview
2. Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file inside the backend directory.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FIREBASE_CONFIGURATION=your_firebase_configuration

Start the backend:

npm start

For development:

npm run dev
💻 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm start

The frontend will normally run at:

http://localhost:3000

The backend will normally run at:

http://localhost:5000

Actual ports may vary depending on the project configuration.

🔐 Environment Variables & Security

Sensitive information should never be committed to GitHub.

The following information should be stored using environment variables:

MongoDB credentials
JWT Secret
AI API Keys
Razorpay Key ID
Razorpay Secret
Firebase configuration
Other private credentials

Make sure .env is included in .gitignore.

Example:

.env
node_modules/
📡 REST API Architecture

The backend follows a RESTful API architecture.

Major API responsibilities include:

Module	Responsibility
Authentication	Registration and Login
Users	User/Profile Management
Interviews	Interview Session Management
Questions	AI-generated Interview Questions
Responses	User Interview Responses
Resume	Resume Processing
Subscription	Subscription Management
Payment	Razorpay Payment Processing
Reports	Interview Report Generation
History	Previous Interview Records

Detailed API routes are available inside the backend routes directory.

🔒 Authentication & Authorization

The application uses multiple authentication mechanisms.

Firebase Authentication

Firebase is used to provide Google-based authentication and account management.

Users can select their Google account and directly register or log in to the platform.

JWT Authentication

JWT tokens are used to authenticate users when communicating with protected backend APIs.

This allows the backend to verify authenticated users and protect user-specific resources.

💳 Payment Flow

The application uses Razorpay for subscription payments.

User
  │
  ▼
Select Subscription Plan
  │
  ▼
Razorpay Checkout
  │
  ├── UPI
  ├── Credit Card
  ├── Debit Card
  └── Net Banking
  │
  ▼
Payment Verification
  │
  ▼
Subscription Activated
  │
  ▼
Credits Added

The platform provides multiple subscription plans so users can choose a plan according to their requirements.

🧠 AI Interview Flow
User Login
    │
    ▼
100 Demo Credits
    │
    ▼
Upload Resume
    │
    ▼
Resume Analysis
    │
    ├───────────────┐
    ▼               ▼
Technical         HR
Interview       Interview
    │               │
    └───────┬───────┘
            ▼
     5 AI Questions
            │
            ▼
   Voice / Text Answer
            │
            ▼
     AI Feedback
            │
            ▼
     Next Question
            │
            ▼
     Interview Ends
            │
            ▼
   Performance Report
            │
      ┌─────┴─────┐
      ▼           ▼
   Download      Share
      │
      ▼
Interview History
📊 Performance Analysis

The system evaluates different aspects of an interview, including:

Technical Knowledge
Answer Accuracy
Communication
Confidence
Answer Quality
Areas of Improvement
Overall Performance

The candidate receives feedback after individual questions as well as a final performance summary.

🧪 Testing Checklist

Before deployment or submission, verify:

 User registration works
 Google login works
 JWT authentication works
 Demo credits are assigned
 Resume upload works
 Resume information is extracted correctly
 Technical interview works
 HR interview works
 AI questions are generated
 Questions can be read/heard
 Text answers work
 Voice answers work
 Timer works correctly
 AI feedback is generated
 Final report is generated
 PDF download works
 Report sharing works
 Interview history works
 Subscription plans work
 Razorpay payment works
 Credits are updated after payment
 MongoDB connection works
 No API keys or credentials are exposed
🌐 Live Demo

The project is deployed on Render and is available online.

Live Application:

https://sameer-jeswani-26ai-interview-client.onrender.com/

📸 Screenshots

Add screenshots of the major application screens here.

Recommended screenshots:

Login / Registration
Dashboard
Subscription Plans
Razorpay Payment
Resume Upload
Interview Selection
Technical Interview
HR Interview
AI Feedback
Final Performance Report
Interview History

Example:

![Login](screenshots/login.png)

![Dashboard](screenshots/dashboard.png)

![Interview](screenshots/interview.png)

![Performance Report](screenshots/report.png)
🎯 Project Objective

The objective of this project is to build a complete AI-powered interview preparation platform that simulates real interview experiences.

The system combines:

Full-Stack Web Development
Artificial Intelligence
Resume Analysis
Voice Interaction
Authentication
Payment Integration
Subscription Management
Performance Evaluation
Report Generation

The platform is designed to help candidates practice interviews, understand their weaknesses, receive actionable feedback, and track their improvement over time.

🔮 Future Enhancements
🎙️ Real-time Voice AI Interviewer
🗣️ Advanced Speech Analysis
🤖 Advanced AI Answer Evaluation
📊 Advanced Performance Analytics
📈 Candidate Progress Dashboard
🧠 Personalized Interview Preparation
📝 More Interview Categories
🌍 Multi-language Interview Support
🎥 Video Interview Analysis
📅 Interview Preparation Roadmaps
👨‍💻 Author

Sameer Jeswani

B.Tech Computer Science & Engineering
Jaipur Engineering College and Research Centre

⭐ Project Highlights

This project demonstrates practical experience in:

Full-Stack Web Development
React.js
Node.js
Express.js
REST API Development
MongoDB
Firebase Authentication
Google Authentication
JWT Authentication
AI / LLM Integration
Resume Processing
Voice-based Interaction
Text-based Interview System
Razorpay Payment Integration
Subscription Management
Credit-based System
PDF Report Generation
Interview Analytics
Git & GitHub
Cloud Deployment using Render
📄 License

This project is developed for educational, learning, and demonstration purposes.
