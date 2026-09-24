# 🤖 AI Interview System

> An AI-powered full-stack interview platform that helps candidates practice realistic Technical and HR interviews using their resume, skills, projects, experience, and selected role.

🌐 Live Demo:
https://sameer-jeswani-26ai-interview-client.onrender.com/

---

## 📌 Project Overview

The AI Interview System is a full-stack web application designed to simulate real-world interview experiences.

The platform analyzes a candidate's resume and generates personalized interview questions based on their skills, projects, experience, education, and selected role.

Candidates can answer questions using text or voice, receive AI-powered feedback, and get a detailed performance report at the end of the interview.

The system also includes authentication, subscription plans, credit management, Razorpay payments, interview history, PDF reports, and report sharing.

---

## ✨ Key Features

- 🔐 User Registration & Login
- 🔥 Google Authentication using Firebase
- 🔑 JWT-based Authentication & Authorization
- 📄 Resume Upload & Automatic Resume Analysis
- 🧠 AI-powered Interview Question Generation
- 💻 Technical Interview
- 🧑‍💼 HR Interview
- 🎙️ Voice-based Answers
- ⌨️ Text-based Answers
- 🔊 Voice Question Reading
- ⏱️ Timed Interview Questions
- 🤖 Question-wise AI Feedback
- 📊 Detailed Performance Analysis
- 📑 Automatic Interview Report Generation
- 📥 Downloadable PDF Reports
- 📤 Report Sharing
- 🕒 Interview History
- 💳 Razorpay Payment Integration
- 💰 Multiple Subscription Plans
- 🎟️ Credit-based Interview System
- 📱 Responsive User Interface
- ☁️ Render Deployment

---

## 🔄 Complete Interview Workflow

User Registration / Login
        ↓
Demo Credits
        ↓
Upload Resume
        ↓
Resume Analysis
        ↓
Select Interview Type
        ↓
┌─────────────────────┐
│                     │
▼                     ▼
Technical             HR
Interview             Interview
│                     │
└──────────┬──────────┘
           ↓
    Generate 5 AI Questions
           ↓
    Voice / Text Answer
           ↓
       AI Feedback
           ↓
     Next Question
           ↓
   Interview Completed
           ↓
  Performance Report
       ↓         ↓
   Download     Share
           ↓
   Interview History

---

## 🚀 Application Flow

### 1. 🔐 Authentication

Users can register and securely access the platform using:

- Email-based registration/login
- Google Authentication through Firebase
- JWT-based authentication for protected APIs

### 2. 🎟️ Free Demo Credits

New users receive 100 credits after registration.

These credits allow users to explore the interview functionality before purchasing a subscription plan.

### 3. 📄 Resume Analysis

Before starting an interview, users upload their resume.

The system extracts relevant information such as:

- Name
- Skills
- Projects
- Work Experience
- Education
- Technical Information
- Other relevant resume details

This information is used to personalize the interview.

### 4. 🎯 Interview Selection

Users can choose between:

#### 💻 Technical Interview

Questions are generated based on:

- Skills
- Projects
- Experience
- Resume information
- Selected role

#### 🧑‍💼 HR Interview

Focuses on:

- Communication
- Behavioral questions
- Confidence
- Career-related questions
- Situational questions
- General HR preparation

### 5. 🤖 AI Interview

Each interview session contains 5 questions.

Questions can be:

- Displayed on screen
- Read aloud
- Answered using text
- Answered using voice

### 6. ⏱️ Timed Answers

Each question has a configured answer duration.

The duration can range from approximately 3–90 seconds, depending on the interview configuration.

This helps candidates practice answering within realistic time constraints.

### 7. 🎙️ Voice & Text Answers

Candidates can answer questions using:

Text:
- Type the response directly into the application.

Voice:
- Answer verbally using the microphone.

This enables practice of:

- Communication
- Speaking confidence
- Technical explanation
- Response quality

### 8. 🧠 AI-Powered Feedback

After each answer, the system generates AI-powered feedback.

The feedback can cover:

- Communication
- Clarity
- Answer structure
- Confidence
- Technical knowledge
- Answer accuracy
- Missing concepts
- Areas for improvement
- Overall answer quality

Candidates can therefore improve after every question.

### 9. 📊 Final Performance Report

After completing the interview, the system generates a detailed performance report containing:

