import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Miniatures for Home Decoration | Personalized 3D Decor by Natuwa3D",
  description:
    "Discover unique miniatures for home decoration in India. Turn your favorite photos into personalized 3D miniatures that add a meaningful touch to your home décor.",
  alternates: {
    canonical: "https://www.natuwa3d.com/blog/miniatures-for-home-decoration",
  },
};

export default function MiniaturesForHomeDecorationBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20create%20a%20personalized%20miniature%20for%20home%20decoration.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Miniatures for Home Decoration
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/miniatures-for-home-decoration.jpg"
          alt="Miniatures for home decoration"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Home décor becomes truly special when it reflects your personal
          memories and emotions. Personalized miniatures are a beautiful way to
          transform your favorite moments into artistic pieces for your home.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we turn your photos into realistic handcrafted 3D
          miniatures that add warmth, personality, and meaning to any room.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Home Decor Miniature
        </a>

        {/* Decoration Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Creative Miniature Ideas for Home Decoration
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Couple miniatures for bedroom décor</li>
          <li>Family figurines for living room shelves</li>
          <li>Kids miniatures for memory corners</li>
          <li>Pet figurines for display units</li>
          <li>Wedding cake toppers as keepsakes</li>
          <li>Custom statues with names and dates</li>
        </ul>

        {/* Why Special */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized Miniatures Are Perfect for Home Décor
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real photos</li>
          <li>Captures expressions and outfits in detail</li>
          <li>Premium hand-painted finish</li>
          <li>Unique and meaningful décor piece</li>
          <li>Preserves memories forever</li>
        </ul>

        {/* Best Places */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Places to Display Your Miniatures
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Living room shelves</li>
          <li>Bedroom side tables</li>
          <li>TV units</li>
          <li>Memory corners</li>
          <li>Office desks</li>
          <li>Display cabinets</li>
        </ul>

        {/* Process */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How We Create Your Miniature
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your favorite photo on WhatsApp.</li>
          <li>We create a detailed 3D design.</li>
          <li>You review and approve the preview.</li>
          <li>We 3D print and hand-paint the miniature.</li>
          <li>We deliver it safely anywhere in India.</li>
        </ol>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Highly realistic face detailing</li>
          <li>Design approval before production</li>
          <li>Premium handcrafted finish</li>
          <li>Secure packaging</li>
          <li>Pan-India delivery</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized miniatures are more than décor items—they are emotional
          keepsakes that bring your most cherished memories into your home.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can turn any photo into a realistic 3D miniature
          that adds beauty and meaning to your living space.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Favorite Photo into Home Décor
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photo on WhatsApp and let us create a custom 3D miniature
            that becomes a timeless decorative keepsake.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Internal Links */}
        <div className="mt-10 text-gray-600 leading-7">
          <p>
            Explore our{" "}
            <Link
              href="/category/home-decor"
              className="text-blue-600 hover:underline"
            >
              home décor miniatures
            </Link>{" "}
            and{" "}
            <Link
              href="/category/custom-3d-miniatures"
              className="text-blue-600 hover:underline"
            >
              custom 3D miniatures
            </Link>{" "}
            for more inspiration.
          </p>
        </div>
      </div>
    </main>
  );
}
