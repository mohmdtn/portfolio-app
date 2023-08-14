import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Summary } from './components/Summary';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Summary />
    </main>
  )
}
