export const metadata = {
  title: "Best Wedding Gift Ideas in India | Natuwa3D",

  description:
    "Discover personalized wedding gift ideas including custom 3D printed bride groom miniatures in India.",

  keywords: [
    "Wedding Gift Ideas",
    "Custom Miniature",
    "Bride Groom Miniature",
    "3D Printed Miniatures",
    "Personalized Gifts India",
  ],
};

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">
        Best Wedding Gift Ideas
      </h1>

      {/* Image */}
      <img
        src="/blog/wedding-gift.jpg"
        alt="Best Wedding Gift Ideas"
        className="w-full rounded-3xl mb-10"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-8">
        Weddings are one of the most special moments in life.
        Finding the perfect wedding gift can be difficult,
        especially when you want something emotional,
        personalized, and memorable.
      </p>

      {/* Heading 1 */}
      <h2 className="text-3xl font-bold mb-4">
        Why Personalized Gifts Are Trending
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        Personalized gifts create emotional value.
        Today couples prefer meaningful gifts instead
        of traditional items. Custom 3D printed miniatures
        are becoming one of the most unique wedding gifts in India.
      </p>

      {/* Heading 2 */}
      <h2 className="text-3xl font-bold mb-4">
        Custom Bride Groom Miniatures
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        A custom miniature captures memories forever.
        These miniatures are designed from real photos
        and transformed into beautiful 3D printed statues.
      </p>

      {/* Heading 3 */}
      <h2 className="text-3xl font-bold mb-4">
        Indian Wedding Miniatures
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        Indian wedding outfits look amazing in miniature form.
        Sherwani, lehenga, jewelry, and traditional poses
        make these miniatures look premium and emotional.
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918796289333"
        target="_blank"
        className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold"
      >
        Order on WhatsApp
      </a>

    </div>
  );
}
