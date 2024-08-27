import Link from 'next/link'
import { District_List } from '@/constants/data/districts';
import { onGetAllVillages } from '@/actions/village';

import NextBreadcrumb from '@/components/NextBreadcrumb';
import StaticInfo from '@/components/villages/staticInfo';
import AllVillages from '@/components/villages';
import NotFound from '../not-found';

interface SearchParamsProps {
	searchParams?: {
		page?: string;
		query?: string;
	};
}

export default async function VillageList({ searchParams, }: SearchParamsProps) {

	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 20; // Define how many items you want per page

	const villages = await onGetAllVillages(currentPage, itemsPerPage);

	if(!villages) NotFound();

	const paginatedVillages = villages && villages?.villages ? villages?.villages : [];
	
	const pageCount = villages?.pageCount || 1;

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

				{/* AllVillages Table */}
				<h2 className='text-base xl:text-2xl font-semibold'>Village Census Table</h2>
				<AllVillages villages={paginatedVillages} pageCount={pageCount} />

			</div>
		</div>
	);
}
