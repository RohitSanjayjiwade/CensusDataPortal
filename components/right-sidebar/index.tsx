'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxNav from './maximized-nav'
import { MinNav } from './minimized-nav'

type Props = {}

const RightSideBar = (props: Props) => {
  const { expand, onExpand, page } = useSideBar()

  return (
    <div
      className={cn(
        'w-[60px] fixed top-0 right-0 hidden max-lg:block transition-all duration-300 ease-in-out',
        expand == undefined && '',
        expand == true
          ? ' min-w-[55%] max-sm:w-full h-full bg-white'
          : expand == false && 'min-w-full] h-auto'
      )}
    >
      {expand ? (
        <MaxNav
          current={page!}
          onExpand={onExpand}
        />
      ) : (
        <MinNav
          onShrink={onExpand}
          current={page!}
        />
      )}
    </div>
  )
}

export default RightSideBar