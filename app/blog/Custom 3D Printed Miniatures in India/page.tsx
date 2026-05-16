import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom 3D Printed Miniatures in India | Personalized Figurines by Natuwa3D",
  description:
    "Order custom 3D printed miniatures in India from your photos. Personalized couple statues, wedding miniatures, family figurines, and unique gifts by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/custom-3d-printed-miniatures-in-india",
  },
};

export default function Custom3DPrintedMiniaturesIndiaBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20custom%203D%20printed%20miniature.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom 3D Printed Miniatures in India
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/custom-3d-printed-miniatures-in-india.jpg"
          alt="Custom 3D printed miniatures in India"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Introduction */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for a truly unique and meaningful gift? Custom 3D printed
          miniatures transform your favorite photos into realistic figurines
          that preserve memories in a beautiful and lasting way.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we create highly detailed personalized miniatures from
          photos, perfect for weddings, anniversaries, birthdays, family
          keepsakes, and corporate gifts.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Your Custom Miniature
        </a>

        {/* What Are They */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          What Are Custom 3D Printed Miniatures?
        </h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          These are realistic miniature statues created from your photos using
          advanced 3D modeling, precision printing, and hand painting.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Every detail—from facial expressions to clothing and accessories—is
          carefully recreated to capture your special memory.
        </p>

        {/* Popular Types */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Popular Types of Personalized Miniatures
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding bride and groom miniatures</li>
          <li>Anniversary couple statues</li>
          <li>Family figurines</li>
          <li>Single portrait miniatures</li>
          <li>Pet miniatures</li>
          <li>Corporate gifts and trophies</li>
          <li>Keychain miniatures</li>
        </ul>

        {/* Process */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How We Create Your Miniature
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send your photos on WhatsApp.</li>
          <li>Our designers create a custom 3D model.</li>
          <li>You review and approve the preview.</li>
          <li>We 3D print the model with high precision.</li>
          <li>Our artists hand-paint every detail.</li>
          <li>We deliver your miniature anywhere in India.</li>
        </ol>

        {/* Why Choose */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Created from real photos</li>
          <li>Highly realistic facial detailing</li>
          <li>Custom outfits and poses</li>
          <li>Design approval before printing</li>
          <li>Premium hand-painted finish</li>
          <li>Safe packaging and pan-India delivery</li>
        </ul>

        {/* Best Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions for Custom Miniatures
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>Birthday gifts</li>
          <li>Valentine’s Day gifts</li>
          <li>Retirement gifts</li>
          <li>Corporate gifting</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Custom 3D printed miniatures are more than just gifts—they are
          personalized works of art that preserve life’s most meaningful
          moments.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          With Natuwa3D, your favorite photo becomes a handcrafted keepsake
          you can treasure forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Photo into a Personalized 3D Miniature
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send us your photo on WhatsApp and let us create a realistic
            handcrafted miniature made just for you.
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
