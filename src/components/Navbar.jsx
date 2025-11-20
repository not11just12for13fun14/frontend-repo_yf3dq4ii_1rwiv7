import { useTranslation } from 'react-i18next';
import { Menu, Phone, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'ca', label: 'CA' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-[#0057A8] text-white font-bold flex items-center justify-center">FM</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">Font Madrid</div>
            <div className="text-xs text-slate-500">1998 · Madrid</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-[#0057A8]">{t('nav.services')}</a>
          <a href="#about" className="hover:text-[#0057A8]">{t('nav.about')}</a>
          <a href="#contact" className="hover:text-[#0057A8]">{t('nav.contact')}</a>
          <a href="tel:+34917405265" className="inline-flex items-center gap-2 bg-[#0057A8] text-white px-3 py-2 rounded-md">
            <Phone size={16} /> 917 405 265
          </a>
          <div className="flex items-center gap-2">
            <Languages size={18} className="text-slate-600" />
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => i18n.changeLanguage(l.code)}
                className={`px-2 py-1 rounded text-xs border ${i18n.language===l.code? 'bg-[#0057A8] text-white border-[#0057A8]':'border-slate-300 text-slate-700'}`}
              >{l.label}</button>
            ))}
          </div>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#services" className="block" onClick={() => setOpen(false)}>{t('nav.services')}</a>
          <a href="#about" className="block" onClick={() => setOpen(false)}>{t('nav.about')}</a>
          <a href="#contact" className="block" onClick={() => setOpen(false)}>{t('nav.contact')}</a>
          <div className="flex items-center gap-2 pt-2">
            {languages.map(l => (
              <button key={l.code} onClick={() => {i18n.changeLanguage(l.code); setOpen(false);}} className="px-2 py-1 rounded text-xs border border-slate-300">{l.label}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
