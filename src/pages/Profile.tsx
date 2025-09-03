import Header from '@/components/common/Header'
import Card from '../components/profile/Card'
import UserInfo from '../components/profile/UserInfo'
import { PROFILECARD } from '../constants/ProfileCard'
import Footer from '@/components/common/Footer'

const Profile = () => {
  const item = PROFILECARD.find((c) => c.id === 'wlb')!

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="desktop:flex-row desktop:items-start tablet:gap-[60px] laptop:gap-[60px] desktop:gap-[48px] tablet:pt-[60px] laptop:pt-[60px] desktop:py-[90px] flex flex-col items-center gap-[30px] pt-[24px] pb-[82px]">
        <Card item={item} />
        <UserInfo />
      </div>
      <Footer />
    </main>
  )
}

export default Profile
