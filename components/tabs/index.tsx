import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

type Props = {
  triggers: {
    label: string
    icon?: JSX.Element
  }[]
  children: React.ReactNode
  className?: string
  button?: JSX.Element
}

const TabsMenu = ({ triggers, children, className, button }: Props) => {
  return (
    <Tabs
      defaultValue={triggers[0].label}
      className='rounded-lg pb-3 bg-gray-100'
    >
      <TabsList className={cn('w-full max-w-screen-xl max-sm:flex max-sm:flex-col p-5 justify-start max-sm:h-[8.5rem] mx-auto shadow-lg  bg-purple-600 rounded-t-lg text-white', className)}>
        {triggers.map((trigger, key) => (
          <TabsTrigger
            key={key}
            value={trigger.label}
            className="capitalize flex gap-2  text-white font-bold max-sm:py-1 px-4 py-1 whitespace-nowrap transition-colors duration-200"
          >
            {trigger.icon && trigger.icon}
            {trigger.label}
          </TabsTrigger>
        ))}
        {button}
      </TabsList>
      {children}
    </Tabs>
  )
}

export default TabsMenu
