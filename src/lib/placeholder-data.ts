import type { Puzzle, Player } from './types';

export const PASSWORD = "GENKI";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'pattern',
    title: 'Round 1: The Needle',
    puzzle: 'I have an eye, but I cannot see. What am I?',
    hint: 'I am often used for sewing.',
    solution: 'Needle',
    passwordChar: 'G',
  },
  {
    id: 'puzzle-2',
    type: 'cipher',
    title: 'Round 2: The World in Your Hands',
    puzzle: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
    hint: 'You might use me to plan a trip.',
    solution: 'Map',
    passwordChar: 'E',
  },
  {
    id: 'puzzle-3',
    type: 'math',
    title: 'Round 3: A Matter of Time',
    puzzle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    hint: 'Focus on the spelling of the words.',
    solution: 'M',
    passwordChar: 'N',
  },
  {
    id: 'puzzle-4',
    type: 'coding',
    title: 'Round 4: The Sound of Silence',
    puzzle: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
    hint: 'I am a repetition of a sound.',
    solution: 'Echo',
    passwordChar: 'K',
  },
  {
    id: 'puzzle-5',
    type: 'pattern',
    title: 'Round 5: The Monthly Riddle',
    puzzle: "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    hint: 'Think about the letters that make up the words.',
    solution: 'R',
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
