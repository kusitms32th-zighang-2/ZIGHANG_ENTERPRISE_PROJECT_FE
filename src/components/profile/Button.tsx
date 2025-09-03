import type { FC } from 'react'

interface ButtonProps {
  children: React.ReactNode
  bg?: string
  color?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, color, bg, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg }}
      className="flex cursor-pointer gap-[8px] rounded-[8px] px-[16px] py-[12px]"
    >
      <span style={{ color }} className="body-lg-medium">
        {children}
      </span>
    </button>
  )
}

export default Button
