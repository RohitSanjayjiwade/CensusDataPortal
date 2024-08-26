import Link from 'next/link'
import { District_List } from '@/constants/data/districts';
import { onGetAllDistricts } from '@/actions/district';

import NextBreadcrumb from '@/components/NextBreadcrumb';
import StaticInfo from '@/components/districts/StaticInfo';
import AllDistricts from '@/components/districts';
import NotFound from '../not-found';

interface SearchParamsProps {
	searchParams?: {
		page?: string;
		query?: string;
	};
}

export default async function DistrictList({ searchParams, }: Readonly<SearchParamsProps>) {

	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 10; // Define how many items you want per page

	const districts = await onGetAllDistricts(currentPage, itemsPerPage);

	if(!districts) NotFound();

	const paginatedDistricts = districts && districts?.districts ? districts?.districts : [];
	
	const pageCount = districts?.pageCount || 1;

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

				{/* AllDistricts Table */}
				<h2 className='text-base xl:text-2xl font-semibold'>District Census Table</h2>
				<AllDistricts districts={paginatedDistricts} pageCount={pageCount} />

			</div>
		</div>
	);
}
