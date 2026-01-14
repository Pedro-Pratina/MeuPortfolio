import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/projetos/:id" element={null} />
      </Routes>

      <null /> {/* Placeholder for Footer*/}
    </>
  );
}