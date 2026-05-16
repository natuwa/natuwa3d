import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Figurine Gifts for Couples | Personalized 3D Miniatures by Natuwa3D",
  description:
    "Discover custom figurine gifts for couples in India. Turn your favorite photo into a personalized 3D miniature for anniversaries, weddings, birthdays, and romantic occasions.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/custom-figurine-gifts-for-couples",
  },
};

export default function CustomFigurineGiftsForCouplesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20custom%20figurine%20gift%20for%20a%20couple.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom Figurine Gifts for Couples
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/custom-figurine-gifts-for-couples.jpg"
          alt="Custom figurine gifts for couples"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for a gift that truly captures a couple’s love story? Custom
          figurine gifts are one of the most meaningful and memorable ways to
          celebrate a relationship.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we transform your favorite couple photo into a realistic
          3D printed miniature that preserves expressions, outfits, and emotions
          in stunning detail.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Couple Figurine
        </a>

        {/* Why Special */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Custom Figurines Make the Perfect Couple Gift
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from real photos</li>
          <li>Captures meaningful memories</li>
          <li>Highly realistic face sculpting</li>
          <li>Custom outfits and poses</li>
          <li>Hand-painted premium finish</li>
          <li>One-of-a-kind keepsake</li>
        </ul>

        {/* Best Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Occasions to Gift a Couple Figurine
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>Valentine’s Day gifts</li>
          <li>Engagement gifts</li>
          <li>Birthday gifts for spouse</li>
          <li>First anniversary keepsakes</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How It Works
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Share your favorite couple photo on WhatsApp.</li>
          <li>Our designers create a detailed 3D model.</li>
          <li>You approve the design preview.</li>
          <li>We 3D print and hand-paint your figurine.</li>
          <li>We deliver it safely anywhere in India.</li>
        </ol>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Realistic face sculpting</li>
          <li>Design approval before printing</li>
          <li>Premium handcrafted finish</li>
          <li>Secure packaging</li>
          <li>Pan-India delivery</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom figurine gift is more than a decorative piece—it is a
          personalized keepsake that celebrates love and preserves memories.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can transform a favorite couple photo into a
          handcrafted 3D miniature that will be cherished forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Couple Photo into a Timeless Gift
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send us your photo on WhatsApp and let us create a realistic custom
            figurine that beautifully captures your relationship.
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
              href="/category/couple-gifts"
              className="text-blue-600 hover:underline"
            >
              couple gift ideas
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
