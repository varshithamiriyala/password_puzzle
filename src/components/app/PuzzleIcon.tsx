import type { PuzzleType } from '@/lib/types';
import { Sigma, Shapes, CodeXml, KeyRound } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const iconMap: Record<PuzzleType, React.ElementType> = {
  math: Sigma,
  pattern: Shapes,
  coding: CodeXml,
  cipher: KeyRound,
};

interface PuzzleIconProps extends LucideProps {
  type: PuzzleType;
}

export function PuzzleIcon({ type, ...props }: PuzzleIconProps) {
  const Icon = iconMap[type];
  return <Icon {...props} />;
}
