import type { Puzzle, Player } from './types';

export const PASSWORD = "LOGIC";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'coding',
    title: 'Round 1: The Binary Question',
    puzzle: 'In binary, what is the result of 101 + 10?',
    hint: 'Convert to decimal, add, then convert back to binary. Or, perform binary addition directly.',
    solution: '111',
    passwordChar: 'L',
  },
  {
    id: 'puzzle-2',
    type: 'coding',
    title: 'Round 2: The Missing Semicolon',
    puzzle: "I am the silent saboteur in many a programmer's nightmare. Forgetting me in C++ or Java can cause a cascade of errors, yet in Python, I am mostly a stranger. What am I?",
    hint: 'It\'s a punctuation mark that terminates statements in many C-style languages.',
    solution: 'semicolon',
    passwordChar: 'O',
  },
  {
    id: 'puzzle-3',
    type: 'coding',
    title: 'Round 3: The Recursive Call',
    puzzle: 'What kind of function calls itself?',
    hint: 'This is a fundamental concept for solving problems by breaking them down into smaller, self-similar subproblems.',
    solution: 'recursive',
    passwordChar: 'G',
  },
  {
    id: 'puzzle-4',
    type: 'coding',
    title: 'Round 4: The Data Structure',
    puzzle: 'I operate on a "Last-In, First-Out" (LIFO) principle. What data structure am I?',
    hint: 'Think of a pile of plates.',
    solution: 'stack',
    passwordChar: 'I',
  },
  {
    id: 'puzzle-5',
    type: 'coding',
    title: 'Round 5: The Null Pointer',
    puzzle: 'I point to nothing, but trying to access what I point to often leads to a crash. What am I in programming?',
    hint: 'It represents an invalid or uninitialized memory address.',
    solution: 'null',
    passwordChar: 'C',
  },
];

export const players: Player[] = [
    { id: 'player-1', name: 'Alex', score: 1250, avatar: 'A' },
    { id: 'player-2', name: 'Mia', score: 1100, avatar: 'M' },
    { id: 'player-3', name: 'Chris', score: 950, avatar: 'C' },
    { id: 'player-4', name: 'Nina', score: 800, avatar: 'N' },
    { id: 'player-5', name: 'Leo', score: 750, avatar: 'L' },
];
