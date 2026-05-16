import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://natuwa3d.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://natuwa3d.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://natuwa3d.com/book-now",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // BLOGS

    {
      url: "https://natuwa3d.com/blog/best-wedding-gift-ideas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://natuwa3d.com/blog/custom-bride-groom-miniature",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://natuwa3d.com/blog/indian-wedding-miniatures",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
