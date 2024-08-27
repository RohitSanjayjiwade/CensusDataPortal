'use client'
import { useStates} from '@/hooks/states/use-state'
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { Loader } from '../loader';
import AllVillagesData from '@/components/villages/allVillagesData';
const LazyAllVilages = lazy(() => import('@/components/villages/allVillagesData'));
import SearchBar from '../serach';


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

    const [searchQuery, setSearchQuery] = useState('');


    return (
        <>
            <SearchBar onSearch={setSearchQuery} />
            <AllVillagesData villages={villages} searchQuery={searchQuery} />
            <PaginationDemo pageCount={pageCount} />
        </>
    );
};

export default AllVillages;
