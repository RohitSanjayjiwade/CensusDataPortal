import { PaginationDemo } from '@/components/pagination';
import NextBreadcrumb from '@/components/NextBreadcrumb';
import StaticInfo from '@/components/states/info';
import { onGetAllStates } from '@/actions/state';
import React, { Suspense, lazy } from 'react';
import AllStateMenu from '@/components/states/allState';

const LazyAllStates = lazy(() => import('@/components/states/all-states'));

interface SearchParamsProps {
	searchParams?: {
		page?: string;
		query?: string;
	};
}

export default async function StateList({ searchParams, }: Readonly<SearchParamsProps>) {

	// const states = await onGetAllStates()

	return (
		<div className='flex-1 overflow-hidden'>
			<div className="flex flex-col gap-2 mt-32">
				<NextBreadcrumb
					homeElement={'Home'}
					separator={<span> | </span>}
					activeClasses='text-amber-500'
					containerClasses='flex py-2 bg-gradient-to-r from-purple-600 to-blue-600'
					listClasses='hover:underline mx-2 font-bold'
					capitalizeLinks
				/>
				{/* Static Information Section */}
				<StaticInfo />


				{/* AllStates Table */}
				<h2 className='text-base xl:text-2xl font-semibold'>State Census Table</h2>
				<AllStateMenu searchParams={searchParams}/>

				{/* AllStates Table */}
				{/* <h2 className='text-base xl:text-2xl font-semibold'>State Census Table</h2>
				<Suspense fallback={<div className='text-red-600 items-center'>Loading Table...</div>}>
					<LazyAllStates states={paginatedStates} />
				</Suspense> */}
			</div>
		</div>
	);
}