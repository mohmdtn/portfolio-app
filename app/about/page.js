import { Interests } from "../components/Interests";
import { Qoute } from "../components/Qoute";
import { Skills } from "../components/Skills";

export default function About() {
  return (
    <main>
      <section className="about">
        <h1>About Me</h1>
        <Qoute />
        <Skills />
        <Interests />
      </section>
    </main>
  );
}
