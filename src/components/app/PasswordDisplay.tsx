import { PASSWORD } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Puzzle } from "@/lib/types";

interface PasswordDisplayProps {
  solvedPuzzles: string[];
  puzzles: Puzzle[];
}

export function PasswordDisplay({ solvedPuzzles, puzzles }: PasswordDisplayProps) {
  const solvedChars = new Map<string, string>();
  puzzles.forEach(p => {
    if (solvedPuzzles.includes(p.id)) {
      solvedChars.set(p.passwordChar, p.id);
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Password Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-2 sm:gap-4">
          {PASSWORD.split("").map((char, index) => {
            const isRevealed = solvedChars.has(char);
            return (
              <div
                key={index}
                className={cn(
                  "flex h-16 w-12 items-center justify-center rounded-lg border text-2xl font-bold transition-all duration-500",
                  isRevealed
                    ? "border-primary bg-primary/20 text-primary shadow-[0_0_15px_hsl(var(--primary))]"
                    : "bg-muted text-muted-foreground"
                )}
                style={{
                  animationDelay: isRevealed ? '0s' : '0ms'
                }}
              >
                {isRevealed ? char : "?"}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
