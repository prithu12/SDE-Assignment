import React from "react";

const amlDashboard = "/Frame 90.png";
const kycDashboard = "/Frame 99.png";
const tick="/Frame 15.png";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function CoreBanking() {
  return (
    <>
      {/* TOP SECTION */}
      <section className="relative overflow-hidden bg-[#000D12] w-full h-full py-20">

        {/* background CB7 */}
        <div
          className="
            pointer-events-none
            absolute
            left-[-163px]
            top-[-2.25px]
            z-0
          
            select-none
            w-[1141px]
            font-archivo
            text-[572px]
            font-medium
            leading-[120%]
            opacity-10
            text-transparent
            bg-[linear-gradient(180deg,#02171F_0%,rgba(0,0,0,0)_100%)]
            bg-clip-text
            [-webkit-text-stroke:1.6px_#00B4FD]
          "
        >
          CB7
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between gap-10 px-5 md:px-10 lg:px-20 max-[1100px]:flex-col">

          {/* left text */}
          <div className="w-full max-w-[608px] pl-6 max-[1100px]:pl-0">

            <h2 className="text-[32px] leading-[1.2] text-[#E9F4F9] md:text-[53px]">
              A complete cloud-based
              <br />
              core banking.
            </h2>

            <p className="mt-6 text-base leading-[1.3] text-[#E9F4F9]/80">
              Faster time to market with our cloud-based
              <br />
              core banking services
            </p>

            <button className="mt-10 inline-flex h-[49px] w-[210px] items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#00B4FD_0%,#003ACE_100%)] text-[15px] uppercase text-white">
              REQUEST DEMO
            </button>

            <div className="mt-8 flex w-fit cursor-pointer items-center gap-2 border-b border-sky-400 pb-[2px] text-sm uppercase text-sky-400">
              <span>LEARN MORE</span>
              <span>→</span>
            </div>
          </div>

          {/* laptop */}
          <div className="relative z-[1] flex min-w-0 flex-1  justify-end max-[1100px]:w-full left-[200px] h-[461.42px] max-[1100px]:left-0">

            <div className="relative w-[760px] max-w-[760px] max-[1100px]:max-w-full">
              <img
                src={amlDashboard}
                alt="AML Dashboard"
                className="block h-auto w-full"
              />

              {/* laptop base */}
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative flex min-h-[681px] items-center overflow-hidden bg-[#000D12] py-20 pl-0 pr-20 max-[1100px]:flex-col max-[1100px]:gap-10 max-[1100px]:px-10 max-[600px]:px-5">

        {/* left image */}
        {/* left image */}
<div className="relative z-[1] flex w-[492px] shrink-0 flex-col max-[1100px]:w-full">

  {/* main screen */}
  <div className="overflow-hidden rounded-r-[16px] ">
    <img
      src={kycDashboard}
      alt="KYC Dashboard"
      className="block h-auto w-full"
    />
  </div>

  {/* bottom base */}
</div>

        {/* right text */}
        <div className=" absolute left-[770px]">
        <div className="flex max-w-[650px]  flex-1 flex-col gap-[34px] pl-[70px] max-[1100px]:p-0">
          <h3 className="text-[27px] leading-[1.3] text-[#E9F4F9]">
            Run a more efficient, flexible, and digitally
            connected corebanking system
          </h3>

          <div className="flex flex-col gap-3">

            <p className="text-base font-semibold text-[#E9F4F9]">
              What you will get:
            </p>

            <div className="flex gap-7 max-[600px]:flex-col">

              <div className="flex flex-1 flex-col gap-2.5">
                {features.slice(0, 5).map((f, i) => (
                  <div className="flex items-start gap-2" key={i}>
                    <img src={tick} alt="tick" className="mt-1 h-[18px] w-[18px] flex-shrink-0 object-contain" />
                    <span className="text-base text-[#E9F4F9]/80">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col gap-2.5 text-left">
                {features.slice(5).map((f, i) => (
                  <div className="flex items-start gap-2" key={i}>
                    <img src={tick} alt="tick" className="mt-1 h-[18px] w-[18px] flex-shrink-0 object-contain" />
                    <span className="text-base text-[#E9F4F9]/80">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}