import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
  
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// export default function App() {
//   return (
//     <main className="text-gray-400 bg-zinc-100 body-font">
//       <Navbar />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />
//     </main>
//   );
// }
export default function App() {
  return (
    <main className="text-gray-400 bg-zinc-100 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Router>
      <Routes>
        {/* <Route path="/image" element={<ImagePage />} /> */}
      </Routes>
    </Router>
    </main>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));