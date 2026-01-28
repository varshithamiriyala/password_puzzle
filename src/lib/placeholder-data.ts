import type { Puzzle, Player } from './types';

export const PASSWORD = "LOGIC";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'math',
    title: 'Round 1: Logic Clue',
    puzzle: 'If A = 1, B = 2, … Z = 26, what is the sum of the letters in the word CODE?',
    hint: 'Add the value of each letter together.',
    solution: '27',
    passwordChar: 'L',
  },
  {
    id: 'puzzle-2',
    type: 'pattern',
    title: 'Round 2: Pattern Clue',
    puzzle: 'Find the missing number in the series: 2, 6, 12, 20, ?',
    hint: 'The difference between consecutive numbers increases by 2 each time.',
    solution: '30',
    passwordChar: 'O',
  },
  {
    id: 'puzzle-3',
    type: 'coding',
    title: 'Round 3: Technical Clue (Binary)',
    puzzle: 'Convert the binary number 1010 into decimal.',
    hint: 'Each digit represents a power of 2, starting from the right (2^0).',
    solution: '10',
    passwordChar: 'G',
  },
  {
    id: 'puzzle-4',
    type: 'cipher',
    title: 'Round 4: Cipher Clue',
    puzzle: 'Decode this using Caesar Cipher (shift +1): DPEG',
    hint: 'To decode, you need to shift each letter backward by one position in the alphabet.',
    solution: 'CODE',
    passwordChar: 'I',
  },
  {
    id: 'puzzle-5',
    type: 'math',
    title: 'Round 5: Logical Reasoning',
    puzzle: 'I am a 3-digit number. The sum of my digits is 12. The tens digit is 1 more than the ones digit. The hundreds digit is 2 less than the tens digit. What number am I?',
    hint: 'Set up equations for the relationships between the digits.',
    solution: '354',
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
