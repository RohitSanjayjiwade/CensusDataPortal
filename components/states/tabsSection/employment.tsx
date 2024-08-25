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

type Props = {
    stateTotalData: {
        totalWorkersPersons?: number | null;
        totalWorkersMales?: number | null;
        totalWorkersFemales?: number | null;
        mainWorkersPersons?: number | null;
        mainWorkersMales?: number | null;
        mainWorkersFemales?: number | null;
        workersCultiPersons?: number | null;
        workersCultiMales?: number | null;
        workersCultiFemales?: number | null;
        mainWorkersAgriLabourersPersons?: number | null;
        mainWorkersAgriLabourersMales?: number | null;
        mainWorkersAgriLabourersFemales?: number | null;
        mainWorkersHouseholdIndustriesPersons?: number | null;
        mainWorkersHouseholdIndustriesMales?: number | null;
        mainWorkersHouseholdIndustriesFemales?: number | null;
        mainWorkersOtherWorkersPersons?: number | null;
        mainWorkersOtherWorkersMales?: number | null;
        mainWorkersOtherWorkersFemales?: number | null;
        marginalWorkersPersons?: number | null;
        marginalWorkersMales?: number | null;
        marginalWorkersFemales?: number | null;
        marginalCultivatorsPersons?: number | null;
        marginalCultivatorsMales?: number | null;
        marginalCultivatorsFemales?: number | null;
        marginalAgriLabourersPersons?: number | null;
        marginalAgriLabourersMales?: number | null;
        marginalAgriLabourersFemales?: number | null;
        marginalWorkersHouseholdIndustriesPersons?: number | null;
        marginalWorkersHouseholdIndustriesMales?: number | null;
        marginalWorkersHouseholdIndustriesFemales?: number | null;
        marginalWorkersOtherWorkersPersons?: number | null;
        marginalWorkersOtherWorkersMales?: number | null;
        marginalWorkersOtherWorkersFemales?: number | null;
        marginalWorkers3To6MonthsPersons?: number | null;
        marginalWorkers3To6MonthsMales?: number | null;
        marginalWorkers3To6MonthsFemales?: number | null;
        marginalCultivatorsPersons3To6Months?: number | null;
        marginalCultivatorsMales3To6Months?: number | null;
        marginalCultivatorsFemales3To6Months?: number | null;
        marginalAgriLabourersPersons3To6Months?: number | null;
        marginalAgriLabourersMales3To6Months?: number | null;
        marginalAgriLabourersFemales3To6Months?: number | null;
        marginalWorkersHouseholdIndustriesPersons3To6Months?: number | null;
        marginalWorkersHouseholdIndustriesMales3To6Months?: number | null;
        marginalWorkersHouseholdIndustriesFemales3To6Months?: number | null;
        marginalOtherWorkersPersons3To6Months?: number | null;
        marginalOtherWorkersMales3To6Months?: number | null;
        marginalOtherWorkersFemales3To6Months?: number | null;
        marginalWorkersLessThan3MonthsPersons?: number | null;
        marginalWorkersLessThan3MonthsMales?: number | null;
        marginalWorkersLessThan3MonthsFemales?: number | null;
        marginalCultivatorsPersonsLessThan3Months?: number | null;
        marginalCultivatorsMalesLessThan3Months?: number | null;
        marginalCultivatorsFemalesLessThan3Months?: number | null;
        marginalAgriLabourersPersonsLessThan3Months?: number | null;
        marginalAgriLabourersMalesLessThan3Months?: number | null;
        marginalAgriLabourersFemalesLessThan3Months?: number | null;
        marginalWorkersHouseholdIndustriesPersonsLessThan3Months?: number | null;
        marginalWorkersHouseholdIndustriesMalesLessThan3Months?: number | null;
        marginalWorkersHouseholdIndustriesFemalesLessThan3Months?: number | null;
        marginalOtherWorkersPersonsLessThan3Months?: number | null;
        marginalOtherWorkersMalesLessThan3Months?: number | null;
        marginalOtherWorkersFemalesLessThan3Months?: number | null;
        nonWorkersPersons?: number | null;
        nonWorkersMales?: number | null;
        nonWorkersFemales?: number | null;
    } | null;
};

