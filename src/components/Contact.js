
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 border-b border-gray-800">
      <div className="flex justify-between p-10">
        <div className="w-1/2">
          <p className="text-blue-600 mb-1">Email: <a href="mailto:srbala@calpoly.edu">srbala@calpoly.edu</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-xl font-sans mb-2">Located</h2>
          <p>San Jose, CA 95119</p>
        </div>
      </div>
    </section>
  );
};
