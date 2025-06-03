'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import clsx from 'clsx'
import Link from 'next/link'

export function AnyangView() {
  const [isOriginalState, setIsOriginalState] = useState(true)

  const handleButtonClick = () => {
    setIsOriginalState(!isOriginalState)
  }

  const backgroundImage = isOriginalState ? '/images/bg-anyang-01.png' : '/images/bg-temple-01.png'

  const buttonText = isOriginalState ? '恆春郡福德宮' : '安養村'
  const buttonColor = isOriginalState ? 'bg-yellow-500' : 'bg-primary-500'
  const title = isOriginalState ? '安養村' : '恆春郡福德宮'

  const slides = isOriginalState
    ? ['/images/anyang-01.png', '/images/anyang-02.png', '/images/anyang-03.png']
    : ['/images/temple-01.png', '/images/temple-02.png', '/images/temple-03.png']

  const textContent = isOriginalState
    ? `「愛心守護，讓長者安享晚年——屏東安養村開幕在即！」
       \n花蓮普蓮公益慈善協會即將在屏東建立一座現代化 安養村，專為長者及需要專業醫療照護的居民設計。這座安養村不僅具備先進的 洗腎中心，滿足腎病患者的需求，還設有 看護中心 和 安養中心，提供全天候的專業照護，讓長者安享無憂的生活。此外，協會的 服務據點 也將進駐於此，為居民提供更便捷的支持與關懷服務。
       \n這個安養村秉持「愛心連結世界，慈善改變生活」的理念，將愛與關懷融入每一處細節，為屏東地區的長者和慢性病患者提供全面、貼心的生活保障。我們希望透過這樣的綜合性照護環境，不僅滿足居民的生活需求，更營造一個充滿愛與尊重的生活社區。`
    : `「恆春郡福德宮——459年古剎，福佑一方」
       \n恆春郡福德宮，擁有 459年悠久歷史，是當地居民心中的信仰中心，也是屏東地區的重要文化遺產之一。自創建以來，福德宮始終秉持「福佑鄉里、護佑一方」的精神，見證了無數世代的繁榮興衰，成為地方民眾祈福納祥的重要場所。
       \n作為一座跨越四個多世紀的廟宇，福德宮不僅保留了古樸的建築風貌，還融合了道教信仰的深厚底蘊，傳承並弘揚了台灣傳統文化的精髓。每年吸引大量信眾和遊客前來參拜，無論是在慶典活動還是日常祭祀中，福德宮都充滿了熱鬧和虔誠的氛圍。
       \n我們誠摯邀請您前來恆春郡福德宮，親身感受這座古老廟宇的神聖與美麗，並在福德宮的庇佑下，為自己和家人祈求平安順遂、吉祥如意。`

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-4 min-h-[700px] lg:h-screen lg:max-h-[1440px] flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transition: 'background 1s ease-in-out',
      }}
    >
      <div className="max-w-650 mx-auto relative flex flex-col p-3 bg-white bg-opacity-70 rounded-lg shadow-lg w-full lg:max-w-[1600px] lg:flex-row lg:p-6 lg:rounded-[32px] lg:gap-x-12">
        <div className="w-full space-y-2 lg:flex-1 lg:space-y-6">
          <div className="flex flex-col gap-y-1 xl:flex-row justify-between items-center">
            <h2 className="mobile-bold-h2 text-dark-900 lg:desktop-bold-h1">{title}</h2>
            <div className="flex flex-row gap-x-2">
              {!isOriginalState && (
                <Link
                  href="https://www.facebook.com/groups/216481639302799/"
                  target="_blank"
                  className="bg-primary-500 bg-opacity-50 hover:opacity-70 duration-200 mobile-regular-h5 flex justify-center items-center p-2 rounded-4 text-dark-700 lg:desktop-regular-h6 lg:px-6 lg:py-3"
                >
                  查看粉專
                </Link>
              )}
              {!isOriginalState && (
                <Link
                  href="https://www.instagram.com/explore/locations/1018072655/?igsh=MXducWI1NWlibmhyOQ=="
                  target="_blank"
                  className="bg-primary-500 bg-opacity-50 hover:opacity-70 duration-200 mobile-regular-h5 flex justify-center items-center p-2 rounded-4 text-dark-700 lg:desktop-regular-h6 lg:px-6 lg:py-3"
                >
                  更多照片
                </Link>
              )}
              <button
                className={clsx(
                  buttonColor,
                  'flex items-center gap-x-[10px] bg-opacity-50 hover:opacity-70 duration-200 py-2 px-3 rounded-4 lg:px-6 lg:py-3',
                  buttonColor
                )}
                onClick={handleButtonClick}
              >
                <p className="text-dark-700 mobile-regular-h5 lg:desktop-regular-h6">
                  {buttonText}
                </p>
                <Image
                  src="/images/icon/arrow-01.png"
                  alt="arrow"
                  width={72}
                  height={72}
                  className="aspect-square w-3 lg:w-4"
                />
              </button>
            </div>
          </div>

          <div className="lg:hidden mb-6">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide}
                    alt="/"
                    className="object-cover w-full aspect-[264/115]"
                    width={776}
                    height={600}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p
            className="mobile-regular-h5 text-dark-700 lg:desktop-regular-h5"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {textContent}
          </p>
        </div>

        <Swiper className="!flex-1" slidesPerView={1} pagination={{ clickable: true }}>
          {slides.map((slide) => (
            <SwiperSlide key={slide}>
              <div
                style={{ backgroundImage: `url(${slide})` }}
                className={clsx(
                  `w-full h-full bg-cover bg-center bg-no-repeat rounded-[32px] overflow-hidden`
                )}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
