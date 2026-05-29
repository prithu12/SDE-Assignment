import React from "react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] px-20 py-[60px] max-[900px]:px-6 max-[900px]:py-10">
      {/* section wrapper */}
      <div className="mx-auto max-w-[1440px]">
        {/* CTA box */}
        <div className="relative h-[427px] w-full overflow-hidden rounded-[27px] bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] px-[81px] py-[78px] max-[900px]:h-auto max-[900px]:px-[30px] max-[900px]:py-10">
          {/* background CB7 */}
          <div
            className="
    pointer-events-none
    absolute
    top-[-160px]
    left-[223px]
    z-0
    select-none
    w-[1141px]
    font-archivo
    text-[572px]
    font-medium
    leading-[120%]
    opacity-60
    text-transparent
    bg-[linear-gradient(180deg,#02171F_0%,rgba(0,0,0,0)_100%)]
    bg-clip-text
    [-webkit-text-stroke:1.59px_transparent]
    [-webkit-text-stroke-image:linear-gradient(90deg,#00B4FD_0%,#003ACE_100%)]
  "
          >
            CB7
          </div>

          {/* content */}
          <div className="relative z-10 flex h-full items-center justify-between gap-10 max-[900px]:flex-col max-[900px]:items-start">
            {/* left */}
            <div className="max-w-[520px]">
              <h2 className="mb-6 text-[53px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] max-[900px]:text-[36px] max-[480px]:text-[28px]">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>

              <p className="text-base leading-[1.3] text-[#E9F4F9]/80">
                CB7 helps your financial institution improve the client
                experience,
                <br />
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* buttons */}
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
