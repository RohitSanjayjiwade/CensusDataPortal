import { notFound } from "next/navigation";
import Link from "next/link"

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

export default function StateDetails({ params }: {
	params: {
		stateId: string
	};
}) {


	const state = {
		1: {
			name: "MH",
			d_list: ["Pune", "jalgaon", "Mumbai", "Nashik"]
		},
		2: {
			name: "MP",
			d_list: ["Bhopal", "Burhanpur", "Indore"]
		},
		3: {
			name: "JK",
			d_list: ["Anantnag", "Budgam."]
		},
	}
	let id = parseInt(params.stateId)
	console.log(typeof (id))

	if (id > Object.keys(state).length) {
		notFound();
	}

	return (
		<div className="mt-5 w-full">
			<p><Link href="/states">Back</Link></p>

			
			<Table>
				<TableCaption>{state[id].name} District List</TableCaption>
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
					{state[id].d_list.map((district: any, index: number) => (

						<TableRow>
							<TableCell className="font-medium">{index + 1}</TableCell>
							<TableCell><Link href="#" className='underline decoration-blue-500 text-blue-700 text-base'>{district}</Link></TableCell>
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