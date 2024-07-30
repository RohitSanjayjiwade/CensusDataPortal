import { SIDE_BAR_MENU } from '@/constants/menu'
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MenuItem from '../asidebar/menu-item'

type Props = {
  onExpand(): void
  current: string
}

const MaxMenu = ({ current, onExpand }: Props) => {
  return (
    <div className="py-5 px-4 flex flex-col gap-6 w-full h-full">
      <div className="flex justify-between items-center sticky top-5">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          className="animate-fade-in delay-300 fill-mode-forwards"
          style={{
            width: '30%',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
        <Menu
          className="cursor-pointer animate-fade-in  delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      <div className="animate-fade-in overflow-y-scroll chat-window-1 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              size="max"
              {...menu}
              key={key}
              current={current}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaxMenu
