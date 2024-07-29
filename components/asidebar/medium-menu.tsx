import { SIDE_BAR_MENU } from '@/constants/menu'
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MenuItem from './menu-item'

type Props = {
  current: string
}

const MaxMenu = ({ current}: Props) => {
  return (
    <div className="py-3 px-4 flex flex-col h-full">
      <div className="animate-fade-in delay-300 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
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
