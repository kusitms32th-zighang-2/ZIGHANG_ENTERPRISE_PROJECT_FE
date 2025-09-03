import Button from './Button'
import UserInfoBox from './UserInfoBox'

const UserInfo = () => {
  return (
    <div className="flex flex-col gap-[14px] text-start">
      <span className="heading-lg-bold">유저 정보</span>
      <UserInfoBox />
      <div className="flex w-full justify-end gap-[20px]">
        <Button bg="#F3F4F6" color="black" onClick={() => {}}>
          회원탈퇴
        </Button>
        <Button bg="#7A51FF" color="white" onClick={() => {}}>
          수정하기
        </Button>
      </div>
    </div>
  )
}

export default UserInfo
