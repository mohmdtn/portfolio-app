import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { Summary } from './components/Summary';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <Summary />
    </main>
  )
}
