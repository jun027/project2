'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const SLIDES = [
  {
    url: '/images/case-assistance-01.png',
    alt: 'case-assistance-01',
  },
  {
    url: '/images/case-assistance-02.png',
    alt: 'case-assistance-02',
  },
  {
    url: '/images/case-assistance-03.png',
    alt: 'case-assistance-03',
  },
  {
    url: '/images/case-assistance-04.png',
    alt: 'case-assistance-04',
  },
  {
    url: '/images/case-assistance-05.png',
    alt: 'case-assistance-05',
  },
]

function CaseAssistanceSwiperContainer() {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={8}
      breakpoints={{
        480: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 3.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
      }}
    >
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.url} className="rounded-2xl overflow-hidden">
          <Image
            src={slide.url}
            alt={slide.alt}
            className="aspect-square w-full"
            width={360}
            height={360}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CaseAssistanceSwiperContainer
