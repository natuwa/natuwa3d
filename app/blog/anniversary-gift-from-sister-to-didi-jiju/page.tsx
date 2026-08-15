import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Anniversary Gift from Sister to Didi & Jiju | Custom 3D Miniature | NATUWA3D",
  description:
    "Looking for a meaningful anniversary gift for your didi and jiju? Discover how a sister can turn a special couple photograph into a personalized 3D miniature keepsake.",
  keywords: [
    "anniversary gift for sister and brother in law",
    "anniversary gift for didi jiju",
    "anniversary gift from sister",
    "personalized anniversary gift",
    "custom couple miniature",
    "3D miniature anniversary gift",
    "3D miniature from photo",
    "unique anniversary gift India",
  ],
  openGraph: {
    title:
      "A Heartfelt Anniversary Gift for Didi & Jiju | NATUWA3D",
    description:
      "Turn a beautiful memory of your didi and jiju into a personalized 3D miniature anniversary gift.",
    url: "https://www.natuwa3d.com/blog/anniversary-gift-from-sister-to-didi-jiju",
    siteName: "NATUWA3D",
    images: [
      {
        url: "/images/didi-jiju-anniversary.png",
        width: 1200,
        height: 630,
        alt: "Custom 3D miniature anniversary gift for a couple",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
};

export default function AnniversaryGiftBlog() {
  return (
    <main className="bg-white text-[#2d1810]">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">

        <p className="text-sm font-semibold tracking-wide uppercase text-[#8a6a5a] mb-4">
          Anniversary Gift Ideas
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
          A Heartfelt Anniversary Gift from a Sister to Her Didi & Jiju
        </h1>

        <p className="mt-5 text-lg text-[#6f625b] leading-8 max-w-3xl">
          Some relationships deserve more than an ordinary gift. Discover how
          a sister can turn a beautiful memory of her didi and jiju into a
          personalized 3D miniature they can treasure for years.
        </p>

      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-6">

        <img
          src="/images/didi-jiju-anniversary.jpg"
          alt="Personalized 3D miniature anniversary gift for didi and jiju"
          className="w-full max-h-[560px] object-cover rounded-3xl"
        />

      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">

        <p className="text-lg text-[#4f4540] leading-8">
          An anniversary is more than just another date on the calendar. It
          celebrates the journey, memories and bond that a couple has built
          together.
        </p>

        <p className="mt-6 text-lg text-[#4f4540] leading-8">
          For a sister, her didi and jiju can hold a very special place in her
          life. So when their anniversary arrives, finding a gift that feels
          personal and meaningful can make the occasion even more special.
        </p>

        {/* Story */}
        <section className="mt-12">

          <h2 className="text-3xl font-serif font-bold mb-5">
            A Sister Wanted Something More Meaningful
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            Instead of choosing a regular anniversary gift, she wanted to give
            her didi and jiju something that represented their relationship.
            Something they could keep as a memory rather than simply use and
            forget.
          </p>

          <p className="mt-5 text-lg text-[#4f4540] leading-8">
            She selected one of their favorite photographs and decided to turn
            that special moment into a custom 3D miniature.
          </p>

        </section>

        {/* Why Miniature */}
        <section className="mt-12">

          <h2 className="text-3xl font-serif font-bold mb-5">
            Why a Custom 3D Miniature?
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            Photographs preserve memories visually, but a 3D miniature gives
            that memory a physical form.
          </p>

          <p className="mt-5 text-lg text-[#4f4540] leading-8">
            A favorite couple photograph can be transformed into a miniature
            that represents their pose, clothing and overall moment. It can
            then be displayed at home as a personal anniversary keepsake.
          </p>

          <ul className="mt-6 space-y-3 text-lg text-[#4f4540]">
            <li>✓ Personalized from a couple photograph</li>
            <li>✓ Custom pose and clothing details</li>
            <li>✓ Unique anniversary keepsake</li>
            <li>✓ Can be displayed at home or on a desk</li>
            <li>✓ Made specifically for the couple</li>
          </ul>

        </section>

        {/* Process */}
        <section className="mt-14 bg-[#f8f5f2] rounded-3xl p-7 md:p-10">

          <h2 className="text-3xl font-serif font-bold mb-5">
            From Photograph to Anniversary Miniature
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            Creating a personalized miniature involves several stages. At
            NATUWA3D, the customer is involved throughout the important design
            stages so the approved design can move forward with confidence.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            {[
              ["01", "Choose a Photograph"],
              ["02", "3D Design"],
              ["03", "Customer Review"],
              ["04", "Design Approval"],
              ["05", "3D Printing"],
              ["06", "Painting & Finishing"],
              ["07", "Quality Check"],
              ["08", "Delivery"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="bg-white border border-[#eadfd7] rounded-2xl p-5"
              >
                <span className="text-sm font-semibold text-[#8a6a5a]">
                  {number}
                </span>

                <h3 className="mt-2 font-semibold text-lg">
                  {title}
                </h3>
              </div>
            ))}

          </div>

          <p className="mt-7 text-lg text-[#4f4540] leading-8">
            Depending on the design, size and finishing requirements, the
            complete production process generally takes around{" "}
            <strong>7–10 days</strong>.
          </p>

        </section>

        {/* Photo Selection */}
        <section className="mt-14">

          <h2 className="text-3xl font-serif font-bold mb-5">
            Choosing the Right Photo of Didi & Jiju
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            The photograph is one of the most important parts of a custom
            miniature. A clear and well-lit reference helps the artist
            understand the couple&apos;s appearance and details more
            accurately.
          </p>

          <ul className="mt-6 space-y-3 text-lg text-[#4f4540]">
            <li>✓ Clear and high-quality photograph</li>
            <li>✓ Good lighting</li>
            <li>✓ Faces clearly visible</li>
            <li>✓ Clothing details visible</li>
            <li>✓ Suitable pose</li>
            <li>✓ Minimal blur or obstruction</li>
          </ul>

        </section>

        {/* Emotional Section */}
        <section className="mt-14">

          <h2 className="text-3xl font-serif font-bold mb-5">
            More Than Just a Gift
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            The most memorable gifts are often the ones that carry a story.
            A custom miniature can represent a particular photograph, a
            celebration or simply a beautiful moment shared by two people.
          </p>

          <p className="mt-5 text-lg text-[#4f4540] leading-8">
            For a sister gifting her didi and jiju, it can become a small
            reminder of their relationship and the memories they have created
            together.
          </p>

        </section>

        {/* Gift Ideas */}
        <section className="mt-14">

          <h2 className="text-3xl font-serif font-bold mb-5">
            Other Anniversary Gift Ideas for Didi & Jiju
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            If you are looking for more ideas, you can combine a personalized
            miniature with another small gift to create a complete anniversary
            surprise.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">

            {[
              "Personalized photo album",
              "Handwritten anniversary card",
              "Customized name plate",
              "Couple photo frame",
              "Personalized home decoration",
              "Custom 3D miniature",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#eadfd7] rounded-2xl p-5"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}

          </div>

        </section>

        {/* Final */}
        <section className="mt-14">

          <h2 className="text-3xl font-serif font-bold mb-5">
            A Memory They Can Keep Forever
          </h2>

          <p className="text-lg text-[#4f4540] leading-8">
            An anniversary gift does not have to be expensive to be meaningful.
            It simply needs to represent the thought behind it.
          </p>

          <p className="mt-5 text-lg text-[#4f4540] leading-8">
            Turning a favorite photograph of your didi and jiju into a
            personalized 3D miniature is one way to transform a beautiful
            memory into something tangible that they can keep and display for
            years.
          </p>

        </section>

        {/* CTA */}
        <section className="mt-16 bg-[#2d1810] text-white rounded-3xl p-8 md:p-10 text-center">

          <h2 className="text-3xl font-serif font-bold">
            Create a Custom Couple Miniature
          </h2>

          <p className="mt-4 text-white/80 leading-7 max-w-2xl mx-auto">
            Have a special photograph of your didi and jiju? Turn their
            favorite moment into a personalized 3D miniature with NATUWA3D.
          </p>

          <Link
            href="/book-now"
            className="inline-flex mt-7 bg-white text-[#2d1810] px-7 py-3.5 rounded-lg font-semibold hover:bg-[#f1e8e2] transition"
          >
            Create Their Miniature
          </Link>

        </section>

        {/* Back */}
        <div className="text-center mt-10">

          <Link
            href="/blog"
            className="text-[#8a6a5a] font-semibold hover:underline"
          >
            ← Back to all blogs
          </Link>

        </div>

      </article>

    </main>
  );
}
