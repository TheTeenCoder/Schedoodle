import React from 'react'
import {useThemeColors} from '../hooks/index'
import classNames from 'classnames'

const ThemeWrapper = (props: any) => {

  const colors = useThemeColors();

  const className = classNames(
    `bg-${colors?.bgColor}`,
    `text-${colors?.textColor}`,
    'h-screen h-full'
  )

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default ThemeWrapper;