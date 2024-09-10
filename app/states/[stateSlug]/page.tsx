import { notFound } from "next/navigation";
import Link from "next/link"
import NextBreadcrumb from "@/components/NextBreadcrumb";
import StateRelatedDistricts from "@/components/states/stateRelatedDistrict";
import {
	onGetStateInfoByStateSlug,
	onGetStateName,

} from '@/actions/state'
import NotFound from "@/app/not-found";
import { Metadata } from 'next';


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
export async function generateMetadata({ params }: SearchParamsProps): Promise<Metadata> {
	// Initialize default metadata values
	let title = 'Census2011';
	let description =
		`Explore detailed information about State, including population data and district information.`;

	const stateName = await onGetStateName(params.stateSlug);
	if (stateName) {
		return {
			metadataBase: new URL('https://census2011'),
			title: `${stateName} Details - Population | Sex Ratio & Literacy Rate and Districts` || title,
			description: `Explore detailed information about ${stateName}, including population data and district information.` || description,
		};
	}
	else {
		return {
			metadataBase: new URL('https://census2011'),
			title,
			description
		};
	}
}

export const revalidate = 60; // ISR revalidation

export default async function StateDetails({ params, searchParams }: SearchParamsProps) {
	// const state = await onGetStateWithDistricts(params.stateSlug);

	const query = searchParams?.query ?? "";
	const currentPage = Number(searchParams?.page) || 1;
	const itemsPerPage = 2; // Define how many items you want per page

	const state = await onGetStateInfoByStateSlug(params.stateSlug);

	if (!state) NotFound();

	const stateName = state?.stateName || ''

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


				<StateRelatedDistricts
					stateTotalData={state?.stateData}
					stateName={stateName}
					stateRuralData={state?.stateRuralData}
					stateUrbanData={state?.stateUrbanData}
					slug={params.stateSlug}
				/>


			</div>
		</div>

	);


}