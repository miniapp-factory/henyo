"use client";
import { Button } from "@/components/ui/button";

const heroDescriptions: Record<string, string> = {
  "Jose Rizal":
    "Jose Rizal was a Filipino nationalist, writer, and key figure in the Philippine Revolution.",
  "Andres Bonifacio":
    "Andres Bonifacio was a revolutionary leader who founded the Katipunan and fought for Philippine independence.",
  "Gabriela Silang":
    "Gabriela Silang was a heroine who led a revolt against Spanish colonial rule in the 18th century.",
};

export default function HeroResult({
  hero,
  score,
}: {
  hero: string;
  score: number;
}) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold">You resemble {hero}!</h2>
      <p className="text-center">{heroDescriptions[hero]}</p>
      <p className="text-lg">Your score: {score}</p>
      <Button onClick={() => window.location.reload()}>Play Again</Button>
    </div>
  );
}
