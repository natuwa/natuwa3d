import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Wedding Memory Gifts That Last Forever | Personalized Keepsakes by Natuwa3D",
  description:
    "Discover the best wedding memory gifts that last forever. Turn wedding photos into personalized 3D miniatures and timeless keepsakes with Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/wedding-memory-gifts-that-last-forever",
  },
};

export default function WeddingMemoryGiftsBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20create%20a%20wedding%20memory%20gift.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Wedding Memory Gifts That Last Forever
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/wedding-memory-gifts-that-last-forever.jpg"
          alt="Wedding memory gifts that last forever"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Weddings are filled with unforgettable moments, emotions, and memories.
          The most meaningful wedding gifts are those that preserve these
          memories forever.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Instead of traditional gifts, many people now choose personalized
          keepsakes that capture the couple’s special day. At Natuwa3D, we turn
          wedding photos into realistic custom 3D miniatures that become timeless
          wedding memory gifts.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Wedding Memory Gift
        </a>

        {/* Gift Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Wedding Memory Gifts
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Custom Bride and Groom 3D Miniature</li>
          <li>Personalized Couple Bobblehead</li>
          <li>Engraved Wooden Plaque</li>
          <li>Customized Photo Frame</li>
          <li>Personalized LED Lamp</li>
          <li>Memory Scrapbook</li>
          <li>Wedding Star Map</li>
          <li>Custom Wall Art</li>
        </ol>

        {/* Why Miniatures */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why 3D Miniatures Make the Perfect Wedding Memory Gift
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A personalized 3D miniature captures the bride and groom exactly as
          they looked on their wedding day, including facial expressions,
          outfits, and special details.
        </p>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from wedding photos</li>
          <li>Realistic face sculpting</li>
          <li>Custom attire and accessories</li>
          <li>Premium hand-painted finish</li>
          <li>Lasts for years</li>
        </ul>

        {/* Perfect For */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect For
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>First anniversary keepsakes</li>
          <li>Housewarming gifts</li>
          <li>Vow renewal celebrations</li>
        </ul>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Created from your real photos</li>
          <li>Design approval before production</li>
          <li>Hand-painted details</li>
          <li>Safe packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          The best wedding memory gifts preserve the emotions and joy of one of
          life’s most important milestones.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A personalized 3D miniature from Natuwa3D transforms a cherished
          wedding photo into a timeless keepsake that will be treasured forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Wedding Photos into a Lasting Keepsake
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your wedding photo on WhatsApp and let us create a custom
            miniature that preserves your most precious memory.
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
              href="/category/anniversary-gift-ideas"
              className="text-blue-600 hover:underline"
            >
              anniversary gift ideas
            </Link>{" "}
            for more inspiration.
          </p>
        </div>
      </div>
    </main>
  );
}
