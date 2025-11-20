import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1716394381036-58d26eb815fd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb3BlJTIwYWNjZXNzJTIwcGx1bWJlcnMlMjB3b3JraW5nfGVufDB8MHx8fDE3NjM2NjIxNjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Rope access plumbers working at height" className="w-full h-full object-cover opacity-40"/>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold max-w-3xl">
          {t('hero.headline')}
        </motion.h1>
        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl">
          {t('hero.sub')}
        </motion.p>
        <motion.a href="#contact" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="inline-block mt-8 bg-[#0057A8] hover:bg-blue-700 text-white px-6 py-3 rounded-md">
          {t('hero.cta')}
        </motion.a>
      </div>
    </section>
  );
}
