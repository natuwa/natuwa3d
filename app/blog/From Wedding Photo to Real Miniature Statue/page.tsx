import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "From Wedding Photo to Real Miniature Statue | Natuwa3D",
  description:
    "See how Natuwa3D transforms your wedding photo into a realistic miniature statue. A personalized keepsake that captures your special day forever.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/from-wedding-photo-to-real-miniature-statue",
  },
};

export default function WeddingPhotoToMiniatureBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20turn%20my%20wedding%20photo%20into%20a%20realistic%203D%20miniature%20statue.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          From Wedding Photo to Real Miniature Statue
        </h1>

        {/* Author */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/from-wedding-photo-to-real-miniature-statue.jpg"
          alt="Wedding photo transformed into a realistic miniature statue"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Your wedding day is one of the most meaningful moments of your life.
          While photographs preserve those memories, a custom 3D miniature
          transforms them into a tangible keepsake you can treasure forever.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we turn your favorite wedding photo into a realistic
          miniature statue that captures your outfits, expressions, and emotions
          with remarkable detail.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Wedding Miniature
        </a>

        {/* Process Steps */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How We Transform Your Wedding Photo into a Miniature
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Share your favorite wedding photo on WhatsApp.</li>
          <li>Our artists sculpt a detailed digital 3D model.</li>
          <li>You review and approve the design preview.</li>
          <li>We 3D print the model using high-precision technology.</li>
          <li>Each statue is hand-painted with premium finishes.</li>
          <li>We package and deliver it safely across India.</li>
        </ol>

        {/* Why It’s Special */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          What Makes This Keepsake So Special?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real wedding photos</li>
          <li>Captures facial expressions and outfits</li>
          <li>Personalized names and wedding date can be added</li>
          <li>Premium handcrafted finish</li>
          <li>A one-of-a-kind wedding memory gift</li>
        </ul>

        {/* Perfect For */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect For
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>First anniversary keepsakes</li>
          <li>Cake toppers</li>
          <li>Home décor</li>
        </ul>

        {/* Why Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Realistic face sculpting</li>
          <li>Design approval before printing</li>
          <li>Hand-painted premium quality</li>
          <li>Secure packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A wedding photo captures a memory. A personalized miniature brings
          that memory to life.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, your most cherished wedding moment becomes a timeless
          handcrafted statue you can proudly display for years to come.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Wedding Photo into a Lifelong Keepsake
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send your wedding photo on WhatsApp and let us create a realistic
            miniature statue crafted with exceptional detail.
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
              href="/category/wedding-miniatures"
              className="text-blue-600 hover:underline"
            >
              wedding miniatures
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/how-we-create-personalized-miniatures-from-photos"
              className="text-blue-600 hover:underline"
            >
              creation process
            </Link>{" "}
            to learn more.
          </p>
        </div>
      </div>
    </main>
  );
}
