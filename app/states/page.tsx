import Link from 'next/link'
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
import slugify from 'slugify';
import UsersTable from '@/components/UsersTable';
import { PaginationDemo } from '@/components/pagination';
import NextBreadcrumb from '@/components/NextBreadcrumb';

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

export default async function StateList({searchParams,}: Readonly<SearchParamsProps>) {

	const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 10; // Define how many items you want per page

	// const states = [
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// 	{ name: "JK", id: 3 },
	// 	{ name: "MH", id: 1 },
	// 	{ name: "MP", id: 2 },
	// ];

	// // Function to generate slug from state name
	// const generateSlug = (text: string) => {
	// 	return slugify(text, { lower: true, remove: /[*+~.()'"!:@]/g });
	// };

	// // Add slug to each state object
	// const statesWithSlugs = states.map((state) => ({
	// 	...state,
	// 	slug: generateSlug(state.name),
	// }));

	if (states.length === 0) {
		return <h1 className="text-red">Not Found</h1>;
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedStates = states.slice(startIndex, startIndex + itemsPerPage);
	const pageCount = Math.ceil(states.length / itemsPerPage);

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
					<TableCaption>A list of States.</TableCaption>
					<TableHeader>
						<TableRow className='bg-blue-600 text-base hover:bg-blue-800'>
							<TableHead className='text-white font-bold'>#</TableHead>
							<TableHead className='text-white font-bold'>State</TableHead>
							<TableHead className='text-white font-bold'>Population (Total)</TableHead>
							<TableHead className='text-white font-bold'>Population (Rural)</TableHead>
							<TableHead className='text-white font-bold'>Population (Urban)</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedStates.map((state, index) => (
							<TableRow key={state.id}>
								<TableCell className="font-medium">{index + 1}</TableCell>
								<TableCell><Link href={`/states/${state.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{state.name}</Link></TableCell>
								<TableCell>{state.population_total}</TableCell>
								<TableCell>{state.population_rural}</TableCell>
								<TableCell>{state.population_urban}</TableCell>

							</TableRow>
						))}

					</TableBody>
				</Table>
				<PaginationDemo pageCount={pageCount} />
				{/*<UsersTable />*/}

			</div>
		</div>
	);
}