- Overall Score
- Question-wise Performance
- Technical Performance
- Communication Analysis
- Confidence Analysis
- Strengths
- Weaknesses
- Areas for Improvement
- AI-generated Suggestions

Reports can be:

- 📥 Downloaded as PDF
- 📤 Shared with others

### 10. 🕒 Interview History

Previous interview sessions are stored so users can:

- Track previous interviews
- Review previous scores
- Compare performance
- Identify improvement areas
- Monitor preparation progress

---

## 💳 Subscription & Payment System

The platform uses a credit-based subscription model.

### Razorpay Integration

Users can purchase subscription plans through Razorpay.

Supported payment methods include:

- UPI
- Credit Card
- Debit Card
- Net Banking

### Payment Flow

Select Subscription Plan
        ↓
Razorpay Checkout
        ↓
Payment Verification
        ↓
Subscription Activated
        ↓
Credits Added

---

## 🏗️ System Architecture

                    ┌───────────────┐
                    │     User      │
                    └───────┬───────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │   React Frontend  │
                  └─────────┬─────────┘
                            │
                        REST APIs
                            │
                            ▼
                  ┌───────────────────┐
                  │ Node.js + Express │
                  │     Backend       │
                  └───────┬─────┬─────┘
                          │     │
             ┌────────────┘     └────────────┐
             ▼                               ▼
      ┌─────────────┐                 ┌─────────────┐
      │   MongoDB   │                 │  AI / LLM   │
      │   Database  │                 │   Service   │
      └─────────────┘                 └──────┬──────┘
                                             │
                                             ▼
                                    AI Interview Engine

      ┌─────────────────┐
      │ Firebase Auth   │
      │  Google Login   │
      └─────────────────┘

      ┌─────────────────┐
      │    Razorpay     │
      │ Payment Gateway │
      └─────────────────┘

---

## 🛠️ Technology Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Responsive UI

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB

### Authentication

- Firebase Authentication
- Google Authentication
- JSON Web Token (JWT)

### AI / LLM

- AI / Large Language Model Integration
- AI-powered Question Generation
- AI-powered Answer Analysis
- AI-powered Feedback Generation

### Payment

- Razorpay Payment Gateway
- Multiple Subscription Plans
- Credit-based Payment System

### Resume Processing

- Resume Upload
- Resume Information Extraction
- Skill Extraction
- Project Extraction
- Experience Extraction

### Interview System

- Technical Interview
- HR Interview
- Voice-based Answers
- Text-based Answers
- Timed Questions
- AI-generated Questions
- Question-wise Feedback

### Report Generation

- Interview Performance Report
- PDF Report Generation
- Downloadable Reports
- Shareable Reports

### Development Tools

- Git
- GitHub
- npm
- VS Code

### Deployment

- Render
- MongoDB Atlas / Cloud Database

---

## 📁 Project Structure

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

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd AI_Interview

### 2. Backend Setup

cd backend
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

### 3. Frontend Setup

Open a new terminal:

cd frontend
npm install
npm start

Frontend:

http://localhost:3000

Backend:

http://localhost:5000

Note: Ports may vary depending on the project configuration.

---

## 🔐 Environment Variables & Security

Never commit sensitive credentials to GitHub.

The following information should be stored using environment variables:

- MongoDB credentials
- JWT Secret
- AI API Keys
- Razorpay Key ID
- Razorpay Secret
- Firebase configuration
- Other private credentials

Make sure .env is included in .gitignore.

Example:

.env
node_modules/

---

## 📡 REST API Architecture

The backend follows a RESTful API architecture.

| Module | Responsibility |
|---|---|
| Authentication | Registration and Login |
| Users | User/Profile Management |
| Interviews | Interview Session Management |
| Questions | AI-generated Interview Questions |
| Responses | User Interview Responses |
| Resume | Resume Processing |
| Subscription | Subscription Management |
| Payment | Razorpay Payment Processing |
| Reports | Interview Report Generation |
| History | Previous Interview Records |

Detailed API routes are available inside the backend routes directory.

---

## 🔒 Authentication & Authorization

### Firebase Authentication

Firebase is used to provide Google-based authentication and account management.

Users can select their Google account and directly register or log in to the platform.

### JWT Authentication

JWT tokens are used to authenticate users when communicating with protected backend APIs.

This allows the backend to verify authenticated users and protect user-specific resources.

