import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Top Couple Gift Ideas for Weddings & Anniversaries | Natuwa3D",
  description:
    "Discover the best couple gift ideas for weddings and anniversaries, including personalized 3D miniatures, custom keepsakes, and unique gifts by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/top-couple-gift-ideas-for-weddings-and-anniversaries",
  },
};

export default function CoupleGiftIdeasBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20personalized%20gift%20for%20a%20couple.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Top Couple Gift Ideas for Weddings & Anniversaries
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/top-couple-gift-ideas.jpg"
          alt="Top couple gift ideas for weddings and anniversaries"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Finding the perfect gift for a couple can be challenging. Whether you
          are celebrating a wedding, anniversary, engagement, or special
          milestone, the best gifts are meaningful, personalized, and memorable.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we transform your favorite photos into realistic custom
          3D miniatures that beautifully capture the love story of any couple.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Personalized Couple Gift on WhatsApp
        </a>

        {/* Gift Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Couple Gift Ideas
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Personalized 3D Miniature Couple Figurine</li>
          <li>Customized Photo Frame</li>
          <li>Engraved Wooden Plaque</li>
          <li>Personalized LED Lamp</li>
          <li>Couple Bobblehead</li>
          <li>Matching Keychains</li>
          <li>Memory Scrapbook</li>
          <li>Custom Cushion and Mug Set</li>
          <li>Star Map Print</li>
          <li>Personalized Wall Art</li>
        </ol>

        {/* Best Gift */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized 3D Miniatures Are the Most Memorable Couple Gifts
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom 3D miniature recreates the couple’s faces, outfits, and pose
          from real photos, turning a meaningful memory into a handcrafted
          keepsake.
        </p>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from real photos</li>
          <li>Highly detailed face sculpting</li>
          <li>Custom outfits and accessories</li>
          <li>Premium handcrafted finish</li>
          <li>Perfect for display at home</li>
        </ul>

        {/* Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions for Couple Gifts
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>Engagement gifts</li>
          <li>Valentine’s Day gifts</li>
          <li>Birthday gifts for spouse</li>
          <li>Housewarming gifts</li>
        </ul>

        {/* Why Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Customized from your photos</li>
          <li>Approval before printing</li>
          <li>Hand-painted detailing</li>
          <li>Secure packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          The best couple gifts are those that preserve meaningful moments and
          celebrate the bond between two people.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A personalized 3D miniature from Natuwa3D is a one-of-a-kind keepsake
          that will be treasured for years to come.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Favorite Couple Photo into a Custom Miniature
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photo on WhatsApp and let us create a handcrafted gift
            that captures a beautiful memory forever.
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
              href="/category/anniversary-gifts"
              className="text-blue-600 hover:underline"
            >
              anniversary gifts
            </Link>{" "}
            for more personalized gift ideas.
          </p>
        </div>
      </div>
    </main>
  );
}
