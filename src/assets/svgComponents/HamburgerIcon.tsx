import type { SVGProps } from 'react'
const SvgHamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#000" d="M20.5 18.5h-17V17h17zM20.5 12.75h-17v-1.5h17zM20.5 7h-17V5.5h17z" />
  </svg>
)
export default SvgHamburgerIcon
