import { State_TABLE_HEADER } from '@/constants/menu'
import React, { memo } from 'react'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import { CardDescription } from '../ui/card'
import Link from 'next/link'
import { formatNumber } from '@/lib/utils'


type Props = {
    states: {
        id: number;
        name: string;
        slug: string;
        years: {
            data: {
                totalPopulationPersons: number | null;
            } | null;
            year: number;
            rural_data: {
                totalPopulationPersons: number | null;
            } | null;
            urban_data: {
                totalPopulationPersons: number | null;
            } | null;
        }[];
    }[]
}


const AllStatesData = ({ states }: Props) => {
  return (
    <DataTable headers={State_TABLE_HEADER} title={'A list of States.'}>
      {states ? (
        states.map((state, index) => (
            <TableRow key={state.id} className='text-base max-sm:text-xs'>
            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
            <TableCell className='p-2.5'><Link href={`/states/${state.slug}`} className='underline decoration-blue-500 text-blue-700'>{state.name}</Link></TableCell>
            <TableCell className='p-2.5'>{formatNumber(state.years[0].data?.totalPopulationPersons)}</TableCell>
            <TableCell className='p-2.5'>{formatNumber(state.years[0].rural_data?.totalPopulationPersons)}</TableCell>
            <TableCell className='p-2.5'>{formatNumber(state.years[0].urban_data?.totalPopulationPersons)}</TableCell>

        </TableRow>
        ))
      ) : (
        <CardDescription>No States</CardDescription>
      )}
    </DataTable>
  )
}

export default AllStatesData