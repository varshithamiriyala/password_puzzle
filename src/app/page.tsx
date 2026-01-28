"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/app/Header";
import { PasswordDisplay } from "@/components/app/PasswordDisplay";
import { Scoreboard } from "@/components/app/Scoreboard";
import { PuzzleCard } from "@/components/app/PuzzleCard";
import { puzzles as allPuzzles } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Confetti } from "@/components/app/Confetti";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Star, ChevronsRight } from "lucide-react";

const TOTAL_TIME = 600; // 10 minutes

export default function Home() {
  const [solvedPuzzles, setSolvedPuzzles] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  const allPuzzlesSolved =
    allPuzzles.length > 0 && solvedPuzzles.length === allPuzzles.length;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameOver(true);
            setGameStarted(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (allPuzzlesSolved) {
      setShowConfetti(true);
      setGameOver(true);
      setGameStarted(false);
    }
  }, [allPuzzlesSolved]);

  const handleSolve = (puzzleId: string) => {
    if (!solvedPuzzles.includes(puzzleId)) {
      setSolvedPuzzles((prev) => [...prev, puzzleId]);
      setScore((prev) => prev + 100 + Math.floor(timeLeft / 10)); // Add time bonus
    }
  };

  const handleIncorrect = () => {
    setScore((prev) => Math.max(0, prev - 10));
  };

  const isPuzzleSolved = (puzzleId: string) => solvedPuzzles.includes(puzzleId);

  const resetGame = () => {
    setSolvedPuzzles([]);
    setShowConfetti(false);
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(TOTAL_TIME);
  };

  const startGame = () => {
    resetGame();
    setGameStarted(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

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

              {!gameStarted && !gameOver && (
                <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary bg-card p-8 text-center">
                  <h2 className="font-headline text-2xl font-bold text-primary">
                    Ready to Play?
                  </h2>
                  <p className="text-muted-foreground">
                    You have {TOTAL_TIME / 60} minutes to solve{" "}
                    {allPuzzles.length} puzzles. Good luck!
                  </p>
                  <Button onClick={startGame} size="lg">
                    Start Game
                  </Button>
                </div>
              )}

              {gameOver && (
                <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary bg-card p-8 text-center">
                  <h2 className="font-headline text-2xl font-bold text-primary">
                    {allPuzzlesSolved ? "Congratulations!" : "Game Over"}
                  </h2>
                  <p className="text-muted-foreground">
                    {allPuzzlesSolved
                      ? "You've unlocked the final password!"
                      : "Time's up!"}
                  </p>
                  <p className="text-xl font-bold">Your final score: {score}</p>
                  <Button onClick={resetGame}>Play Again</Button>
                </div>
              )}
            </div>
            <div className="row-start-1 flex flex-col gap-8 md:col-start-2">
              {(gameStarted || gameOver) && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-headline text-xl">
                      Game Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-around gap-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2 text-2xl font-bold">
                        <Timer className="h-6 w-6 text-primary" />
                        {formatTime(timeLeft)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Time Left
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2 text-2xl font-bold">
                        <Star className="h-6 w-6 text-amber-400" />
                        {score}
                      </div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2 text-2xl font-bold">
                        <ChevronsRight className="h-6 w-6 text-accent" />
                        {solvedPuzzles.length} / {allPuzzles.length}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Rounds
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              <Scoreboard />
            </div>
          </div>

          {gameStarted && !gameOver && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allPuzzles.map((puzzle, index) => (
                <PuzzleCard
                  key={puzzle.id}
                  puzzle={puzzle}
                  onSolve={handleSolve}
                  onIncorrect={handleIncorrect}
                  isSolved={isPuzzleSolved(puzzle.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-reveal"
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
