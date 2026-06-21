import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Contact />
      <Footer />
    </div>
  )
}
