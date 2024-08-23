import {
  Table,
  TableCaption,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import React, { memo } from 'react';

type DataTableProps = {
  headers: string[]
  title: string
  children: React.ReactNode
}

const DataTable = memo(({ headers, title, children }: DataTableProps) => {
  return (
    <Table className="rounded-t-xl overflow-hidden">
      <TableCaption className='font-bold'>{title}</TableCaption>
      <TableHeader>
        <TableRow className='bg-blue-600 text-base max-sm:text-sm hover:bg-blue-800'>
          {headers.map((header, key) => (
            <TableHead
              key={key}
              className={cn(
                key == 1 && 'w-4/12',
                'text-black text-white p-2.5 font-bold'
              )}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  )
})

// Explicitly setting the display name to avoid ESLint warning
DataTable.displayName = "DataTable";

export { DataTable };