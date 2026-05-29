import React from "react";

export default function BannerFooter() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] px-20 py-[60px] font-archivo max-[900px]:px-6 max-[900px]:py-10 max-[480px]:px-5 max-[480px]:py-8">
      <div className="relative z-[2] flex items-center justify-between gap-10 rounded-[27px] bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] px-[65px] py-[60px] max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:px-[30px] max-[900px]:py-10">
        <div className="max-w-[608px]">
          <h2 className="mb-5 text-[53px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] max-[900px]:text-[36px] max-[480px]:text-[28px]">
            Take the full advantage of
            <br />
            going paper-less now.
          </h2>
          <p className="text-base leading-[1.3] text-[#E9F4F9]/80">
            CB7 helps your financial institution improve the client experience,
            <br />
            automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="flex shrink-0 gap-10 max-[900px]:w-full max-[900px]:flex-col max-[900px]:gap-4">
          <button className="inline-flex h-[49px] items-center justify-center rounded-[10px] border border-[#E9F4F9] px-[59px] py-[15px] font-archivo text-[15px] uppercase text-[#E9F4F9] hover:bg-white/5 max-[900px]:w-full">
            CONTACT US
          </button>

          <button className="inline-flex h-[49px] w-[210px] items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#00B4FD_0%,#003ACE_100%)] px-[51px] py-[15px] font-archivo text-[15px] uppercase text-[#E9F4F9] transition-opacity hover:opacity-90 max-[900px]:w-full">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </section>
  );
}
