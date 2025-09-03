import { useCarousel } from '@/contexts/CarouselContext'

export function CarouselContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { carouselRef } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden" {...props}>
      <div className={['flex', className].filter(Boolean).join(' ')}>{children}</div>
    </div>
  )
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={['min-w-0 shrink-0 grow-0 basis-full', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}
