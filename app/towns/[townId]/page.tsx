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
    params:{
        townId: string
    }
};


async function getVillageInfoByVillageSlug(slug: string){
    const village  = await VILLAGE_LIST.find((village)=> village.slug === slug)

    if(village){
        return village
    }else {
        console.error('Village not found');
        return undefined;
    }
}

export default async function TownDetails({params}: Props){

	const townInfo = await getVillageInfoByVillageSlug(params.townId);

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
							<TableRow key={townInfo?.id}>
								<TableCell className="font-medium">{townInfo?.id}</TableCell>
								<TableCell className='text-base'>{townInfo?.name}</TableCell>
								<TableCell><Link href="#" className='underline decoration-blue-500 text-blue-700 text-base'>{townInfo?.name}</Link></TableCell>
								<TableCell className='text-base'>{townInfo?.population_total}</TableCell>
								<TableCell className='text-base'>12332</TableCell>
								<TableCell className='text-base'>898</TableCell>
								<TableCell className='text-base'>70.32%</TableCell>
							</TableRow>

					</TableBody>
				</Table>
			</div>
		</div>
	);
}