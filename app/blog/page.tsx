const blogs = [
  {
    title: "Best Wedding Gift Ideas",
    slug: "best-wedding-gift-ideas",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    description:
      "Discover personalized wedding gift ideas including custom 3D printed miniatures.",
  },

  {
    title: "Custom Bride Groom Miniature",
    slug: "custom-bride-groom-miniature",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    description:
      "Realistic custom bride groom miniature made from wedding photos.",
  },

  {
    title: "Indian Wedding Miniatures",
    slug: "indian-wedding-miniatures",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    description:
      "Traditional Indian wedding miniatures with realistic details.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Natuwa3D Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <a
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="border rounded-3xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600">
                {blog.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
