import type { Puzzle, Player } from './types';

export const PASSWORD = "GENKI";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'math',
    title: 'The Number Pyramid',
    puzzle: 'I am a number. If you multiply me by 3, add 6, divide by 3, and then subtract the original number, what is the result?',
    hint: 'Try picking any number to start with and follow the steps. Does the result change?',
    solution: '2',
    passwordChar: 'G',
  },
  {
    id: 'puzzle-2',
    type: 'pattern',
    title: 'Visual Sequence',
    puzzle: 'What comes next in this sequence: O, T, T, F, F, S, S, ...?',
    hint: 'Think about the sequence of numbers in English.',
    solution: 'E',
    passwordChar: 'E',
  },
  {
    id: 'puzzle-3',
    type: 'cipher',
    title: 'Caesar\'s Message',
    puzzle: 'A message is encrypted with a Caesar cipher (shift of 3). The encrypted word is "KHOOR". What is the original word?',
    hint: 'Shift each letter back by 3 positions in the alphabet.',
    solution: 'HELLO',
    passwordChar: 'N',
  },
  {
    id: 'puzzle-4',
    type: 'coding',
    title: 'Array Logic',
    puzzle: 'In JavaScript, what value does `[1, 2, 3].map(n => n + 1)[1]` return?',
    hint: 'The `.map()` function creates a new array. What is the element at index 1 of that new array?',
    solution: '3',
    passwordChar: 'K',
  },
  {
    id: 'puzzle-5',
    type: 'math',
    title: 'Age Riddle',
    puzzle: 'I am four times as old as my daughter. In 20 years, I will be twice as old as her. How old are we now?',
    hint: 'Set up two equations: `m = 4d` and `m + 20 = 2(d + 20)`. Solve for `m` and `d`. The solution is my age.',
    solution: '40',
    passwordChar: 'I',
  },
];

export const players: Player[] = [
    { id: 'player-1', name: 'Alex', score: 1250, avatar: 'A' },
    { id: 'player-2', name: 'Mia', score: 1100, avatar: 'M' },
    { id: 'player-3', name: 'Chris', score: 950, avatar: 'C' },
    { id: 'player-4', name: 'Nina', score: 800, avatar: 'N' },
    { id: 'player-5', name: 'Leo', score: 750, avatar: 'L' },
];
