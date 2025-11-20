import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Contact from './components/Contact';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO />
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Contact />
      <footer className="bg-slate-900 text-blue-100 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-semibold text-lg">Font Madrid</div>
            <p className="text-sm mt-2">Font Madrid (denominación comercial del empresario Jorge Serrano Lavisier)</p>
            <p className="text-xs mt-2">Calle Sarria 38, Local, 28029 Madrid</p>
            <p className="text-xs">info@fontmadrid.es · 917 405 265</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-white mb-2">Servicios</div>
            <ul className="space-y-1">
              <li>Trabajos verticales</li>
              <li>Fontanería</li>
              <li>Impermeabilización de cubiertas</li>
              <li>Calefacción y gas</li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-white mb-2">Horario</div>
            <p>Lunes–Viernes 08:15–14:00 / 15:00–19:00</p>
            <a href="#contact" className="inline-block mt-3 bg-[#0057A8] px-3 py-2 rounded text-white">Solicita presupuesto</a>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} Font Madrid</div>
      </footer>

      {/* Floating actions */}
      <a href="tel:+34655561969" className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg">Llamar</a>
      <a href="https://wa.me/34655561969" target="_blank" className="fixed bottom-20 right-5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg">WhatsApp</a>
    </div>
  )
}

export default App
