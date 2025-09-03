import { type ProfileCardItem } from '../../constants/ProfileCard'

type CardProps = {
  item: ProfileCardItem
}

const Card = ({ item }: CardProps) => {
  const CharacterIcon = item.icon

  return (
    <div className="bg-profile-card tablet:w-[298px] tablet:h-[498px] h-[360px] w-[208px] rounded-[14px] text-center">
      <div className="tablet:w-[298px] tablet:h-[256px] h-[178px] w-[208px] object-cover">
        <CharacterIcon className="h-full w-full" />
      </div>
      <div className="tablet:px-[16px] tablet:pb-[22px] tablet:gap-[20px] flex flex-col gap-[10px] px-[11px] pb-[15px]">
        <div className="tablet:gap-[7px] tablet:px-[42px] flex flex-col gap-[2px] px-[29px]">
          <span className="body-xl-semibold tablet:heading-lg-semibold text-white">
            {item.title}
          </span>
          <span className="caption-sm-medium tablet:body-md-semibold text-neutral-400">
            {item.subtitle}
          </span>
        </div>
        <div className="caption-sm-medium tablet:body-sm-regular tablet:w-[266px] tablet:px-[32px] w-[185px] gap-[10px] rounded-[10px] bg-[#6374B8]/20 px-[10px] py-[10px] text-neutral-100">
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default Card
