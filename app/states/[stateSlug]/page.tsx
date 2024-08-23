import { notFound } from "next/navigation";
import Link from "next/link"
import NextBreadcrumb from "@/components/NextBreadcrumb";
import AllDistictsUnderState from "@/components/states/all-districts-state";
import StateMenu from "@/components/states";

interface SearchParamsProps {
	params: {
		stateSlug: string
	};
	searchParams?: {
		page?: string;
		query?: string;
	};
}

export default function StateDetails({ params, searchParams }: SearchParamsProps) {
	// const state = await onGetStateWithDistricts(params.stateSlug);

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


				<StateMenu slug={params.stateSlug} searchParams={searchParams} />


			</div>
		</div>

	);


}