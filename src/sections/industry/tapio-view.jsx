import Image from 'next/image'

function TapioView() {
  return (
    <div className="bg-background min-h-[calc(100dvh-69px)] lg:min-h-[calc(100dvh-704px)] flex flex-col justify-center items-center gap-y-6 px-4 py-10 lg:py-24">
      <Image
        src={'/images/logo/logo-tapio.png'}
        alt="施工中"
        width={4040}
        height={3584}
        className="aspect-[4040/3584] w-72"
      />

      <h1 className="mobile-bold-h1 lg:desktop-bold-h1 text-dark-800">施工中</h1>
    </div>
  )
}

export default TapioView
