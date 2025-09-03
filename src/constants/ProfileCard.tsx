import type { ReactNode } from 'react'
import { WlbIcon } from '../assets/svgComponents'

export type ProfileCardItem = {
  id: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  subtitle: string
  description: ReactNode
}

export const PROFILECARD: ProfileCardItem[] = [
  {
    id: 'wlb',
    icon: WlbIcon,
    title: '워라벨 신봉자',
    subtitle: '#퇴근은 칼, 복지는 풀옵션!',
    description: (
      <>
        휴식과 여유를 소중히 여기며 <br />
        일과 삶의 균형을 지켜가는 안정형 <br />
        우주비행사 입니다. <br />
        자신만의 리듬을 유지하며 꾸준히 <br />
        성과를 만들어내고 <br />
        균형 속에서 만족감을 찾습니다.
      </>
    ),
  },
]
