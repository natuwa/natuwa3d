export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Natuwa3D Blog
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Explore custom 3D miniature ideas, wedding gifts,
          personalized figurines, and behind-the-scenes stories.
        </p>

        <div className="grid gap-8">

          <a
            href="/blog/wedding-miniature-gifts"
            className="border rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Best Personalized Wedding Gifts in India
            </h2>

            <p className="text-gray-600">
              Discover unique wedding miniature gift ideas for couples.
            </p>
          </a>

        </div>
      </div>
    </main>
  );
}
