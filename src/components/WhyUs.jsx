import { useTranslation } from 'react-i18next';
import { ShieldCheck, Settings, Award, Rope } from 'lucide-react';

const iconMap = [Award, ShieldCheck, Settings, ShieldCheck];

export default function WhyUs(){
  const { t } = useTranslation();
  const items = t('why.items', { returnObjects: true });
  return (
    <section id="why" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{t('why.title')}</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((it, idx) => {
          const Icon = iconMap[idx % iconMap.length];
          return (
            <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white">
              <Icon className="text-[#0057A8] mb-3" />
              <h3 className="font-semibold mb-1">{it.title}</h3>
              <p className="text-slate-600 text-sm">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
