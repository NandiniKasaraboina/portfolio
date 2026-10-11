import React from 'react';
import calc from "../assets/calc.png";
import mus from "../assets/mus.png";
import note from "../assets/noteImg.png";
import tic from "../assets/ticTacToe.png";
import netf from "../assets/net_grp.png";
import { useState } from "react";

export default function Projects() {
  const radius = 550; 
  const centerX = 50;
  const centerY = 50;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const allProjects = [
    {
      title: "Smart Expense Tracker",
      techStack: [
        {pt: "React"},
        {pt: "Django postgresql"},
      ],
      desc: [
        {pt: "This project is used to track the expenses."},
        {pt: "It is responsive and smooth"},
      ],
      liveLink: "https://smart-expense-tracker-frontend-97vh.onrender.com/",
      githubLink: "https://github.com/NandiniKasaraboina/smart-expense-tracker",
      bg: netf,
    },
    {
      title: "Loan Approval Predictor",
      techStack: [
        {pt: "React"},
        {pt: "Tailwind css,API"},
        {pt: "Machine Learning"},
      ],
      desc: [
        {pt: "A full-stack Machine Learning application that predicts loan approval status using Logistic Regression, FastAPI, React, and Tailwind CSS."},
        {pt: "It is responsive and smooth"},
      ],
      liveLink: "https://loan-approval-ml-project.vercel.app/",
      githubLink: "https://github.com/NandiniKasaraboina/Loan-Approval-ML-Project",
      bg: netf,
    },
  ]

  return (
    <div className="bg-[#050619] min-h-screen w-full relative overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="bg-[#1d1f34] w-[60%] aspect-[2/1] mx-auto rounded-t-full mt-[15%]">

        </div>

        {allProjects.map((proj, idx) => {
          const angle = Math.PI - (idx / (allProjects.length - 1)) * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * -1; // Flip upward

          return (
            <div
              key={idx}
              className="w-[150px] h-[150px] absolute left-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-112% + ${y}px))`,
              }}
            >
              <img 
                src={proj.bg} 
                alt={proj.title} 
                className="w-96 h-52 object-cover rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer" 
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              />
              <div
                className='text-[aqua]'
              >
                
              </div>
            </div>

          );
        })}
      </div>
    </div>
  )
}