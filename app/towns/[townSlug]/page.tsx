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
import NextBreadcrumb from '@/components/NextBreadcrumb';

type Props = {
	params: {
		townSlug: string
	}
};


async function getVillageInfoByVillageSlug(slug: string) {
	const village = await VILLAGE_LIST.find((village) => village.slug === slug)

	if (village) {
		return village
	} else {
		console.error('Village not found');
		return undefined;
	}
}

export default async function TownDetails({ params }: Props) {

	const townInfo = await getVillageInfoByVillageSlug(params.townSlug);

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
						<TableRow className='bg-blue-600 text-base max-sm:text-xs hover:bg-blue-800 w-auto'>
							<TableHead className='text-white font-bold p-2.5'>#</TableHead>
							<TableHead className='text-white font-bold p-2.5 w-4/12'>Town</TableHead>
							<TableHead className='text-white font-bold p-2.5 w-1/5'>District</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Population</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Houses</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Sex-Ratio</TableHead>
							<TableHead className='text-white font-bold p-2.5'>Literacy</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow key={townInfo?.id} className='text-base max-sm:text-xs'>
							<TableCell className="font-medium p-2.5">{townInfo?.id}</TableCell>
							<TableCell className='p-2.5'>{townInfo?.name}</TableCell>
							<TableCell><Link href="#" className='underline decoration-blue-500 text-blue-700 text-base'>{townInfo?.name}</Link></TableCell>
							<TableCell className='p-2.5'>{townInfo?.population_total}</TableCell>
							<TableCell className='p-2.5'>12332</TableCell>
							<TableCell className='p-2.5'>898</TableCell>
							<TableCell className='p-2.5'>70.32%</TableCell>
						</TableRow>

					</TableBody>
				</Table>
			</div>
		</div>
	);
}