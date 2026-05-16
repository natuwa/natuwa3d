import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Family Miniatures from Photos | Personalized 3D Figurines by Natuwa3D",
  description:
    "Turn your family photos into custom 3D miniatures. Natuwa3D creates realistic personalized family figurines in India for gifts, home décor, and treasured memories.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/custom-family-miniatures-from-photos",
  },
};

export default function CustomFamilyMiniaturesFromPhotosBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20create%20a%20custom%20family%20miniature%20from%20my%20photos.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom Family Miniatures from Photos
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/custom-family-miniatures-from-photos.jpg"
          alt="Custom family miniatures from photos"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Family photos capture precious moments, but custom family miniatures
          turn those memories into realistic 3D keepsakes you can display and
          cherish forever.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we transform your family pictures into handcrafted 3D
          figurines with lifelike facial details, custom outfits, and premium
          hand-painted finishing.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Family Miniature
        </a>

        {/* Why Special */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Custom Family Miniatures Are So Special
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Created from your real family photos</li>
          <li>Captures facial expressions and outfits</li>
          <li>Includes parents, children, grandparents, and pets</li>
          <li>Hand-painted premium finish</li>
          <li>One-of-a-kind family keepsake</li>
        </ul>

        {/* Perfect Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions to Gift a Family Miniature
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Housewarming gifts</li>
          <li>Anniversaries</li>
          <li>Birthdays</li>
          <li>Mother’s Day and Father’s Day</li>
          <li>Retirement gifts</li>
          <li>Family reunions</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How We Create Your Family Miniature
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your family photos on WhatsApp.</li>
          <li>We design a detailed 3D model.</li>
          <li>You review and approve the preview.</li>
          <li>We 3D print and hand-paint each figure.</li>
          <li>We deliver it safely anywhere in India.</li>
        </ol>

        {/* Why Choose Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Highly realistic face sculpting</li>
          <li>Design approval before production</li>
          <li>Premium handcrafted finish</li>
          <li>Secure packaging</li>
          <li>Pan-India delivery</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom family miniature is more than a decorative item—it is a
          timeless keepsake that preserves your family’s most cherished moments.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, you can transform your favorite family photo into a
          handcrafted 3D figurine that will be treasured for generations.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Family Photo into a Timeless Keepsake
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your family photo on WhatsApp and let us create a personalized
            3D miniature filled with love and detail.
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
              href="/category/family-miniatures"
              className="text-blue-600 hover:underline"
            >
              family miniatures
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
