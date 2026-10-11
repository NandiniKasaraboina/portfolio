import React from "react";
import ProjSmall from "../components/projComp/Proj_small";
import ProjMed from "../components/projComp/Proj_med";
import ProjBig from "../components/projComp/Proj_big";
import githubIcon from "../assets/github-icon.svg";
import smartExpense from "../assets/smartexpensetrackerimg.png";
import loanApproval from "../assets/loana1.png"
export default function Projects() {
  const webProjects = [
    {
      title: "Smart Expense Tracker",
      skills: [
        "React",
        "Django",
        "TailwindCss",
        "REST API",
        "PostgreSql",
      ],
      desc: [
        { title: "Used to Calculate daily and monthly expenses." },
        { title: "Built using React (frontend) and Django (backend)" },
      ],
      image: smartExpense,
      siteLink: "https://smart-expense-tracker-frontend-97vh.onrender.com/",
      RepoLink: "https://github.com/NandiniKasaraboina/smart-expense-tracker",
    },
    {
      title: "Loan Approval Predictor",
      skills: [
        "React",
        "API",
        "TailwindCss",
        "Machine Learning",
      ],
      desc: [
        { title: "A full-stack Machine Learning application that predicts loan approval status using Logistic Regression, FastAPI, React, and Tailwind CSS." },
        { title: "Built using React and Machine Learning using Logistic Regression and FAST API" },
      ],
      image: loanApproval,
      siteLink: "https://loan-approval-ml-project.vercel.app/",
      RepoLink: "https://github.com/NandiniKasaraboina/Loan-Approval-ML-Project",
    },
  ];

  return (
    <div>
      <div className="hidden ms:flex w-full h-full">
        <ProjBig webProjects={webProjects} githubWhite={githubIcon} />
      </div>

      <div className="hidden md:flex ms:hidden w-full h-full">
        <ProjMed webProjects={webProjects} githubWhite={githubIcon} />
      </div>

      <div className="md:hidden w-full h-full">
        <ProjSmall webProjects={webProjects} githubWhite={githubIcon} />
      </div>
    </div>
  );
}
