import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "3D Printed Wedding Miniatures Price in India | Custom Couple Statues by Natuwa3D",
  description:
    "Discover 3D printed wedding miniatures price in India. Learn what affects pricing, customization options, and why personalized wedding statues are worth it.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/3d-printed-wedding-miniatures-price-in-india",
  },
};

export default function WeddingMiniaturePriceBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20know%20the%20price%20for%20a%20custom%203D%20printed%20wedding%20miniature.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          3D Printed Wedding Miniatures Price in India
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/3d-printed-wedding-miniatures-price-in-india.jpg"
          alt="3D printed wedding miniatures price in India"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized wedding miniatures are one of the most meaningful gifts
          for couples in India. They transform your wedding photo into a
          realistic 3D printed statue that captures every special detail.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          If you are wondering about the price of 3D printed wedding miniatures
          in India, the cost depends on size, level of detail, pose complexity,
          and finishing quality.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Get Price on WhatsApp
        </a>

        {/* Price Range */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Estimated Price Range in India
        </h2>

        <div className="bg-gray-50 border rounded-2xl p-6 mb-8">
          <ul className="space-y-3 text-lg text-gray-700">
            <li>
              <strong>4–5 inch couple miniature:</strong> ₹6,999 – ₹9,999
            </li>
            <li>
              <strong>6–7 inch couple miniature:</strong> ₹9,999 – ₹14,999
            </li>
            <li>
              <strong>8–10 inch premium miniature:</strong> ₹14,999 – ₹25,000+
            </li>
            <li>
              <strong>Single person miniature:</strong> ₹3,999 onwards
            </li>
            <li>
              <strong>Miniature keychains:</strong> ₹1,499 onwards
            </li>
          </ul>
        </div>

        {/* Pricing Factors */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Factors That Affect Price
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Miniature size</li>
          <li>Number of people</li>
          <li>Custom outfits and accessories</li>
          <li>Base design and engraved text</li>
          <li>Pose complexity</li>
          <li>Hand-painted detailing</li>
        </ul>

        {/* What's Included */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          What’s Included in the Price?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Custom 3D design from your photos</li>
          <li>Preview for approval</li>
          <li>High-precision 3D printing</li>
          <li>Hand painting and finishing</li>
          <li>Protective packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Why Worth It */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Wedding Miniatures Are Worth the Price
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Unlike ordinary gifts, a personalized wedding miniature is a
          handcrafted keepsake that captures one of the most important moments
          of your life. It combines emotional value, artistic craftsmanship,
          and long-lasting quality.
        </p>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Realistic face sculpting</li>
          <li>Design approval before production</li>
          <li>Premium hand-painted finish</li>
          <li>Safe packaging</li>
          <li>Pan-India delivery</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          The price of 3D printed wedding miniatures in India varies based on
          customization and size, but the emotional value makes them truly
          priceless.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we create personalized wedding miniatures that preserve
          your memories in the most unique way possible.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Get Your Personalized Quote Today
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send your wedding photo on WhatsApp and receive pricing for your
            custom 3D miniature.
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
              photo-to-miniature guide
            </Link>{" "}
            to learn more.
          </p>
        </div>
      </div>
    </main>
  );
}
