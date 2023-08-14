import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    img: "/pictures/laravelshop.png",
    title: "Laravel Shop Project",
    desc: "this project is made by last version of laravel.",
    lang: { laravel: true, bootstrap: true, mysql: true, js: true },
    github: "/",
    demo: "/",
  },
  {
    img: "/pictures/prompt.png",
    title: "Prompt Topia: share your idea",
    desc: "this project is for sharing your idea and tought to others.",
    lang: { next: true, mongo: true, tailwind: true, js: true },
    github: "https://github.com/mohmdtn/prompt-app",
    demo: "https://prompt-app-one.vercel.app/",
  },
  {
    img: "/pictures/food.png",
    title: "Cafe DenjNeshin",
    desc: "this is a PWA app that created for ordering foods in cafe and restaurants.",
    lang: { react: true, js: true, bootstrap: true, mui: true, css: true },
    github: "https://github.com/mohmdtn/food-app",
    demo: "https://ultrax-food.netlify.app/home",
  },
];

export const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="row m-0">
        {projects.map((project) => <ProjectCard img={project.img} title={project.title} desc={project.desc} lang={project.lang} github={project.github} demo={project.demo} />)}
      </div>
    </section>
  );
};
