'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { PATHS } from '@/routes/page'
import { PageTagView } from '@/components/pageTag'
import BreadcrumbsView from './breadcrumbs-view'

function formatRouteForBreadcrumbs(initArray, dataArray) {
  dataArray.forEach((item) => {
    if (!item.child) {
      initArray.push({
        title: item.title,
        subTitle: item.subTitle,
        link: item.path,
        list: item.list,
      })
    } else {
      formatRouteForBreadcrumbs(initArray, Object.values(item.child))
    }
  })
}

function BreadcrumbsContainer() {
  const url = usePathname()
  const allRouteDataList = []
  formatRouteForBreadcrumbs(allRouteDataList, Object.values(PATHS))
  const data = allRouteDataList.find((item) => item.link === url)

  return (
    <>
      <PageTagView title={data?.title} subTitle={data?.subTitle} />
      <div className="hidden px-4 lg:pr-[162px] lg:block">
        {data && (
          <BreadcrumbsView separator="/">
            {data.list.map((item, index) => {
              const isLast = index === data.list.length - 1

              return (
                <li key={item.title}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_self"
                      className={clsx(
                        'flex items-center gap-x-1 desktop-regular-h6 text-brown-700',
                        isLast ? 'text-opacity-100' : 'text-opacity-50'
                      )}
                    >
                      {item.icon && <item.icon />}
                      {item.title}
                    </Link>
                  ) : (
                    <p
                      className={clsx(
                        'desktop-regular-h6 text-brown-700',
                        isLast ? 'text-opacity-100' : 'text-opacity-50'
                      )}
                    >
                      {item.title}
                    </p>
                  )}
                </li>
              )
            })}
          </BreadcrumbsView>
        )}
      </div>
    </>
  )
}

export default BreadcrumbsContainer
