'use server';
/**
 * @fileOverview AI-powered puzzle generator that adapts to team performance.
 *
 * - generateAdaptivePuzzles - A function to generate puzzles based on team performance.
 * - GenerateAdaptivePuzzlesInput - The input type for the generateAdaptivePuzzles function.
 * - GenerateAdaptivePuzzlesOutput - The return type for the generateAdaptivePuzzles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PuzzleType = z.enum(['math', 'pattern', 'coding', 'cipher']);

const GenerateAdaptivePuzzlesInputSchema = z.object({
  teamPerformance: z
    .number()
    .describe(
      'A numerical representation of the team performance (e.g., average score, completion rate).'
    ),
  currentLevel: z
    .number()
    .describe('The current level the team is playing. Start from level 1.'),
  puzzleType: z.optional(PuzzleType).describe('The type of puzzle to generate. Optional.'),
  numberOfPuzzles: z
    .number()
    .describe('The number of puzzles to generate for the current level.')
    .default(3),
});
export type GenerateAdaptivePuzzlesInput = z.infer<
  typeof GenerateAdaptivePuzzlesInputSchema
>;

const GenerateAdaptivePuzzlesOutputSchema = z.object({
  puzzles: z.array(
    z.object({
      puzzle: z.string().describe('The generated puzzle.'),
      solution: z.string().describe('The solution to the generated puzzle.'),
      type: PuzzleType.describe('The type of the puzzle.'),
    })
  ),
  difficulty: z
    .string()
    .describe('The difficulty level of the generated puzzles (easy, medium, hard).'),
});
export type GenerateAdaptivePuzzlesOutput = z.infer<
  typeof GenerateAdaptivePuzzlesOutputSchema
>;

export async function generateAdaptivePuzzles(
  input: GenerateAdaptivePuzzlesInput
): Promise<GenerateAdaptivePuzzlesOutput> {
  return generateAdaptivePuzzlesFlow(input);
}

const puzzleGeneratorPrompt = ai.definePrompt({
  name: 'puzzleGeneratorPrompt',
  input: {schema: GenerateAdaptivePuzzlesInputSchema},
  output: {schema: GenerateAdaptivePuzzlesOutputSchema},
  prompt: `You are an expert puzzle generator who can create puzzles of varying difficulties based on team performance.

You will receive the team's performance score, the current level they are playing, the desired puzzle type, and the number of puzzles to generate.  Based on this information, generate a set of puzzles that are appropriate for the team's skill level.

Team Performance: {{{teamPerformance}}}
Current Level: {{{currentLevel}}}
Number of Puzzles: {{{numberOfPuzzles}}}
Puzzle Type: {{puzzleType}}

Consider these factors when determining the puzzle difficulty:

*   A higher team performance score indicates that the team can handle more challenging puzzles. Increase the difficulty accordingly.
*   The current level also influences the difficulty. As the team progresses through the levels, the puzzles should become more complex.
*   For a team performance score below 30, puzzles should be easy. Team performance score between 30 and 70, puzzles should be medium. Team performance score above 70, puzzles should be hard.

Generate {{numberOfPuzzles}} puzzles of type {{puzzleType}}, returning the puzzle and solution for each puzzle in JSON format:

{{ puzzles: [{puzzle: string, solution: string, type: string}], difficulty: string}}`,
});

const generateAdaptivePuzzlesFlow = ai.defineFlow(
  {
    name: 'generateAdaptivePuzzlesFlow',
    inputSchema: GenerateAdaptivePuzzlesInputSchema,
    outputSchema: GenerateAdaptivePuzzlesOutputSchema,
  },
  async input => {
    const {output} = await puzzleGeneratorPrompt(input);
    return output!;
  }
);
