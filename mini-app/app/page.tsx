"use client";
import { useState } from "react";
import CategorySelection from "@/components/trivia/CategorySelection";
import TriviaRound from "@/components/trivia/TriviaRound";
import HeroResult from "@/components/trivia/HeroResult";

export default function Home() {
  const [category, setCategory] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [hero, setHero] = useState<string | null>(null);

  const handleComplete = (s: number, h: string) => {
    setScore(s);
    setHero(h);
  };

  return (
    <main className="flex flex-col gap-4 items-center p-4 bg-yellow-100 min-h-screen">
      <h1 className="text-3xl font-bold">Filipino Trivia Bayani</h1>
      {!category ? (
        <CategorySelection onSelect={setCategory} />
      ) : score !== null && hero !== null ? (
        <HeroResult hero={hero} score={score} />
      ) : (
        <TriviaRound
          category={category}
          onComplete={handleComplete}
        />
      )}
    </main>
  );
}