---

## 💳 Payment Flow

The application uses Razorpay for subscription payments.

User
  ↓
Select Subscription Plan
  ↓
Razorpay Checkout
  ↓
UPI / Credit Card / Debit Card / Net Banking
  ↓
Payment Verification
  ↓
Subscription Activated
  ↓
Credits Added

---

## 🧠 AI Interview Flow

User Login
    ↓
100 Demo Credits
    ↓
Upload Resume
    ↓
Resume Analysis
    ↓
┌───────────────┐
│               │
▼               ▼
Technical       HR
Interview       Interview
│               │
└───────┬───────┘
        ↓
   5 AI Questions
        ↓
 Voice / Text Answer
        ↓
     AI Feedback
        ↓
   Next Question
        ↓
 Interview Completed
        ↓
 Performance Report
      ↓       ↓
 Download   Share
        ↓
 Interview History

---

## 📊 Performance Analysis

The system evaluates different aspects of an interview, including:

- Technical Knowledge
- Answer Accuracy
- Communication
- Confidence
- Answer Quality
- Areas of Improvement
- Overall Performance

The candidate receives feedback after individual questions as well as a final performance summary.

---

## 🧪 Testing Checklist

Before deployment or submission, verify:

- [ ] User registration works
- [ ] Google login works
- [ ] JWT authentication works
- [ ] Demo credits are assigned
- [ ] Resume upload works
- [ ] Resume information is extracted correctly
- [ ] Technical interview works
- [ ] HR interview works
- [ ] AI questions are generated
- [ ] Questions can be read/heard
- [ ] Text answers work
- [ ] Voice answers work
- [ ] Timer works correctly
- [ ] AI feedback is generated
- [ ] Final report is generated
- [ ] PDF download works
- [ ] Report sharing works
- [ ] Interview history works
- [ ] Subscription plans work
- [ ] Razorpay payment works
- [ ] Credits are updated after payment
- [ ] MongoDB connection works
- [ ] No API keys or credentials are exposed

---

## 🌐 Live Demo

Live Application:

https://sameer-jeswani-26ai-interview-client.onrender.com/

---

## 📸 Screenshots

Add screenshots of the major application screens here.

Recommended screenshots:

- Login / Registration
- Dashboard
- Subscription Plans
- Razorpay Payment
- Resume Upload
- Interview Selection
- Technical Interview
- HR Interview
- AI Feedback
- Final Performance Report
- Interview History

Example:

![Login](screenshots/login.png)

![Dashboard](screenshots/dashboard.png)

![Interview](screenshots/interview.png)

![Performance Report](screenshots/report.png)

---

## 🎯 Project Objective

The objective of this project is to build a complete AI-powered interview preparation platform that simulates real interview experiences.

The system combines:

- Full-Stack Web Development
- Artificial Intelligence
- Resume Analysis
- Voice Interaction
- Authentication
- Payment Integration
- Subscription Management
- Performance Evaluation
- Report Generation

The platform is designed to help candidates practice interviews, understand their weaknesses, receive actionable feedback, and track their improvement over time.

---

## 🔮 Future Enhancements

- 🎙️ Real-time Voice AI Interviewer
- 🗣️ Advanced Speech Analysis
- 🤖 Advanced AI Answer Evaluation
- 📊 Advanced Performance Analytics
- 📈 Candidate Progress Dashboard
- 🧠 Personalized Interview Preparation
- 📝 More Interview Categories
- 🌍 Multi-language Interview Support
- 🎥 Video Interview Analysis
- 📅 Interview Preparation Roadmaps

---

## 👨‍💻 Author

Sameer Jeswani

B.Tech Computer Science & Engineering
Jaipur Engineering College and Research Centre

---

## ⭐ Project Highlights

This project demonstrates practical experience in:

- Full-Stack Web Development
- React.js
- Node.js
- Express.js
- REST API Development
- MongoDB
- Firebase Authentication
- Google Authentication
- JWT Authentication
- AI / LLM Integration
- Resume Processing
- Voice-based Interaction
- Text-based Interview System
- Razorpay Payment Integration
- Subscription Management
- Credit-based System
- PDF Report Generation
- Interview Analytics
- Git & GitHub
- Cloud Deployment using Render

---

## 📄 License

This project is developed for educational, learning, and demonstration purposes.
