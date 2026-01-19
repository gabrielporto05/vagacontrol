import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vagacontrol.com',
      lastModified: new Date(),
      priority: 1
    },
    {
      url: 'https://vagacontrol.com/login',
      lastModified: new Date(),
      priority: 0.8
    }
  ]
}
