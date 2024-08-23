'use client'
import { useStates } from '@/hooks/states/use-state'
import React, { Suspense, lazy } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { Loader } from '../loader';
const LazyAllStates = lazy(() => import('@/components/states/all-states'));


type Props = {
    searchParams?: {
        page?: string;
        query?: string;
    };
}

const AllStateMenu = ({ searchParams }: Props) => {
    const { loading, states, pageCount } = useStates(searchParams);
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    return (
        <>
            <Loader loading={loading}>
                <LazyAllStates states={states} />
            </Loader>
            <PaginationDemo pageCount={pageCount} />
        </>
    );
};

export default AllStateMenu;
