import JobBoxConstant from '@/constants/JobBox'
import { useNavigate } from 'react-router-dom'

const JobBox = () => {
  const nav = useNavigate()

  return (
    <div className="tablet:gap-9 tablet:py-8 laptop:py-0 relative flex w-full flex-col items-center gap-4 px-0 py-0">
      <div className="tablet:grid-cols-4 laptop:grid-cols-5 tablet:max-w-[900px] mx-auto grid w-full max-w-[600px] grid-cols-3 gap-[1px] overflow-hidden rounded-[20px]">
        {JobBoxConstant.map((category) => (
          <div
            key={category.name}
            onClick={() => nav(category.url)}
            className="tablet:h-[68px] tablet:px-4 relative flex h-[44px] w-full cursor-pointer items-center gap-2 bg-[#f7f7f7] px-2 py-0"
          >
            <img
              src={category.icon}
              alt={category.name}
              width={20}
              height={20}
              className="tablet:h-5 tablet:w-5 h-3.5 w-3.5 flex-shrink-0"
            />
            <p className="tablet:text-base tablet:font-medium w-fit text-xs leading-normal font-normal whitespace-nowrap text-black">
              <span className="tracking-[0.05px]">{category.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobBox
