import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="font-sans antialiased text-navy bg-bg-light selection:bg-cyan selection:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Reveal><Services /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Clients /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
