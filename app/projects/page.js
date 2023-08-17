"use client";

import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    img: "/pictures/projects/laravel-shop.png",
    title: "Laravel Shop Project",
    desc: "This is an e-commerce website built with the latest version of Laravel, encompassing a wide range of features. The aim has been to provide advanced capabilities and incorporate new, professional-grade functionalities suitable for large-scale websites.",
    lang: { laravel: true, bootstrap: true, mysql: true, js: true, jq:true },
    github: "https://github.com/mohmdtn/laravel-shop",
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
    img: "/pictures/projects/react-shop.png",
    title: "React Shop",
    desc: "This is a web application project designed for testing and entertainment purposes, focusing on an online store concept.",
    lang: { bootstrap: true, react: true, js: true, css: true },
    github: "https://github.com/mohmdtn/react-shop",
    demo: "https://ultrax-shop.netlify.app/",
  },
  {
    img: "/pictures/projects/mafia.png",
    title: "Mafia Cafe",
    desc: "This project is designed to introduce a café and create events for playing the game Mafia.",
    lang: { bootstrap: true, react: true, js: true, css: true },
    github: "https://github.com/mohmdtn/mafia",
    demo: "/",
  },
  {
    img: "/pictures/projects/time1.png",
    title: "Time1.ir",
    desc: "This project was created to display the date and time of the country along with annual events. It features a modern and captivating design.",
    lang: { bootstrap: true, jq: true, js: true, css: true },
    github: "https://github.com/mohmdtn/time1.ir",
    demo: "/",
  },
  {
    img: "/pictures/projects/p80.png",
    title: "80 Million Puzzle",
    desc: "This is a charity project aimed at providing bread for needy people. The project was developed for a private company and designed to be implemented at a national level.",
    lang: { bootstrap: true, js: true, jq: true, laravel: true, mysql: true },
    github: "https://github.com/mohmdtn/p80m-backend",
    demo: "/",
  },
  {
    img: "/pictures/projects/music.png",
    title: "Music Website",
    desc: "This website is developed for distributing, sharing, and purchasing music albums and music videos of an artist. The design and layout of this website are exceptionally appealing. (This project is among my initial and foundational projects.)",
    lang: { css: true, bootstrap: true, php: true, js: true, jq: true, mysql:true },
    github: "/",
    demo: "/",
  },
  {
    img: "/pictures/projects/cafe-web.png",
    title: "Cafe Single Page",
    desc: "This is a simple single-page project created to introduce a café. this single page has modern and captivating design.",
    lang: { css: true, bootstrap: true, js: true, jq: true },
    github: "https://github.com/mohmdtn/coffe-website",
    demo: "/",
  },
  {
    img: "/pictures/projects/panel.jpg",
    title: "Admin Panel",
    desc: "This is an admin panel designed for managing website content, suitable for implementation across all websites.",
    lang: { css: true, bootstrap: true, js: true, jq: true },
    github: "/",
    demo: "/",
  },
];

export default function Projects() {
  return (
    <main>
      <section className="projects">
        <h1>Projects</h1>
        <div className="row m-0">
          {projects.map((project) => (
            <ProjectCard
              img={project.img}
              title={project.title}
              desc={project.desc}
              lang={project.lang}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
