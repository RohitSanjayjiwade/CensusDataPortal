import { notFound } from "next/navigation";
import Link from "next/link"
import NextBreadcrumb from "@/components/NextBreadcrumb";
import VillageRelatedInfo from "@/components/villages/villageRelatedInfo";
import {
	getVillageInfoBySlug,

} from '@/actions/village'
import NotFound from "@/app/not-found";


interface SearchParamsProps {
	params: {
		villageSlug: string
	};
	searchParams?: {
		page?: string;
		query?: string;
	};
}

// // Function to generate metadata for SEO
// export async function generateMetadata({ params }: SearchParamsProps) {
// 	const stateName = await onGetStateName(params.stateSlug);
// 	return {
// 	  title: `${stateName} Details - Population and Districts`,
// 	  description: `Explore detailed information about ${stateName}, including population data and district information.`,
// 	};
//   }

// export const revalidate = 60; // ISR revalidation

export default async function VillageDetails({ params, searchParams }: SearchParamsProps) {
	// const state = await onGetStateWithDistricts(params.stateSlug);

	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 2; // Define how many items you want per page

	const village = await getVillageInfoBySlug(params.villageSlug);

	if (!village) NotFound();

    const villageName = village?.villageName || ''
    
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


				<VillageRelatedInfo
					villageName={villageName}
					villageTotalData={village?.villageData}
				/>


			</div>
		</div>

	);


}