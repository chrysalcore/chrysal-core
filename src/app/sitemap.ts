import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: 'https://chrysalcore.com/',
            lastModified,
            priority: 0.9,
        },
        {
            url: 'https://chrysalcore.com/projects',
            lastModified,
            priority: 1,
        },
        {
            url: 'https://chrysalcore.com/contact',
            lastModified,
            priority: 0.8,
        },
    ];
}
