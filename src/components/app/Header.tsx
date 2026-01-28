import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <Link href="/" className="flex items-center gap-2">
        <BrainCircuit className="h-6 w-6 text-primary" />
        <span className="font-headline text-lg font-bold">Password Puzzle</span>
      </Link>
    </header>
  );
}
