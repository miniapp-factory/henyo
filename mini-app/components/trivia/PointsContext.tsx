"use client";
import { createContext, useContext, useEffect, useState } from "react";

type PointsContextType = {
  points: number;
  addPoints: (n: number) => void;
};

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export function PointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("bayaniPoints");
      return stored ? parseInt(stored, 10) : 0;
    }
    return 0;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bayaniPoints", points.toString());
    }
  }, [points]);

  const addPoints = (n: number) => setPoints((p) => p + n);

  return (
    <PointsContext.Provider value={{ points, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const ctx = useContext(PointsContext);
  if (!ctx) throw new Error("usePoints must be used within PointsProvider");
  return ctx;
}
