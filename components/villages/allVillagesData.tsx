import { VILLAGE_TABLE_HEADER } from '@/constants/menu'
import React, { memo } from 'react'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import { CardDescription } from '../ui/card'
import Link from 'next/link'
import { formatNumber } from '@/lib/utils'
import { useMemo } from 'react'


type Props = {
    villages: {
        id: number;
        slug: string;
        name: string;
        years: {
            rural_data: {
                totalPopulationPersons: number | null;
            } | null;
            year: number;
        }[];
        state: {
            slug: string;
            name: string;
        };
        district: {
            slug: string;
            name: string;
        };
    }[],

    searchQuery: string
}

const AllVillagesData = ({ villages, searchQuery}: Props) => {

    const filteredVillages = searchQuery ? useMemo(() => {
        return villages?.filter((state) =>
            state.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [villages, searchQuery]) : [];

    return (
        <div className='flex flex-col gap-20'>
            {filteredVillages.length > 0 && (<DataTable headers={VILLAGE_TABLE_HEADER} title={'A list of Villages.'}>
                {filteredVillages ? (
                    filteredVillages.map((village, index) => (
                        <TableRow key={village.id} className='text-base max-sm:text-xs'>
                            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
                            <TableCell className='p-2.5'><Link href={`/villages/${village?.slug}`} className='underline decoration-blue-500 text-blue-700'>{village.name}</Link></TableCell>
                            <TableCell className='p-2.5'>{village.district.name}</TableCell>
                            <TableCell className='p-2.5'>{village.state.name}</TableCell>
                            <TableCell className='p-2.5'>{formatNumber(village?.years[0]?.rural_data?.totalPopulationPersons)}</TableCell>

                        </TableRow>
                    ))
                ) : (
                    <CardDescription>No Villages</CardDescription>
                )}
            </DataTable>)}
            <DataTable headers={VILLAGE_TABLE_HEADER} title={'A list of Villages.'}>
                {villages ? (
                    villages.map((village, index) => (
                        <TableRow key={village.id} className='text-base max-sm:text-xs'>
                            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
                            <TableCell className='p-2.5'><Link href={`/villages/${village?.slug}`} className='underline decoration-blue-500 text-blue-700'>{village.name}</Link></TableCell>
                            <TableCell className='p-2.5'><Link href={`/districts/${village?.district?.slug}`} className='underline decoration-blue-500 text-blue-700'>{village.district.name}</Link></TableCell>
                            <TableCell className='p-2.5'><Link href={`/states/${village?.state?.slug}`} className='underline decoration-blue-500 text-blue-700'>{village.state.name}</Link></TableCell>
                            <TableCell className='p-2.5'>{formatNumber(village?.years[0]?.rural_data?.totalPopulationPersons)}</TableCell>

                        </TableRow>
                    ))
                ) : (
                    <CardDescription>No Villages</CardDescription>
                )}
            </DataTable>
        </div>
    )
}

export default AllVillagesData