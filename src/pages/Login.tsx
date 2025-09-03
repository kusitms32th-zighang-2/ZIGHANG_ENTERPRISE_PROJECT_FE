import { KakaoIcon } from '@/assets/svgComponents'

const Login = () => {
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
  const BASE_URL = window.location.origin
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
  const REDIRECT_URI = BASE_URL + KAKAO_REDIRECT_URI

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

  return (
    <div>
      <button
        className="body-lg-medium flex items-center justify-center rounded-[8px] bg-[#FEE500] px-[240px] py-[13px] text-black"
        onClick={() => {
          window.location.href = kakaoURL
        }}
      >
        <KakaoIcon className="mr-[10px]" /> 카카오 로그인
      </button>
    </div>
  )
}

export default Login
