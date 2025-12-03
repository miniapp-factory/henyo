"use client";
import { Button } from "@/components/ui/button";

export const difficulties = ["Easy", "Medium", "Hard"];

export default function DifficultySelection({
  onSelect,
}: {
  onSelect: (diff: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Select Difficulty</h2>
      {difficulties.map((diff) => (
        <Button key={diff} onClick={() => onSelect(diff)}>
          {diff}
        </Button>
      ))}
    </div>
  );
}
