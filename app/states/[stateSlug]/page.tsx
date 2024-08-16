import { notFound } from "next/navigation";
import Link from "next/link"
import { states } from '@/constants/data/states';


import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { PaginationDemo } from "@/components/pagination";
import NextBreadcrumb from "@/components/NextBreadcrumb";

interface SearchParamsProps {
	params: {
		stateSlug: string
	};
	searchParams?: {
		page?: string;
		query?: string;
	};
}


async function getDistrictsByStateSlug(slug: string) {
	const state = await states.find((state) => state.slug === slug);
	// console.log(state,slug)
	if (state) {
		return { stateName: state?.name, districts: state?.districts };
	} else {
		console.error('State not found');
		return [];
	}
}

export default async function StateDetails({ params, searchParams }: SearchParamsProps) {
	const state = await getDistrictsByStateSlug(params.stateSlug);
	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 2; // Define how many items you want per page

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedStates = state && 'districts' in state ? state?.districts?.slice(startIndex, startIndex + itemsPerPage) : [];
	const pageCount = state && 'districts' in state ? Math.ceil(state.districts.length / itemsPerPage) : 0;

	return (
		<div className="mt-5 w-full">
			<NextBreadcrumb
				homeElement={'Home'}
				separator={<span> | </span>}
				activeClasses='text-amber-500'
				containerClasses='flex py-2 bg-gradient-to-r from-purple-600 to-blue-600'
				listClasses='hover:underline mx-2 font-bold'
				capitalizeLinks
			/>
			<p><Link href="/states">Back</Link></p>

			<Table>
				<TableCaption>{state && 'stateName' in state ? state.stateName : 'State Name Not Available'} District List</TableCaption>
				<TableHeader>
					<TableRow className='bg-blue-600 text-base hover:bg-blue-800'>
						<TableHead className='text-white font-bold p-2.5'>#</TableHead>
						<TableHead className='text-white font-bold p-2.5 w-4/12'>District</TableHead>
						<TableHead className='text-white font-bold p-2.5'>Population (Total)</TableHead>
						<TableHead className='text-white font-bold p-2.5'>Population (Rural)</TableHead>
						<TableHead className='text-white font-bold p-2.5'>Population (Urban)</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{paginatedStates.map((district: any, index: number) => (

						<TableRow key={district.id} className='text-base max-sm:text-xs'>
							<TableCell className="font-medium p-2.5">{index + 1}</TableCell>
							<TableCell className='p-2.5'><Link href={`/districts/${district.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{district.name}</Link></TableCell>
							<TableCell className='p-2.5'>{district.population_total}</TableCell>
							<TableCell className='p-2.5'>{district.population_rural}</TableCell>
							<TableCell className='p-2.5'>{district.population_urban}</TableCell>

						</TableRow>
					))}

				</TableBody>
			</Table>

			<PaginationDemo pageCount={pageCount} />

		</div>

	);


}