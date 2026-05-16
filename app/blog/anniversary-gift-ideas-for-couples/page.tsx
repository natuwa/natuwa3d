import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Anniversary Gift Ideas for Couples | Natuwa3D",
  description:
    "Discover unique anniversary gift ideas for couples, including personalized 3D miniatures from Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/anniversary-gift-ideas-for-couples",
  },
};

export default function AnniversaryBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20personalized%20anniversary%20gift.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Anniversary Gift Ideas for Couples
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/anniversary-gift.jpg"
          alt="Personalized anniversary gift for couples"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for the perfect anniversary gift for couples? Personalized
          gifts are the most meaningful way to celebrate love and create lasting
          memories.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we transform your favorite photos into realistic custom
          3D miniatures that beautifully capture special moments forever.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order on WhatsApp
        </a>

        {/* Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Top Anniversary Gift Ideas for Couples
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Personalized 3D Miniature Couple Figurine</li>
          <li>Customized Photo Frame</li>
          <li>Engraved Wooden Plaque</li>
          <li>Personalized LED Lamp</li>
          <li>Matching Couple Keychains</li>
          <li>Memory Scrapbook</li>
          <li>Custom Cushion and Mug Set</li>
        </ul>

        {/* Why Choose */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Couples Love Natuwa3D Miniatures
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Unique and emotional gift</li>
          <li>Customized from real photos</li>
          <li>Highly detailed face sculpting</li>
          <li>Premium handcrafted finish</li>
          <li>Perfect for anniversaries and weddings</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          The best anniversary gifts are those that preserve memories and
          celebrate the unique bond between two people.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A personalized 3D miniature from Natuwa3D is more than a gift—it is a
          beautiful memory brought to life.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Favorite Photo into a Custom 3D Miniature
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photo with us and get a handcrafted anniversary gift that
            will be treasured forever.
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
            or{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              contact us
            </Link>{" "}
            for custom orders.
          </p>
        </div>
      </div>
    </main>
  );
}
