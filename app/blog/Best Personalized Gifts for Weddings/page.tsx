import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Best Personalized Gifts for Weddings | Unique Wedding Gift Ideas by Natuwa3D",
  description:
    "Discover the best personalized gifts for weddings, including custom 3D miniatures, couple figurines, and meaningful keepsakes handcrafted by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/best-personalized-gifts-for-weddings",
  },
};

export default function PersonalizedWeddingGiftsBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20personalized%20wedding%20gift.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Best Personalized Gifts for Weddings
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/best-personalized-gifts-for-weddings.jpg"
          alt="Best personalized wedding gifts"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Weddings are once-in-a-lifetime celebrations, and the best gifts are
          those that feel meaningful and unforgettable. Personalized wedding
          gifts stand out because they capture emotions and preserve memories.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we transform wedding photos into realistic custom 3D
          miniatures that become cherished keepsakes for couples.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Personalized Wedding Gift on WhatsApp
        </a>

        {/* Gift Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Top Personalized Wedding Gift Ideas
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Custom 3D Bride and Groom Miniature</li>
          <li>Personalized Couple Bobblehead</li>
          <li>Customized Photo Frame</li>
          <li>Engraved Wooden Plaque</li>
          <li>Personalized LED Lamp</li>
          <li>Star Map Print</li>
          <li>Memory Scrapbook</li>
          <li>Custom Wall Art</li>
        </ol>

        {/* Best Gift Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Custom 3D Miniatures Are the Most Memorable Wedding Gift
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A personalized 3D miniature recreates the bride and groom from real
          photos, preserving facial expressions, outfits, and emotions in
          stunning detail.
        </p>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from wedding photos</li>
          <li>Realistic face sculpting</li>
          <li>Custom outfits and accessories</li>
          <li>Hand-painted premium finish</li>
          <li>Timeless keepsake</li>
        </ul>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Customized from real photos</li>
          <li>Design approval before printing</li>
          <li>Premium handcrafted quality</li>
          <li>Safe packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized wedding gifts are the perfect way to celebrate a
          couple’s love story.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom 3D miniature from Natuwa3D transforms a treasured wedding
          photo into a one-of-a-kind keepsake that will be cherished forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Wedding Photos into a Personalized Keepsake
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your favorite wedding photo on WhatsApp and let us create a
            handcrafted miniature made with love and detail.
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
              href="/category/personalized-gift-ideas"
              className="text-blue-600 hover:underline"
            >
              personalized gift ideas
            </Link>{" "}
            for more inspiration.
          </p>
        </div>
      </div>
    </main>
  );
}
