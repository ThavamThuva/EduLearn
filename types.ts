export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of the correct answer (0-3)
}

export interface SubjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string; // For the modal
  icon: string;
  color: string;
  questions: Question[];
}

export interface ExamsData {
  [key: string]: SubjectData;
}

export interface ScoreData {
  subject: string;
  score: number;
  total: number;
  percentage: number;
  timestamp: string;
}