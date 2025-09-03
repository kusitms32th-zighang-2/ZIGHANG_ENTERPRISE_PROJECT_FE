import { LogoIcon } from '@/assets/svgComponents'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-end">
      <div className="h-[300px] w-full bg-[#F6F6FA]">
        <div className="relative mx-auto w-full max-w-screen-xl overflow-visible px-5 md:px-10">
          <div className="grid w-full justify-items-center gap-5 py-6 text-center md:gap-5 md:py-12">
            <LogoIcon className="block h-[24px] w-[65px]" />
            <div className="text-xs text-[#71717A]">
              <div className="flex flex-wrap items-center justify-center gap-2 font-medium">
                <span>주식회사 직행</span>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <span>서울특별시 성동구 왕십리로 222</span>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <span>대표 : 이재헌</span>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <a href="mailto:paca@zighang.com">이메일 : paca@zighang.com</a>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <a href="tel:010-9862-5855">연락처 : 010-9862-5855</a>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <span>사업자등록 : 684-81-03629</span>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <span>직업정보제공사업 신고번호: J1202020240011</span>
                <div className="h-3 w-[1px] bg-[#B3B3BA]" />
                <span>이용약관</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
