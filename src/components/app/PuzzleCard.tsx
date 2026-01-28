"use client";

import React, { useState, FormEvent } from "react";
import type { Puzzle } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PuzzleIcon } from "./PuzzleIcon";
import { cn } from "@/lib/utils";
import { Lightbulb, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PuzzleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  puzzle: Puzzle;
  onSolve: (puzzleId: string) => void;
  onIncorrect: () => void;
  isSolved: boolean;
}

export function PuzzleCard({
  puzzle,
  onSolve,
  onIncorrect,
  isSolved,
  className,
  ...props
}: PuzzleCardProps) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null
  );
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSolved) return;

    const userAnswer = answer.trim().toLowerCase();
    let isCorrect = false;

    if (Array.isArray(puzzle.solution)) {
      isCorrect = puzzle.solution.some(
        (sol) => sol.toLowerCase() === userAnswer
      );
    } else {
      isCorrect = userAnswer === puzzle.solution.toLowerCase();
    }

    if (isCorrect) {
      setFeedback("correct");
      onSolve(puzzle.id);
      toast({
        title: "Correct!",
        description: `You've revealed a piece of the password.`,
      });
    } else {
      setFeedback("incorrect");
      onIncorrect();
      setTimeout(() => setFeedback(null), 1500);
      toast({
        variant: "destructive",
        title: "Incorrect",
        description: "That's not the right answer. Try again!",
      });
    }
  };

  return (
    <Card
      className={cn(
        "flex flex-col transition-all",
        isSolved && "border-green-500/50 bg-green-500/5",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="font-headline flex items-center gap-3 pr-4">
            <PuzzleIcon type={puzzle.type} className="h-6 w-6 text-accent" />
            {puzzle.title}
          </CardTitle>
          {isSolved && (
            <div className="flex items-center gap-2 text-sm font-medium text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span>Solved</span>
            </div>
          )}
        </div>
        <CardDescription>{puzzle.puzzle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" disabled={isSolved}>
              <Lightbulb className="mr-2 h-4 w-4" />
              Need a hint?
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 rounded-md border border-accent/20 bg-accent/10 p-3 text-sm text-accent-foreground/80">
              {puzzle.hint}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            type="text"
            placeholder="Your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isSolved}
            className={cn(
              feedback === "incorrect" &&
                "border-destructive focus-visible:ring-destructive"
            )}
          />
          <Button type="submit" disabled={isSolved}>
            {isSolved ? "Solved" : "Submit"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
