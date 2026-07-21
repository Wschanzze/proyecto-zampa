import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quesoszampa.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/inicio',
    '/elaboracion',
    '/nuestra-historia',
    '/productos',
    // '/comunidad', (oculto temporalmente)
    '/contacto',
    '/encontranos',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/inicio' || route === '/productos' ? 'weekly' : 'monthly',
    priority: route === '' || route === '/inicio' ? 1.0 : route === '/elaboracion' || route === '/productos' ? 0.9 : 0.8,
  }));
}
