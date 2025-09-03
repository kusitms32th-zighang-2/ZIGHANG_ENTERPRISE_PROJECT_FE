import { CarouselProvider } from '@/contexts/CarouselContext'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { CarouselContent, CarouselItem } from './CarouselPart'
import { BANNERS } from '@/constants/Carousel'

const Carousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="메인 배너"
      className="tablet:py-0 relative mx-auto mb-[36px] h-[136px] w-full max-w-[900px] max-w-screen-xl py-8"
    >
      <CarouselProvider opts={{ loop: true }} plugins={[autoplay.current]}>
        <CarouselContent className="mobile:h-[120px] mobile:min-w-[350px] tablet:h-[136px] tablet:min-w-[600px] laptop:min-w-[900px] h-[100px] w-full max-w-full min-w-[calc(100vw-40px)] shrink-0 grow-0 basis-full rounded-lg pl-0">
          {BANNERS.map((banner, i) => (
            <CarouselItem key={i}>
              <img
                src={banner.icon}
                width={900}
                height={136}
                className="w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselProvider>
    </section>
  )
}

export default Carousel
