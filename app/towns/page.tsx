import Link from 'next/link'
import { VILLAGE_LIST } from '@/constants/data/towns';

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


export default function Towns({ searchParams, }: Readonly<SearchParamsProps>) {

	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 100; // Define how many items you want per page

	if (VILLAGE_LIST.length === 0) {
		return <h1 className="text-red">Not Found</h1>;
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedStates = VILLAGE_LIST.slice(startIndex, startIndex + itemsPerPage);
	const pageCount = Math.ceil(VILLAGE_LIST.length / itemsPerPage);

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
				<Table>
					<TableCaption>A list of Towns.</TableCaption>
					<TableHeader>
						<TableRow className='bg-blue-600 text-base hover:bg-blue-800 w-auto'>
							<TableHead className='text-white font-bold'>#</TableHead>
							<TableHead className='text-white font-bold w-4/12'>Town</TableHead>
							<TableHead className='text-white font-bold w-1/5'>District</TableHead>
							<TableHead className='text-white font-bold'>Population</TableHead>
							<TableHead className='text-white font-bold'>Houses</TableHead>
							<TableHead className='text-white font-bold'>Sex-Ratio</TableHead>
							<TableHead className='text-white font-bold'>Literacy</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedStates.map((town, index) => (
							<TableRow key={town.id}>
								<TableCell className="font-medium">{index + 1}</TableCell>
								<TableCell><Link href={`/towns/${town.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{town.name}</Link></TableCell>
								<TableCell><Link href="#" className='underline decoration-blue-500 text-blue-700 text-base'>{town.name}</Link></TableCell>
								<TableCell className='text-base'>{town.population_total}</TableCell>
								<TableCell className='text-base'>12332</TableCell>
								<TableCell className='text-base'>898</TableCell>
								<TableCell className='text-base'>70.32%</TableCell>

							</TableRow>
						))}

					</TableBody>
				</Table>
				<PaginationDemo pageCount={pageCount} />
			</div>
		</div>
	);
}