import React from "react";
import { Home } from "./pages/";
import { Footer, Navbar } from "./components/";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
