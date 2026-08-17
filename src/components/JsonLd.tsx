import React from 'react';

export default function JsonLd() {
  const baseUrl = 'https://quesoszampa.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Quesos Zampa',
    legalName: 'Quesos Zampa',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    description: 'Quesería artesanal y tambo ovino pastoril en Tandil, Buenos Aires, Argentina. Especialistas en queso pecorino, brie de oveja y productos artesanales ovinos.',
    sameAs: [
      'https://www.instagram.com/quesoszampa/',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ruta Nacional 226',
      addressLocality: 'Tandil',
      addressRegion: 'Buenos Aires',
      postalCode: '7000',
      addressCountry: 'AR',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Quesos Zampa',
    alternateName: 'Quesería Zampa Tandil',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/assets/Quesos%20Zampa/IMG_9816.JPG`,
    description: 'Quesería artesanal y tambo ovino pastoril en Tandil, Buenos Aires, Argentina. Especialistas en queso pecorino, brie de oveja y productos artesanales ovinos.',
    telephone: '+5491132554757',
    servesCuisine: 'Quesos artesanales de oveja',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ruta Nacional 226',
      addressLocality: 'Tandil',
      addressRegion: 'Buenos Aires',
      postalCode: '7000',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.3217,
      longitude: -59.1332,
    },
    sameAs: [
      'https://www.instagram.com/quesoszampa/',
    ],
    priceRange: '$$',
    knowsAbout: [
      'Queso de oveja',
      'Queso Pecorino',
      'Queso Brie de oveja',
      'Tambo ovino pastoril',
      'Quesos artesanales de Tandil',
      'Ganadería pastoril regenerativa',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Quesos Zampa',
    alternateName: ['Zampa Tandil', 'Quesería Zampa', 'Quesos Zampa Tandil'],
    url: baseUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Dónde se producen los Quesos de Oveja Zampa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los quesos de oveja Zampa se elaboran en nuestro tambo ovino pastoril en Tandil, provincia de Buenos Aires, Argentina, combinando tradición quesera e innovación artesanal.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué variedad de quesos elabora Quesos Zampa en Tandil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Quesos Zampa elaboramos especialidades artesanales de leche de oveja como Queso Pecorino madurado, Queso Brie de oveja, Cacio e Pepe y quesos frescos pastoriles.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo se alimentan las ovejas en el tambo de Zampa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestras ovejas frisonas se crían bajo un sistema de pastoreo rotativo regenerativo en los pastizales naturales de Tandil, garantizando el bienestar animal y una leche noble de máxima calidad.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
