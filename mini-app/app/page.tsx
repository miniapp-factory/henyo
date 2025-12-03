"use client";
import { useState } from "react";
import { PointsProvider } from "@/components/trivia/PointsContext";
import CategorySelection from "@/components/trivia/CategorySelection";
import TriviaRound from "@/components/trivia/TriviaRound";
import PlayToEarn from "@/components/trivia/PlayToEarn";
import LearningMode from "@/components/trivia/LearningMode";

export default function Home() {
  const [category, setCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState(3);
  const [score, setScore] = useState<number | null>(null);

  const handleComplete = (s: number, total: number) => {
    setScore(s);
    const newDiff = s / total > 0.7 ? difficulty + 1 : difficulty - 1;
    setDifficulty(Math.max(1, Math.min(5, newDiff)));
  };

  return (
    <PointsProvider>
      <main className="flex flex-col gap-4 items-center p-4">
        <h1 className="text-3xl font-bold">Filipino Trivia Bayani</h1>
        <PlayToEarn />
        <LearningMode />
        {!category ? (
          <CategorySelection onSelect={setCategory} />
        ) : score !== null ? (
          <div className="text-center">
            <p>
              You scored {score} out of {difficulty}
            </p>
            <button
              onClick={() => {
                setScore(null);
                setCategory(null);
              }}
              className="mt-2 px-4 py-2 bg-primary text-white rounded"
            >
              Play Again
            </button>
          </div>
        ) : (
          <TriviaRound
            category={category}
            difficulty={difficulty}
            onComplete={handleComplete}
          />
        )}
      </main>
    </PointsProvider>
  );
}
