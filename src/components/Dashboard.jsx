import React from 'react'

export default function Dashboard() {
	return (
		<div className="relative h-screen w-full bg-[#000D12] max-[900px]:h-auto max-[900px]:min-h-screen max-[900px]:pt-[130px] max-[600px]:pt-[120px] max-[480px]:pt-[150px]">
			<div className="absolute left-[80px] top-[212px] flex h-[319px] w-[608px] flex-col gap-[52px] max-[1200px]:left-10 max-[900px]:static max-[900px]:h-auto max-[900px]:w-full max-[900px]:px-6 max-[900px]:pt-20 max-[900px]:gap-8 max-[900px]:mt-0 max-[600px]:px-5 max-[600px]:pt-16 max-[480px]:px-4 max-[480px]:pt-12">
				<div className="flex flex-col gap-5 max-[900px]:gap-4 max-[600px]:gap-3">
					<h1 className="text-[64px] font-medium leading-[105%] tracking-[-1px] text-white max-[1200px]:text-[56px] max-[900px]:text-[42px] max-[600px]:text-[32px] max-[480px]:text-[28px]">
						The new foundation
						<br />
						of modern banking
					</h1>

					<p className="max-w-[520px] text-[18px] leading-[150%] text-[#E9F4F9] max-[1200px]:text-[16px] max-[900px]:text-[15px] max-[600px]:text-[14px] max-[480px]:text-[13px]">
						We drive innovation and growth, provide seamless customer
						experience and operational excellence
					</p>
				</div>

				<div className="flex items-center gap-5 max-[900px]:flex-col max-[900px]:gap-3 max-[900px]:w-full">
					<button className="rounded-[8px] bg-gradient-to-r from-sky-500 to-blue-700 px-[37px] py-[14px] text-[14px] uppercase text-white transition-opacity hover:opacity-90 max-[900px]:w-full max-[900px]:py-3 max-[900px]:text-[13px] max-[480px]:py-2.5 max-[480px]:px-6 max-[480px]:text-[12px]">
						REQUEST DEMO
					</button>

					<button className="rounded-[8px] border border-white px-[37px] py-[14px] text-[14px] uppercase text-white transition-colors hover:bg-white/10 max-[900px]:w-full max-[900px]:py-3 max-[900px]:text-[13px] max-[480px]:py-2.5 max-[480px]:px-6 max-[480px]:text-[12px]">
						CONTACT US
					</button>
				</div>
			</div>

			<div className="pointer-events-none absolute left-[873px] top-[205px] z-0 h-[399px] w-[399px] rounded-full bg-gradient-to-br from-[#00B4FD] to-[#003ACE] opacity-50 blur-[100px] max-[1200px]:left-[750px] max-[1024px]:left-[600px] max-[900px]:hidden" />

			<img
				src="/Frame 114.png"
				alt="hero"
				className="absolute left-[818px] top-[255px] z-10 h-[301px] w-[600px] rounded-[24px] object-cover max-[1200px]:left-[700px] max-[1200px]:h-[280px] max-[1200px]:w-[560px] max-[1024px]:left-[550px] max-[1024px]:h-[240px] max-[1024px]:w-[480px] max-[900px]:static max-[900px]:h-[280px] max-[900px]:w-full max-[900px]:mt-8 max-[900px]:rounded-[16px] max-[600px]:h-[200px] max-[600px]:mt-6 max-[480px]:h-[160px] max-[480px]:mt-4"
			/>

			<div className="absolute left-[80px] top-[655px] flex w-[621px] flex-col gap-[16px] max-[1200px]:left-10 max-[900px]:static max-[900px]:w-full max-[900px]:px-6 max-[900px]:py-10 max-[900px]:gap-4 max-[600px]:px-5 max-[600px]:py-8 max-[480px]:px-4 max-[480px]:py-6">
				<p className="font-['Archivo'] text-[16px] font-medium text-[#E9F4F9] max-[900px]:text-[14px] max-[600px]:text-[13px] max-[480px]:text-[12px]">
					Trusted By:
				</p>

				<div className="flex flex-wrap items-center gap-[22px] max-[900px]:gap-4">
					<img
						src="/Row.png"
						alt="Shells"
						className="h-[18px] object-contain max-[900px]:h-4 max-[480px]:h-3"
					/>
				</div>
			</div>
		</div>
	)
}
