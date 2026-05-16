import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Turn Your Memories into 3D Miniatures | Personalized Keepsakes by Natuwa3D",
  description:
    "Transform your favorite photos into realistic 3D miniatures. Preserve wedding, anniversary, and family memories forever with custom figurines by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/turn-your-memories-into-3d-miniatures",
  },
};

export default function TurnMemoriesInto3DMiniaturesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20turn%20my%20photo%20into%20a%20custom%203D%20miniature.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Turn Your Memories into 3D Miniatures
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/turn-your-memories-into-3d-miniatures.jpg"
          alt="Turn your memories into personalized 3D miniatures"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Some memories are too special to stay only in your phone gallery.
          Whether it’s your wedding day, anniversary, family portrait, or a
          cherished moment with someone you love, those memories deserve to be
          preserved in a meaningful way.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we transform your favorite photos into highly detailed
          custom 3D miniatures that become timeless keepsakes.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your 3D Miniature
        </a>

        {/* Why Choose */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized 3D Miniatures Are So Special
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real photos</li>
          <li>Captures facial expressions and details</li>
          <li>Custom outfits, poses, and accessories</li>
          <li>Hand-painted premium finish</li>
          <li>Unique one-of-a-kind keepsake</li>
        </ul>

        {/* Perfect Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions for 3D Miniatures
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>Birthday gifts</li>
          <li>Couple gifts</li>
          <li>Family keepsakes</li>
          <li>Pet memorials</li>
        </ul>

        {/* Process */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How It Works
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Share your photos on WhatsApp.</li>
          <li>Our artists create a 3D design.</li>
          <li>You approve the preview.</li>
          <li>We 3D print and hand-paint your miniature.</li>
          <li>We deliver it safely to your doorstep.</li>
        </ol>

        {/* Why Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Realistic face sculpting</li>
          <li>Design approval before printing</li>
          <li>Premium handcrafted quality</li>
          <li>Safe packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Photos capture memories, but personalized 3D miniatures bring them to
          life.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can turn your most meaningful moments into
          handcrafted keepsakes that will be cherished forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Bring Your Memories to Life?
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send us your favorite photo on WhatsApp and let us create a custom
            3D miniature you’ll treasure forever.
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
              href="/category/custom-3d-miniatures"
              className="text-blue-600 hover:underline"
            >
              custom 3D miniatures
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
