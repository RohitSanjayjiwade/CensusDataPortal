import { notFound } from "next/navigation";
import Link from "next/link"
import NextBreadcrumb from "@/components/NextBreadcrumb";
import StateRelatedDistricts from "@/components/states/stateRelatedDistrict";
import {
	onGetStateWithDistricts,
	onGetStateName,

} from '@/actions/state'
import NotFound from "@/app/not-found";


interface SearchParamsProps {
	params: {
		stateSlug: string
	};
	searchParams?: {
		page?: string;
		query?: string;
	};
}

// Function to generate metadata for SEO
export async function generateMetadata({ params }: SearchParamsProps) {
	const stateName = await onGetStateName(params.stateSlug);
	return {
	  title: `${stateName} Details - Population and Districts`,
	  description: `Explore detailed information about ${stateName}, including population data and district information.`,
	};
  }

export const revalidate = 60; // ISR revalidation

export default async function StateDetails({ params, searchParams }: SearchParamsProps) {
	// const state = await onGetStateWithDistricts(params.stateSlug);

	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 2; // Define how many items you want per page

	const state = await onGetStateWithDistricts(params.stateSlug, currentPage, itemsPerPage);

	if (!state) NotFound();

	const paginatedDistricts = state && state.districts ? state?.districts : [];

	const stateName = state?.stateName || ''
	const pageCount = state?.pageCount || 1


	return (
		<div className='flex-1 overflow-hidden'>
			<div className="flex flex-col gap-2 mt-5">
				<NextBreadcrumb
					homeElement={'Home'}
					separator={<span> | </span>}
					activeClasses='text-amber-500'
					containerClasses='flex py-2 bg-gradient-to-r from-purple-600 to-blue-600'
					listClasses='hover:underline mx-2 font-bold'
					capitalizeLinks
				/>


				<StateRelatedDistricts
					districts={paginatedDistricts}
					stateTotalData={state?.stateData}
					stateName={stateName}
					pageCount={pageCount}
					stateRuralData={state?.stateRuralData}
					stateUrbanData={state?.stateUrbanData}
				/>


			</div>
		</div>

	);


}