import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Contact from './components/Contact';
import SEO from './components/SEO';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO />
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Contact />
      <Footer />

      {/* Floating actions */}
      <a href="tel:+34655561969" className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg">Llamar</a>
      <a href="https://wa.me/34655561969" target="_blank" className="fixed bottom-20 right-5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg">WhatsApp</a>
    </div>
  )
}

export default App
