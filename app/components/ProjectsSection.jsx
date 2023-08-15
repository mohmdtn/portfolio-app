"use client";

import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    img: "/pictures/projects/laravel-shop.png",
    title: "Laravel Shop Project",
    desc: "This is an e-commerce website built with the latest version of Laravel, encompassing a wide range of features. The aim has been to provide advanced capabilities and incorporate new, professional-grade functionalities suitable for large-scale websites.",
    lang: { laravel: true, bootstrap: true, mysql: true, js: true, jq:true },
    github: "/",
    demo: "/",
  },
  {
    img: "/pictures/projects/food.png",
    title: "Cafe DenjNeshin",
    desc: "This is a web application designed for ordering food from cafes and restaurants, featuring attractive and innovative functionalities. The frontend development of this project was handled by me.",
    lang: { react: true, js: true, bootstrap: true, mui: true, css: true },
    github: "https://github.com/mohmdtn/food-app",
    demo: "https://ultrax-food.netlify.app/home",
  },
  {
    img: "/pictures/projects/prompt.png",
    title: "Prompt Topia: share your idea",
    desc: "This project has been created for testing and entertainment purposes, allowing you to share your thoughts and ideas with others.",
    lang: { next: true, react: true, mongo: true, tailwind: true, js: true },
    github: "https://github.com/mohmdtn/prompt-app",
    demo: "https://prompt-app-one.vercel.app/",
  },
  {
    img: "/pictures/projects/mafia.png",
    title: "Mafia Cafe",
    desc: "This project is designed to introduce a café and create events for playing the game Mafia.",
    lang: { bootstrap: true, react: true, js: true, css: true },
    github: "https://github.com/mohmdtn/react-shop",
    demo: "/",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="row m-0">
        {projects.map((project) => <ProjectCard img={project.img} title={project.title} desc={project.desc} lang={project.lang} github={project.github} demo={project.demo} />)}
      </div>
    </section>
  );
};
