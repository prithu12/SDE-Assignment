import React from 'react';
const rows = [
  {
    phone: "/iphone-1.png",
    side: 'right',
    title: 'Fully compliant with regulatory requirement',
    desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    bullets: ['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
  },
  {
    phone: "/iphone-2.png",
    side: 'left',
    title: 'No legacy IT systems',
    desc: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    bullets: ['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'],
  },
  {
    phone: "/iphone-3.png",
    side: 'right',
    title: 'No traditional branches',
    desc: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    bullets: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'],
  },
];

export default function DigitalBanking() {
  return (
    <section className="relative overflow-hidden bg-[#E9F4F9] px-20 pb-20 pt-[100px] max-[900px]:px-6 max-[900px]:py-[60px] max-[480px]:px-4 max-[480px]:py-12">
      <div className="pointer-events-none absolute left-[277px] top-[-67px] z-0 select-none font-archivo text-[573px] font-medium leading-[1.2] text-ink/5 max-[900px]:hidden" aria-hidden="true">N7</div>
      <div className="pointer-events-none absolute bottom-[-600px] right-[-120px] z-0 select-none font-archivo text-[1524px] font-medium leading-[1.2] text-ink/[0.03] max-[900px]:hidden" aria-hidden="true">7</div>

      <svg className="pointer-events-none absolute right-[-80px] top-20 z-0 h-[420px] w-[420px] max-[900px]:hidden" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="210" cy="210" r="208" stroke="#003ACE" strokeWidth="1" opacity="0.15"/>
        <circle cx="210" cy="210" r="160" stroke="#003ACE" strokeWidth="1" opacity="0.1"/>
        <circle cx="210" cy="210" r="100" stroke="#003ACE" strokeWidth="1" opacity="0.08"/>
        <line x1="2" y1="210" x2="418" y2="210" stroke="#003ACE" strokeWidth="0.5" opacity="0.1"/>
        <line x1="210" y1="2" x2="210" y2="418" stroke="#003ACE" strokeWidth="0.5" opacity="0.1"/>
        <line x1="62" y1="62" x2="358" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
        <line x1="358" y1="62" x2="62" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
      </svg>

      <svg className="pointer-events-none absolute bottom-52 left-[-80px] z-0 h-[380px] w-[380px] max-[900px]:hidden" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="210" cy="210" r="208" stroke="#003ACE" strokeWidth="1" opacity="0.12"/>
        <circle cx="210" cy="210" r="155" stroke="#003ACE" strokeWidth="1" opacity="0.08"/>
        <circle cx="210" cy="210" r="95" stroke="#003ACE" strokeWidth="1" opacity="0.06"/>
        <line x1="2" y1="210" x2="418" y2="210" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
        <line x1="210" y1="2" x2="210" y2="418" stroke="#003ACE" strokeWidth="0.5" opacity="0.08"/>
        <line x1="62" y1="62" x2="358" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.06"/>
        <line x1="358" y1="62" x2="62" y2="358" stroke="#003ACE" strokeWidth="0.5" opacity="0.06"/>
      </svg>

      <div className="pointer-events-none absolute left-[-86px] top-[-261px] z-0 h-[586px] w-[586px] rounded-full bg-[linear-gradient(103.43deg,#FDA700_-1.02%,#CE5700_83.53%)] opacity-[0.02] blur-[50px] max-[900px]:hidden" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[661px] top-[-92px] z-0 h-[779px] w-[779px] rounded-full bg-[linear-gradient(103.43deg,#FDA700_-1.02%,#CE5700_83.53%)] opacity-[0.05] blur-[50px] max-[900px]:hidden" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-300px] left-[-364px] z-0 h-[779px] w-[779px] rounded-full bg-[linear-gradient(100.92deg,#00CFFD_35.49%,#0015CE_82.38%)] opacity-10 blur-[50px] max-[900px]:hidden" aria-hidden="true" />

      <div className="relative z-[2] mb-20 max-w-[439px] max-[900px]:mb-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-[53px] font-normal leading-[1.2] tracking-[-0.01em] text-ink max-[900px]:text-[36px] max-[480px]:text-[28px]">Digital banking<br />out-of-the-box</h2>
          <p className="max-w-[379px] text-base leading-[1.3] text-ink/70">N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
          <button className="inline-flex w-fit items-center justify-center rounded-[10px] bg-sky-gradient px-[51px] py-[15px] font-archivo text-[15px] uppercase text-white transition-opacity hover:opacity-85">
            REQUEST DEMO
          </button>
          <div className="flex w-fit cursor-pointer items-center gap-1.5 border-b border-sky bg-sky-gradient bg-clip-text pb-0.5 font-archivo text-sm uppercase text-transparent">
            <span>LEARN MORE</span>
            <span>→</span>
          </div>
        </div>
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-[110px] max-[900px]:gap-[60px] max-[480px]:gap-12">
        {rows.map((row, i) => (
          <div className={`flex w-full max-w-[652px] items-center gap-20 max-[900px]:w-full max-[900px]:max-w-none max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8 ${row.side === 'left' ? 'flex-row-reverse max-[900px]:flex-col' : 'flex-row max-[900px]:flex-col'}`} key={i}>
            <div className="w-[268px] flex-shrink-0 max-[900px]:mx-auto max-[900px]:w-[200px] max-[480px]:w-[170px]">
              <img src={row.phone} alt={`phone mockup ${i + 1}`} className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
            </div>
            <div className="flex max-w-[304px] flex-1 flex-col gap-6 max-[900px]:max-w-none">
              <h3 className="text-base font-medium leading-[1.3] text-ink">{row.title}</h3>
              <p className="text-base leading-[1.3] text-ink/70">{row.desc}</p>
              <div className="flex flex-col gap-3">
                {row.bullets.map((b, j) => (
                  <div className="flex items-start gap-1.5" key={j}>
                    <div className="relative mt-px h-5 w-5 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-sky-gradient" />
                      <span className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-white">✓</span>
                    </div>
                    <span className="text-base font-medium leading-[1.3] text-ink/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
