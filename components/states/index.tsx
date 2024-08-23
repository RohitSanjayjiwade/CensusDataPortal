'use client'
import { useStates } from '@/hooks/states/use-state'
import React, { Suspense, lazy, useState } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { Loader } from '../loader';
import AllStatesData from '@/components/states/allStatesData';
const LazyAllStates = lazy(() => import('@/components/states/allStatesData'));


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
    }[],
    pageCount: number

}

const AllStates = ({states, pageCount}: Props) => {
    // const { loading, states, pageCount } = useStates(searchParams);
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    // const [page, setPage] = useState<number>(pageCount || 1)

    return (
        <>

            <AllStatesData states={states} />
            <PaginationDemo pageCount={pageCount} />
        </>
    );
};

export default AllStates;

