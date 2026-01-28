import type { Puzzle, Player } from './types';

export const PASSWORD = "LOGIC";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'math',
    title: 'Round 1: The Even Oddity',
    puzzle: 'I am an odd number. Take away a letter and I become even. What number am I?',
    hint: 'Think about the spelling of numbers.',
    solution: 'Seven',
    passwordChar: 'L',
  },
  {
    id: 'puzzle-2',
    type: 'pattern',
    title: 'Round 2: The Family Riddle',
    puzzle: "David's father has three sons: Snap, Crackle, and...?",
    hint: 'Read the question carefully.',
    solution: 'David',
    passwordChar: 'O',
  },
  {
    id: 'puzzle-3',
    type: 'cipher',
    title: 'Round 3: The Fragile Item',
    puzzle: "What has to be broken before you can use it?",
    hint: 'It’s often part of breakfast.',
    solution: 'Egg',
    passwordChar: 'G',
  },
  {
    id: 'puzzle-4',
    type: 'coding',
    title: 'Round 4: The Unseen Presence',
    puzzle: 'What is always in front of you but can’t be seen?',
    hint: 'It is a concept of time.',
    solution: 'The future',
    passwordChar: 'I',
  },
  {
    id: 'puzzle-5',
    type: 'pattern',
    title: 'Round 5: The Porous Paradox',
    puzzle: 'What is full of holes but still holds water?',
    hint: 'You might use it in the kitchen or for washing a car.',
    solution: 'Sponge',
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
