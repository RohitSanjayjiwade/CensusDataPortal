'use client'
import React from 'react'
import MediumMenu from './medium-menu'
import { usePathname } from 'next/navigation'

type Props = {}

const AsideBar = (props: Props) => {
  const pathname = usePathname()
  const page = pathname.split('/').pop()
  console.log("oyyy",page)


  return (
    <div className='bg-cream hidden w-1xl -ml-2  h-[calc(86vh-3.5rem)] fixed sticky shrink-0 top-32 chat-window overflow-y-scroll lg:block'>
        <MediumMenu
          current={page!}
        />
    </div>
  )
}

export default AsideBar


// return (
//     <div className='fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-[300px] shrink-0 md:sticky md:block'>
//     <div className='bg-cream relative overflow-hidden overflow-y-scroll h-full py-6 pr-6 lg:py-8'>
//       <MediumMenu current={page!} />
//     </div>
//     </div>
//   );