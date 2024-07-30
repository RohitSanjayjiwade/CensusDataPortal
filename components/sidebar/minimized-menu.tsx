import { SIDE_BAR_MENU } from '@/constants/menu'

import React from 'react'

import { MenuLogo } from '@/icons/menu-logo'
// import MenuItem from './menu-item'
import MenuItem from '../asidebar/menu-item'

type MinMenuProps = {
  onShrink(): void
  current: string
}

export const MinMenu = ({
  onShrink,
  current,
}: MinMenuProps) => {
  return (
    <div className="p-5 flex flex-col h-full">
      <span className="animate-fade-in  delay-300 fill-mode-forwards cursor-pointer">
        <MenuLogo onClick={onShrink} />
      </span>
      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full">
        <div className="flex flex-col">
        </div>
      </div>
    </div>
  )
}