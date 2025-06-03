import Image from 'next/image'
import React from 'react'

export function PurposeView() {
  return (
    <div className="relative bg-dark-900 flex flex-col lg:flex-row-reverse items-center lg:items-start lg:px-10 lg:py-24">
      <div className="lg:relative lg:flex lg:justify-end lg:w-full lg:max-w-1440 lg:mx-auto">
        <div className="px-4 py-6 max-w-650 lg:p-0 lg:relative lg:z-10 lg:max-w-[655px] lg:-bottom-[90px]">
          <div>
            <h2 id="purpose" className="mobile-bold-h1 lg:desktop-regular-h2 text-white">
              成立宗旨
            </h2>
            <div className="w-full h-[2px] bg-white my-6 opacity-60"></div>
            <p className="mobile-regular-h5 lg:desktop-regular-h6 text-white">
              普蓮慈善協會成立宗旨
              <br />
              普蓮慈善協會的成立，旨在延續慈濟精神，秉持「大愛無疆」的理念，致力於推動全球環境保護與生態平衡的工作。我們深信，愛護地球如同愛護生命一樣重要，因為地球是我們共同的家園。
              <br />
              本慈善協會立志成為全球環保先鋒，透過實施可持續發展計劃、推動生態教育、以及協助弱勢社群面對環境變遷帶來的挑戰，實現人與自然的和諧共存。我們將結合社會各界的力量，資源共享，齊心協力，讓這片土地更加美好，讓未來世代能夠享有一個綠意盎然的家園。
              <br />
              我們相信，善行的力量無遠弗屆，並將透過實際行動，積極影響社會，共同守護這片大地，讓愛傳遞到每一寸土地與每一顆心靈。普蓮慈善協會成立宗旨。
            </p>
          </div>

          <div className="w-full lg:hidden mt-4 relative overflow-hidden rounded-lg">
            <div className="relative p-1 rounded-lg">
              <div
                className="absolute inset-0 border-1 border-transparent animate-spin"
                style={{
                  background: 'conic-gradient(#ECBB0F, #ECBB0F, #FFF, #FFF)',
                  borderRadius: 'inherit',
                  animation: 'spin 5s linear infinite',
                }}
              ></div>
              <div
                className="absolute inset-0 border-1 border-transparent animate-spin"
                style={{
                  background: 'conic-gradient(#ECBB0F, #ECBB0F, #FFF, #FFF)',
                  borderRadius: 'inherit',
                  animation: 'spin-reverse 5s linear infinite',
                }}
              ></div>

              <div
                className="absolute inset-0 border-1 border-transparent animate-spin"
                style={{
                  background: 'conic-gradient(#ECBB0F, #ECBB0F, #FFF, #FFF)',
                  borderRadius: 'inherit',
                  animation: 'spin 5s linear infinite',
                }}
              ></div>

              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/purpose-03.png"
                  alt="founder"
                  width={288}
                  height={486}
                  className="w-full aspect-[288/486] rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg hidden lg:block lg:mt-6">
            <div className="relative p-1 rounded-lg">
              <div
                className="absolute inset-0 border-1 border-transparent animate-spin"
                style={{
                  background: 'conic-gradient(#ECBB0F, #ECBB0F, #FFF, #FFF )',
                  borderRadius: 'inherit',
                  animation: 'spin 5s linear infinite',
                  opacity: 0.8,
                }}
              ></div>
              <div
                className="absolute inset-0 border-1 border-transparent animate-spin"
                style={{
                  background: 'conic-gradient(#ECBB0F, #ECBB0F, #FFF, #FFF)',
                  borderRadius: 'inherit',
                  animation: 'spin-reverse 5s linear infinite',
                }}
              ></div>

              <div
                className="absolute inset-0 border-1 border-transparent animate-spin"
                style={{
                  background: 'conic-gradient(#ECBB0F, #ECBB0F, #FFF, #FFF)',
                  borderRadius: 'inherit',
                  animation: 'spin 5s linear infinite',
                }}
              ></div>

              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/purpose-01.png"
                  alt="founder"
                  width={955}
                  height={486}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:absolute lg:z-0 lg:-left-[40px] lg:-bottom-[14%] lg:w-[60%] lg:max-w-[854px]">
          <Image 
          src="/images/purpose-02.png" 
          alt="founder" 
          width={854} 
          height={854} 
          className="" />
        </div>
      </div>
    </div>
  )
}
