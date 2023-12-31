import React from "react";
import "../theme.css";

export default function Navbar() {
  return (
      <section id="navbar" className="bg-lilac md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-4 md:flex-nowrap items-center justify-between">
          {" "}
          {/* Changed justify-start to justify-between */}
          <div className="text-gray-800 md:mb-0">
            <a href="#about" className="ml-auto text-xl">
              Sri Bala
            </a>
          </div>
          <nav className="md:ml-auto md:mr-1 md:py-1 md:pr-4 flex inline-flex items-center text-base justify-end md:flex-nowrap">
            {" "}
            {/* Changed items-right to items-center */}
            <a
              href="#projects"
              className="mr-7 text-gray-500 hover:text-gray-900"
            >
              Development
            </a>
            <a
              href="#skills"
              className="mr-7 text-gray-500 hover:text-gray-900"
            >
              Skills
            </a>
            <div class="bg-gray-700 rounded-xl py-2 px-2 text-center hover:bg-gray-600">
              <a href="#contact" className="block text-gray-100">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </section>
  );
}
