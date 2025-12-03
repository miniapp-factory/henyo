"use client";
import { Button } from "@/components/ui/button";

export const categories = ["Philippine History"];

export default function CategorySelection({
  onSelect,
}: {
  onSelect: (cat: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Select a Category</h2>
      {categories.map((cat) => (
        <Button key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </Button>
      ))}
    </div>
  );
}
