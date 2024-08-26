import Link from 'next/link'
import { CITY_LIST } from "@/constants/data/cities";
import NotFound from '../not-found';
import { onGetAllCities } from '@/actions/city';
import AllCities from '@/components/cities';

import NextBreadcrumb from '@/components/NextBreadcrumb';
import StaticInfo from '@/components/cities/StaticInfo';

interface SearchParamsProps {
	searchParams?: {
		page?: string;
		query?: string;
	};
}


export default async function CityList({ searchParams, }: Readonly<SearchParamsProps>) {
	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 10; // Define how many items you want per page

	const cities = await onGetAllCities(currentPage, itemsPerPage);

	if(!cities) NotFound();

	const paginatedCities = cities && cities.cities ? cities?.cities : [];

	const pageCount = cities?.pageCount || 1

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
				<h2 className='text-base xl:text-2xl font-semibold'>Cities Census Table</h2>
				<AllCities cities={paginatedCities} pageCount={pageCount} />
				
			</div>
		</div>
	);
}