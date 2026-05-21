"use client"

import '@google/model-viewer'

export default function MiniatureViewer() {
  return (

    <section className="w-full py-20 bg-[#f7f3ef]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-serif text-center text-[#2d1810] mb-4">
          Create Your Miniature
        </h2>

        <p className="text-center text-[#6b5b52] mb-16">
          Upload photo → Generate Preview → Book Your Miniature
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border text-center">

            <h3 className="text-2xl font-serif mb-6 text-[#2d1810]">
              Upload Your Photo
            </h3>

            <input
              type="file"
              className="w-full border rounded-xl p-3"
            />

            <p className="text-sm text-gray-500 mt-4">
              Upload bride & groom photo
            </p>

          </div>

          {/* CENTER 3D VIEWER */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border flex justify-center">

            <model-viewer
              src="/miniature.glb"
              alt="3D Miniature"
              auto-rotate
              camera-controls
              shadow-intensity="1"
              style={{
                width: "100%",
                height: "500px",
              }}
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border text-center">

            <h3 className="text-2xl font-serif mb-6 text-[#2d1810]">
              Ready To Order?
            </h3>

            <p className="text-[#6b5b52] mb-8">
              Book your personalized 3D miniature now.
            </p>

            <a
              href="/book-now"
              className="inline-block bg-[#4a2c2a] text-white px-8 py-4 rounded-full hover:bg-[#321816] transition"
            >
              Book Now
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}
