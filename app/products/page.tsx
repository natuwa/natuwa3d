import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom 3D Miniatures in India | Personalized 3D Figurines | NATUWA3D",
  description:
    "Explore custom 3D printed miniatures in India. Personalized couple, wedding, family and single figurines made from photos, available in multiple sizes and finishes.",
  keywords: [
    "3D printed miniatures India",
    "custom 3D miniature",
    "personalized 3D figurine",
    "3D miniature from photo",
    "custom couple miniature",
    "wedding miniature",
    "family miniature",
    "personalized gift India",
    "custom figurine India",
  ],
  alternates: {
    canonical: "https://www.natuwa3d.com/products",
  },
  openGraph: {
    title: "Custom 3D Miniatures in India | NATUWA3D",
    description:
      "Turn your favorite photographs into personalized 3D printed miniatures with NATUWA3D.",
    url: "https://www.natuwa3d.com/products",
    siteName: "NATUWA3D",
    images: [
      {
        url: "/images/miniature3d2.webp",
        width: 1200,
        height: 630,
        alt: "Custom 3D printed miniature by NATUWA3D",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom 3D Miniatures in India | NATUWA3D",
    description:
      "Personalized 3D printed couple, wedding and family miniatures made from photographs.",
    images: ["/images/miniature3d2.webp"],
  },
};

const products = [
  {
    title: "Premium Detailed Miniature",
    description:
      "Highly detailed hand-finished miniature with realistic textures and professional detailing for the most lifelike result.",
    price: "₹3,999",
    image: "/images/miniature3d2.webp",
  },
  {
    title: "Flat Color Finish",
    description:
      "Clean hand-painted colors without detailed textures, offering a simple and elegant finish.",
    price: "₹2,999",
    image: "/images/miniature3d3.webp",
  },
  {
    title: "Raw Miniature",
    description:
      "Unpainted grey 3D printed model with basic detailing, ideal for a budget-friendly custom miniature.",
    price: "₹1,999",
    image: "/images/miniature3d4.webp",
  },
];

const miniatureTypes = [
  {
    title: "Custom Couple Miniatures",
    description:
      "Turn a favorite couple photograph into a personalized miniature that captures the moment, pose and overall look.",
  },
  {
    title: "Wedding Miniatures",
    description:
      "Create a memorable keepsake from your wedding or special ceremony photographs.",
  },
  {
    title: "Family Miniatures",
    description:
      "Preserve a family memory as a custom 3D figurine that can be displayed at home.",
  },
  {
    title: "Single Person Miniatures",
    description:
      "Create a personalized figurine based on an individual photograph, outfit or memorable pose.",
  },
];

const sizes = ["4 Inch", "6 Inch", "8 Inch", "10 Inch", "12 Inch"];

const process = [
  {
    number: "01",
    title: "Share Your Photos",
    description:
      "Send clear photographs and your requirements for the miniature.",
  },
  {
    number: "02",
    title: "3D Design",
    description:
      "Our team prepares the digital 3D design based on the provided references.",
  },
  {
    number: "03",
    title: "Customer Approval",
    description:
      "The design is shared with you for review before production moves forward.",
  },
  {
    number: "04",
    title: "3D Printing",
    description:
      "Once approved, the miniature is produced using the selected printing process.",
  },
  {
    number: "05",
    title: "Painting & Finishing",
    description:
      "For painted orders, the miniature is carefully finished according to the selected quality.",
  },
  {
    number: "06",
    title: "Quality Check & Delivery",
    description:
      "The completed miniature is checked before being prepared for delivery.",
  },
];

const faqs = [
  {
    question: "What is a custom 3D miniature?",
    answer:
      "A custom 3D miniature is a personalized figurine created from customer-provided photographs and requirements.",
  },
  {
    question: "Can you make a 3D miniature from a photo?",
    answer:
      "Yes. NATUWA3D creates personalized miniatures using customer-provided photographs as references for the digital 3D design.",
  },
  {
    question: "What sizes are available?",
    answer:
      "NATUWA3D currently offers miniature sizes of 4, 6, 8, 10 and 12 inches.",
  },
  {
    question: "How long does a custom miniature take?",
    answer:
      "The typical production duration is around 7–10 days depending on the design, size and finishing requirements.",
  },
  {
    question: "Will I see the design before printing?",
    answer:
      "Yes. The design is reviewed with the customer and production moves forward after design approval.",
  },
  {
    question: "Are GST and delivery charges included?",
    answer:
      "The final quotation provided for your order will clearly show the applicable product amount, GST and delivery charges. There are no hidden charges beyond the approved quotation.",
  },
];

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Custom 3D Miniatures by NATUWA3D",
    description:
      "Custom 3D printed miniatures and personalized figurines available from NATUWA3D.",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        image: `https://www.natuwa3d.com${product.image}`,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "NATUWA3D",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.price.replace(/[₹,]/g, ""),
          availability: "https://schema.org/InStock",
          url: "https://www.natuwa3d.com/products",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-white text-[#2d1810]">

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-14">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#8a6a5a] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Custom 3D Miniatures
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Personalized 3D Miniatures Made From Your Photos
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#6f625b] leading-8 max-w-3xl mx-auto">
            Turn your favorite memories into beautiful custom 3D printed
            miniatures. Choose your size, finish and design, then review your
            3D design before production.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/book-now"
              className="inline-flex justify-center items-center bg-[#2d1810] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#44271c] transition"
            >
              Create Your Miniature
            </Link>

            <Link
              href="#finishes"
              className="inline-flex justify-center items-center border border-[#d9c9c0] text-[#2d1810] px-7 py-3.5 rounded-lg font-semibold hover:bg-[#f8f5f2] transition"
            >
              View Finishes
            </Link>

          </div>

        </div>
      </section>

      {/* What We Create */}
      <section className="bg-[#f8f5f2] py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center mb-10">

            <p className="text-[#8a6a5a] font-medium tracking-widest uppercase text-sm mb-3">
              Personalized For You
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              What Can We Create?
            </h2>

            <p className="mt-4 text-[#6f625b] text-lg leading-7">
              Choose the type of custom miniature that best represents your
              memory, relationship or special occasion.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {miniatureTypes.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#eadfd7] rounded-2xl p-6"
              >
                <h3 className="font-serif text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#6f625b] leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Finishes */}
      <section
        id="finishes"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        <div className="max-w-3xl mx-auto text-center mb-10">

          <p className="text-[#8a6a5a] font-medium tracking-widest uppercase text-sm mb-3">
            Choose Your Quality
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Select Your Perfect Finish
          </h2>

          <p className="mt-4 text-[#6f625b] text-lg leading-7">
            Choose the level of finishing that matches your budget and the
            look you want for your miniature.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white border border-[#eadfd7] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={product.image}
                  alt={`${product.title} - NATUWA3D custom 3D miniature`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="font-serif text-2xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-3 text-[#6f625b] leading-7">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <p className="text-xs text-[#8a6a5a] uppercase tracking-wide">
                      Starting from
                    </p>

                    <p className="font-serif text-2xl font-bold text-[#2d1810]">
                      {product.price}
                    </p>
                  </div>

                  <Link
                    href="/book-now"
                    className="bg-[#2d1810] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#44271c] transition"
                  >
                    Order Now
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        <p className="text-center text-sm text-[#6f625b] mt-7">
          Final pricing depends on the selected size, design complexity,
          finishing and delivery requirements.
        </p>

      </section>

      {/* Sizes */}
      <section className="bg-[#f8f5f2] py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-[#8a6a5a] font-medium tracking-widest uppercase text-sm mb-3">
            Available Sizes
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Choose Your Miniature Size
          </h2>

          <p className="mt-4 text-[#6f625b] text-lg">
            Available sizes for different display spaces, occasions and
            miniature requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {sizes.map((size) => (
              <span
                key={size}
                className="bg-white border border-[#eadfd7] rounded-full px-6 py-3 font-semibold"
              >
                {size}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="max-w-3xl mx-auto text-center mb-10">

          <p className="text-[#8a6a5a] font-medium tracking-widest uppercase text-sm mb-3">
            Our Process
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            From Your Photograph to a Finished Miniature
          </h2>

          <p className="mt-4 text-[#6f625b] text-lg leading-7">
            We work step-by-step and keep you involved during the important
            design stage before production begins.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {process.map((item) => (
            <div
              key={item.number}
              className="border border-[#eadfd7] rounded-2xl p-6"
            >

              <span className="text-sm font-bold text-[#8a6a5a]">
                {item.number}
              </span>

              <h3 className="mt-2 font-serif text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-[#6f625b] leading-7 text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-8 bg-[#f8f5f2] rounded-2xl p-6 text-center">

          <p className="font-semibold text-lg">
            Typical production time: 7–10 days
          </p>

          <p className="mt-2 text-[#6f625b]">
            Timing may vary depending on design complexity, size, finishing
            requirements and order workload.
          </p>

        </div>

      </section>

      {/* Why NATUWA3D */}
      <section className="bg-[#2d1810] text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center mb-10">

            <p className="text-[#d7b9a8] font-medium tracking-widest uppercase text-sm mb-3">
              Why NATUWA3D
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              A Personalized Experience From Design to Delivery
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold">
                Customer Approval
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Your design is reviewed with you before the approved design
                moves into production.
              </p>
            </div>

            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold">
                Clear Quotation
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Applicable product, GST and delivery charges are clearly shown
                in your quotation.
              </p>
            </div>

            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold">
                Custom Made
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Each miniature is prepared specifically according to your
                photographs, requirements and selected finish.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="text-center mb-10">

          <p className="text-[#8a6a5a] font-medium tracking-widest uppercase text-sm mb-3">
            Frequently Asked Questions
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Custom 3D Miniature FAQs
          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="border border-[#eadfd7] rounded-2xl p-5"
            >

              <summary className="cursor-pointer font-semibold text-lg">
                {faq.question}
              </summary>

              <p className="mt-3 text-[#6f625b] leading-7">
                {faq.answer}
              </p>

            </details>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-[#f8f5f2] rounded-3xl p-8 md:p-12 text-center">

          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Turn Your Favorite Photo Into a 3D Miniature
          </h2>

          <p className="mt-4 text-[#6f625b] text-lg leading-7 max-w-2xl mx-auto">
            Whether it is a wedding memory, anniversary, family photograph or
            a special gift, create a personalized miniature that can be
            treasured for years.
          </p>

          <Link
            href="/book-now"
            className="inline-flex mt-7 bg-[#2d1810] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#44271c] transition"
          >
            Start Your Order
          </Link>

        </div>

      </section>

    </main>
  );
}
