import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="font-sans antialiased text-navy bg-bg-light selection:bg-cyan selection:text-white transition-colors duration-500 relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
