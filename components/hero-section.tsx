"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef(null);
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Get Booked Your 3D Miniature
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
            
              <Button asChild size="lg" className="px-8 py-6 bg-primary text-white hover:opacity-90">
                <Link href="/book-now">
                  Reserve Your Slot @ ₹500 →
                </Link>
              </Button>
            
              <Button asChild size="lg" className="px-8 py-6 bg-primary text-white hover:opacity-90">
                <a href="#gallery">
                  View Gallery
                </a>
              </Button>
            
              <a
                href="https://wa.me/918796289333?text=Hi%20Natuwa3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="px-8 py-6 bg-primary text-white hover:opacity-90 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-green-400"
                  >
                    <path d="M16 .4C7.2.4 0 7.6 0 16c0 2.8.7 5.5 2 7.9L0 32l8.3-2.2c2.3 1.2 4.9 1.9 7.7 1.9 8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 29c-2.5 0-5-.7-7.1-2l-.5-.3-4.9 1.3 1.3-4.7-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.2C2.4 8.5 8.5 2.4 16 2.4S29.6 8.5 29.6 16 23.5 29.4 16 29.4zm7.5-9.4c-.4-.2-2.4-1.2-2.7-1.3-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.2-.4.2-.8.1-.4-.2-1.7-.6-3.2-1.9-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.2-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.2 0-.6.1-.9.4-.3.4-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.7 5.9 5.2.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 2.4-1 2.7-1.9.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
                  </svg>
            
                  Chat on WhatsApp
                </Button>
              </a>

            
            </div>
            </div>

          {/* RIGHT VIDEO */}
          <div className="relative order-1 lg:order-2">
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
                {!playing ? (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-white text-lg">▶</span>
                    <span className="text-white text-sm">View 360°</span>
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-white text-lg">⏸</span>
                    <span className="text-white text-sm">Pause</span>
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
