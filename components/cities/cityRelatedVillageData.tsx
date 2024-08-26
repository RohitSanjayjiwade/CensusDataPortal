import { VILLAGE_TABLE_HEADER } from '@/constants/menu'
import React, { memo } from 'react'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import { CardDescription } from '../ui/card'
import Link from 'next/link'
import { formatNumber } from '@/lib/utils'


type Props = {
    villages: {
        id: number;
        name: string;
        slug: string;
        years: {
            year: number;
            rural_data: {
                totalPopulationPersons: number | null;
            } | null;
        }[];
    }[],
    title: string
}

const CityRelatedVillageData = ({ villages, title }: Props) => {
  return (
    <DataTable headers={VILLAGE_TABLE_HEADER} title={title}>
      {villages ? (
        villages.map((village, index) => (
            <TableRow key={village.id} className='text-base max-sm:text-xs'>
            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
            <TableCell className='p-2.5'><Link href={`/villages/${village.slug}`} className='underline decoration-blue-500 text-blue-700'>{village.name}</Link></TableCell>
            <TableCell className='p-2.5'>{formatNumber(village.years[0].rural_data?.totalPopulationPersons)}</TableCell>

        </TableRow>
        ))
      ) : (
        <CardDescription>No Villages</CardDescription>
      )}
    </DataTable>
  )
}

export default CityRelatedVillageData;