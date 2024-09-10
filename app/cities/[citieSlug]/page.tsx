import { notFound } from "next/navigation";
import Link from "next/link"
import { CITY_LIST } from "@/constants/data/cities";
import NotFound from "@/app/not-found";
import { getCityWithVillagesBySlug, onGetCityName } from "@/actions/city";
import CityRelatedVillages from "@/components/cities/cityRelatedVillages";
import { Metadata } from 'next';
import NextBreadcrumb from "@/components/NextBreadcrumb";

interface SearchParamsProps {
    params: {
        citieSlug: string
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
		`Explore detailed information about City, including population data and village information.`;

	const cityName = await onGetCityName(params.citieSlug);
	if (cityName) {
		return {
			metadataBase: new URL('https://census2011'),
			title: `${cityName} Details - Population | Sex Ratio & Literacy Rate and Villages` || title,
			description: `Explore detailed information about ${cityName}, including population data and village information.` || description,
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

export default async function CityDetails({ params, searchParams }: SearchParamsProps) {

    const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 10; // Define how many items you want per page

    const city = await getCityWithVillagesBySlug(params.citieSlug, currentPage, itemsPerPage);

    if (!city) NotFound();

    const paginatedVillages = city && city.villages ? city?.villages : [];

    const cityName = city?.cityName || ''
    const pageCount = city?.pageCount || 1

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

                <CityRelatedVillages
                    villages={paginatedVillages}
                    cityTotalData={city?.cityData}
                    cityName={cityName}
                    pageCount={pageCount}
                    cityRuralData={city?.cityRuralData}
                    cityUrbanData={city?.cityUrbanData}
                />

            </div>
        </div>

    );


}