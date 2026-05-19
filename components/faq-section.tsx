"use client";
export function FAQSection() {
  const faqs = [
    {
      question: "What is a custom 3D wedding miniature?",
      answer:
        "A custom 3D wedding miniature is a personalized figurine created from your photos using advanced 3D printing technology.",
    },

    {
      question: "What is the starting price of miniatures?",
      answer:
        "Our custom 3D miniatures start from ₹2999 depending on size, pose, and detailing.",
    },

    {
      question: "Do you deliver all over India?",
      answer:
        "Yes, NATUWA3D delivers personalized 3D printed miniatures across India safely.",
    },

    {
      question: "How can I order my miniature?",
      answer:
        "You can order directly through our website or WhatsApp by sharing your photos and requirements.",
    },
  ];

  return (
    <section className="w-full bg-[#f8f5f2] py-24 border-t border-[#e8ddd5]">

      <div className="max-w-5xl mx-auto px-6">

        {/* TOP LABEL */}
        <p className="text-center uppercase tracking-[4px] text-[#c17f59] text-sm mb-5">
          FAQ
        </p>

        {/* HEADING */}
        <h2 className="text-5xl md:text-6xl text-center font-serif text-[#2d1810] leading-tight mb-5">
          Frequently Asked Questions
        </h2>

        {/* SUBTEXT */}
        <p className="text-center text-[#6f625b] max-w-2xl mx-auto mb-16 text-lg">
          Everything you need to know about our custom 3D printed wedding miniatures.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#eadfd7] rounded-3xl p-8 shadow-sm hover:shadow-md transition"
            >

              <h3 className="text-2xl font-serif text-[#2d1810] mb-4">
                {faq.question}
              </h3>

              <p className="text-[#6f625b] leading-8 text-lg">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
