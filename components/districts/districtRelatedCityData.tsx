import { CITY_TABLE_HEADER } from '@/constants/menu'
import React, { memo } from 'react'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import { CardDescription } from '../ui/card'
import Link from 'next/link'
import { formatNumber } from '@/lib/utils'


type Props = {
    cities: {
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
    }[],
    title: string
}

const DistrictRelatedCityData = ({ cities, title }: Props) => {
  return (
    <DataTable headers={CITY_TABLE_HEADER} title={title}>
      {cities ? (
        cities.map((city, index) => (
            <TableRow key={city.id} className='text-base max-sm:text-xs'>
            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
            <TableCell className='p-2.5'><Link href={`/cities/${city.slug}`} className='underline decoration-blue-500 text-blue-700'>{city.name}</Link></TableCell>
            <TableCell className='p-2.5'>{formatNumber(city.years[0].data?.totalPopulationPersons)}</TableCell>
            <TableCell className='p-2.5'>{formatNumber(city.years[0].rural_data?.totalPopulationPersons)}</TableCell>
            <TableCell className='p-2.5'>{formatNumber(city.years[0].urban_data?.totalPopulationPersons)}</TableCell>

        </TableRow>
        ))
      ) : (
        <CardDescription>No Cities</CardDescription>
      )}
    </DataTable>
  )
}

export default DistrictRelatedCityData;