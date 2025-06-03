import { BreadcrumbsContainer } from '@/components/breadcrumbs'
import Image from 'next/image'

export default function BaseLayout({ children }) {
  return (
    <div className="relative bg-background pt-[122px] lg:pt-[265px] overflow-hidden">
      {/* breadcrumbs */}
      <div className="absolute z-30 left-0 top-5 w-full space-y-3 max-w-[900px] lg:top-[53px]">
        <BreadcrumbsContainer />
      </div>

      {/* totem */}
      <Image
        width={3840}
        height={1554}
        className="absolute z-0 translate-y-1/2 bottom-0 left-0 w-full aspect-[3840/1554]"
        src={'/images/totem-01.png'}
        alt="totem-01"
      />

      {/* flower */}
      <div className="absolute w-full h-full left-0 top-0 z-10 bg-top bg-repeat-y bg-[url('/images/bg-flower-01.png')]" />

      {/* content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}
