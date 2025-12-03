"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const sampleQuestions: Record<string, Question[]> = {
  "Philippine History": [
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
  ],
  "Filipino Culture and Traditions": [
    {
      question: "What is the traditional Filipino dance that involves handkerchiefs?",
      options: ["Tinikling", "Singkil", "Pandanggo", "Kalinga"],
      answer: "Tinikling",
    },
  ],
  "Philippine Geography": [
    {
      question: "Which island is the largest in the Philippines?",
      options: ["Mindanao", "Luzon", "Visayas", "Palawan"],
      answer: "Luzon",
    },
  ],
  "Filipino Heroes": [
    {
      question: "Who is known as the 'Father of the Philippine Revolution'?",
      options: [
        "Jose Rizal",
        "Andres Bonifacio",
        "Emilio Aguinaldo",
        "Antonio Luna",
      ],
      answer: "Andres Bonifacio",
    },
  ],
  "Filipino Pop Culture": [
    {
      question: "Which Filipino artist won a Grammy for Best Global Music Album?",
      options: ["Beyoncé", "Liza Soberano", "Rex Guitars", "Beyoncé"],
      answer: "Beyoncé",
    },
  ],
};

export default function TriviaRound({
  category,
  difficulty,
  onComplete,
}: {
  category: string;
  difficulty: number;
  onComplete: (score: number, total: number) => void;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const qs = sampleQuestions[category] ?? [];
    const count = Math.min(difficulty, qs.length);
    setQuestions(qs.slice(0, count));
  }, [category, difficulty]);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);
    setSelected(null);
    if (current + 1 < questions.length) setCurrent((c) => c + 1);
    else
      onComplete(
        score + (selected === questions[current].answer ? 1 : 0),
        questions.length
      );
  };

  if (questions.length === 0) return <div>Loading...</div>;

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
      <Button onClick={handleNext} disabled={!selected}>
        {current + 1 === questions.length ? "Finish" : "Next"}
      </Button>
    </div>
  );
}
