import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Bride Groom Miniature – Unique Wedding Gift | Natuwa3D",
  description:
    "Turn your wedding photos into a custom bride and groom miniature. A unique personalized wedding gift and timeless keepsake handcrafted by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/custom-bride-groom-miniature-unique-wedding-gift",
  },
};

export default function BrideGroomMiniatureBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20custom%20bride%20and%20groom%20miniature.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom Bride Groom Miniature – A Unique Wedding Gift to Treasure Forever
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/custom-bride-groom-miniature.jpg"
          alt="Custom bride and groom miniature wedding gift"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for a wedding gift that is personal, memorable, and truly
          one-of-a-kind? A custom bride and groom miniature transforms a special
          wedding photo into a realistic handcrafted keepsake.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we create highly detailed 3D miniatures that capture the
          bride and groom’s expressions, outfits, and pose with incredible
          accuracy.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Your Miniature on WhatsApp
        </a>

        {/* Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why This Makes the Perfect Wedding Gift
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Completely personalized from wedding photos</li>
          <li>Captures every detail of the bride and groom</li>
          <li>Unique and emotionally meaningful</li>
          <li>Beautiful home décor keepsake</li>
          <li>Perfect for weddings, engagements, and anniversaries</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          What Can Be Customized?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Facial features and expressions</li>
          <li>Wedding outfits and accessories</li>
          <li>Pose and hairstyle</li>
          <li>Base text with names and date</li>
          <li>Background theme and props</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          How the Process Works
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Share your favorite wedding photos on WhatsApp.</li>
          <li>Our artists create a digital 3D model.</li>
          <li>You review and approve the design.</li>
          <li>We 3D print and hand-paint the miniature.</li>
          <li>Your keepsake is safely delivered to your doorstep.</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect For
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts for newlyweds</li>
          <li>Engagement gifts</li>
          <li>Anniversary gifts</li>
          <li>Cake toppers</li>
          <li>Home décor</li>
        </ul>

        {/* Why Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Realistic face detailing</li>
          <li>Premium handcrafted finish</li>
          <li>Approval before printing</li>
          <li>Secure packaging</li>
          <li>Delivery across India</li>
        </ul>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Wedding Photo into a Lifelong Keepsake
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your wedding photos with us and receive a custom bride and
            groom miniature crafted with exceptional detail and care.
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
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>{" "}
            to start your custom order.
          </p>
        </div>
      </div>
    </main>
  );
}
