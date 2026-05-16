import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Personalized Couple Figurines Online in India | Custom 3D Miniatures by Natuwa3D",
  description:
    "Order personalized couple figurines online in India. Turn your favorite photo into a realistic custom 3D miniature for weddings, anniversaries, and special gifts.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/personalized-couple-figurines-online-india",
  },
};

export default function PersonalizedCoupleFigurinesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20personalized%20couple%20figurine.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Personalized Couple Figurines Online in India
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/personalized-couple-figurines-online-india.jpg"
          alt="Personalized couple figurines online in India"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for a unique and meaningful gift for your partner or a special
          couple in your life? Personalized couple figurines are a beautiful way
          to preserve love and memories in a lasting form.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we turn your favorite couple photos into realistic custom
          3D miniatures with lifelike facial details, custom outfits, and
          hand-painted finishing.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Your Couple Figurine
        </a>

        {/* Why Special */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized Couple Figurines Are So Special
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Created from your real photos</li>
          <li>Captures your unique expressions and style</li>
          <li>Custom outfits, poses, and accessories</li>
          <li>Hand-painted premium finish</li>
          <li>One-of-a-kind romantic keepsake</li>
        </ul>

        {/* Perfect Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions to Gift a Couple Figurine
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>Valentine’s Day gifts</li>
          <li>Birthday gifts for spouse</li>
          <li>Engagement gifts</li>
          <li>First anniversary keepsakes</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How to Order Online
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your favorite photo on WhatsApp.</li>
          <li>We create a custom 3D design.</li>
          <li>You review and approve the preview.</li>
          <li>We 3D print and hand-paint your figurine.</li>
          <li>We deliver it anywhere in India.</li>
        </ol>

        {/* Why Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Highly realistic face sculpting</li>
          <li>Approval before printing</li>
          <li>Premium handcrafted quality</li>
          <li>Safe packaging</li>
          <li>Pan-India delivery</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized couple figurines are more than decorative pieces—they are
          emotional keepsakes that preserve your love story forever.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, your favorite photo becomes a realistic custom
          miniature you’ll treasure for years to come.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Couple Photo into a Personalized Figurine
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photo on WhatsApp and let us create a handcrafted
            miniature that beautifully captures your relationship.
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
              couple gifts
            </Link>{" "}
            and{" "}
            <Link
              href="/category/custom-3d-miniatures"
              className="text-blue-600 hover:underline"
            >
              custom 3D miniatures
            </Link>{" "}
            for more personalized gift ideas.
          </p>
        </div>
      </div>
    </main>
  );
}
