'use client'

import { PATHS } from '@/routes/page'
import Image from 'next/image'
import Link from 'next/link'

export function InfiniteView() {
  return (
    <div className="relative flex flex-col justify-center h-screen max-h-[1440px] bg-[url('/images/bg-anyang-02.png')] bg-cover bg-center">
      <div className="p-4">
        <div className="p-3 space-y-2 bg-white bg-opacity-[0.85] rounded-lg shadow-lg max-w-650 mx-auto lg:p-9 lg:space-y-9">
          <div className="space-y-2 lg:space-y-3">
            <Image
              src="/images/icon/leaf-01.png"
              alt="Leaf Icon"
              width={35}
              height={23}
              className="w-4 aspect-[35/23] lg:w-9"
            />
            <h2 className="mobile-bold-h1 text-dark-900 lg:desktop-bold-h1">愛心無限，關懷永續</h2>
            <p className="mobile-regular-h3 text-primary-600 lg:desktop-regular-h4">
              Infinite Love, Sustainable Care
            </p>
          </div>

          <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-h6">
            普蓮慈善協會長期致力於急難救助、醫療補助、災害救援、弱勢團體支持及各類公益團體協助等社會服務。透過我們的努力，每一筆捐款都是為有需要的家庭及個人帶來希望與力量，幫助他們渡過人生中的難關。
          </p>

          <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-h6">
            我們深信，您的每一份捐款不僅是金錢的援助，更是一顆溫暖的心，傳遞著無限的愛與關懷。我們將繼續秉持「人飢己飢，人溺己溺」的精神，積極投入社會救助工作，延續創辦人慈悲回饋社會的願景，讓每一位受助者都能感受到社會的溫暖與支持。
          </p>

          <p className="mobile-regular-h5 text-dark-700 lg:desktop-regular-h6">
            您的愛心，將成為照亮他人生命的燈火，讓我們一起攜手，讓愛心無限延續。
          </p>

          <Link
            href={PATHS.Donate.child.Form.path}
            className="flex items-center justify-center bg-[#76B722] hover:bg-primary-600 duration-200 transition-colors py-[14px] rounded-lg shadow-lg lg:py-4"
          >
            <Image
              src="/images/icon/donate-01.png"
              alt="Icon"
              width={30}
              height={20}
              className="w-6 aspect-[30/20] mr-2 lg:w-10 lg:mr-4"
            />
            <p className="desktop-regular-p text-white lg:desktop-regular-h5">我要捐款</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
