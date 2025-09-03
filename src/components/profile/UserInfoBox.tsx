import { CheckIcon } from '@/assets/svgComponents'
import type { Profile } from '@/types/profile'

const mockProfile: Profile = {
  name: '인우',
  email: 'sdlfsd1234h@naver.com',

  jobGroup: '기획, 전략',
  jobRoles: ['프로젝트 매니저', 'PM PO', '서비스 상품 기획'],
  companyScale: ['대기업', '중소기업'],
  education: '학사 이상',
  career: '신입~10년차, 경력 무관',

  recvInfoEmail: true,
  recvEmail: 'sdlfsd1234h@naver.com',
}

const UserInfoBox = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex w-[288px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <div className="body-sm-bold tablet:body-md-bold w-[99px] gap-[10px] pr-[60px]">이름</div>
        <div className="body-md-medium text-neutral-700">{mockProfile.name}</div>
      </div>
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex w-[288px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <div className="body-sm-bold tablet:body-md-bold w-[99px] gap-[10px]">이메일</div>
        <div className="body-md-medium text-neutral-700">{mockProfile.email}</div>
      </div>
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex w-[288px] flex-col gap-[23px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px] pr-[60px]">직군</div>
          <div className="body-md-medium text-neutral-700">{mockProfile.jobGroup}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px] pr-[60px]">직무</div>
          <div className="body-md-medium text-neutral-700">{mockProfile.jobRoles}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px] pr-[60px]">규모</div>
          <div className="body-md-medium text-neutral-700">{mockProfile.companyScale}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">학력 조건</div>
          <div className="body-md-medium text-neutral-700">{mockProfile.education}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">경력 조건</div>
          <div className="body-md-medium text-neutral-700">{mockProfile.career}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">수신 이메일</div>
          <div className="body-md-medium text-neutral-700">{mockProfile.recvEmail}</div>
        </div>
      </div>
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex gap-[7px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <label className="flex h-[24px] w-[24px] items-center justify-center p-[4px]">
          <input type="checkbox" className="peer sr-only" />
          <span className="grid h-full w-full place-content-center place-items-center rounded-[4px] border border-neutral-300 transition-colors peer-checked:border-purple-500 peer-checked:bg-purple-500">
            <CheckIcon />
          </span>
        </label>
        <div className="body-md-bold gap-[10px]">정보성 이메일 수신 동의</div>
      </div>
    </div>
  )
}

export default UserInfoBox
