import { PaginationDemo } from '@/components/pagination';
import NextBreadcrumb from '@/components/NextBreadcrumb';
import StaticInfo from '@/components/states/info';
import { onGetAllStates } from '@/actions/state';
import React, { Suspense, lazy } from 'react';
import AllStates from '@/components/states';
import NotFound from '../not-found';

const LazyAllStates = lazy(() => import('@/components/states'));

interface SearchParamsProps {
	searchParams?: {
		page?: string;
		query?: string;
	};
}

export const revalidate = 60; // ISR revalidation

export default async function StateList({ searchParams, }: Readonly<SearchParamsProps>) {


	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 30; // Define how many items you want per page

	const states = await onGetAllStates(currentPage, itemsPerPage);

	if(!states) NotFound();

	const paginatedStates = states && states.states ? states?.states : [];

	const pageCount = states?.pageCount || 1


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
				<AllStates states={paginatedStates} pageCount = {pageCount}/>

				{/* AllStates Table */}
				{/* <h2 className='text-base xl:text-2xl font-semibold'>State Census Table</h2>
				<Suspense fallback={<div className='text-red-600 items-center'>Loading Table...</div>}>
					<LazyAllStates states={paginatedStates} pageCount = {pageCount} />
				</Suspense> */}
			</div>
		</div>
	);
}