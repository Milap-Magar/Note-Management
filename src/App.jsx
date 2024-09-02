import React from "react";
import { Home, AddNewNote } from "./pages/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnotes" element={<AddNewNote />} />
      </Routes>
    </Router>
  );
};

export default App;
