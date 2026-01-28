import type { Puzzle, Player } from './types';

export const PASSWORD = "ALGORITH";

export const puzzles: Puzzle[] = [
  // Round 1
  {
    id: 'puzzle-1',
    type: 'logic',
    title: 'Round 1: Word Sum',
    puzzle: 'If A = 1, B = 2, … Z = 26, what is the sum of the letters in the word CODE?',
    hint: 'C is the 3rd letter, O is the 15th, and so on.',
    solution: ['37', 'thirty-seven'],
    passwordChar: 'A',
  },
  {
    id: 'puzzle-2',
    type: 'pattern',
    title: 'Round 1: Number Series',
    puzzle: 'Find the missing number in the series: 2, 6, 12, 20, ?',
    hint: 'The difference between consecutive numbers is increasing by 2.',
    solution: ['30', 'thirty'],
    passwordChar: 'L',
  },
  {
    id: 'puzzle-3',
    type: 'coding',
    title: 'Round 1: Binary Conversion',
    puzzle: 'Convert the binary number 1010 into decimal.',
    hint: 'Each digit represents a power of 2, starting from the right (2^0, 2^1, ...).',
    solution: ['10', 'ten'],
    passwordChar: 'G',
  },
  {
    id: 'puzzle-4',
    type: 'cipher',
    title: 'Round 1: Caesar Cipher',
    puzzle: 'Decode this using Caesar Cipher (shift +1): QBTTXPSE',
    hint: 'Shift each letter backward by one position in the alphabet.',
    solution: ['PASSWORD', 'password'],
    passwordChar: 'O',
  },
  // Round 2
  {
    id: 'puzzle-5',
    type: 'logic',
    title: 'Round 2: The 3-Digit Number',
    puzzle: 'I am a 3-digit number. The sum of my digits is 15. The tens digit is 3 more than the ones digit. The hundreds digit is 2 less than the tens digit. What number am I?',
    hint: 'Set up equations for the relationships between the digits.',
    solution: ['784', 'seven hundred eighty-four'],
    passwordChar: 'R',
  },
  {
    id: 'puzzle-6',
    type: 'coding',
    title: 'Round 2: Data Structures',
    puzzle: 'In a queue data structure, what principle is followed?',
    hint: 'Think about how people line up for something.',
    solution: ['FIFO', 'First-In, First-Out', 'first in first out'],
    passwordChar: 'I',
  },
  {
    id: 'puzzle-7',
    type: 'coding',
    title: 'Round 2: Big O Complexity',
    puzzle: 'What is the worst-case time complexity for a linear search?',
    hint: 'Consider the case where the element is at the very end of the list, or not in the list at all.',
    solution: ['O(n)', 'O n', 'linear'],
    passwordChar: 'T',
  },
  {
    id: 'puzzle-8',
    type: 'pattern',
    title: 'Round 2: Letter Sequence',
    puzzle: 'What is the next letter in this sequence: J, F, M, A, M, ?',
    hint: 'Think about the calendar.',
    solution: ['J', 'j'],
    passwordChar: 'H',
  },
];

export const players: Player[] = [
    { id: 'player-1', name: 'Alex', score: 1250, avatar: 'A' },
    { id: 'player-2', name: 'Mia', score: 1100, avatar: 'M' },
    { id: 'player-3', name: 'Chris', score: 950, avatar: 'C' },
    { id: 'player-4', name: 'Nina', score: 800, avatar: 'N' },
    { id: 'player-5', name: 'Leo', score: 750, avatar: 'L' },
];
