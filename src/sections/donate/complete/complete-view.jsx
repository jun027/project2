import PageTitle from '@/components/hook-form/page-title'
import { PATHS } from '@/routes/page'
import Image from 'next/image'
import Link from 'next/link'

function CompleteView() {
  return (
    <div className="max-w-650 mx-auto pb-5 lg:max-w-[1406px] lg:px-10 lg:pb-[102px]">
      <div className="bg-white px-4 py-6 rounded-2xl space-y-6 lg:space-y-7 lg:px-[119px] ">
        {/* Title */}
        <PageTitle title="Step3. 完成" />
        <div className="space-y-9">
          <p className="desktop-regular-p text-dark-900 lg:desktop-regular-h5">
            親愛的信眾，您好：
            <br />
            <br />
            感謝您對協會的無私捐獻！您的善心與愛心不僅為我們的工作提供了寶貴的支持，也將為無數有需要的人帶來希望與幫助。每一筆捐款都是我們持續推動公益活動的重要動力，您的慷慨解囊讓我們更有信心完成使命。
            我們深知，這份愛心將在未來的日子裡，化作實際的行動，讓更多的弱勢族群受益。再次感謝您對我們的信任與支持，願福報與您同在，讓善的循環不斷延續。
            <br />
            <br />
            誠摯的祝福， [普蓮公益慈善協會]
          </p>

          <Image
            width={401}
            height={401}
            src="/images/logo/logo-1.png"
            alt="logo"
            className="aspect-square w-[125px] mx-auto lg:w-[250px]"
          />

          <Link
            className="btn-solid btn-hover block w-full desktop-regular-h6 py-4"
            href={PATHS.Home.path}
            target="_self"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompleteView
