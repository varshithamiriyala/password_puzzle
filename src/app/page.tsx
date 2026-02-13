"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/app/Header";
import { PasswordDisplay } from "@/components/app/PasswordDisplay";
import { PuzzleCard } from "@/components/app/PuzzleCard";
import { puzzles as initialPuzzles } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/app/Confetti";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Timer, Star, ChevronsRight, Info, LogOut } from "lucide-react";
import type { Puzzle } from "@/lib/types";

const TOTAL_TIME = 600; // 10 minutes

const shuffle = (array: Puzzle[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function Home() {
  const [puzzles, setPuzzles] = useState<Puzzle[]>(() => shuffle(initialPuzzles));
  const [solvedPuzzles, setSolvedPuzzles] = useState<string[]>([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  const allPuzzlesSolved =
    puzzles.length > 0 && solvedPuzzles.length === puzzles.length;

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

  const handleSolve = (puzzleId: string) => {
    if (!solvedPuzzles.includes(puzzleId)) {
      const newSolvedPuzzles = [...solvedPuzzles, puzzleId];
      setSolvedPuzzles(newSolvedPuzzles);
      setScore((prev) => prev + 100 + Math.floor(timeLeft / 10)); // Add time bonus

      if (newSolvedPuzzles.length === puzzles.length) {
        setShowConfetti(true);
        setGameOver(true);
        setGameStarted(false);
      } else {
        setCurrentPuzzleIndex((prev) => prev + 1);
      }
    }
  };

  const handleIncorrect = () => {
    setScore((prev) => Math.max(0, prev - 10));
  };

  const isPuzzleSolved = (puzzleId: string) => solvedPuzzles.includes(puzzleId);

  const resetGame = () => {
    setPuzzles(shuffle(initialPuzzles));
    setSolvedPuzzles([]);
    setCurrentPuzzleIndex(0);
    setShowConfetti(false);
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(TOTAL_TIME);
  };
  
  const exitGame = () => {
    setPuzzles(initialPuzzles);
    setSolvedPuzzles([]);
    setCurrentPuzzleIndex(0);
    setShowConfetti(false);
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(TOTAL_TIME);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const currentPuzzle = puzzles[currentPuzzleIndex];
  const round = Math.floor(currentPuzzleIndex / 4) + 1;

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="grid-bg flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <h1 className="font-headline text-3xl font-bold tracking-tight">
              The Challenge
            </h1>
          </div>
          
          {!gameStarted && !gameOver && (
            <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
              <PasswordDisplay solvedPuzzles={[]} puzzles={puzzles} />
              <Card className="max-w-2xl animate-reveal text-left">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                    <Info className="h-6 w-6 text-primary" />
                    Welcome to the Password Puzzle!
                  </CardTitle>
                  <CardDescription>
                    Your mission: Unravel cryptic puzzles to reveal the secret password.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="font-medium text-foreground/90">
                    Here&apos;s your briefing:
                  </p>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      <strong>Two Rounds, Eight Puzzles:</strong> The challenge is split into two rounds, each with four puzzles. The difficulty increases in the second round.
                    </li>
                    <li>
                      <strong>Start the Clock:</strong> You have{" "}
                      <strong>{TOTAL_TIME / 60} minutes</strong> to solve all{" "}
                      {initialPuzzles.length} puzzles. The timer begins when you click &quot;Start The Challenge!&quot;.
                    </li>
                    <li>
                      <strong>Solve to Reveal:</strong> Each correct solution unveils one character of the final 8-character password and moves you to the next puzzle.
                    </li>
                    <li>
                      <strong>Score Points:</strong> Earn points for every correct answer, plus a time bonus for speed! Be warned: incorrect guesses will deduct points.
                    </li>
                    <li>
                      <strong>Claim Victory:</strong> Solve all puzzles before the timer hits zero to crack the password and win!
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center gap-4 animate-reveal" style={{animationDelay: '200ms'}}>
                <h2 className="font-headline text-2xl font-bold">
                  Ready to test your wits?
                </h2>
                <Button onClick={resetGame} size="lg" className="btn-glow-pulse">
                  Start The Challenge!
                </Button>
              </div>
            </div>
          )}
          
          {(gameStarted || gameOver) && (
            <>
              <div className="grid gap-8 md:grid-cols-[1fr_350px]">
                <div className="flex flex-col gap-8">
                  <PasswordDisplay solvedPuzzles={solvedPuzzles} puzzles={puzzles} />
                  
                  {gameOver && (
                    <div className="animate-reveal flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary bg-card p-8 text-center">
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

                  {gameStarted && !gameOver && currentPuzzle && (
                     <div className="flex justify-center">
                        <PuzzleCard
                          key={currentPuzzle.id}
                          puzzle={currentPuzzle}
                          onSolve={handleSolve}
                          onIncorrect={handleIncorrect}
                          isSolved={isPuzzleSolved(currentPuzzle.id)}
                          round={round}
                          className="animate-reveal w-full max-w-lg"
                        />
                      </div>
                  )}
                </div>
                <div className="row-start-1 flex flex-col gap-8 md:col-start-2">
                    <Card className="animate-reveal">
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
                            {solvedPuzzles.length} / {puzzles.length}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Puzzles
                          </div>
                        </div>
                      </CardContent>
                      {gameStarted && !gameOver && (
                        <CardFooter>
                          <Button
                            onClick={exitGame}
                            variant="outline"
                            className="w-full"
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            Exit Game
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                </div>
              </div>
            </>
          )}

        </main>
      </div>
    </>
  );
}
