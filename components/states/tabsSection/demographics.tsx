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
        noOfHousehold?: number | null;
        totalPopulationPersons?: number | null;
        totalPopulationMales?: number | null;
        totalPopulationFemales?: number | null;
        populationInAgePersons?: number | null;
        populationInAgeMales?: number | null;
        populationInAgeFemales?: number | null;
        castePopulationPersons?: number | null;
        castePopulationMales?: number | null;
        castePopulationFemales?: number | null;
        tribePopulationPersons?: number | null;
        tribePopulationMales?: number | null;
        tribePopulationFemales?: number | null;
    } | null;
};

const Demographics = ({ stateTotalData }: Props) => {
    return (
        <TabTable headers={OVERVIEW_TABLE_HEADER} title={'Demographics'}>
            {stateTotalData ? (
                <>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            No. of Households
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.noOfHousehold)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Population (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.totalPopulationPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Population (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.totalPopulationMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Population (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.totalPopulationFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Population in aged (0 to 6) - Persons
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.populationInAgePersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Population in aged (0 to 6) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.populationInAgeMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Population in aged (0 to 6) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.populationInAgeFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Scheduled Castes (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.castePopulationPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Scheduled Castes (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.castePopulationMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Scheduled Castes (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.castePopulationFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Scheduled Tribes (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.tribePopulationPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Scheduled Tribes (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.tribePopulationMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white bg-green-100 even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Scheduled Tribes (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.tribePopulationFemales)}
                        </TableCell>
                    </TableRow>
                </>
            ) : (
                <CardDescription>No Data Available</CardDescription>
            )}
        </TabTable>
    );
};

export default Demographics;
