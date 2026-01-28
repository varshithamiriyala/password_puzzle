import { Header } from "@/components/app/Header";
import { AdminPuzzleGenerator } from "@/components/app/AdminPuzzleGenerator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
             <Button asChild variant="outline" size="icon">
                <Link href="/"><ArrowLeft className="h-4 w-4" /></Link>
             </Button>
             <h1 className="font-headline text-3xl font-bold tracking-tight">
                Puzzle Generator
             </h1>
          </div>
          <AdminPuzzleGenerator />
        </div>
      </main>
    </div>
  );
}
