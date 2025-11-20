import { useTranslation } from 'react-i18next';
import Img from './Img';

const Section = ({ title, items, img, cta }) => (
  <div className="grid md:grid-cols-2 gap-6 items-center">
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        {items.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>
      <a href="#contact" className="inline-block mt-4 text-[#0057A8] font-medium">→ {cta}</a>
    </div>
    <div>
      <Img src={img} alt={title} className="rounded-lg border border-slate-200" />
    </div>
  </div>
);

export default function Services(){
  const { t } = useTranslation();
  const interior = t('services.interior.items', { returnObjects: true });
  const roof = t('services.roof.items', { returnObjects: true });
  const vertical = t('services.vertical.items', { returnObjects: true });

  const cta = t('services.cta');

  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{t('services.title')}</h2>

        <div className="space-y-12">
          <Section title={t('services.interior.title')} items={interior} img="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=60" cta={cta} />
          <Section title={t('services.roof.title')} items={roof} img="https://images.unsplash.com/photo-1590080876642-7c1b1b5b0f72?auto=format&fit=crop&w=1200&q=60" cta={cta} />
          <Section title={t('services.vertical.title')} items={vertical} img="https://images.unsplash.com/photo-1532635223-3af44a4d1d84?auto=format&fit=crop&w=1200&q=60" cta={cta} />
        </div>
      </div>
    </section>
  );
}
