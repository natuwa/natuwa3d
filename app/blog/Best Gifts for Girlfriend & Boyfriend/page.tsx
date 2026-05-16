import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Best Gifts for Girlfriend & Boyfriend | Personalized Couple Gifts by Natuwa3D",
  description:
    "Discover the best gifts for girlfriend and boyfriend. Turn your favorite photo into a personalized 3D miniature for birthdays, anniversaries, and romantic surprises.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/best-gifts-for-girlfriend-boyfriend",
  },
};

export default function BestGiftsForGirlfriendBoyfriendBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20create%20a%20personalized%20gift%20for%20my%20partner.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Best Gifts for Girlfriend & Boyfriend
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/best-gifts-for-girlfriend-boyfriend.jpg"
          alt="Best gifts for girlfriend and boyfriend"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Finding the perfect gift for your girlfriend or boyfriend can feel
          challenging. The most meaningful gifts are the ones that capture your
          shared memories and emotions.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized gifts are always special because they show thought,
          effort, and love. One of the most unique options is a custom 3D
          miniature made from your favorite photo together.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create a Personalized Gift
        </a>

        {/* Gift Ideas */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Top Gift Ideas for Girlfriend & Boyfriend
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Personalized 3D couple miniature</li>
          <li>Custom photo frame</li>
          <li>Engraved jewelry</li>
          <li>Memory scrapbook</li>
          <li>Love letter box</li>
          <li>Miniature keychain from your photo</li>
        </ul>

        {/* Why Miniatures */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why a Personalized 3D Miniature Is the Best Romantic Gift
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom 3D miniature transforms your favorite photo into a realistic
          handcrafted figurine that preserves your relationship in a truly
          unique way.
        </p>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real photos</li>
          <li>Captures expressions and outfits</li>
          <li>Hand-painted premium finish</li>
          <li>One-of-a-kind romantic keepsake</li>
          <li>Perfect for display at home or office</li>
        </ul>

        {/* Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Occasions to Gift Your Partner
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Birthday</li>
          <li>Anniversary</li>
          <li>Valentine’s Day</li>
          <li>Proposal</li>
          <li>Relationship milestones</li>
          <li>Just because</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How to Order Your Personalized Gift
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your favorite photo on WhatsApp.</li>
          <li>We create a custom 3D design.</li>
          <li>You review and approve the preview.</li>
          <li>We 3D print and hand-paint your miniature.</li>
          <li>We deliver it anywhere in India.</li>
        </ol>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          The best gifts are the ones that preserve emotions and memories.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can transform your favorite photo into a
          personalized 3D miniature your partner will cherish forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Surprise Your Partner with a Gift They’ll Never Forget
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send your favorite couple photo on WhatsApp and let us create a
            handcrafted 3D miniature filled with love and detail.
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
              personalized 3D miniatures
            </Link>{" "}
            for more inspiration.
          </p>
        </div>
      </div>
    </main>
  );
}
