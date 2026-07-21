import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quesoszampa.com.ar';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/home',
    '/elaboracion',
    '/nuestra-historia',
    '/productos',
    '/comunidad',
    '/contacto',
    '/revendedores',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/home' || route === '/productos' ? 'weekly' : 'monthly',
    priority: route === '' || route === '/home' ? 1.0 : route === '/elaboracion' || route === '/productos' ? 0.9 : 0.8,
  }));
}
