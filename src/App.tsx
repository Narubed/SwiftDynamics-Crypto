import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index";
//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
