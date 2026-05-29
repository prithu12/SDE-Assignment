import React from 'react'

export default function Dashboard() {
	return (
		<div className="relative h-screen w-full bg-[#000D12]">
			<div className="absolute left-[80px] top-[212px] flex h-[319px] w-[608px] flex-col gap-[52px]">
				<div className="flex flex-col gap-5">
					<h1 className="text-[64px] font-medium leading-[105%] tracking-[-1px] text-white">
						The new foundation
						<br />
						of modern banking
					</h1>

					<p className="max-w-[520px] text-[18px] leading-[150%] text-[#E9F4F9]">
						We drive innovation and growth, provide seamless customer
						experience and operational excellence
					</p>
				</div>

				<div className="flex items-center gap-5">
					<button className="rounded-[8px] bg-gradient-to-r from-sky-500 to-blue-700 px-[37px] py-[14px] text-[14px] uppercase text-white">
						REQUEST DEMO
					</button>

					<button className="rounded-[8px] border border-white px-[37px] py-[14px] text-[14px] uppercase text-white">
						CONTACT US
					</button>
				</div>
			</div>

			<div className="pointer-events-none absolute left-[873px] top-[205px] z-0 h-[399px] w-[399px] rounded-full bg-gradient-to-br from-[#00B4FD] to-[#003ACE] opacity-50 blur-[100px]" />

			<img
				src="/Frame 114.png"
				alt="hero"
				className="absolute left-[818px] top-[255px] z-10 h-[301px] w-[600px] rounded-[24px] object-cover"
			/>

			<div className="absolute left-[80px] top-[655px] flex w-[621px] flex-col gap-[16px]">
				<p className="font-['Archivo'] text-[16px] font-medium text-[#E9F4F9]">
					Trusted By:
				</p>

				<div className="flex flex-wrap items-center gap-[22px]">
					<img
						src="/Row.png"
						alt="Shells"
						className="h-[18px] object-contain"
					/>
				</div>
			</div>
		</div>
	)
}
