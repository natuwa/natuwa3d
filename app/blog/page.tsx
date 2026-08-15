const blogs = [
  {
    title: "Best Wedding Gift Ideas",
    slug: "best-wedding-gift-ideas",
    image: "/images/hero-couple.jpg",
    description:
      "Discover personalized wedding gift ideas including custom 3D printed miniatures.",
  },

  {
    title: "Personalized Couple Miniature",
    slug: "personalized-couple-miniature",
    image: "/og-image.jpg",
    description:
      "Custom 3D printed personalized couple miniature for weddings, anniversaries, and gifts.",
  },
  
  {
  title: "18th Birthday Gift Ideas for Your Crush",
  slug: "18th-birthday-gift-ideas-for-crush",
  image: "/images/18th-birthday-crush.jpg",
  description:
    "Looking for a memorable 18th birthday gift for your crush? Discover thoughtful personalized gift ideas, including custom 3D miniatures made from photos.",
},
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-serif font-bold text-center mb-16 text-[#2d1810]">
        Our Blogs
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {blogs.map((blog) => (
          <a
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="border border-[#eadfd7] rounded-3xl overflow-hidden bg-white hover:shadow-lg transition"
          >

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-serif font-bold text-[#2d1810] mb-4">
                {blog.title}
              </h2>

              <p className="text-[#6f625b] leading-7">
                {blog.description}
              </p>

            </div>

          </a>
        ))}

      </div>

    </main>
  );
}
