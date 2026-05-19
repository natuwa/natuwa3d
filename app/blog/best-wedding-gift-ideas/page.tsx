import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Wedding Gift Ideas in India | Personalized Couple Miniatures",

  description:
    "Discover the best wedding gift ideas in India including personalized 3D printed couple miniatures and custom wedding keepsakes.",

  keywords: [
    "best wedding gift ideas",
    "personalized wedding gifts",
    "3D printed wedding miniature",
    "custom couple figurine",
    "wedding gifts India",
  ],
};

export default function BlogPost() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2d1810] leading-tight mb-8">
        Best Wedding Gift Ideas in India
      </h1>

      <img
        src="/images/hero-couple.jpg"
        alt="Best Wedding Gift Ideas"
        className="w-full rounded-3xl mb-12"
      />

      <p className="text-lg leading-8 text-[#6f625b] mb-8">
        Finding the perfect wedding gift can be difficult.
        Personalized gifts are becoming one of the most loved trends in India because they preserve memories forever.
      </p>

      <p className="text-lg leading-8 text-[#6f625b] mb-8">
        Custom 3D printed couple miniatures are unique wedding keepsakes that transform real moments into beautiful collectibles.
      </p>

      <h2 className="text-4xl font-serif font-bold text-[#2d1810] mb-5">
        Why Personalized Gifts Are Special
      </h2>

      <p className="text-lg leading-8 text-[#6f625b] mb-10">
        Personalized gifts create emotional connections.
        Unlike traditional gifts, custom miniatures are specially designed for couples using their real wedding photos.
      </p>

      <h2 className="text-4xl font-serif font-bold text-[#2d1810] mb-5">
        Popular Wedding Gift Ideas
      </h2>

      <ul className="list-disc pl-6 text-lg leading-8 text-[#6f625b] mb-10">
        <li>Custom couple miniatures</li>
        <li>Wedding memory keepsakes</li>
        <li>Anniversary figurines</li>
        <li>Personalized home decor</li>
        <li>3D printed wedding statues</li>
      </ul>

      <a
        href="https://wa.me/918796289333?text=Hi%20NATUWA3D"
        target="_blank"
        className="inline-block bg-[#2d1810] text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
      >
        Order Your Miniature
      </a>

    </main>
  );
}
