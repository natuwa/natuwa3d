export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">
          About Natuwa3D
        </h1>

        <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto">
          Turning Your Precious Memories Into Realistic 3D Miniatures.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>

          <p className="text-lg text-gray-700 leading-8">
            Natuwa3D was created with a simple mission —
            to help people preserve their most meaningful moments
            in a unique and lasting form.
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-6">
            Using advanced 3D scanning, digital sculpting,
            and high-quality 3D printing technology,
            we transform photographs into highly detailed
            custom miniatures that capture emotions,
            personalities, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Natuwa3D?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Premium Quality
              </h3>
              <p>
                High-resolution 3D printing with realistic detailing
                and professional finishing.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Fully Personalized
              </h3>
              <p>
                Every miniature is custom-made from your photos,
                ensuring a truly one-of-a-kind gift.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Crafted With Care
              </h3>
              <p>
                Each model is carefully designed and reviewed
                before production for maximum accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            What We Create
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li>✓ Custom Couple Miniatures</li>
            <li>✓ Wedding Figurines</li>
            <li>✓ Family Miniatures</li>
            <li>✓ Personalized Gifts</li>
            <li>✓ Pet Miniatures</li>
            <li>✓ Corporate Awards & Keepsakes</li>
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            We believe memories deserve more than a place in a gallery.
            Our goal is to transform your special moments into
            tangible keepsakes that can be treasured for years.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Create Your Own Miniature Today
        </h2>

        <p className="text-lg mb-8">
          Upload your photos and let us bring your memories to life.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold">
          Order Now
        </button>
      </section>
    </main>
  );
}
