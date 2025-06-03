'use client'

import Image from 'next/image'

function InformationCard({ title, imageUrl, context }) {
  return (
    <div className="border border-primary-500 rounded-lg p-4 space-y-3 lg:rounded-2xl lg:p-6">
      <div className="space-y-1">
        <h3 className="mobile-medium-h2 text-dark-900 lg:desktop-medium-h4">{title}</h3>
      </div>

      <Image
        src={imageUrl}
        alt="information"
        width={692}
        height={390}
        className="aspect-[264/109] object-cover rounded-lg w-full lg:aspect-[692/390]"
      />

      <p className="text-gray-500 mobile-regular-h5 lg:desktop-regular-h6">{context}</p>
    </div>
  )
}

export function InformationView() {
  return (
    <div className="bg-[#F8F6EC] lg:px-10 lg:py-[120px]">
      <div className="relative bg-white border border-primary-500 rounded-lg shadow-lg max-w-[1600px] mx-auto space-y-6 px-4 py-6 lg:py-12 lg:px-12 lg:rounded-3xl">
        <Image
          src="/images/icon/flower-01.png"
          alt="flower"
          width={200}
          height={136}
          className="absolute z-10 right-5 top-10 hidden lg:block"
        />

        <div className="space-y-1">
          <h2 className="mobile-bold-h1 text-primary-500 lg:desktop-bold-h1">最新消息</h2>
          <div className="flex justify-start items-center gap-x-3">
            <Image
              src="/images/icon/broadcast-01.png"
              alt="broadcast"
              width={24}
              height={24}
              className="aspect-square w-5"
            />
            <p className="mobile-regular-h5 text-primary-500 lg:desktop-regular-h5"></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InformationCard
            title="恆春郡福德宮盛大慶祝玉皇大帝聖誕——愛心連結，祈福新春"
            imageUrl="/images/information-01.png"
            context="2025年農曆元月8日和9日（2025年2月7日和8日），花蓮普蓮公益慈善協會將於恆春舉辦開春活動，慶祝玉皇大帝聖誕，俗稱「天公生日」。這是道教的重要節日之一，活動將於初九凌晨正式開始，敬拜儀式將祈求新一年的平安與繁榮​。"
          />

          <InformationCard
            title="勇敢登高，傳承傳統——恆春搶孤活動盛大登場"
            imageUrl="/images/information-02.png"
            context="花蓮普蓮公益慈善協會將與當地社區合作，共同協辦恆春搶孤活動，這是一項充滿歷史與文化意義的傳統民俗活動。搶孤作為台灣民間信仰的重要一環，象徵著挑戰極限、勇敢攀登的精神，同時也承載著祈福和對祖先的敬重。"
          />
        </div>
      </div>
    </div>
  )
}
