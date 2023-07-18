import React from "react";
import Home from "./components/Home"
import About from "./components/About"
import Development from "./components/Development"
import Ux from "./components/Ux"
import Graphics from "./components/Graphics"
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Home />
      <About />
      <Development />
      <Ux />
      <Graphics />
    </main>
  );
}
