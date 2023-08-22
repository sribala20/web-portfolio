import React from "react";
import { Link } from 'react-router-dom';

export const projects = [
  {
    title: "Virtual World",
    subtitle: "Language: Java",
    description:
      "Refactored a codebase to align with object-oriented principles, programmed new entities, and optimized a pathing algorithm",
    image: "./vw.gif",
    link: "https://github.com/sribala20/virtual-world",
  },
  {
    title: "Http Server",
    subtitle: "Language: C",
    description:
      "Programmed a simplified http server to interact with a client (i.e telnet), handle requests, and throw error codes",
    image: "./http.gif",
    link: "https://github.com/cp-cs-projects/http-server",
  },
  {
    title: "File System Simulator",
    subtitle: "Language: C",
    description:
    "Implemented several linux commands to navigate through a simulated file system with files and directories",
    image: "./file.gif",
    link: "https://github.com/cp-cs-projects/file-system",
  },
  {
    title: "IoT Capstone Project",
    subtitle: "Cisco High Externship",
    description:
      "Awarded first place for most thorough solution to foster student well-being using Cisco networking and IoT technologies",
    image: "./cisco.png",
    link: "/image"
  }
];

// export const designs = [
//   {
//     title: "PolyRatings",
//     subtitle: "UX Redesign Project",
//     description:
//       "6-month project etc",
//     image: "./vw.gif",
//     link: "/image",
//   },
//   {
//     title: "South Bay Naturals",
//     subtitle: "Branding, Can Labels etc",
//     description:
//       "Programmed a simplified http server to interact with a client (i.e telnet), handle requests, and throw error codes",
//     image: "./http.gif",
//     link: "https://github.com/cp-cs-projects/http-server",
//   },
//   {
//     title: "File System Simulator",
//     subtitle: "Language: C",
//     description:
//     "Implemented several linux commands to navigate through a simulated file system with files and directories",
//     image: "./file.gif",
//     link: "https://github.com/cp-cs-projects/file-system",
//   },
//   {
//     title: "IoT Capstone Project",
//     subtitle: "Cisco High Externship",
//     description:
//       "Awarded first place for most thorough solution to foster student well-being using Cisco networking and IoT technologies",
//     image: "./cisco.png",
//     link: "/image"
//   }
// ];

export const skills = [
  "Python",
  "Java",
  "C",
  "JavaScript",
  "React",
  "Cypress",
  "Git",
];
