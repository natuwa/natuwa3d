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

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">
        Best Wedding Gift Ideas in India
      </h1>

      {/* Main Image */}
      <img
        src="/images/hero-couple.jpg"
        alt="Wedding Miniature"
        className="w-full rounded-3xl mb-10"
      />

      {/* Content */}
      <p className="text-lg leading-8 mb-6">
        Personalized wedding gifts are becoming one of the biggest trends in India.
      </p>

      <p className="text-lg leading-8 mb-10">
        Custom 3D printed miniatures preserve memories forever and create emotional value.
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">
        Why Wedding Miniatures Are Special
      </h2>

      <p className="text-lg leading-8 mb-6">
        Bride groom miniatures are unique because they are made from real photos.
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 mt-10">
        Best Personalized Gift
      </h2>

      <p className="text-lg leading-8 mb-6">
        These miniatures are perfect for weddings, anniversaries, and memories.
      </p>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918796289333?text=Hi%20Natuwa3D"
        target="_blank"
        className="inline-block mt-10 bg-green-500 text-white px-6 py-4 rounded-2xl"
      >
        Order on WhatsApp
      </a>

    </main>
  );
}
