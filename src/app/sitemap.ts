import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: `${siteUrl}/`,
            lastModified,
            priority: 0.9,
        },
        {
            url: `${siteUrl}/projects`,
            lastModified,
            priority: 1,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified,
            priority: 0.8,
        },
    ];
}
