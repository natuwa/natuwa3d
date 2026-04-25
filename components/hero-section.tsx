"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Wedding Keepsakes
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Custom 3D Printed <br />
              <span className="text-primary">Wedding Miniature</span> in India
            </h1>

            <p className="mt-6 text-muted-foreground text-lg">
              Transform your memories into stunning 3D printed miniatures.
            </p>

            <p className="text-red-500 font-medium mt-2">
              Only 5 slots left this week
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="px-8 py-6">
                <Link href="/book-now">
                  Reserve Your Slot @ ₹500 →
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <Link href="#gallery">
                  View Gallery
                </Link>
              </Button>

              <Link
                href="https://wa.me/919554069828?text=Hi%20I%20want%203D%20miniature"
                target="_blank"
              >
                <Button size="lg" variant="outline" className="px-8 py-6">
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">

              {/* Background Circle */}
              <div className="absolute inset-0 bg-secondary rounded-full scale-90 -z-10" />

              {/* VIDEO */}
              <div
                onClick={handleClick}
                className="relative cursor-pointer w-full h-full"
              >
                <video
                  ref={videoRef}
                  src="/hero-couple%20turntable3.mp4"
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-3xl shadow-2xl w-full h-full"
                />

                {/* PLAY BUTTON */}
                {!playing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-full shadow-xl">
                      <span className="text-3xl">▶</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decoration */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
