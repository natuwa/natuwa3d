import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Unique Birthday Gifts for Couples | Personalized 3D Miniatures by Natuwa3D",
  description:
    "Discover unique birthday gifts for couples in India. Turn your favorite couple photo into a personalized 3D miniature that preserves memories forever.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/unique-birthday-gifts-for-couples",
  },
};

export default function UniqueBirthdayGiftsForCouplesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20create%20a%20unique%20birthday%20gift%20for%20a%20couple.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Unique Birthday Gifts for Couples
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/unique-birthday-gifts-for-couples.jpg"
          alt="Unique birthday gifts for couples"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for a birthday gift that feels truly personal and unforgettable?
          Personalized gifts are the best way to celebrate a couple’s special
          moments and shared memories.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we turn your favorite couple photo into a realistic
          handcrafted 3D miniature that makes a meaningful birthday keepsake.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create a Birthday Gift
        </a>

        {/* Why Unique */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized Miniatures Make Unique Birthday Gifts
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real photos</li>
          <li>Captures love and emotions</li>
          <li>Custom outfits and poses</li>
          <li>Hand-painted premium finish</li>
          <li>One-of-a-kind keepsake</li>
        </ul>

        {/* Other Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Other Birthday Gift Ideas for Couples
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Custom photo frame</li>
          <li>Engraved jewelry</li>
          <li>Memory scrapbook</li>
          <li>Couple keychains</li>
          <li>Personalized cushions</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How to Order
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your favorite couple photo on WhatsApp.</li>
          <li>We create a custom 3D design.</li>
          <li>You approve the preview.</li>
          <li>We 3D print and hand-paint the miniature.</li>
          <li>We deliver it anywhere in India.</li>
        </ol>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Highly realistic face detailing</li>
          <li>Approval before production</li>
          <li>Premium handcrafted finish</li>
          <li>Safe packaging</li>
          <li>Pan-India delivery</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A birthday gift becomes unforgettable when it preserves memories and
          emotions.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can turn a cherished photo into a personalized 3D
          miniature that will be treasured forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Surprise a Couple with a Unique Birthday Gift
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your favorite photo on WhatsApp and let us create a custom 3D
            miniature filled with love and detail.
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
              href="/category/birthday-gifts"
              className="text-blue-600 hover:underline"
            >
              birthday gift ideas
            </Link>{" "}
            and{" "}
            <Link
              href="/category/couple-gifts"
              className="text-blue-600 hover:underline"
            >
              couple gifts
            </Link>{" "}
            for more inspiration.
          </p>
        </div>
      </div>
    </main>
  );
}
