"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-20 pb-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Small Tag */}
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Premium 3D Miniatures
            </p>

            {/* Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Turn Your Moments Into <br />
              <span className="text-primary">3D Miniature Memories</span>
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-muted-foreground text-lg max-w-xl">
              Get a lifelike custom miniature of you and your loved ones. Perfect for weddings, gifts & memories that last forever.
            </p>

            {/* Urgency */}
            <p className="text-red-500 font-medium mt-3">
              Only 5 slots left this week 🔥
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Button asChild size="lg" className="px-8 py-6 bg-primary text-white hover:opacity-90">
                <Link href="/book-now">
                  Book Your Miniature @ ₹500 →
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <a href="#gallery">
                  View Gallery
                </a>
              </Button>

              <Button asChild size="lg" className="px-8 py-6 bg-green-500 text-white hover:opacity-90">
                <a
                  href="https://wa.me/918796289333?text=Hi%20Natuwa3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </a>
              </Button>

            </div>

            {/* Trust Line */}
            <p className="mt-5 text-sm text-muted-foreground">
              Trusted by 100+ happy customers ❤️
            </p>

          </div>

          {/* RIGHT VIDEO */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-lg mx-auto">

              {/* Background Circle */}
              <div className="absolute inset-0 bg-secondary rounded-full scale-90 -z-10" />

              {/* VIDEO */}
              <div
                onClick={handleClick}
                className="relative cursor-pointer w-full h-full group"
              >
                <video
                  ref={videoRef}
                  src="/hero-couple%20turntable3.mp4"
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-3xl shadow-2xl w-full h-full"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!playing && (
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-full text-white text-2xl group-hover:scale-110 transition">
                      ▶
                    </div>
                  )}
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm shadow-lg">
                    {playing ? "Pause" : "View 360°"}
                  </div>
                </div>

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
