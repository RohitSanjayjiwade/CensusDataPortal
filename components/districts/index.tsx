'use client'
import { useStates } from '@/hooks/states/use-state'
import React, { Suspense, lazy, useState } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { PaginationFirst } from '../pagination/paginationFirst';
import { Loader } from '../loader';
import AllDistrictsData from '@/components/districts/allDistrictsData';
const LazyAllDistricts = lazy(() => import('@/components/districts/allDistrictsData'));


type Props = {
    districts: {
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
    pageCount: number

}

const AllDistricts = ({districts, pageCount}: Props) => {
    // const { loading, states, pageCount } = useStates(searchParams);
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    return (
        <>

            <AllDistrictsData districts={districts} />
            <PaginationFirst pageCount={pageCount} />
        </>
    );
};

export default AllDistricts;

