import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'

function ImageView({
  imageName,
  className,
  mobile: { src: mobileSrc, width: mobileWidth, height: mobileHeight },
  desktop: { src: desktopSrc, width: desktopWidth, height: desktopHeight },
}) {
  return (
    <div className={clsx(className)}>
      {/* Mobile */}
      <Image
        className={clsx('w-full h-full lg:hidden')}
        src={mobileSrc}
        alt={imageName}
        width={mobileWidth}
        height={mobileHeight}
      />

      {/* Desktop */}
      <Image
        className={clsx('w-full h-full hidden lg:block')}
        src={desktopSrc}
        alt={imageName}
        width={desktopWidth}
        height={desktopHeight}
      />
    </div>
  )
}

export default memo(ImageView)
