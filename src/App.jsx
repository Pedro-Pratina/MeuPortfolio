import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={null} />
      </Routes>

      <null /> {/* Placeholder for Footer*/}
    </>
  );
}