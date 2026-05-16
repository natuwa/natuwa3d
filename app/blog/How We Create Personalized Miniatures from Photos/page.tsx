import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "How We Create Personalized Miniatures from Photos | Natuwa3D",
  description:
    "Discover how Natuwa3D transforms your photos into highly detailed personalized 3D miniatures. Learn our step-by-step process from photo to finished handcrafted keepsake.",
  alternates: {
    canonical:
      "https://www.natuwa3d.com/blog/how-we-create-personalized-miniatures-from-photos",
  },
};

export default function HowWeCreateMiniaturesBlog() {
  const whatsappLink =
    "https://wa.me/918796289333?text=Hi%20Natuwa3D,%20I%20want%20to%20turn%20my%20photo%20into%20a%20personalized%203D%20miniature.";

  return (
    <main className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          How We Create Personalized Miniatures from Photos
        </h1>

        {/* Published By */}
        <p className="text-gray-500 mb-10">Published by Natuwa3D</p>

        {/* Featured Image */}
        <Image
          src="/images/how-we-create-personalized-miniatures-from-photos.jpg"
          alt="How personalized 3D miniatures are created from photos"
          width={1200}
          height={630}
          priority
          className="w-full rounded-3xl shadow-lg mb-10"
        />

        {/* Intro */}
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Have you ever wondered how a simple photo can become a realistic 3D
          miniature? At Natuwa3D, we combine digital artistry, advanced 3D
          printing, and hand painting to transform your cherished memories into
          one-of-a-kind keepsakes.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Whether it’s a wedding photo, anniversary picture, family portrait,
          or a beloved pet, our process captures every important detail with
          precision and care.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md mb-12"
        >
          Create Your Personalized Miniature
        </a>

        {/* Step 1 */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Step 1: Share Your Photos
        </h2>
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Send us clear photos on WhatsApp. Front-facing images with good
          lighting help our artists capture facial details accurately.
        </p>

        {/* Step 2 */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Step 2: 3D Digital Sculpting
        </h2>
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Our designers create a detailed digital 3D model that matches your
          face, hairstyle, outfit, and pose.
        </p>

        {/* Step 3 */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Step 3: Design Approval
        </h2>
        <p className="text-lg leading-8 mb-6 text-gray-700">
          We share preview images for your review and make adjustments before
          production begins.
        </p>

        {/* Step 4 */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Step 4: High-Precision 3D Printing
        </h2>
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Once approved, the model is printed using advanced 3D printing
          technology to preserve fine details.
        </p>

        {/* Step 5 */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Step 5: Hand Painting & Finishing
        </h2>
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Our artists hand-paint each miniature to match skin tone, clothing
          colors, and accessories.
        </p>

        {/* Step 6 */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Step 6: Safe Packaging & Delivery
        </h2>
        <p className="text-lg leading-8 mb-6 text-gray-700">
          Your miniature is securely packaged and delivered anywhere in India.
        </p>

        {/* Why Choose */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Customers Love Natuwa3D
        </h2>

        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-8">
          <li>Made from your real photos</li>
          <li>Highly realistic face sculpting</li>
          <li>Approval before printing</li>
          <li>Hand-painted premium finish</li>
          <li>Delivery across India</li>
        </ul>

        {/* Final Thoughts */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          Turning photos into personalized miniatures is a beautiful way to
          preserve your most meaningful moments.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-700">
          At Natuwa3D, every piece is crafted with attention to detail,
          creativity, and emotion.
        </p>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Turn Your Photo into a Custom 3D Miniature?
          </h3>

          <p className="text-gray-700 leading-7 mb-6">
            Send us your photo on WhatsApp and let us create a handcrafted
            miniature that preserves your memory forever.
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
