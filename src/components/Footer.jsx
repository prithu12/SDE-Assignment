import React from 'react';

const solutions = ['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'];
const n7Links = ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'];
const socials = ['LinkedIn', 'X'];

const offices = [
  {
    city: 'London',
    addr: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
  },
  {
    city: 'Dubai',
    addr: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    addr: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
];

export default function Footer() {
  return (

    <footer className="relative flex gap-[24px] overflow-hidden bg-ink px-20 pb-[60px] pt-[130px] text-[#E9F4F9] font-archivo max-[1100px]:flex-col max-[1100px]:px-10 max-[1100px]:py-[60px] max-[600px]:px-5 max-[400px]:px-4">
        
      <div className="pointer-events-none absolute bottom-[-300px] left-0 h-[557px] w-full bg-glow opacity-5 blur-[100px]" />

      <div className="shrink-0 self-start">
        <img
          src="/Mask group.png"
          alt="N7 logo"
          className="block h-auto w-[440px] max-w-full object-contain max-[1100px]:w-[340px] max-[600px]:w-[189px] max-[400px]:w-[136px]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[60px] max-[1100px]:gap-10">
        <div className="flex gap-[34px] pt-2.5 max-[1100px]:flex-wrap max-[600px]:flex-col">
          {offices.map((o, i) => (
            <div className="flex flex-1 flex-col gap-4" key={i}>
              <h4 className="text-base font-medium leading-[1.3] text-[#E9F4F9]">{o.city}</h4>
              <p className="text-base font-normal leading-[1.3] text-[#E9F4F9]/70">{o.addr}</p>
            </div>
          ))}

        </div>

        <div className="flex gap-[34px] max-[1100px]:flex-wrap max-[600px]:flex-col">
          <div className="flex flex-1 flex-col gap-4">
            <h4 className="text-base font-medium leading-[1.3] text-[#E9F4F9]">Solutions</h4>
            <div className="flex flex-col gap-2.5">
              {solutions.map((s, i) => (
                <a key={i} href="#solutions" className="flex max-w-[164px] items-center justify-between text-base leading-[1.3] text-[#E9F4F9]/70 transition-opacity hover:opacity-100">
                  {s} <span className="text-xs text-sky">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h4 className="text-base font-medium leading-[1.3] text-[#E9F4F9]">N7 Banking</h4>
            <div className="flex flex-col gap-2.5">
              {n7Links.map((s, i) => (
                <a key={i} href="#about" className="flex max-w-[164px] items-center justify-between text-base leading-[1.3] text-[#E9F4F9]/70 transition-opacity hover:opacity-100">
                  {s} <span className="text-xs text-sky">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h4 className="text-base font-medium leading-[1.3] text-[#E9F4F9]">Our Socials</h4>
            <div className="flex flex-col gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s === 'LinkedIn' ? 'https://www.linkedin.com' : 'https://x.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex max-w-[164px] items-center justify-between text-base leading-[1.3] text-[#E9F4F9]/70 transition-opacity hover:opacity-100"
                >
                  {s} <span className="text-xs text-sky">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="max-w-[779px] text-sm leading-[1.3] text-[#E9F4F9]/30 max-[400px]:text-xs">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
