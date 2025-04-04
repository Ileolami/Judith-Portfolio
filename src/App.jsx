import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Companies from './components/sections/Companies'
import Contact from './components/sections/Contact'
import ProfileShowcase from './components/sections/profiles'
import SkillsMarquee from './components/sections/Skills'
import Feedback from './components/sections/Feedback'

function App() {
  return (
    <div className="min-h-screen bg-[#2b0966] text-paleDogwood">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Feedback />
      <ProfileShowcase />
      <Companies />
      <SkillsMarquee />
      <Contact />
    </div>
  )
}

export default App