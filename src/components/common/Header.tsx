import { LogoIcon } from '@/assets/svgComponents'
import NavMenu from './NavMenu'
import { useNavigate } from 'react-router-dom'
import NavSide from './NavSide'
import { UserProfileIcon } from '@/assets/svgComponents'

const Header = () => {
  const nav = useNavigate()

  const accessToken = localStorage.getItem('accessToken')

  return (
    <header className="tablet:px-8 laptop:px-8 mx-auto flex w-full items-center justify-between px-8 py-3">
      <div className="flex items-center gap-[25px]">
        <LogoIcon width={0} height={0} className="h-[56px] w-[101px]" onClick={() => nav('/')} />
        <NavMenu className="tablet:flex hidden" />
      </div>
      {accessToken ? (
        <>
          <div className="laptop:flex hidden items-center gap-4">
            <button className="body-lg-semibold">기업회원</button>
            <UserProfileIcon className="h-[48px] w-[48px]" onClick={() => nav('/profile')} />
          </div>
          <div className="tablet:flex laptop:hidden hidden items-center gap-4">
            <button className="body-lg-semibold">기업회원</button>
            <UserProfileIcon className="h-[48px] w-[48px]" onClick={() => nav('/profile')} />
            <NavSide />
          </div>
          <div className="tablet:hidden flex items-center gap-4">
            <UserProfileIcon className="h-[48px] w-[48px]" onClick={() => nav('/profile')} />
            <NavSide />
          </div>
        </>
      ) : (
        <>
          <div className="tablet:flex hidden items-center gap-5">
            <div className="flex items-center gap-4">
              <button className="h-[40px] w-[84px]">기업회원</button>
              <button className="body-md-semibold flex h-[40px] cursor-pointer items-center justify-center gap-3 rounded-[8px] border border-neutral-300 px-4 py-[10px] text-purple-600">
                로그인 / 회원가입
              </button>
            </div>
          </div>
          <div className="tablet:hidden flex items-center gap-5">
            <button className="h-[40px] w-[84px]">기업 회원</button>
            <button className="flex h-[40px] cursor-pointer items-center justify-center px-4 py-[10px] text-base text-[#6F00B6]">
              로그인
            </button>
            <NavSide />
          </div>
        </>
      )}
    </header>
  )
}

export default Header
