"use client";
export function FAQSection() {
  const faqs = [
    {
      question: "What is a custom 3D wedding miniature?",
      answer:
        "A custom 3D wedding miniature is a personalized figurine created from your photos using 3D printing technology.",
    },

    {
      question: "What is the starting price of miniatures?",
      answer:
        "Our custom 3D miniatures start from ₹2999 depending on size and detailing.",
    },

    {
      question: "Do you deliver all over India?",
      answer:
        "Yes, NATUWA3D delivers personalized 3D miniatures across India.",
    },

    {
      question: "How can I order my miniature?",
      answer:
        "You can order directly through our website or WhatsApp by sharing your photos and requirements.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      
      <h2 className="text-4xl font-bold text-center mb-14">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 bg-white shadow-sm"
          >
            
            <h3 className="text-xl font-semibold mb-3">
              {faq.question}
            </h3>

            <p className="text-gray-600 leading-7">
              {faq.answer}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
