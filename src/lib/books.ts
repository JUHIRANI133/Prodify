import { PlaceHolderImages } from "./placeholder-images";

export type Book = {
  title: string;
  author: string;
  topic: string;
  coverImageId: string;
};

export const recommendedBooks: Book[] = [
  {
    title: "Eat That Frog!",
    author: "Brian Tracy",
    topic: "Prioritization and Planning",
    coverImageId: "eat-that-frog-book-cover",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    topic: "Prioritization and Planning",
    coverImageId: "7-habits-book-cover",
  },
  {
    title: "Getting Things Done",
    author: "David Allen",
    topic: "Time and Task Management",
    coverImageId: "gtd-book-cover",
  },
  {
    title: "The Pomodoro Technique",
    author: "Francesco Cirillo",
    topic: "Time and Task Management",
    coverImageId: "pomodoro-technique-book-cover",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    topic: "Focus and Concentration",
    coverImageId: "deep-work-book-cover",
  },
   {
    title: "Flow",
    author: "Mihaly Csikszentmihalyi",
    topic: "Focus and Concentration",
    coverImageId: "flow-book-cover",
  },
  {
    title: "Why We Sleep",
    author: "Matthew Walker",
    topic: "Health and Wellness",
    coverImageId: "why-we-sleep-book-cover",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    topic: "Habits and Mindset",
    coverImageId: "power-of-habit-book-cover",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    topic: "Habits and Mindset",
    coverImageId: "atomic-habits-book-cover",
  },
];
