import type { SVGProps } from 'react'
const SvgKakaoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 19"
    {...props}
  >
    <g clipPath="url(#kakao-icon_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9 1.1c-4.97 0-9 3.113-9 6.952 0 2.388 1.558 4.493 3.932 5.745l-.999 3.648c-.088.322.28.579.563.392l4.377-2.889q.554.055 1.127.057c4.97 0 9-3.113 9-6.953S13.97 1.1 9 1.1"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="kakao-icon_svg__a">
        <path fill="#fff" d="M0 .5h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgKakaoIcon
