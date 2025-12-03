"use client";
import { useEffect, useState } from "react";

const facts = [
  "The Philippines has 7,641 islands.",
  "Jose Rizal is considered the national hero.",
  "Tagalog is the most widely spoken language.",
  "The national flag was designed by Emilio Jacinto.",
  "The Philippines is the world's largest producer of coconuts.",
];

export default function LearningMode() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const idx = Math.floor(Math.random() * facts.length);
    setFact(facts[idx]);
  }, []);

  return (
    <div className="p-4 bg-muted rounded">
      <h2 className="text-lg font-semibold mb-2">Did You Know?</h2>
      <p>{fact}</p>
    </div>
  );
}
