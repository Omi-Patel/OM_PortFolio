"use client"
import { useEffect } from "react";
import { SpotlightPreview } from "./components/SpotlightPreview";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SpotlightPreview />
    </div>
  );
}
