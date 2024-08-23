'use client'
import { useStatesInfo } from '@/hooks/states/use-state'
import React, { Suspense, lazy } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { Loader } from '../loader';
import AllDistictsUnderState from "@/components/states/all-districts-state";
import DynamicInfo from "@/components/states/dynamicInfo";
import NotFound from '@/app/not-found';



const LazyAllDistictsUnderState = lazy(() => import('@/components/states/all-districts-state'));

type Props = {
    slug: string
    searchParams?: {
        page?: string;
        query?: string;
    };
}

const StateMenu = ({ slug, searchParams }: Props) => {
    const { loading, districts, stateName, pageCount, stateTotalData } = useStatesInfo(slug, searchParams);
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    return (
        <div className='flex flex-col gap-2 mt-5'>
            <DynamicInfo stateName={stateName} stateTotalData={stateTotalData} />
            <div>
                <h2 className='text-base xl:text-2xl mb-1 font-semibold'>{stateName} District List</h2>
                <Loader loading={loading}>
                    <AllDistictsUnderState districts={districts} title={`${stateName ? stateName : 'State Name Not Available'} District List`} />
                </Loader>

                <PaginationDemo pageCount={pageCount} />
            </div>

        </div>
    );
};

export default StateMenu;
