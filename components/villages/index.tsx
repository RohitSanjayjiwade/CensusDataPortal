'use client'
import { useStates } from '@/hooks/states/use-state'
import React, { Suspense, lazy, useState } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { Loader } from '../loader';
import AllVillagesData from '@/components/villages/allVillagesData';
const LazyAllVilages = lazy(() => import('@/components/villages/allVillagesData'));


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

    pageCount: number
}

const AllVillages = ({ villages, pageCount }: Props) => {
    // const { loading, states, pageCount } = useStates(searchParams);
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    return (
        <>

            <AllVillagesData villages={villages} />
            <PaginationDemo pageCount={pageCount} />
        </>
    );
};

export default AllVillages;

