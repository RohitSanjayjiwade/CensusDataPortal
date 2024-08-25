'use client';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
} from '@/components/ui/card';
import { TabTable } from '@/components/tab-table';
import { TableCell, TableRow } from '@/components/ui/table';
import { OVERVIEW_TABLE_HEADER } from '@/constants/menu';
import { formatNumber } from '@/lib/utils';
import { calculatePercentage } from '@/lib/utils';
import { formatPercentage } from '@/lib/utils';
import { formatPopulationInCrores } from '@/lib/utils';
import { calculateSexRatio } from '@/lib/utils';

type Props = {
    stateTotalData: any | null;
};

const Overview = ({ stateTotalData }: Props) => {

    const {
        totalPopulationPersons,
        totalPopulationMales,
        totalPopulationFemales,
        literatesPersons,
        literatesMales,
        literatesFemales,
    } = stateTotalData;

    // Calculate literacy percentages using the common function
    const literatesPercentage = calculatePercentage(literatesPersons, totalPopulationPersons);
    const literatesMalesPercentage = calculatePercentage(literatesMales, totalPopulationMales);
    const literatesFemalesPercentage = calculatePercentage(literatesFemales, totalPopulationFemales);


    // Calculate sex ratio
    const sexRatio = calculateSexRatio(totalPopulationFemales, totalPopulationMales);

    return (
        <TabTable headers={OVERVIEW_TABLE_HEADER} title={'Overview'}>
            {stateTotalData ? (
                <>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            No. of Households
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData?.noOfHousehold)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Approximate Population
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatPopulationInCrores(totalPopulationPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Population (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData?.totalPopulationPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Population (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData?.totalPopulationMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Population (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData?.totalPopulationFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Literates (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(literatesPersons)} &nbsp;  <strong>({formatPercentage(literatesPercentage)})</strong>
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Literates (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData?.literatesMales)} &nbsp; <strong>({formatPercentage(literatesMalesPercentage)})</strong>
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Literates (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData?.literatesFemales)} &nbsp; <strong>({formatPercentage(literatesFemalesPercentage)})</strong>
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl bg-green-100 even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Sex Ratio (Females per 1000 Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {sexRatio}
                        </TableCell>
                    </TableRow>
                </>
            ) : (
                <CardDescription>No Data Available</CardDescription>
            )}
        </TabTable>
    );
};

export default Overview;
