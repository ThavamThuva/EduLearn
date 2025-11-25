import { ClassSession } from "../types";

// Helper to get dates relative to now for demonstration purposes
const now = new Date();
const minutesFromNow = (mins: number) =>
  new Date(now.getTime() + mins * 60000).toISOString();
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(10, 0, 0, 0);

export const CLASSES: ClassSession[] = [
  {
    id: "math-class-01",
    subjectId: "Maths",
    title: "Advanced Algebra Concepts",
    instructor: "Dr. Sarah Smith",
    // Started 5 minutes ago (Active)
    startTime: minutesFromNow(-5),
    duration: "60 mins",
    platform: "Zoom",
    meetingLink: "https://zoom.us/test/maths",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDummyMaths/viewform",
  },
  {
    id: "science-class-01",
    subjectId: "Science",
    title: "Physics: Laws of Motion",
    instructor: "Prof. Albert Green",
    // Starts in 2 minutes (Upcoming)
    startTime: minutesFromNow(2),
    duration: "45 mins",
    platform: "Google Meet",
    meetingLink: "https://meet.google.com/test-sci",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDummyScience/viewform",
  },
  {
    id: "english-class-01",
    subjectId: "English",
    title: "Essay Writing Masterclass",
    instructor: "Ms. Emily Blunt",
    // Starts tomorrow at 10 AM
    startTime: tomorrow.toISOString(),
    duration: "90 mins",
    platform: "Microsoft Teams",
    meetingLink: "https://teams.microsoft.com/test/eng",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDummyEnglish/viewform",
  },
];
