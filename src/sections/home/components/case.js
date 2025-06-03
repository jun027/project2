'use client'

import { useState } from 'react'
import Image from 'next/image'

export function CaseView() {
  const cases = [
    {
      title: '匿名',
      name: '「援手相助，共度家庭困境」',
      text: '經由 #愛心禮儀社 通報，我們得知一個家境貧困的家庭接連遭遇不幸，母親剛出殯，父親也隨後過世，讓這個家庭陷入困境。孩子在洗車場工作，收入微薄，難以應對沉重的喪葬費用。經本協會評估後，我們立即展開援助，並號召善心人士一起幫助這個家庭度過難關。感謝所有伸出援手的朋友，願各位善心人士一切順心如意。',
      avatar: '/images/case/case-01.png',
      images: ['/images/case/case-02.png', '/images/case/case-03.png'],
    },
    {
      title: '匿名',
      name: '「壽豐助力，愛心續航」',
      text: '經由 #花蓮同鄉會 總幹事轉介，我們得知壽豐的一個植物人家庭陷入困境，因為失去了低收入戶資格，生活壓力頓時加劇。日前，花蓮同鄉會已經協助購買了奶粉、看護墊、抽痰管等物資，並從同鄉會倉庫載來尿布、濕紙巾及其他生活用品，先行支援。案主於6年前因腦靜脈瘤手術後癱瘓臥床，家庭負擔沉重。丈夫除了照顧妻子，還要負擔3名年幼子女的照顧，分別是14歲的兒子、11歲的女兒和9歲的女兒。幸好岳母的幫助，讓他能夠專心工作，維持家庭的基本生活。目前我們已經提供了生活必需品，未來將持續關注這個家庭的情況，並盡力提供更多幫助。',
      avatar: '/images/case/case-04.png',
      images: ['/images/case/case-05.png'],
    },
    {
      title: '月眉國小',
      name: '「月耀求學夢，眉展童心笑」',
      text: '我們攜手幫助偏遠學校的學生，讓每位孩童在求學的過程中都能擁有愉快的心情和充足的學習資源。在陳主委的帶領下，大家一起凝聚愛心，將文具送達學校，並由校長親自代領後發放給每位學生。感謝每一位支持這項善舉的人，讓孩子們的未來更加光明！',
      avatar: '/images/case/case-06.png',
      images: ['/images/case/case-07.png'],
    },
    {
      title: '匿名',
      name: '「讓愛延續，關懷溫暖秀林弱勢」',
      text: '我們持續不懈地經營，關懷和照顧弱勢家庭。今天，我們深入花蓮偏遠的秀林鄉，為當地的弱勢家庭送去溫暖。本協會一步一腳印地推動各項服務，懇請大家的支持與鼓勵，讓我們的關懷能夠走得更遠，推動業務更上一層樓。',
      avatar: '/images/case/case-08.png',
      images: ['/images/case/case-09.png', '/images/case/case-10.png'],
    },
    {
      title: '原住民少年兒童之家',
      name: '「深入偏鄉，傳遞愛與希望」',
      text: '我們深入偏鄉地區，關懷那些生活在困境中的弱勢家庭，透過發放民生物資，幫助他們減輕生活負擔。我們希望藉由這些實際的行動，為他們帶來更多的支持與希望。',
      avatar: '/images/case/case-11.png',
      images: ['/images/case/case-12.png', '/images/case/case-13.png'],
    },
    {
      title: '匿名',
      name: '「端午傳情，溫暖到家」',
      text: '在端午佳節之際，協會依然不忘關懷與照顧那些生活困難的弱勢家庭，透過我們的努力，讓這些家庭也能感受到節日的溫馨與氛圍。我們希望每一個家庭，不論生活境遇如何，都能在節日中享有歡樂與團圓的時光。本協會將持續用行動傳遞關愛，為這些家庭帶去一絲慰藉和節慶的喜悅。',
      avatar: '/images/case/case-14.png',
      images: ['/images/case/case-15.png', '/images/case/case-16.png'],
    },
    {
      title: '匿名',
      name: '「心繫壽豐，愛無間斷」',
      text: '我們持續走訪臥床的案主 #壽豐案家，用一點點的心意，為這些家庭帶來些許輕鬆與支持。每一份付出，都是為了減輕他們的壓力，讓愛與關懷不斷傳遞，讓每個家庭感受到我們的溫暖陪伴。',
      avatar: '/images/case/case-17.png',
      images: ['/images/case/case-18.png', '/images/case/case-19.png'],
    },
    {
      title: '匿名',
      name: '「堅韌母愛，社會共守護」',
      text: '一位年過80的媽媽，長年無怨無悔地照顧著因中風而行動不便的孩子。母親平時依靠少量的補助來勉強維持家用，生活艱辛。為了減輕她的負擔，我們協會已提供生活物資，幫助這對母子度過眼前的困難。這位偉大的母親不僅撐起了一個家庭，也展現了無限的母愛與毅力。我們希望透過這些微薄的援助，能讓她感受到社會的關懷與支持，讓她知道，她並不孤單。',
      avatar: '/images/case/case-20.png',
      images: ['/images/case/case-21.png'],
    },
    {
      title: '匿名',
      name: '「愛心遍壽豐，童心共守護」',
      text: '今天走訪了壽豐的一個案家，這是一個長期臥床的家庭，他們目前急需抽痰管、成人尿布、看護墊及營養品。我們帶去了一些看護墊、衛生紙和營養品，看到他們開心的笑容，我們也感到無比欣慰。下午，我們也探訪了 #善牧兒童之家 及 #原住民少年兒童之家，送去了餅乾、玩具和生活物資，願這些孩子們在成長過程中依然能夠如其他孩子一樣，保持天真無邪的笑容。',
      avatar: '/images/case/case-22.png',
      images: ['/images/case/case-23.png', '/images/case/case-24.png'],
    },
    {
      title: '匿名',
      name: '「堅韌父親的守護，我們愛心相助」',
      text: '這是一名單親父親，獨自撫養四個年幼的孩子，最大的剛上小學四年級，其他分別是二年級、一年級和幼兒園中班。父親平時靠著打零工維持生計，生活壓力巨大，面臨著許多困難與挑戰。目前，我們協會已為這個家庭提供生活物資，以及孩子們所需的衣物和文具，希望能在他們艱難的日子裡，帶來一絲溫暖與支援。我們也將持續關注，盡力幫助這個家庭渡過難關。',
      avatar: '/images/case/case-25.png',
      images: ['/images/case/case-26.png'],
    },
  ]

  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const [showAllMobile, setShowAllMobile] = useState(false)

  const toggleShowAllMobile = () => {
    setShowAllMobile(!showAllMobile)
  }

  return (
    <div className="bg-gradient-to-b from-[#F8F6EC] to-[#F1F8E9] mx-auto px-4 pt-[60px] pb-8">
      <div className="text-center space-y-3 mb-4 lg:mb-12">
        <h2 className="mobile-bold-h1 text-dark-900 lg:desktop-bold-title">個案故事</h2>
        <p className="mobile-regular-h3 text-dark-600 lg:desktop-regular-h4">
          慈善協會的幫助，改變了困境中的命運
        </p>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-6 lg:max-w-[1440px] lg:mx-auto">
        {cases.map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-[60%] lg:w-[48%] p-4 pt-2 rounded-lg border border-primary-500 transition-all duration-300 ${
              expandedIndex === index ? 'h-auto' : 'h-20 overflow-hidden'
            }`}
          >
            <div onClick={() => toggleExpand(index)} className="flex items-center cursor-pointer">
              <div className="flex items-center flex-grow">
                <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
                  <Image
                    src={item.avatar}
                    alt="avatar"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl">{item.name}</h2>
              </div>

              <span className="text-primary-500 font-semibold ml-auto text-sm">
                {expandedIndex === index ? '收合 -' : '展開 +'}
              </span>
            </div>

            {expandedIndex === index && (
              <div className="mt-2">
                <h3 className="mobile-regular-h3 lg:desktop-regular-h5 text-dark-800 mb-2">
                  {item.title}
                </h3>
                <p className="mobile-regular-h5 lg:desktop-regular-h5 text-dark-500 mb-4">
                  {item.text}
                </p>
                <div
                  className={`flex flex-col md:flex-row ${
                    item.images.length === 1 ? 'justify-center' : 'justify-between'
                  } items-center space-y-4 md:space-y-0 md:space-x-4`}
                >
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full">
                      <Image
                        src={image}
                        alt={`case image ${imgIndex + 1}`}
                        width={item.images.length === 1 ? 600 : 371}
                        height={214}
                        className="mb-4 rounded-lg object-contain w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-wrap justify-center gap-6">
        {(showAllMobile ? cases : cases.slice(0, 3)).map((item, index) => (
          <div
            key={index}
            className={`w-full p-4 pt-2 rounded-lg border border-primary-500 transition-all duration-300 ${
              expandedIndex === index ? 'h-auto' : 'h-20 overflow-hidden'
            }`}
          >
            <div onClick={() => toggleExpand(index)} className="flex items-center cursor-pointer">
              <div className="flex items-center flex-grow">
                <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
                  <Image
                    src={item.avatar}
                    alt="avatar"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl">{item.name}</h2>
              </div>
 
              <span className="text-primary-500 font-semibold ml-auto text-xs flex items-center whitespace-nowrap">
                {expandedIndex === index ? '收合 -' : '展開 +'}
              </span>
            </div>

            {expandedIndex === index && (
              <div className="mt-2">
                <h3 className="mobile-regular-h3 text-dark-800 mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm mb-4">{item.text}</p>
                <div
                  className={`flex flex-col md:flex-row ${
                    item.images.length === 1 ? 'justify-center' : 'justify-between'
                  } items-center space-y-4 md:space-y-0 md:space-x-4`}
                >
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full">
                      <Image
                        src={image}
                        alt={`case image ${imgIndex + 1}`}
                        width={item.images.length === 1 ? 600 : 371}
                        height={214}
                        className="mb-4 rounded-lg object-contain w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-6 flex justify-center items-center md:hidden">
        {cases.length > 3 && (
          <button
            onClick={toggleShowAllMobile}
            className="text-gray-600 flex flex-col items-center"
          >
            {showAllMobile ? '收合' : '全部展開'}
            <Image
              src={showAllMobile ? '/images/icon/arrow-02.png' : '/images/icon/arrow-03.png'}
              alt="arrow"
              width={9}
              height={12}
            />
          </button>
        )}
      </div>
    </div>
  )
}
