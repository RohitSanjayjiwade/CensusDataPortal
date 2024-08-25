'use client';
import React from 'react';
import {
    CardDescription,
} from '@/components/ui/card';
import { TabTable } from '@/components/tab-table';
import { TableCell, TableRow } from '@/components/ui/table';
import { OVERVIEW_TABLE_HEADER } from '@/constants/menu';
import { formatNumber } from '@/lib/utils';

type Props = {
    stateTotalData: {
        literatesPersons?: number | null;
        literatesMales?: number | null;
        literatesFemales?: number | null;
        illiteratesPersons?: number | null;
        illiteratesMales?: number | null;
        illiteratesFemales?: number | null;
    } | null;
};

const Education = ({ stateTotalData }: Props) => {
    return (
        <TabTable headers={OVERVIEW_TABLE_HEADER} title={'Education Overview'}>
            {stateTotalData ? (
                <>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Literates (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.literatesPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Literates (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.literatesMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Literates (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.literatesFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Illiterates (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.illiteratesPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Illiterates (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.illiteratesMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-green-100 bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 bg-green-100 text-center border border-purple-300">
                            Illiterates (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center bg-green-100 border border-purple-300">
                            {formatNumber(stateTotalData.illiteratesFemales)}
                        </TableCell>
                    </TableRow>
                </>
            ) : (
                <CardDescription>No Data Available</CardDescription>
            )}
        </TabTable>
    );
};

export default Education;
