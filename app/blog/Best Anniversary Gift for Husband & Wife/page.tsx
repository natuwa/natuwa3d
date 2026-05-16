import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Best Anniversary Gift for Husband & Wife | Personalized Gifts by Natuwa3D",
  description:
    "Looking for the best anniversary gift for your husband or wife? Discover unique personalized 3D miniatures and memorable gifts handcrafted by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/best-anniversary-gift-for-husband-wife",
  },
};

export default function BestAnniversaryGiftBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20personalized%20anniversary%20gift%20for%20my%20husband%20or%20wife.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Best Anniversary Gift for Husband & Wife
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/best-anniversary-gift-husband-wife.jpg"
          alt="Best anniversary gift for husband and wife"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          An anniversary is a celebration of love, memories, and the journey
          you have shared together. The best anniversary gift for your husband
          or wife is one that feels personal and meaningful.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized gifts have become increasingly popular because they
          preserve emotions and special moments. At Natuwa3D, we turn your
          favorite photos into realistic custom 3D miniatures that become
          lifelong keepsakes. :contentReference[oaicite:0]{index=0}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Your Anniversary Gift on WhatsApp
        </a>

        {/* Best Gift Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why a Personalized 3D Miniature Is the Best Anniversary Gift
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom 3D miniature captures your favorite memory in stunning
          detail. Whether it is your wedding day, engagement, or a cherished
          couple photo, it transforms that moment into a beautiful handcrafted
          keepsake.
        </p>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your photos</li>
          <li>Highly realistic face detailing</li>
          <li>Custom outfits and poses</li>
          <li>Premium handcrafted finish</li>
          <li>Perfect for husbands and wives</li>
          <li>Delivery across India</li>
        </ul>

        {/* Gift Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Other Thoughtful Anniversary Gift Ideas
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Customized photo frame</li>
          <li>Engraved wooden plaque</li>
          <li>Personalized LED lamp</li>
          <li>Memory scrapbook</li>
          <li>Matching couple keychains</li>
          <li>Customized mug and cushion set</li>
        </ul>

        {/* For Husband */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Anniversary Gift for Husband
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Surprise your husband with a custom miniature based on your favorite
          photo together. It is romantic, thoughtful, and unlike anything he
          has received before.
        </p>

        {/* For Wife */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Anniversary Gift for Wife
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A personalized 3D miniature beautifully captures your love story and
          becomes a meaningful keepsake your wife will treasure forever.
        </p>

        {/* Why Choose */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Customized from your real photos</li>
          <li>Approval before production</li>
          <li>Hand-painted detailing</li>
          <li>Secure packaging</li>
          <li>Trusted by customers across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          The most memorable anniversary gifts are those that preserve your
          journey together. A personalized 3D miniature from Natuwa3D turns
          your special photo into a timeless piece of art.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Favorite Couple Photo into a Personalized Miniature
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photos on WhatsApp and let us create a handcrafted
            anniversary gift your partner will cherish forever.
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
