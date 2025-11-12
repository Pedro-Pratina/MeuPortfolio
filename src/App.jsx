import { Routes, Route } from "react-router-dom";
import { Beef } from "lucide-react";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Test <span className="text-cyan-300">Taiwind</span> e <span className="text-fuchsia-600">Lucide <Beef /></span></h1>} />
    </Routes>
  );
}