export type PuzzleType = 'math' | 'pattern' | 'coding' | 'cipher';

export type Puzzle = {
  id: string;
  type: PuzzleType;
  title: string;
  puzzle: string;
  hint: string;
  solution: string | string[];
  passwordChar: string;
};

export type Player = {
  id: string;
  name: string;
  score: number;
  avatar: string;
};
