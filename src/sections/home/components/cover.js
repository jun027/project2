'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import Image from 'next/image'

const SLIDES = [
  {
    no: '01',
    title: '安養村募資計畫',
    bgColor: '#303A2D',
    imageNo: '01',
    content:
      '我們堅信，每一位長者都應該擁有尊嚴和愛的對待，因此，我們創造了一個充滿關愛和尊重的氛圍，讓長者在這裡找到家的感覺。我們的目標是讓長者在晚年享受到無憂無慮的生活，並與家人保持緊密的聯繫。透過持續的努力和奉獻，我們希望成為長者及其家人的堅實依靠，為他們帶來更多的安心與幸福。',
  },
  {
    no: '02',
    title: '恆春郡福德宮',
    bgColor: '#6E2B00',
    imageNo: '02',
    content:
      '每位來到「恆春郡福德宮」的信眾都能感受到濃厚的祈福氛圍，廟內設有特別的祈願區和開運區，讓人們能夠在此許下心願，並得到財神的庇佑。無論是個人還是企業，我們相信，通過虔誠的祈禱和財神的祝福，必能帶來財運亨通、事業興旺。我們誠摯邀請大家前來參拜，體驗「恆春郡福德宮」的神聖力量，攜手迎接更加美好、富足的未來。',
  },
]

export function CoverView() {
  const [currentSliceIndex, setCurrentSliceIndex] = useState(0)
  const currentContext = SLIDES[currentSliceIndex]

  return (
    <div>
      <div className="relative w-full aspect-[320/164]">
        <Swiper
          onSlideChange={(swiper) => {
            setCurrentSliceIndex(swiper.activeIndex)
          }}
          effect="fade"
          autoplay={{
            delay: 5 * 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation]}
          className="relative z-0 h-full pointer-events-none"
          slidesPerView={1}
        >
          {SLIDES.map((slide) => {
            return (
              <SwiperSlide key={slide.no} className="relative w-full h-full bg-background">
                <div
                  style={{
                    backgroundImage: `url("/images/cover-${slide.imageNo}.png")`,
                  }}
                  className={clsx(`relative z-10 h-full bg-center bg-cover`)}
                />

                <div
                  style={{ backgroundColor: slide.bgColor }}
                  className={`absolute w-full h-[50%] z-0 bottom-0 left-0 lg:h-[60%]`}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="absolute z-50 left-[10vw] bottom-[10vw] flex justify-between items-end lg:left-[10vw] lg:bottom-[10vw] lg:gap-x-[1vw] lg:items-center">
          <div className="cover-swiper-nav-button flex justify-center items-center">
            <button className="pointer-events-none opacity-0">
              <IoIosArrowBack color="#fff" className="text-[5vw] lg:text-[4vw]" />
            </button>
          </div>

          <div className="lg:h-[18vw] lg:flex lg:justify-center lg:items-center">
            <div className="w-[25vw] aspect-[320/164] flex flex-col items-center lg:flex-row lg:w-[30vw] lg:gap-x-[2vw] lg:aspect-[520/164]">
              <div className="lg:w-[12vw]">
                <p className="text-[5vw] font-bold text-white lg:text-[5vw] text-center">
                  {currentContext.no}
                </p>
                <p className="text-[3vw] font-medium text-white lg:text-[1.5vw] text-center">
                  {currentContext.title}
                </p>
              </div>

              <div className="hidden lg:block lg:flex-1">
                <p className="lg:text-[1vw] text-white text-center">{currentContext.content}</p>
              </div>
            </div>
          </div>

          <div className="cover-swiper-nav-button flex justify-center items-center">
            <button className="pointer-events-none opacity-0">
              <IoIosArrowForward color="#fff" className="text-[5vw] lg:text-[4vw]" />
            </button>
          </div>
        </div>

        <div className="absolute z-30 top-[2vw] left-[8vw] lg:top-[0.5vw] lg:left-[12.5vw]">
          <Image
            src="/images/flower-animation.gif"
            alt="cover"
            width={760}
            height={581}
            className="w-[40vw] lg:w-[35vw]"
            unoptimized
          />
        </div>
      </div>

      <div className="block bg-[#F8F6EC] p-4 rounded-lg shadow-lg lg:hidden">
        <div className="space-y-2 max-w-650 mx-auto">
          <p className="mobile-regular-h5 text-dark-600">
            我們堅信，每一位長者都應該擁有尊嚴和愛的對待，因此，我們創造了一個充滿關愛和尊重的氛圍，讓長者在這裡找到家的感覺。我們的目標是讓長者在晚年享受到無憂無慮的生活，並與家人保持緊密的聯繫。透過持續的努力和奉獻，我們希望成為長者及其家人的堅實依靠，為他們帶來更多的安心與幸福。
          </p>
        </div>
      </div>
    </div>
  )
}
