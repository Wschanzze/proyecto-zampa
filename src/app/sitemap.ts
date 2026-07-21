import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quesoszampa.com';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/elaboracion', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/nuestra-historia', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/productos', priority: 0.9, changeFreq: 'weekly' as const },
    // { path: '/comunidad', priority: 0.7, changeFreq: 'monthly' as const }, // oculto temporalmente
    { path: '/contacto', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/encontranos', priority: 0.8, changeFreq: 'monthly' as const },
  ];

  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: changeFreq,
    priority,
  }));
}
