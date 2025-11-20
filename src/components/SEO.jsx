import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEO = ({ titleKey = 'meta.title_home', descKey = 'meta.desc_home', path = '/' }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t(titleKey);
    const desc = t(descKey);
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }

    // Open Graph
    const setOg = (property, content) => {
      let el = document.querySelector(`meta[property='${property}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setOg('og:title', title);
    setOg('og:description', desc);
    setOg('og:type', 'website');
    setOg('og:locale', i18n.language);

    // LocalBusiness JSON-LD minimal
    const scriptId = 'jsonld-localbusiness';
    let script = document.getElementById(scriptId);
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Font Madrid',
      description: desc,
      url: window.location.origin,
      telephone: '917 405 265',
      email: 'info@fontmadrid.es',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Sarria 38, Local',
        addressLocality: 'Madrid',
        postalCode: '28029',
        addressCountry: 'ES'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.4766,
        longitude: -3.6977
      }
    };
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [t, titleKey, descKey, i18n.language, path]);

  return null;
};

export default SEO;
