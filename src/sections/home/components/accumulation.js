'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const animationConfig = {
  duration: 1.25,
  snap: 1,
}

export function AccumulationView() {
  const container = useRef()
  const countTrigger = useRef()
  const count1Ref = useRef()
  const count2Ref = useRef()
  const count3Ref = useRef()

  useGSAP(
    () => {
      const animationAry = [
        {
          element: count1Ref,
          value: 800,
          duration: animationConfig.duration,
          snap: animationConfig.snap,
        },
        {
          element: count2Ref,
          value: 350000,
          duration: animationConfig.duration,
          snap: animationConfig.snap,
        },
        {
          element: count3Ref,
          value: 800,
          duration: animationConfig.duration,
          snap: animationConfig.snap,
        },
      ]

      animationAry.forEach((el) => {
        gsap.to(el.element.current, {
          innerHTML: el.value,
          duration: el.duration,
          snap: {
            innerHTML: el.snap,
          },
          scrollTrigger: {
            trigger: countTrigger.current,
            start: '30% 75%',
          },
        })
      })
    },
    { scope: container }
  )

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <div ref={container}>
      <div id="accumulation-container" className="bg-[#F8F6EC] px-4 pt-[60px] lg:py-[120px]">
        <div className="space-y-6 lg:space-y-12 relative">
          <div className="relative z-10 text-center space-y-3">
            <h2 className="text-gray-800 mobile-bold-h1 lg:desktop-bold-title">愛心累積</h2>
            <p id="test-text" className="text-gray-500 mobile-regular-h3 lg:desktop-regular-h4">
              慈善協會的幫助，改變了困境中的命運
            </p>
          </div>

          <div className="relative max-w-650 mx-auto lg:max-w-[1330px]">
            <div className="absolute z-0 top-0 left-10 -translate-x-1/2 -translate-y-1/2 lg:-top-10">
              <Image
                src="/images/icon/flower-02.png"
                alt="flower"
                width={480}
                height={367}
                className="w-[240px] lg:w-[480px]"
              />
            </div>
            <div
              ref={countTrigger}
              className="relative z-10 bg-white px-9 py-12 shadow-lg border border-primary-500 rounded-[20px] bg-opacity-70 lg:px-0"
            >
              <div className="flex flex-col justify-between items-stretch lg:flex-row lg:h-80">
                <div className="flex flex-col items-stretch text-center lg:flex-[2] lg:justify-center">
                  <Image
                    src="/images/icon/love-01.png"
                    alt="icon"
                    width={50}
                    height={50}
                    className="mx-auto mb-5"
                  />
                  <h3
                    ref={count1Ref}
                    className="text-primary-500 mobile-bold-number-1 lg:desktop-bold-number-2"
                  >
                    0
                  </h3>
                  <p className="text-gray-600 text-xl mobile-regular-h1 lg:desktop-regular-h3">
                    社福團體
                  </p>
                </div>

                <div className="w-full h-[1px] bg-brown-700 my-6 lg:w-[1px] lg:h-full lg:my-0" />

                <div className="flex flex-col items-stretch text-center lg:flex-[3] lg:justify-center">
                  <Image
                    src="/images/icon/love-02.png"
                    alt="icon"
                    width={80}
                    height={50}
                    className="mx-auto mb-5"
                  />
                  <h3 className="text-primary-500 mobile-bold-number-1 lg:desktop-bold-number-2">
                    <span ref={count2Ref}>0</span>
                    <span>+</span>
                  </h3>
                  <p className="text-gray-600 mobile-regular-h1 lg:desktop-regular-h3">參與人數</p>
                </div>

                <div className="w-full h-[1px] bg-brown-700 my-6 lg:w-[1px] lg:h-full lg:my-0" />

                <div className="flex flex-col items-stretch text-center lg:flex-[2] lg:justify-center">
                  <Image
                    src="/images/icon/love-03.png"
                    alt="icon"
                    width={50}
                    height={50}
                    className="mx-auto mb-4"
                  />
                  <h3
                    ref={count3Ref}
                    className="text-primary-500 mobile-bold-number-1 lg:desktop-bold-number-2"
                  >
                    0
                  </h3>
                  <p className="text-gray-600 mobile-regular-h1 lg:desktop-regular-h3">愛心夥伴</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
