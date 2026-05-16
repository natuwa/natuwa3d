import Link from "next/link";

const blogs = [
  {
    title: "Best Wedding Gift Ideas in India",
    slug: "best-wedding-gift-ideas",
    image: "/images/hero-couple.jpg",
    description:
      "Discover unique and personalized wedding gift ideas including custom 3D printed miniatures.",
  },

  {
    title: "Custom Bride Groom Miniature",
    slug: "custom-bride-groom-miniature",
    image: "/images/family-couple.webp",
    description:
      "Explore realistic custom bride groom miniatures created from real wedding photos.",
  },

  {
    title: "Indian Wedding Miniatures",
    slug: "indian-wedding-miniatures",
    image: "/images/compare.webp",
    description:
      "Beautiful Indian wedding miniatures designed with detailed outfits and premium finishing.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-primary uppercase tracking-[4px] text-sm mb-4">
          Natuwa3D Blog
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Wedding Miniature Blogs
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore personalized wedding gifts, custom miniatures,
          couple figurines, 3D printing stories, and creative ideas.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blog/${blog.slug}`}
            className="group"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition">
                  {blog.title}
                </h2>

                <p className="text-gray-600 leading-7 mb-6">
                  {blog.description}
                </p>

                <div className="inline-flex items-center text-primary font-semibold">
                  Read Blog →
                </div>

              </div>
            </div>
          </Link>
        ))}

      </div>

    </main>
  );
}
