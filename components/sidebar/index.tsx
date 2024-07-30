'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxMenu from './maximized-menu'
import { MinMenu } from './minimized-menu'

type Props = {}

const SideBar = (props: Props) => {
  const { expand, onExpand, page } = useSideBar()

  return (
    <div
      className={cn(
        'w-[60px] fixed top-0 right-0  transition-all duration-300 ease-in-out',
        expand == undefined && '',
        expand == true
          ? ' min-w-[55%] max-sm:w-full h-full bg-white'
          : expand == false && 'min-w-full] h-auto'
      )}
    >
      {expand ? (
        <MaxMenu
          current={page!}
          onExpand={onExpand}
        />
      ) : (
        <MinMenu
          onShrink={onExpand}
          current={page!}
        />
      )}
    </div>
  )
}

export default SideBar