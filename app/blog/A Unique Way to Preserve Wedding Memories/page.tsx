import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "A Unique Way to Preserve Wedding Memories | Natuwa3D",
  description:
    "Discover a unique way to preserve wedding memories by turning your favorite wedding photo into a realistic custom 3D miniature keepsake.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/a-unique-way-to-preserve-wedding-memories",
  },
};

export default function PreserveWeddingMemoriesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20turn%20my%20wedding%20photo%20into%20a%20custom%203D%20miniature.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          A Unique Way to Preserve Wedding Memories
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/a-unique-way-to-preserve-wedding-memories.jpg"
          alt="A unique way to preserve wedding memories"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Your wedding day is filled with moments you never want to forget—the
          smiles, emotions, outfits, and celebrations that mark the beginning
          of a new journey together.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          While photos and videos help preserve those memories, there is an even
          more unique way to relive them: turning your favorite wedding photo
          into a personalized 3D miniature.
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

        {/* Why Unique */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized Miniatures Are So Special
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom 3D miniature transforms a two-dimensional photo into a
          lifelike handcrafted statue that captures every meaningful detail.
        </p>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Facial expressions and emotions</li>
          <li>Wedding outfits and accessories</li>
          <li>Custom names and wedding date</li>
          <li>Realistic hand-painted finish</li>
          <li>A timeless keepsake you can display forever</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How It Works
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Share your favorite wedding photo on WhatsApp.</li>
          <li>Our artists create a detailed 3D model.</li>
          <li>You approve the design preview.</li>
          <li>We 3D print and hand-paint your miniature.</li>
          <li>We deliver it safely to your doorstep.</li>
        </ol>

        {/* Perfect For */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect For
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding keepsakes</li>
          <li>Anniversary gifts</li>
          <li>First anniversary celebrations</li>
          <li>Couple gifts</li>
          <li>Home décor</li>
        </ul>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Customized from your photos</li>
          <li>Highly realistic face detailing</li>
          <li>Design approval before production</li>
          <li>Premium handcrafted finish</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Wedding memories deserve more than a digital album.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can turn your most cherished wedding photo into a
          personalized miniature that keeps your special day alive forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Wedding Photo into a Timeless Keepsake
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your favorite wedding photo on WhatsApp and let us create a
            handcrafted miniature you’ll treasure for years.
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
              href="/blog/from-wedding-photo-to-real-miniature-statue"
              className="text-blue-600 hover:underline"
            >
              photo-to-miniature process
            </Link>{" "}
            to learn more.
          </p>
        </div>
      </div>
    </main>
  );
}
