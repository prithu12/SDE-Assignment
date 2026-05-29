import React from 'react';
const n7Icon = '/Frame 54 (2).png';

const articles = [
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    large: true,
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

function IconGrid() {
  return (
    <div className="icon-grid-2x2">
        <img src={n7Icon} alt="n7" className="icon-grid-item" />
    </div>
  );
}

export default function Insights() {
  return (
    <section className="relative flex gap-[60px] overflow-hidden bg-ink px-20 py-20 max-[1100px]:flex-col max-[1100px]:px-10 max-[700px]:px-5 max-[480px]:px-4 bg-[#000D12]" id="resources">
      <div className="pointer-events-none absolute left-[58px] top-[160px] h-[557px] w-[557px] rounded-full bg-glow opacity-10 blur-[100px]" />

      <div className="flex min-w-[350px] max-w-[463px] flex-col gap-12 pt-0 max-[1100px]:max-w-full max-[700px]:gap-8">
        <h2 className="text-[37px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] max-[700px]:text-[28px] max-[480px]:text-[24px]">
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <button className="inline-flex w-[190px] items-center justify-center rounded-[10px] border border-[#E9F4F9] bg-transparent px-10 py-[15px] font-archivo text-[15px] uppercase text-[#E9F4F9] transition-colors hover:bg-[rgba(233,244,249,0.08)] max-[700px]:w-fit">
          INSIGHTS
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-[29px]">
        <div className="overflow-hidden rounded-[18px] bg-card">
          <div className="flex h-[318px] max-[1100px]:h-auto max-[1100px]:flex-col">
            <div className="flex h-full w-[295px] shrink-0 items-center justify-center rounded-lg bg-card-2 p-6 max-[1100px]:h-[180px] max-[1100px]:w-full">
              <IconGrid />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-[11px] p-10 max-[700px]:p-[24px_20px]">
              <span className="font-archivo text-xs uppercase tracking-[0.05em] text-[#2490BB]/80">{articles[0].tag}</span>
              <h3 className="text-[27px] font-normal leading-[1.2] text-[#E9F4F9] max-[700px]:text-[22px] max-[480px]:text-[20px]">{articles[0].title}</h3>
              <div className="flex gap-3.5 text-sm leading-[1.3] text-[#64A8C4]/80">
                <span>{articles[0].author}</span>
                <span>{articles[0].date}</span>
              </div>
              <button className="mt-auto w-full rounded-[10px] border border-[rgba(233,244,249,0.5)] bg-transparent px-5 py-2.5 font-archivo text-xs uppercase text-[rgba(233,244,249,0.5)] transition-colors hover:border-sky hover:text-sky">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-[29px] max-[700px]:flex-col">
          {articles.slice(1).map((a, i) => (
            <div className="flex flex-1 flex-col gap-[11px] rounded-[18px] bg-card p-[38px_30px] max-[480px]:p-[24px_20px]" key={i}>
              <span className="font-archivo text-xs uppercase tracking-[0.05em] text-[#2490BB]/80">{a.tag}</span>
              <h3 className="text-[22px] font-normal leading-[1.2] text-[#E9F4F9] max-[480px]:text-[18px]">{a.title}</h3>
              <div className="flex gap-3.5 text-sm leading-[1.3] text-[#64A8C4]/80">
                <span>{a.author}</span>
                <span>{a.date}</span>
              </div>
              <button className="mt-auto w-full rounded-[10px] border border-[rgba(233,244,249,0.5)] bg-transparent px-5 py-2.5 font-archivo text-xs uppercase text-[rgba(233,244,249,0.5)] transition-colors hover:border-sky hover:text-sky">
                READ MORE
              </button>
            </div>
          ))}
        </div>

        <div className="ml-auto flex w-fit cursor-pointer items-center gap-1.5 border-b border-sky pb-0.5 font-archivo text-sm uppercase text-sky max-[700px]:ml-0">
          <span>READ ALL INSIGHTS</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
