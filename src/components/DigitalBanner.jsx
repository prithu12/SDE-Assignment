import React from "react";

export default function DigitalBanner() {
  return (
    <section className="relative overflow-hidden bg-[#E9F4F9] px-20 py-[60px] font-archivo max-[900px]:px-6 max-[900px]:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[27px] bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] px-[65px] py-[60px] max-[900px]:px-[30px] max-[900px]:py-10">

          {/* big N7 background */}
          <div
            className="
              pointer-events-none
              absolute
              right-[0px]
              top-1/2
              -translate-y-1/2
              select-none
              font-archivo
              text-[560px]
              font-medium
              leading-none
              opacity-10
              text-transparent
              bg-[linear-gradient(180deg,#02171F_0%,rgba(0,0,0,0)_100%)]
              bg-clip-text
              [-webkit-text-stroke:1.5px_#00B4FD]
              max-[900px]:text-[320px]
            "
          >
            N7
          </div>

          {/* content */}
          <div className="relative z-10 flex items-center justify-between gap-10 max-[900px]:flex-col max-[900px]:items-start">

            {/* left */}
            <div className="max-w-[608px]">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#E9F4F9]/45">
                N7 DETAILS
              </p>

              <h2 className="mb-5 text-[53px] leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] max-[900px]:text-[36px]">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>

              <p className="text-base leading-[1.3] text-[#E9F4F9]/80">
                N7 helps your financial institution improve the client experience,
                <br />
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* right buttons */}
            <div className="flex shrink-0 gap-10 max-[900px]:w-full max-[900px]:flex-col">

              <button className="inline-flex h-[49px] w-[210px] items-center justify-center rounded-[10px] border border-[#E9F4F9] font-archivo text-[15px] uppercase text-[#E9F4F9] hover:bg-white/5">
                CONTACT US
              </button>

              <button className="inline-flex h-[49px] w-[210px] items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#00B4FD_0%,#003ACE_100%)] font-archivo text-[15px] uppercase text-white hover:opacity-90">
                REQUEST DEMO
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}