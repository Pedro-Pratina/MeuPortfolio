import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/layout/navbar.jsx";

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