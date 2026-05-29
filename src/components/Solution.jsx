import React from 'react';

const solutions = [
  {
    icon: '/icon-core-banking.png',
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: '/icon-digital-banking.png',
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: '/icon-open-banking.png',
    title: 'Open Banking',
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: '/icon-loan.png',
    title: 'Loan Origination System',
    badge: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: '/icon-loan-mgmt.png',
    title: 'Loan Management System',
    badge: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
];

export default function Solutions() {
  return (
    <section className="relative flex gap-[76px] overflow-hidden bg-ink px-20 py-20 max-[1024px]:flex-col max-[1024px]:gap-12 max-[1024px]:px-10 max-[600px]:px-5 max-[600px]:py-12 text-white" id="solutions">
      <div className="pointer-events-none absolute right-[-100px] top-[300px] h-[557px] w-[557px] rounded-full bg-glow opacity-10 blur-[100px]" />

      <div className="flex min-w-[350px] max-w-[433px] flex-col gap-12 pt-[47px] max-[1024px]:max-w-full max-[1024px]:pt-0">
        <h2 className="text-[37px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] max-[600px]:text-[28px]">
          All of our solutions are<br />tailor-made to your needs
        </h2>
        <button className="inline-flex w-[226px] items-center justify-center rounded-[10px] border border-[#E9F4F9] bg-transparent px-10 py-[15px] font-archivo text-[15px] uppercase text-[#E9F4F9] transition-colors hover:bg-[rgba(233,244,249,0.08)]">
          REQUEST DEMO
        </button>
      </div>

      <div className="flex max-w-[613px] flex-wrap gap-x-[76px] gap-y-[52px] pt-[47px] max-[1024px]:max-w-full max-[1024px]:pt-0 max-[600px]:gap-y-10">
        {solutions.map((s, i) => (
          <div className="flex w-[268px] flex-col gap-[26px] max-[600px]:w-full" key={i}>
            <div className="flex h-[49px] items-end justify-between">
              <img src={s.icon} alt={s.title} className="h-[49px] w-[47px] object-contain opacity-85 " />
              {s.badge && <span className="font-archivo text-sm uppercase text-[#E9F4F9]/60">{s.badge}</span>}
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-[22px] font-normal leading-[1.2] text-[#E9F4F9]">{s.title}</h3>
              <p className="text-base font-normal leading-[1.3] text-[#E9F4F9]/70">{s.desc}</p>
              <div className="flex w-fit cursor-pointer items-center gap-1.5 border-b border-sky pb-0.5 font-archivo text-sm uppercase text-sky transition-opacity hover:opacity-70">
                <span>LEARN MORE</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





