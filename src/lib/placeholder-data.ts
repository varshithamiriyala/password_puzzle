import type { Puzzle, Player } from './types';

export const PASSWORD = "CIPHER";

export const puzzles: Puzzle[] = [
  {
    id: 'puzzle-1',
    type: 'math',
    title: 'Round 1: Logic Clue',
    puzzle: 'A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, "Brothers and sisters I have none, but that man\'s father is my father\'s son." Who is in the portrait?',
    hint: 'Think about the relationship between "my father\'s son" and the speaker.',
    solution: 'his son',
    passwordChar: 'C',
  },
  {
    id: 'puzzle-2',
    type: 'pattern',
    title: 'Round 2: Pattern Recognition',
    puzzle: 'What comes next in the sequence: 1, 1, 2, 3, 5, 8, ?',
    hint: 'This is a very famous mathematical sequence named after an Italian mathematician.',
    solution: '13',
    passwordChar: 'I',
  },
  {
    id: 'puzzle-3',
    type: 'coding',
    title: 'Round 3: Number Systems',
    puzzle: 'What is the hexadecimal representation of the decimal number 255?',
    hint: 'Hexadecimal is base-16. It uses digits 0-9 and letters A-F.',
    solution: 'FF',
    passwordChar: 'P',
  },
  {
    id: 'puzzle-4',
    type: 'cipher',
    title: 'Round 4: Cryptography',
    puzzle: 'The following message was encrypted with a Caesar cipher (shift +5). Decode the message: MJQQT BTWQI',
    hint: 'To decode, you need to shift each letter backward by 5 positions in the alphabet.',
    solution: 'HELLO WORLD',
    passwordChar: 'H',
  },
  {
    id: 'puzzle-5',
    type: 'coding',
    title: 'Round 5 (Part 1): Data Structures',
    puzzle: 'You have a stack data structure. If you perform the following operations in order: PUSH(5), PUSH(8), POP, PUSH(3), PUSH(9), POP, what is the value at the top of the stack?',
    hint: 'A stack follows the Last-In, First-Out (LIFO) principle.',
    solution: '3',
    passwordChar: 'E',
  },
  {
    id: 'puzzle-6',
    type: 'math',
    title: 'Round 5 (Part 2): Logical Deduction',
    puzzle: 'There are three boxes. One contains only apples, one contains only oranges, and one contains both. Each box is incorrectly labeled. If you can only pick one fruit from one box (without looking inside), from which box do you pick to be able to label all boxes correctly?',
    hint: 'Pick from the box that claims to have both. The fruit you pick will tell you what that box *actually* contains.',
    solution: 'apples and oranges box',
    passwordChar: 'R',
  },
];

export const players: Player[] = [
    { id: 'player-1', name: 'Alex', score: 1250, avatar: 'A' },
    { id: 'player-2', name: 'Mia', score: 1100, avatar: 'M' },
    { id: 'player-3', name: 'Chris', score: 950, avatar: 'C' },
    { id: 'player-4', name: 'Nina', score: 800, avatar: 'N' },
    { id: 'player-5', name: 'Leo', score: 750, avatar: 'L' },
];
