import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = UseCarouselParameters[0]
export type CarouselPlugin = UseCarouselParameters[1]

export interface CarouselContextType {
  carouselRef: UseEmblaCarouselType[0]
  api: CarouselApi | undefined
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = createContext<CarouselContextType | null>(null)

interface CarouselProviderProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
  children: React.ReactNode
}

export const CarouselProvider = ({ opts, plugins, setApi, children }: CarouselProviderProps) => {
  const [carouselRef, api] = useEmblaCarousel({ axis: 'x', ...opts }, plugins)

  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback((embla: CarouselApi) => {
    if (!embla) return
    setCanPrev(embla.canScrollPrev())
    setCanNext(embla.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  useEffect(() => {
    if (api && setApi) setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api, onSelect])

  const value = useMemo<CarouselContextType>(
    () => ({
      carouselRef,
      api,
      scrollPrev,
      scrollNext,
      canScrollPrev: canPrev,
      canScrollNext: canNext,
    }),
    [carouselRef, api, scrollPrev, scrollNext, canPrev, canNext],
  )

  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

export const useCarousel = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel은 프로바이더 안에서 사용되어야 해요!')
  }
  return context
}
