import { memo } from 'react'

function PageTitle({ title }) {
  return (
    <div className="pb-5 border-b-[1px] border-b-dark-500 relative">
      <h5 className="text-dark-900 desktop-regular-h5 text-center">{title}</h5>
      <span className="absolute z-10 -translate-x-1/2 translate-y-1/2 left-1/2 bottom-0 inline-block w-4 h-[2px] bg-primary-700 lg:w-16" />
    </div>
  )
}

export default memo(PageTitle)
