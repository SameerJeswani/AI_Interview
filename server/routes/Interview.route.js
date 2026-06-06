import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";

import {
  analyzeResume,
  generateQuestions,
  submitAnswer,
  finishInterview,
  getMyInterviews,
  getInterviewReport,
} from "../controllers/interview.controller.js";

const interviewRouter = express.Router();

// Resume Analysis
interviewRouter.post(
  "/resume",
  isAuth,
  upload.single("resume"),
  analyzeResume
);

// Generate Interview Questions
interviewRouter.post(
  "/generate-questions",
  isAuth,
  generateQuestions
);

// Submit Answer
interviewRouter.post(
  "/submit-answer",
  isAuth,
  submitAnswer
);

// Finish Interview
interviewRouter.post(
  "/finish",
  isAuth,
  finishInterview
);

interviewRouter.get("/get-interview", isAuth, getMyInterviews);
interviewRouter.get("/report/:id", isAuth, getInterviewReport);
export default interviewRouter;