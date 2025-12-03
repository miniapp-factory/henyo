"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: "Who was the first president of the Philippines?",
    options: [
      "Manuel L. Quezon",
      "Jose P. Laurel",
      "Elpidio Quirino",
      "Ferdinand Marcos",
    ],
    answer: "Manuel L. Quezon",
  },
  {
    question: "What year did the Philippines gain independence?",
    options: ["1945", "1946", "1947", "1948"],
    answer: "1946",
  },
  {
    question: "Which event is known as the 'Eruption of 1906'?",
    options: [
      "Mount Pinatubo",
      "Mount Mayon",
      "Mount Taal",
      "Mount Mayon",
    ],
    answer: "Mount Pinatubo",
  },
  {
    question: "What is the traditional Filipino dance that involves handkerchiefs?",
    options: ["Tinikling", "Singkil", "Pandanggo", "Kalinga"],
    answer: "Tinikling",
  },
  {
    question: "Which island is the largest in the Philippines?",
    options: ["Mindanao", "Luzon", "Visayas", "Palawan"],
    answer: "Luzon",
  },
];

export default function TriviaRound({
  category,
  onComplete,
}: {
  category: string;
  onComplete: (score: number, hero: string) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);
    setSelected(null);
    if (current + 1 < questions.length) setCurrent((c) => c + 1);
    else {
      const hero =
        score + (selected === questions[current].answer ? 1 : 0) >= 4
          ? "Jose Rizal"
          : score + (selected === questions[current].answer ? 1 : 0) >= 3
          ? "Andres Bonifacio"
          : "Gabriela Silang";
      onComplete(
        score + (selected === questions[current].answer ? 1 : 0),
        hero
      );
    }
  };

  const q = questions[current];
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg">{q.question}</h3>
      {q.options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <input
            type="radio"
            name="option"
            value={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          />
          {opt}
        </label>
      ))}
      <Button
        onClick={handleNext}
        disabled={!selected}
        className="bg-blue-500 text-white hover:bg-blue-600"
      >
        {current + 1 === questions.length ? "Finish" : "Next"}
      </Button>
    </div>
  );
}
