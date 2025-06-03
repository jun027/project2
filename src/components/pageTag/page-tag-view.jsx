import { memo } from 'react'

function PageTagView({ title, subTitle }) {
  return (
    <div className="px-9 py-3 page-tag-gradient-bg lg:pr-[162px] lg:pt-7 lg:pb-3">
      <h4 className="text-brown-700 desktop-bold-h4 lg:desktop-bold-h2 lg:text-right">{title}</h4>
      <h6 className="text-brown-700 desktop-regular-h6 lg:desktop-regular-h5 lg:text-right">
        {subTitle}
      </h6>
    </div>
  )
}

export default memo(PageTagView)
