import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact(){
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.honeypot = '';

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t('contact.title')}</h2>
          <p className="text-slate-700 mb-6">{t('contact.desc')}</p>

          <div className="text-sm space-y-1 text-slate-700">
            <div><strong>Tel:</strong> 917 405 265 / 655 56 19 69</div>
            <div><strong>Email:</strong> info@fontmadrid.es</div>
            <div><strong>Dirección:</strong> Calle Sarria 38, Local, 28029 Madrid</div>
            <div><strong>Horario:</strong> Lunes–Viernes 08:15–14:00 / 15:00–19:00</div>
          </div>

          <div className="mt-6 border rounded overflow-hidden">
            <iframe title="Mapa Font Madrid" src="https://www.google.com/maps?q=Calle%20Sarria%2038%2C%20Madrid&output=embed" width="100%" height="220" loading="lazy"></iframe>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
            <input name="name" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.form.phone')}</label>
            <input name="phone" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
            <input type="email" name="email" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
            <textarea name="message" rows="4" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <input type="text" name="honeypot" className="hidden" tabIndex="-1" autoComplete="off" />
          <button disabled={status==='loading'} className="bg-[#0057A8] hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            {status==='loading' ? '…' : t('contact.form.submit')}
          </button>
          {status==='success' && <p className="text-green-600 text-sm">{t('contact.form.success')}</p>}
          {status==='error' && <p className="text-red-600 text-sm">{t('contact.form.error')}</p>}
        </form>
      </div>
    </section>
  );
}
