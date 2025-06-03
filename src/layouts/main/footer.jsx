import Link from 'next/link'
import { ImageView } from '@/components/imageView'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CONFIG } from '@/config-global'
import Image from 'next/image'
import { CONFIG_SERVER } from '@/constants/config-server'
import clsx from 'clsx'

function ServicePointCard({ position, address, phone }) {
  return (
    <div className="space-y-1">
      <h4 className="mobile-bold-h3 text-primary lg:desktop-bold-h5">{position}</h4>
      <p className="mobile-light-h4 text-primary lg:desktop-regular-p">{`地址｜${address}`}</p>
      <Link
        href={`tel:${phone}`}
        className={clsx(
          'mobile-light-h4 text-primary lg:desktop-regular-p',
          !phone && 'pointer-events-none'
        )}
      >
        {`電話｜${phone || '-'}`}
      </Link>
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative w-full bg-background lg:shadow-footer">
      <div className="max-w-650 mx-auto px-4 py-9 space-y-6 lg:px-[50px] lg:py-32 lg:max-w-[1650px] lg:flex lg:flex-row lg:justify-center lg:items-start lg:space-x-20 lg:space-y-0">
        {/* Information */}
        <div className="space-y-3 lg:max-w-[275px] lg:mx-0">
          <div className="space-y-1 lg:space-y-0 lg:space-x-1 lg:flex lg:flex-row lg:items-center lg:justify-center">
            <ImageView
              imageName="LOGO"
              className={'aspect-square w-[100px] mx-auto lg:mx-0'}
              mobile={{
                src: '/images/logo/logo-1.png',
                width: 401,
                height: 401,
              }}
              desktop={{
                src: '/images/logo/logo-1.png',
                width: 401,
                height: 401,
              }}
            />
            <div className="text-dark-900">
              <h2 className="mobile-bold-h2 text-center lg:desktop-bold-h5">普蓮公益慈善協會</h2>
              <h4 className="mobile-regular-h4 text-center lg:desktop-regular-p">
                Pulian Charity Foundation
              </h4>
            </div>
          </div>

          <div className="space-y-3 block lg:block lg:pl-[30px] lg:space-y-9">
            <div className="max-w-[175px] mx-auto space-x-3 flex flex-row items-center lg:space-x-9 lg:max-w-none">
              <FontAwesomeIcon className="w-5 lg:w-4" icon={faEnvelope} />
              <Link
                href={`mailto:${CONFIG.email}`}
                className="mobile-regular-h5 text-dark-900 lg:desktop-regular-h6"
              >
                {CONFIG.email}
              </Link>
            </div>

            <div className="flex flex-row justify-center items-center gap-6 lg:justify-start lg:-ml-2">
              {Object.values(CONFIG.socialMedia).map((socialMedia) => (
                <Link href={socialMedia.link} key={socialMedia.link} target="_blank">
                  <Image
                    src={socialMedia.iconUrl}
                    alt={socialMedia.link}
                    width={64}
                    height={64}
                    className="aspect-square w-8"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service Points */}
        <div className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:gap-x-12">
          <h4 className="desktop-bold-h4 text-primary">服務據點</h4>
          <div className="flex flex-col gap-y-8 lg:flex-row lg:flex-wrap lg:gap-12 lg:w-[608px]">
            <div className="lg:w-[calc(50%-24px)]">
              <ServicePointCard
                position="花蓮服務處"
                address={CONFIG_SERVER.Hualien.address}
                phone={CONFIG_SERVER.Hualien.phone}
              />
            </div>
            <div className="lg:w-[calc(50%-24px)]">
              <ServicePointCard
                position="新北服務處"
                address={CONFIG_SERVER.Xinbei.address}
                phone={CONFIG_SERVER.Xinbei.phone}
              />
            </div>
            <div className="lg:w-[calc(50%-24px)]">
              <ServicePointCard
                position="台中服務處"
                address={CONFIG_SERVER.Taichung.address}
                phone={CONFIG_SERVER.Taichung.phone}
              />
            </div>
            <div className="lg:w-[calc(50%-24px)]">
              <ServicePointCard
                position="屏東服務處"
                address={CONFIG_SERVER.Pingtung.address}
                phone={CONFIG_SERVER.Pingtung.phone}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
