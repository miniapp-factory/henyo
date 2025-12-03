"use client";
import { usePoints } from "@/components/trivia/PointsContext";
import { Button } from "@/components/ui/button";

export default function PlayToEarn() {
  const { points, addPoints } = usePoints();

  return (
    <div className="p-4 bg-muted rounded">
      <h2 className="text-lg font-semibold mb-2">Bayani Points</h2>
      <p className="text-2xl">{points}</p>
      <Button onClick={() => addPoints(10)} className="mt-2">
        Earn 10 Points
      </Button>
    </div>
  );
}
