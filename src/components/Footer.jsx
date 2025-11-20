import { useTranslation } from 'react-i18next';

export default function Footer(){
  const { t } = useTranslation();
  const services = t('footer.services', { returnObjects: true });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-blue-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-semibold text-lg">{t('footer.companyName')}</div>
          <p className="text-sm mt-2">{t('footer.legalName')}</p>
          <p className="text-xs mt-2">{t('contact.details.address')}</p>
          <p className="text-xs">{t('contact.details.email')} · {t('contact.details.phone')}</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-2">{t('footer.servicesTitle')}</div>
          <ul className="space-y-1">
            {services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-2">{t('footer.scheduleTitle')}</div>
          <p>{t('contact.details.hours')}</p>
          <a href="#contact" className="inline-block mt-3 bg-[#0057A8] px-3 py-2 rounded text-white">{t('footer.cta')}</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">{t('footer.rights', { year })}</div>
    </footer>
  );
}
