import Image from 'next/image'
import Link from 'next/link'

function FuDeGongView() {
  return (
    <div className="bg-background min-h-[calc(100dvh-69px)] lg:min-h-[calc(100dvh-704px)] flex flex-col justify-center items-center gap-y-6 px-4 py-10 lg:py-24">
      <Image
        src={'/images/logo/logo-fu-de-gong-01.png'}
        alt="施工中"
        width={1080}
        height={1080}
        className="aspect-square w-40 lg:w-56"
      />

      <h1 className="mobile-bold-h1 lg:desktop-bold-h1 text-dark-800">施工中</h1>
      <div>
        <Link
          href="https://www.facebook.com/groups/216481639302799/?locale=zh_TW"
          className="bg-[#4867AA] text-white px-3 py-2 rounded-md inline-block"
          target="_blank"
        >
          前往粉絲團
        </Link>
      </div>
    </div>
  )
}

export default FuDeGongView
