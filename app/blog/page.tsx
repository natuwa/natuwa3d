import fs from "fs";
import Link from "next/link";

export const metadata = {
  title: "Natuwa3D Blog | Personalized Miniature Gift Ideas",
  description:
    "Explore wedding gift ideas, anniversary gifts, custom 3D miniatures, and personalized figurine inspiration from Natuwa3D.",
  alternates: {
    canonical: "https://www.natuwa3d.com/blog",
  },
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
};

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getAllBlogs(): BlogPost[] {
  const blogDir = path.join(process.cwd(), "app", "blog");

  const folders = fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (item) =>
        item.isDirectory() &&
        item.name !== "components" &&
        item.name !== "category"
    )
    .map((item) => item.name);

  const blogs = folders
    .filter((slug) => {
      const pagePath = path.join(blogDir, slug, "page.tsx");
      return fs.existsSync(pagePath);
    })
    .map((slug) => ({
      slug,
      title: formatTitle(slug),
      description:
        "Read this blog to discover personalized 3D miniature gift ideas by Natuwa3D.",
    }));

  // Latest folders first (alphabetical reverse).
  blogs.sort((a, b) => b.slug.localeCompare(a.slug));

  return blogs;
}

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Natuwa3D Blog</h1>

        <p className="text-xl text-gray-600 mb-12">
          Explore custom 3D miniature ideas, wedding gifts, anniversary gifts,
          personalized figurines, and behind-the-scenes stories.
        </p>

        {blogs.length === 0 ? (
          <p className="text-gray-500">No blog posts found.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="border rounded-3xl p-8 hover:shadow-lg transition bg-white"
              >
                <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <span className="text-green-600 font-semibold">
                  Read More →
}
