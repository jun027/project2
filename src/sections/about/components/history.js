import React from 'react'
import Image from 'next/image'

export function HistoryView() {
  const timelineData = [
    {
      year: '2024年',
      title: '數位連結，愛心無國界',
      description:
        '協會進一步深化數位化發展，利用數位平台串連各產業，將愛心力量傳遞至世界各地，實現「愛心連結世界、慈善改變生活」的宗旨。通過數位科技，捐款與志願服務變得更加便捷，讓善心不再受到距離限制，真正實現愛心無國界的願景，推動慈善力量遍及全球。',
    },
    {
      year: '2022年',
      title: '合作共贏，擴大扶貧影響',
      description:
        '協會與企業和政府部門緊密合作，推動更大規模的扶貧計劃，特別關注因疾病或意外導致家庭經濟困難的個案，為他們提供有力的支持。',
    },
    {
      year: '2020年',
      title: '疫情無情，愛心無限',
      description:
        '面對COVID-19疫情，協會迅速開展緊急援助專案，向因疫情陷入困境的家庭提供物資與經濟支持，幫助他們度過難關。',
    },
    {
      year: '2018年',
      title: '關懷長者，無盡陪伴',
      description:
        '設立老人關懷計劃，為獨居長者提供生活照護和訪視服務，幫助他們解決日常生活需求，讓他們感受到社會的溫暖和關懷。',
    },
    {
      year: '2015年',
      title: '照亮學子，開啟希望之光',
      description:
        '啟動「希望之光」專案，專注於支援偏鄉學校，捐贈學習物資，幫助花蓮偏鄉的學生獲得公平的學習機會，點燃他們的求知夢想。',
    },
    {
      year: '2012年',
      title: '關愛兒童，守護未來',
      description:
        '協會加強對兒童福利的關注，開始針對孤兒院和弱勢兒童提供生活必需品和心理支持，讓孩子們感受到關愛和溫暖。',
    },
    {
      year: '2011年',
      title: '愛心啟航，傳遞希望',
      description:
        '協會進一步完善內部組織架構，開始拓展對花蓮地區弱勢家庭的支援，提供更多形式的物資援助和社會服務。',
    },
    {
      year: '2010年',
      title: '普蓮公益慈善協會創立',
      description:
        '普蓮公益慈善協會秉持「愛心連結世界，慈善改變生活」的宗旨，致力於將愛與善意傳遞到世界各個角落。我們不僅提供物質援助，還關注心靈支持，讓每位受助者感受到社會的關懷與尊重。協會堅持透明和公正的運作，確保資源能有效發揮作用，並持續推動慈善的力量，讓更多人感受到愛心帶來的希望與改變。',
    },
  ]

  return (
    <div className="relative flex flex-col items-start bg-[url('/images/bg-history-01.png')] bg-cover bg-center">
      {/* 背景 */}
      <div className="absolute z-0 bg-black opacity-60 w-full h-full" />

      <div className="max-w-650 mx-auto lg:max-w-1920 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-x-10 lg:px-10 lg:py-28">
        <div className="px-4 py-6 space-y-3 lg:space-y-8">
          {/* 歷史沿革 */}
          <div id="history" className="relative z-10 flex flex-row items-center gap-x-2 lg:gap-x-4">
            <div className="w-2 h-[40px] bg-primary-500 lg:w-4 lg:h-[104px]" />
            <h2 className="mobile-bold-h1 text-white lg:desktop-bold-title">歷史沿革</h2>
          </div>

          <div className="relative z-10 flex flex-col items-start">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-row justify-start items-stretch gap-x-4 lg:gap-x-14"
              >
                <div className="absolute z-0 left-[10px] -translate-x-1/2 top-2 w-[2px] h-[97.5%] bg-gray-400 opacity-30" />

                <div className="pt-1 lg:pt-3">
                  <div>
                    <div className="absolute z-10 h-5 w-5 bg-green-500 opacity-90 rounded-full animate-ping" />
                    <div className="relative z-0 h-5 w-5 bg-green-500 rounded-full" />
                  </div>
                </div>

                <div className="lg:flex lg:flex-row lg:gap-x-6">
                  <h3 className="desktop-bold-number-4 text-[#00B093] lg:w-28 lg:desktop-bold-number-3">
                    {item.year}
                  </h3>
                  <div className="space-y-[6px] mb-6 lg:flex-1 lg:mb-10">
                    <h4 className="mobile-regular-h3 text-white lg:desktop-regular-h4">
                      {item.title}
                    </h4>
                    <p className="mobile-regular-h5 text-white lg:desktop-regular-h6">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-650 mx-auto space-y-10 px-4 pb-10">
          <div className="relative group w-full md:w-auto">
            <Image
              src="/images/history-01.png"
              alt="安養村"
              width={592}
              height={424}
              className="transform rotate-[5deg] group-hover:rotate-0 transition duration-500 ease-in-out rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-60 text-white flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              安養村
            </div>
          </div>

          <div className="relative group">
            <Image
              src="/images/history-02.png"
              alt="看護中心"
              width={592}
              height={424}
              className="transform rotate-[-5deg] group-hover:rotate-0 transition duration-500 ease-in-out rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-60 text-white flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              看護中心
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
