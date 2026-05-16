import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Personalized Miniature Toys & Figurines | Custom 3D Miniatures by Natuwa3D",
  description:
    "Create personalized miniature toys and figurines from your photos. Natuwa3D makes realistic custom 3D miniatures in India for gifts, collectibles, and memorable keepsakes.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/personalized-miniature-toys-figurines",
  },
};

export default function PersonalizedMiniatureToysFigurinesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20create%20a%20personalized%20miniature%20toy%20or%20figurine.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Personalized Miniature Toys & Figurines
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/personalized-miniature-toys-figurines.jpg"
          alt="Personalized miniature toys and figurines"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized miniature toys and figurines are a fun and meaningful way
          to turn your favorite photos into realistic 3D keepsakes. Whether it’s
          a couple, child, family, or pet, custom figurines preserve memories in
          a unique and artistic form.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we create highly detailed 3D miniatures from photos with
          lifelike sculpting and premium hand-painted finishing.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Custom Figurine
        </a>

        {/* Types */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Popular Types of Personalized Figurines
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Couple miniatures</li>
          <li>Wedding cake toppers</li>
          <li>Family figurines</li>
          <li>Kids miniatures</li>
          <li>Pet figurines</li>
          <li>Corporate and retirement gifts</li>
        </ul>

        {/* Why Special */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Personalized Miniatures Are Special
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real photos</li>
          <li>Captures facial expressions and outfits</li>
          <li>Fully customized poses and accessories</li>
          <li>Hand-painted premium finish</li>
          <li>One-of-a-kind keepsake</li>
        </ul>

        {/* Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions for Personalized Figurines
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Birthdays</li>
          <li>Anniversaries</li>
          <li>Weddings</li>
          <li>Valentine’s Day</li>
          <li>Housewarming</li>
          <li>Retirement</li>
        </ul>

        {/* Process */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How We Create Your Miniature
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your photos on WhatsApp.</li>
          <li>We design a detailed 3D model.</li>
          <li>You approve the preview.</li>
          <li>We 3D print and hand-paint the figurine.</li>
          <li>We deliver it safely across India.</li>
        </ol>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Personalized miniature toys and figurines are creative gifts that
          preserve life’s most meaningful moments.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, your favorite photo becomes a handcrafted 3D keepsake
          you’ll treasure forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Photo into a Custom Figurine
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photo on WhatsApp and let us create a realistic
            personalized miniature with premium hand-painted detail.
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
              href="/category/personalized-gifts"
              className="text-blue-600 hover:underline"
            >
              personalized gifts
            </Link>{" "}
            for more ideas.
          </p>
        </div>
      </div>
    </main>
  );
}
