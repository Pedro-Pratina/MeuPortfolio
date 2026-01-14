import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Beef } from "lucide-react";

export function App() {
  return (
    <BrowserRouter>
      <null /> {/* Placeholder for Navbar*/} 

      <Routes>
        <Route path="/" element={null} />
        <Route path="/projetos/:id" element={null} />
      </Routes>

      <null /> {/* Placeholder for Footer*/}
    </BrowserRouter>
  );
}