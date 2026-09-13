import React from "react";

const logos = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/logo${i + 1}.png`,
  alt: `Client Logo ${i + 1}`,
}));

// Duplicate for seamless infinite loop
const ticker = [...logos, ...logos];

export default function LogoMarquee({ dark = false }) {
  return (
    <div className={`w-full overflow-hidden ${dark ? "bg-studio-dark" : "bg-studio-card"} py-10`}>
      <div className="flex animate-marquee gap-12 w-max">
        {ticker.map((logo, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 flex items-center justify-center w-40 h-20 rounded-2xl px-5 ${
              dark
                ? "bg-white/5 border border-white/10"
                : "bg-white border border-studio-border"
            } hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
