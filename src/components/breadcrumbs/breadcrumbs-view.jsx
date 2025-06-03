import React, { memo } from 'react'

function BreadcrumbsView({ separator = '/', children }) {
  return (
    <ul className="flex flex-row justify-start items-center text-brown-700 mobile-regular-h5 lg:justify-end">
      {children.map((item, index) => {
        return (
          <React.Fragment key={item.props.children.props.children}>
            {item}
            {index !== children.length - 1 && <li className="px-2">{separator}</li>}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default memo(BreadcrumbsView)
