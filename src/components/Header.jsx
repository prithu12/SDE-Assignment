import React from 'react'

export default function Header() {
	return (
		<nav className="fixed top-[30px] left-1/2 z-50 w-[min(100vw-32px,716.46px)] -translate-x-1/2 px-4 max-[700px]:top-4 max-[700px]:w-[calc(100vw-16px)] max-[700px]:px-0">
			<div className="flex items-center justify-between gap-3 rounded-[12px] bg-[#2F2F2F]/70 px-[12px] py-[9px] backdrop-blur-[15px] max-[700px]:flex-wrap max-[700px]:justify-center max-[700px]:gap-x-4 max-[700px]:gap-y-2 max-[480px]:px-3">
				<h1 className="font-['Archivo'] text-[24px] font-medium leading-[120%] text-white">
					N7
				</h1>

				<div className="ml-[40px] mr-[24px] flex flex-wrap items-center gap-[28px] max-[700px]:ml-0 max-[700px]:mr-0 max-[700px]:justify-center max-[700px]:gap-x-5 max-[700px]:gap-y-2 max-[480px]:gap-x-4">
					<button className="flex items-center gap-2 font-['Chivo_Mono'] text-[12px] uppercase text-[#E9F4F9]">
						SOLUTIONS
						<img src="/1.png" alt="arrow" />
					</button>

					<button className="flex items-center gap-1 font-['Chivo_Mono'] text-[12px] uppercase text-[#E9F4F9]">
						RESOURCES
						<img src="/1.png" alt="arrow" />
					</button>

					<button className="font-['Chivo_Mono'] text-[12px] uppercase text-[#E9F4F9] whitespace-nowrap">
						ABOUT US
					</button>
				</div>

					<button className="ml-auto inline-flex min-w-[168px] shrink-0 items-center justify-center whitespace-nowrap rounded-[6px] border border-white px-[24px] py-[10px] font-['Chivo_Mono'] text-[12px] uppercase leading-none text-white max-[700px]:ml-0 max-[700px]:w-full max-[700px]:min-w-0">
					REQUEST DEMO
				</button>
			</div>
		</nav>
	)
}
