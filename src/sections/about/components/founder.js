'use client'

import Image from 'next/image'

export function FounderView() {
  return (
    <div id="founder" className="relative bg-[#212529] overflow-hidden">
      {/* Desktop */}
      <div className="hidden lg:block lg:relative">
        <div className="relative z-10 lg:aspect-[100/60] w-full max-w-[1440px] mx-auto">
          {/* 人像 */}
          <Image
            src="/images/founder-01.png"
            alt="人像"
            width={1172}
            height={878}
            className="absolute z-30 w-[85%] right-0 translate-x-[225px] bottom-0 pointer-events-none"
          />

          {/* 創辦人字樣 */}
          <Image
            src="/images/founder-03.png"
            alt="創辦人字樣"
            width={1750}
            height={724}
            className="absolute z-20 top-[4.5vw] left-1/2 -translate-x-1/2 w-[150%] ml-[2vw]"
          />

          <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 w-1/2 text-left space-y-3 pl-10">
            <h2 className="lg:desktop-bold-h1 text-yellow-500">愛心連結世界，慈善改變生活</h2>
            <p className="lg:desktop-medium-h6 text-dark-100">
              我們的慈善協會以「愛心連結世界，慈善改變生活」為宗旨，致力於將愛心的力量傳遞至世界各個角落，讓慈善的精神滲透到每一個需要幫助的生命中。我們相信，無論距離多遠，愛心都能跨越邊界，連結起人與人之間的善意，為他們帶來真正的改變。
              <br />
              <br />
              我們的創辦理念根植於對社會公平與人道關懷的深切承諾。我們不僅提供物質上的幫助，更重視心靈的支持，力求讓每一位受助者感受到來自社會的關愛與尊重。無論是推動教育、促進健康，還是照顧長者，我們都堅信，通過愛心與慈善的力量，可以改變無數人的生活，並為他們創造更美好的未來。
              <br />
              <br />
              我們以透明、公正的態度運作每一項慈善計劃，確保資源能夠有效地發揮作用，並定期向社會公佈我們的成果。未來，我們將繼續堅守這一宗旨，讓更多的人感受到慈善帶來的希望與力量。
            </p>
          </div>
        </div>

        {/* 波浪 */}
        <div className="absolute z-0 bottom-0 w-full opacity-60 pointer-events-none">
          <Image
            src="/images/founder-02.png"
            alt="波浪"
            width={2292}
            height={444}
            className="w-full"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="relative aspect-[100/85] w-full z-0">
          {/* 創辦人字樣 */}
          <div className="max-w-650 mx-auto absolute z-0 bottom-[49vw] left-[52.5%] -translate-x-1/2 w-full">
            <Image
              src="/images/founder-05.png"
              alt="創辦人字樣"
              width={288}
              height={139}
              className="w-full"
            />
          </div>

          {/* 人像 */}
          <div className="max-w-650 mx-auto absolute z-10 bottom-[3vw] left-1/2 -translate-x-1/2 w-full">
            <Image
              src="/images/founder-01.png"
              alt="人像"
              width={320}
              height={209}
              className="w-full"
            />
          </div>

          {/* 波浪 */}
          <div className="absolute z-20 bottom-0 w-full translate-y-[62.5%]">
            <Image
              src="/images/founder-04.png"
              alt="波浪"
              width={823}
              height={159}
              className="w-full"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-650 mx-auto">
          <div className="space-y-3 px-4 pb-[7.5vw]">
            <h2 className="mobile-bold-h1 text-yellow-500 text-center">
              愛心連結世界，慈善改變生活
            </h2>
            <div>
              <p className="mobile-regular-h5 text-dark-100">
                我們的慈善協會以「愛心連結世界，慈善改變生活」為宗旨，致力於將愛心的力量傳遞至世界各個角落，讓慈善的精神滲透到每一個需要幫助的生命中。我們相信，無論距離多遠，愛心都能跨越邊界，連結起人與人之間的善意，為他們帶來真正的改變。
                <br />
                <br />
                我們的創辦理念根植於對社會公平與人道關懷的深切承諾。我們不僅提供物質上的幫助，更重視心靈的支持，力求讓每一位受助者感受到來自社會的關愛與尊重。無論是推動教育、促進健康，還是照顧長者，我們都堅信，通過愛心與慈善的力量，可以改變無數人的生活，並為他們創造更美好的未來。
                <br />
                <br />
                我們以透明、公正的態度運作每一項慈善計劃，確保資源能夠有效地發揮作用，並定期向社會公佈我們的成果。未來，我們將繼續堅守這一宗旨，讓更多的人感受到慈善帶來的希望與力量。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
