import MainLayout from "@/layouts/MainLayout"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Experience from "@/sections/Experience"
import Projects from "@/sections/Projects"
import Skills from "@/sections/Skills"
import Education from "@/sections/Education"

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </MainLayout>
  )
}

export default App