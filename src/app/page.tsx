"use client";

import React, { useState } from "react";
import { Header } from "@/components/app/Header";
import { PasswordDisplay } from "@/components/app/PasswordDisplay";
import { Scoreboard } from "@/components/app/Scoreboard";
import { PuzzleCard } from "@/components/app/PuzzleCard";
import { puzzles as allPuzzles } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Confetti } from "@/components/app/Confetti";

export default function Home() {
  const [solvedPuzzles, setSolvedPuzzles] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSolve = (puzzleId: string) => {
    setSolvedPuzzles((prev) => {
      const newSolved = [...new Set([...prev, puzzleId])];
      if (newSolved.length === allPuzzles.length) {
        setShowConfetti(true);
      }
      return newSolved;
    });
  };

  const isPuzzleSolved = (puzzleId: string) => solvedPuzzles.includes(puzzleId);
  const allPuzzlesSolved = solvedPuzzles.length === allPuzzles.length;

  const resetGame = () => {
    setSolvedPuzzles([]);
    setShowConfetti(false);
  }

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <h1 className="font-headline text-3xl font-bold tracking-tight">
              The Challenge
            </h1>
            <Button asChild variant="outline">
              <Link href="/admin">Admin Panel</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-[1fr_350px]">
            <div className="flex flex-col gap-8">
              <PasswordDisplay solvedPuzzles={solvedPuzzles} />
              {allPuzzlesSolved && (
                 <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary bg-card p-8 text-center">
                    <h2 className="font-headline text-2xl font-bold text-primary">Congratulations!</h2>
                    <p className="text-muted-foreground">You've unlocked the final password!</p>
                    <Button onClick={resetGame}>Play Again</Button>
                 </div>
              )}
            </div>
            <div className="row-start-1 md:col-start-2">
              <Scoreboard />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allPuzzles.map((puzzle, index) => (
              <PuzzleCard
                key={puzzle.id}
                puzzle={puzzle}
                onSolve={handleSolve}
                isSolved={isPuzzleSolved(puzzle.id)}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-reveal"
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
