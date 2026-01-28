import type { Puzzle, Player } from './types';

export const PASSWORD = "GENKI";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'math',
    title: 'Simple Sum',
    puzzle: 'I am a number between 1 and 10. If you add me to 5, you get 9. What number am I?',
    hint: 'What number plus 5 equals 9?',
    solution: '4',
    passwordChar: 'G',
  },
  {
    id: 'puzzle-2',
    type: 'pattern',
    title: 'Color Sequence',
    puzzle: 'What comes next in the pattern: Red, Blue, Red, Blue, ...?',
    hint: 'The pattern repeats every two colors.',
    solution: 'Red',
    passwordChar: 'E',
  },
  {
    id: 'puzzle-3',
    type: 'cipher',
    title: 'Reverse Alphabet',
    puzzle: 'If A=Z, B=Y, and C=X, what word does "SVOO" represent?',
    hint: 'Each letter is replaced by its opposite in the alphabet.',
    solution: 'HELLO',
    passwordChar: 'N',
  },
  {
    id: 'puzzle-4',
    type: 'coding',
    title: 'The Computer\'s Brain',
    puzzle: 'What three-letter acronym is often called the "brain" of a computer?',
    hint: 'It performs most of the processing inside a computer.',
    solution: 'CPU',
    passwordChar: 'K',
  },
  {
    id: 'puzzle-5',
    type: 'math',
    title: 'Bat and Ball',
    puzzle: 'A bat and a ball cost 110 cents in total. The bat costs 100 cents more than the ball. How many cents does the ball cost?',
    hint: 'It\'s not 10 cents! Let B be the cost of the bat and C be the cost of the ball. B + C = 110 and B = C + 100.',
    solution: '5',
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
