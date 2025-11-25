import { ExamsData } from '../types';

export const EXAMS: ExamsData = {
  Maths: {
    id: 'Maths',
    title: 'Mathematics',
    description: 'Test your numerical and logical skills.',
    fullDescription: 'Our Mathematics curriculum covers Algebra, Geometry, and basic Arithmetic. This exam will test your ability to solve complex equations, understand geometric properties, and apply logical reasoning to numerical problems.',
    icon: 'Calculator',
    color: 'blue',
    questions: [
      { id: 1, question: "What is the value of Pi (approx)?", options: ["3.14", "3.41", "3.12", "3.24"], answer: 0 },
      { id: 2, question: "What is 15 * 15?", options: ["200", "225", "250", "275"], answer: 1 },
      { id: 3, question: "Solve for x: 2x + 5 = 15", options: ["2", "5", "10", "7.5"], answer: 1 },
      { id: 4, question: "Which shape has 3 sides?", options: ["Square", "Circle", "Triangle", "Pentagon"], answer: 2 },
      { id: 5, question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
    ]
  },
  Science: {
    id: 'Science',
    title: 'Science',
    description: 'Explore the wonders of biology, chemistry, and physics.',
    fullDescription: 'The Science exam spans across basic Biology, Chemistry, and Physics concepts. You will be questioned on atomic structure, photosynthesis, laws of motion, and the fundamental building blocks of life.',
    icon: 'FlaskConical',
    color: 'green',
    questions: [
      { id: 1, question: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
      { id: 2, question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: 0 },
      { id: 3, question: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus", "Molecule"], answer: 2 },
      { id: 4, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
      { id: 5, question: "What is the boiling point of water?", options: ["50°C", "100°C", "150°C", "200°C"], answer: 1 },
    ]
  },
  English: {
    id: 'English',
    title: 'English',
    description: 'Challenge your grammar, vocabulary, and comprehension.',
    fullDescription: 'The English Language exam focuses on grammar rules, vocabulary usage, and reading comprehension. Prepare to identify synonyms, antonyms, correct verb tenses, and sentence structures.',
    icon: 'BookOpen',
    color: 'indigo',
    questions: [
      { id: 1, question: "Select the synonym for 'Happy'", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1 },
      { id: 2, question: "Identify the verb: 'She runs fast.'", options: ["She", "Runs", "Fast", "None"], answer: 1 },
      { id: 3, question: "Which is a vowel?", options: ["B", "T", "O", "Z"], answer: 2 },
      { id: 4, question: "Past tense of 'Go'?", options: ["Goed", "Gone", "Went", "Going"], answer: 2 },
      { id: 5, question: "Complete: '___ apple a day keeps the doctor away.'", options: ["A", "An", "The", "Any"], answer: 1 },
    ]
  }
};