import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Personalized Couple Miniature in India | Custom 3D Printed Wedding Gift",

  description:
    "Order personalized couple miniature made from photos. Custom 3D printed wedding miniatures and unique wedding gifts in India by NATUWA3D.",

  keywords: [
    "personalized couple miniature",
    "custom couple miniature",
    "3D printed wedding gift",
    "wedding miniature India",
    "miniature from photo",
    "couple figurine",
    "custom wedding gift",
    "3D miniature India",
  ],
};

export default function BlogPost() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2d1810] leading-tight mb-8">
        Personalized Couple Miniature – Unique Wedding Gift in India
      </h1>

      {/* IMAGE */}
      <img
        src="/images/og-image.jpg"
        alt="Personalized Couple Miniature"
        className="w-full rounded-3xl mb-12"
      />

      {/* INTRO */}
      <p className="text-lg leading-8 text-[#6f625b] mb-8">
        Personalized couple miniature is becoming one of the most unique and emotional wedding gift ideas in India.
        These custom 3D printed miniatures capture memories forever and transform special moments into beautiful collectibles.
      </p>

      <p className="text-lg leading-8 text-[#6f625b] mb-8">
        NATUWA3D creates premium quality custom couple miniatures using advanced 3D printing technology and real couple photographs.
        Every miniature is designed carefully to preserve emotions, outfits, poses, and memories.
      </p>

      {/* SECTION */}
      <h2 className="text-4xl font-serif font-bold text-[#2d1810] mb-5">
        What is a Personalized Couple Miniature?
      </h2>

      <p className="text-lg leading-8 text-[#6f625b] mb-10">
        A personalized couple miniature is a custom-made figurine created from real photos.
        These miniatures are designed using 3D modeling and produced with high-quality 3D printing technology.
        They are widely used as wedding gifts, anniversary gifts, engagement gifts, and memory keepsakes.
      </p>

      {/* SECTION */}
      <h2 className="text-4xl font-serif font-bold text-[#2d1810] mb-5">
        Why Custom Miniatures Are Trending in India
      </h2>

      <p className="text-lg leading-8 text-[#6f625b] mb-8">
        Traditional gifts are slowly being replaced by personalized gifts.
        Couples now prefer meaningful and emotional gifts that can preserve memories forever.
      </p>

      <p className="text-lg leading-8 text-[#6f625b] mb-10">
        Custom wedding miniatures are unique because they are created specially for each couple.
        Indian wedding outfits, poses, and emotions look incredibly beautiful in miniature form.
      </p>

      {/* SECTION */}
      <h2 className="text-4xl font-serif font-bold text-[#2d1810] mb-5">
        Perfect Gift for Weddings and Anniversaries
      </h2>

      <p className="text-lg leading-8 text-[#6f625b] mb-8">
        Personalized miniatures are perfect for:
      </p>

      <ul className="list-disc pl-6 text-lg leading-8 text-[#6f625b] mb-10">
        <li>Wedding gifts</li>
        <li>Anniversary gifts</li>
        <li>Engagement gifts</li>
        <li>Couple surprise gifts</li>
        <li>Birthday gifts for couples</li>
      </ul>

      {/* SECTION */}
      <h2 className="text-4xl font-serif font-bold text-[#2d1810] mb-5">
        Order Custom Couple Miniature from NATUWA3D
      </h2>

      <p className="text-lg leading-8 text-[#6f625b] mb-10">
        NATUWA3D specializes in premium custom 3D printed wedding miniatures in India.
        We transform your memories into timeless collectibles with high-quality finishing and realistic detailing.
      </p>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918796289333?text=Hi%20NATUWA3D"
        target="_blank"
        className="inline-block bg-[#2d1810] text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
      >
        Order Your Miniature on WhatsApp
      </a>

    </main>
  );
}
