"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  generateAdaptivePuzzles,
  GenerateAdaptivePuzzlesOutput,
} from "@/ai/flows/generate-adaptive-puzzles";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PuzzleIcon } from "./PuzzleIcon";
import { Wand2, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const puzzleTypes = z.enum(["math", "pattern", "coding", "cipher"]);

const FormSchema = z.object({
  teamPerformance: z.number().min(0).max(100),
  currentLevel: z.number().min(1),
  puzzleType: puzzleTypes,
  numberOfPuzzles: z.number().min(1).max(5),
});

export function AdminPuzzleGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateAdaptivePuzzlesOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamPerformance: 50,
      currentLevel: 1,
      puzzleType: "math",
      numberOfPuzzles: 3,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const puzzles = await generateAdaptivePuzzles(data);
      setResult(puzzles);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate puzzles. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">AI Generation Controls</CardTitle>
          <CardDescription>Adjust the parameters to generate a new set of puzzles for your players.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="teamPerformance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Performance ({field.value})</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={[field.value]}
                        onValueChange={(vals) => field.onChange(vals[0])}
                      />
                    </FormControl>
                    <FormDescription>
                      A score representing team skill. Higher is more difficult.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                 <FormField
                  control={form.control}
                  name="currentLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Level</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 1)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="puzzleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Puzzle Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a puzzle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {puzzleTypes.options.map((type) => (
                            <SelectItem key={type} value={type} className="capitalize">{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfPuzzles"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Puzzles</FormLabel>
                       <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 1)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full md:w-auto">
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Puzzles
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {result && (
        <div className="space-y-4">
            <h2 className="font-headline text-2xl font-bold">Generated Puzzles</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Difficulty: <span className="text-primary capitalize">{result.difficulty}</span></CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {result.puzzles.map((p, index) => (
                        <div key={index}>
                             <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <PuzzleIcon type={p.type} className="h-5 w-5 text-accent"/>
                                    Puzzle {index + 1} <span className="text-sm capitalize text-muted-foreground">({p.type})</span>
                                </h3>
                                <p className="text-muted-foreground">{p.puzzle}</p>
                                <p><span className="font-medium">Solution:</span> <span className="font-mono p-1 rounded bg-muted text-sm">{p.solution}</span></p>
                            </div>
                            {index < result.puzzles.length - 1 && <Separator className="mt-6" />}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
