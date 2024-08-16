import Link from 'next/link'
import { CITY_LIST } from "@/constants/data/cities";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { PaginationDemo } from '@/components/pagination';
import NextBreadcrumb from '@/components/NextBreadcrumb';

interface SearchParamsProps {
	searchParams?: {
		page?: string;
		query?: string;
	};
}


export default async function Cities({ searchParams, }: Readonly<SearchParamsProps>) {
	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 10; // Define how many items you want per page

	if (CITY_LIST.length === 0) {
		return <h1 className="text-red">Not Found</h1>;
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedStates = CITY_LIST.slice(startIndex, startIndex + itemsPerPage);
	const pageCount = Math.ceil(CITY_LIST.length / itemsPerPage);

	return (
		<div className='flex-1'>
			<div className="flex flex-col gap-2 mt-32 overflow-hidden">
				<NextBreadcrumb
					homeElement={'Home'}
					separator={<span> | </span>}
					activeClasses='text-amber-500'
					containerClasses='flex py-2 bg-gradient-to-r from-purple-600 to-blue-600'
					listClasses='hover:underline mx-2 font-bold'
					capitalizeLinks
				/>
				<Table>
					<TableCaption>A list of Cities.</TableCaption>
					<TableHeader>
						<TableRow className='bg-blue-600 text-base max-sm:text-xs hover:bg-blue-800'>
							<TableHead className='text-white font-bold p-2.5'>#</TableHead>
							<TableHead className='text-white font-bold p-2.5 w-4/12'>City</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Population (Total)</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Population (Rural)</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Population (Urban)</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedStates.map((city, index) => (
							<TableRow key={city.id} className='text-base max-sm:text-xs'>
								<TableCell className="font-medium p-2.5">{index + 1}</TableCell>
								<TableCell className='p-2.5'><Link href={`/cities/${city.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{city.name}</Link></TableCell>
								<TableCell className='p-2.5'>{city.population_total}</TableCell>
								<TableCell className='p-2.5'>{city.population_rural}</TableCell>
								<TableCell className='p-2.5'>{city.population_urban}</TableCell>

							</TableRow>
						))}

					</TableBody>
				</Table>
				<PaginationDemo pageCount={pageCount} />
			</div>
		</div>
	);
}