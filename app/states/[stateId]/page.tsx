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
  searchParams?: {
    page?: string;
    query?: string;
  };
}


async function getDistrictsByStateSlug(slug: string) {
    const state = await states.find((state)=> state.slug === slug);
	// console.log(state,slug)
    if (state) {
        return {stateName: state?.name, districts: state?.districts};
    } else {
        console.error('State not found');
        return [];
    }
}

export default async function StateDetails({ params, searchParams }: {
	params: {
		stateId: string
	};
	searchParams?: {
    page?: string;
    query?: string;
  };
}) {
	const state = await getDistrictsByStateSlug(params.stateId);
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
						<TableHead className='text-white font-bold'>#</TableHead>
						<TableHead className='text-white font-bold'>District</TableHead>
						<TableHead className='text-white font-bold'>Population (Total)</TableHead>
						<TableHead className='text-white font-bold'>Population (Rural)</TableHead>
						<TableHead className='text-white font-bold'>Population (Urban)</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{paginatedStates.map((district: any, index: number) => (

						<TableRow key={district.id}>
							<TableCell className="font-medium">{index + 1}</TableCell>
							<TableCell><Link href={`/districts/${district.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{district.name}</Link></TableCell>
							<TableCell>{district.population_total}</TableCell>
							<TableCell>{district.population_rural}</TableCell>
							<TableCell>{district.population_urban}</TableCell>

						</TableRow>
					))}

				</TableBody>
			</Table>

			<PaginationDemo pageCount={pageCount} />

		</div>

	);


}