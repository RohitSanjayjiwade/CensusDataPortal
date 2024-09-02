'use client'
import { useStates } from '@/hooks/states/use-state'
import React, { Suspense, lazy, useState } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { PaginationFirst } from '../pagination/paginationFirst';
import { Loader } from '../loader';
import AllCitiesData from '@/components/cities/allCitiesData';
const LazyAllCities = lazy(() => import('@/components/cities/allCitiesData'));


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
    pageCount: number

}

const AllCities = ({cities, pageCount}: Props) => {
    // const { loading, states, pageCount } = useStates(searchParams);
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    return (
        <>

            <AllCitiesData cities={cities} />
            <PaginationFirst pageCount={pageCount} />
        </>
    );
};

export default AllCities;

