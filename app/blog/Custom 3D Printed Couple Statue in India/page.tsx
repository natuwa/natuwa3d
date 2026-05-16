import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom 3D Printed Couple Statue in India | Personalized Miniatures by Natuwa3D",
  description:
    "Order a custom 3D printed couple statue in India. Turn your favorite photo into a realistic personalized miniature handcrafted by Natuwa3D.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/custom-3d-printed-couple-statue-in-india",
  },
};

export default function CustomCoupleStatueBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20order%20a%20custom%203D%20printed%20couple%20statue.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom 3D Printed Couple Statue in India
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/custom-3d-printed-couple-statue.jpg"
          alt="Custom 3D printed couple statue in India"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Looking for a unique and meaningful gift for a wedding, anniversary,
          or special occasion? A custom 3D printed couple statue transforms your
          favorite photo into a realistic miniature that captures your love story.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, we create highly detailed personalized couple statues
          based on your photos, complete with custom outfits, expressions,
          accessories, and names.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Order Your Couple Statue on WhatsApp
        </a>

        {/* Why Choose */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose a Custom Couple Statue?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Created from your real photos</li>
          <li>Highly realistic facial detailing</li>
          <li>Custom outfits and poses</li>
          <li>Perfect for weddings and anniversaries</li>
          <li>Beautiful home décor keepsake</li>
          <li>A truly one-of-a-kind gift</li>
        </ul>

        {/* Customization */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          What Can Be Customized?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Faces and expressions</li>
          <li>Wedding attire or casual outfits</li>
          <li>Hairstyles and accessories</li>
          <li>Pose and body language</li>
          <li>Base text with names and date</li>
        </ul>

        {/* Process */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          How the Process Works
        </h2>

        <ol className="list-decimal pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Send us your photos on WhatsApp.</li>
          <li>We create a detailed 3D design.</li>
          <li>You review and approve the preview.</li>
          <li>We 3D print and hand-paint the statue.</li>
          <li>Your custom piece is delivered anywhere in India.</li>
        </ol>

        {/* Occasions */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Perfect Occasions for a Couple Statue
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Wedding gifts</li>
          <li>Anniversary gifts</li>
          <li>Engagement gifts</li>
          <li>Valentine’s Day gifts</li>
          <li>Birthday gifts for spouse</li>
        </ul>

        {/* Why Natuwa3D */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Natuwa3D?
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Customized from your photos</li>
          <li>Realistic face sculpting</li>
          <li>Hand-painted premium finish</li>
          <li>Approval before printing</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          A custom 3D printed couple statue is more than a gift—it is a
          personalized work of art that preserves your most meaningful memories.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Whether you are celebrating a wedding, anniversary, or special
          milestone, Natuwa3D helps you turn your favorite photo into a
          handcrafted keepsake you will treasure forever.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Favorite Couple Photo into a Custom Statue
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Share your photo on WhatsApp and let us create a stunning
            personalized miniature made just for you.
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
              href="/category/couple-gifts"
              className="text-blue-600 hover:underline"
            >
              couple gifts
            </Link>{" "}
            for more personalized gift ideas.
          </p>
        </div>
      </div>
    </main>
  );
}
