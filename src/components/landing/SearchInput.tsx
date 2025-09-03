import { SearchIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'

const SearchInput = () => {
  return (
    <div className="mx-auto flex h-[56px] w-full max-w-[640px] items-center justify-between rounded-2xl border-2 border-[#EDEDED] bg-[#F7F7F7] p-5 text-[#999999]">
      <Input
        className="w-full border-none bg-transparent text-[18px] font-medium text-black shadow-none outline-none placeholder:text-[18px] hover:border-none focus:border-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 active:border-none"
        placeholder="검색어를 입력해 주세요"
      />
      <SearchIcon width={28} height={28} className="h-[28px] w-[28px]" />
    </div>
  )
}

export default SearchInput