const Employment = ({ stateTotalData }: Props) => {
    return (
        <TabTable headers={OVERVIEW_TABLE_HEADER} title={'Employment Overview'}>
            {stateTotalData ? (
                <>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Workers (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.totalWorkersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Workers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.totalWorkersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Total Workers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.totalWorkersFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs text-right bg-white bg-green-100 even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-bold p-2.5 border-l bg-blue-100 border-purple-300">
                            Main Workers Population Data
                        </TableCell>
                        <TableCell className="p-2.5 border-r bg-blue-100 border-purple-300">

                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main Workers (Persons)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main Workers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main Workers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main cultivator (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.workersCultiPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main cultivator (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.workersCultiMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main cultivator (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.workersCultiFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main agricultural labourers (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersAgriLabourersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main agricultural labourers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersAgriLabourersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main agricultural labourers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersAgriLabourersFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main household industries (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersHouseholdIndustriesPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main household industries (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersHouseholdIndustriesMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main household industries (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersHouseholdIndustriesFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main other workers (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersOtherWorkersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main other workers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersOtherWorkersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Main other workers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.mainWorkersOtherWorkersFemales)}
                        </TableCell>
                    </TableRow>

                    <TableRow className="text-base max-sm:text-xs text-right  bg-white bg-green-100 even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-bold p-2.5 mr-4 bg-blue-100  border-l border-purple-300">
                            Marginal Workers Population Data
                        </TableCell>
                        <TableCell className="  border-r bg-blue-100 border-purple-300">

                        </TableCell>
                    </TableRow>

                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal Workers (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal Workers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal Workers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersFemales)}
                        </TableCell>
                    </TableRow>

                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivator (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivator (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivator (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersOtherWorkersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersOtherWorkersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersOtherWorkersFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal worker (3-6 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkers3To6MonthsPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal worker (3-6 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkers3To6MonthsMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal worker (3-6 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkers3To6MonthsFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivators (3-6 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsPersons3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivators (3-6 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsMales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivators (3-6 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsFemales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (3-6 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersPersons3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (3-6 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersMales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (3-6 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersFemales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (3-6 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesPersons3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (3-6 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesMales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (3-6 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesFemales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (3-6 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalOtherWorkersPersons3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (3-6 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalOtherWorkersMales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (3-6 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalOtherWorkersFemales3To6Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal workers (0-3 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersLessThan3MonthsPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal workers (0-3 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersLessThan3MonthsMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal workers (0-3 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersLessThan3MonthsFemales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivators (0-3 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsPersonsLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivators (0-3 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsMalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal cultivators (0-3 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalCultivatorsFemalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (0-3 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersPersonsLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (0-3 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersMalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal agricultural labourers (0-3 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalAgriLabourersFemalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (0-3 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesPersonsLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (0-3 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesMalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal household industries (0-3 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalWorkersHouseholdIndustriesFemalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (0-3 months) - Person
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalOtherWorkersPersonsLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (0-3 months) - Males
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalOtherWorkersMalesLessThan3Months)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Marginal other workers (0-3 months) - Females
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.marginalOtherWorkersFemalesLessThan3Months)}
                        </TableCell>
                    </TableRow>

                    <TableRow className="text-base max-sm:text-xs bg-white text-right rounded-xl bg-blue-100 even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-bold p-2.5 bg-blue-100  border-l border-purple-300">
                            Non working population Data
                        </TableCell>
                        <TableCell className="p-2.5 text-center bg-blue-100 border-r border-purple-300">

                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Non working (Person)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.nonWorkersPersons)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Non working (Males)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.nonWorkersMales)}
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-base max-sm:text-xs bg-white rounded-xl even:bg-gray-50 hover:bg-purple-100">
                        <TableCell className="font-medium p-2.5 text-center border border-purple-300">
                            Non working (Females)
                        </TableCell>
                        <TableCell className="p-2.5 text-center border border-purple-300">
                            {formatNumber(stateTotalData.nonWorkersFemales)}
                        </TableCell>
                    </TableRow>
                </>
            ) : (
                <CardDescription>No Data Available</CardDescription>
            )}
        </TabTable>
    );
};

export default Employment;
