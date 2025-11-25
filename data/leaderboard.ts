export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  subject: string; // Matches the ID in EXAMS (e.g., 'Maths', 'Science')
}

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  // Maths Scores
  { id: "m1", name: "Emma Charlotte", score: 100, subject: "Maths" },
  { id: "m2", name: "Olivia Smith", score: 95, subject: "Maths" },
  { id: "m3", name: "Lucas Evans", score: 92, subject: "Maths" },
  { id: "m4", name: "Mason Cooper", score: 88, subject: "Maths" },
  { id: "m5", name: "Ava Wilson", score: 85, subject: "Maths" },

  // Science Scores
  { id: "s1", name: "Liam James", score: 98, subject: "Science" },
  { id: "s2", name: "William Turner", score: 94, subject: "Science" },
  { id: "s3", name: "Mia Thomas", score: 90, subject: "Science" },
  { id: "s4", name: "Ethan Hunt", score: 89, subject: "Science" },
  { id: "s5", name: "Isabella Clark", score: 84, subject: "Science" },

  // English Scores
  { id: "e1", name: "Noah Benjamin", score: 96, subject: "English" },
  { id: "e2", name: "James Wilson", score: 91, subject: "English" },
  { id: "e3", name: "Sophia Brown", score: 88, subject: "English" },
  { id: "e4", name: "Charlotte Davis", score: 87, subject: "English" },
  { id: "e5", name: "Amelia Miller", score: 82, subject: "English" },

  // Additional Mixed Scores
  { id: "m6", name: "Benjamin Wright", score: 78, subject: "Maths" },
  { id: "s6", name: "Alexander King", score: 76, subject: "Science" },
  { id: "e6", name: "Harper Hall", score: 79, subject: "English" },
];
