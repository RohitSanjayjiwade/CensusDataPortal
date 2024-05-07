import Link from 'next/link'

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

export default function StateList() {

	const states = [
		{ name: "MH", id: 1 },
		{ name: "MP", id: 2 },
		{ name: "JK", id: 3 }
	];

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

	return (
		<div className="mt-5 w-full">
			
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
					{states.map((state, index) => (

						<TableRow>
							<TableCell className="font-medium">{index + 1}</TableCell>
							<TableCell><Link href={`/states/${state.id}`} className='underline decoration-blue-500 text-blue-700 text-base'>{state.name}</Link></TableCell>
							<TableCell>Paid</TableCell>
							<TableCell>Credit Card</TableCell>
							<TableCell>$250.00</TableCell>

						</TableRow>
					))}

				</TableBody>
			</Table>

		</div>
	);
}
