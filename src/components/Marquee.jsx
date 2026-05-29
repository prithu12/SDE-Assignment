import React from 'react';

const items = [
  { text: 'N7', gradient: true },
  { text: '✦', star: true },
  { text: 'Say', bold: true },
  { text: '👋', emoji: true },
  { text: 'to the new way of banking', bold: true },
  { text: '✦', star: true },
  { text: 'CB7', gradient: true },
  { text: '✦', star: true },
  { text: 'Say', bold: true },
  { text: '👋', emoji: true },
  { text: 'to the new way of banking', bold: true },
  { text: '✦', star: true },
];

export default function Marquee() {
  return (
    <div className="flex h-[116px] items-center overflow-hidden border-y border-[rgba(0,13,18,0.1)] bg-[#E9F4F9] text-black">
      <div className="flex w-max items-center gap-6 whitespace-nowrap animate-marquee will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`flex-shrink-0 font-archivo text-[47px] leading-none text-ink ${item.gradient ? 'bg-sky-gradient bg-clip-text font-medium text-transparent' : ''} ${item.bold ? 'font-semibold text-ink' : ''} ${item.star ? 'text-[36px] opacity-30' : ''}`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
