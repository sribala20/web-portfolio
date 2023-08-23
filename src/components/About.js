import React from "react";

export default function About() {
  return (
    <section id="about" className="py-32 min-h-screen flex items-center font-sans"
     style={{
        background: 'linear-gradient(180deg, #B7A0EC 0%, #f9fafb 100%)', // Blue to Pink gradient
      }}>
      <div className="container mx-auto flex flex-col items-center px-6">
        <div className="text-center">
          <h1 className="font-sans sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hi, I'm Sri Bala! 
            <br className="hidden lg:inline-block md:inline-block sm:inline-block" />Welcome to my website.
          </h1>
          <p className="mb-8 text-gray-800 leading-relaxed max-w-3xl mx-auto">
            I am currently in my 3rd year studying Computer Science at California Polytechnic State University, San Luis Obispo. 
            I’m interested in exploring opportunities in full-stack software development and 
            I’d love to work on technology in the realms of security, communication, art, or music.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
