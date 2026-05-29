import React, { useState } from "react";

const zoomerLogo = "/logo (1).png";
const caseImage = "/Frame 110.png";
const cases = [
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
  },
  {
    tag: "GETTING STARTED",
    title: "How N7 transformed digital banking infrastructure",
  },
  {
    tag: "GETTING STARTED",
    title: "Building compliant API banking for modern institutions",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + cases.length) % cases.length);

  const next = () =>
    setActive((a) => (a + 1) % cases.length);

  return (
    <section className="bg-[#000D12] px-4 py-16 md:px-10 lg:px-20 ">
      {/* heading */}
      <h2 className="mb-12 text-center text-[32px] md:text-[53px] text-[#E9F4F9] bg-[#000D12]">
        Our Case Studies
      </h2>

      {/* card */}
      <div className="mx-auto w-full max-w-[1194px] rounded-[18px] bg-[#01141B]">

        <div className="flex flex-col lg:flex-row">

          {/* responsive image */}
          <div className="w-full lg:w-[45%] p-4 md:p-6">
            <img
              src={caseImage}
              alt="Case study"
              className="w-full h-auto rounded-[12px] object-contain"
            />
          </div>

          {/* content */}
          <div className="flex flex-1 flex-col justify-center px-5 py-8 md:px-10">

            <span className="text-xs uppercase tracking-wide text-[#2490BB]">
              {cases[active].tag}
            </span>

            <h3 className="mt-4 max-w-[480px] text-[28px] leading-[1.2] text-[#E9F4F9] md:text-[43px]">
              {cases[active].title}
            </h3>

            <div className="mt-5">
              <img
                src={zoomerLogo}
                alt="Zoomerr"
                className="h-[28px] w-auto object-contain"
              />
            </div>

            <button className="mt-8 w-full max-w-[431px] rounded-[10px] border border-white/40 py-3 text-xs uppercase text-white/60 hover:border-sky-400 hover:text-sky-400">
              READ MORE
            </button>
          </div>
        </div>

        {/* controls */}
        <div className="flex flex-wrap items-center justify-center gap-6 px-4 py-8">

          <button onClick={prev}>
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-sky-400 text-sky-400">
              ←
            </span>
          </button>

          <div className="flex items-center gap-2">
            {cases.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-full ${
                  i === active
                    ? "h-3 w-[38px] bg-[#0B4B63]"
                    : "h-3 w-3 border border-[#0B4B63]"
                }`}
              />
            ))}
          </div>

          <button onClick={next}>
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-sky-400 text-sky-400">
              →
            </span>
          </button>

          <div className="cursor-pointer border-b border-sky-400 text-sm uppercase text-sky-400">
            VIEW ALL →
          </div>
        </div>
      </div>
    </section>
  );
}