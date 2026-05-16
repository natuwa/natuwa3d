const blogs = [
  {
    title: "Best Wedding Gift Ideas",
    slug: "best-wedding-gift-ideas",
    image: "/images/hero-couple.jpg",
    description:
      "Discover personalized wedding gift ideas including custom 3D printed miniatures.",
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
