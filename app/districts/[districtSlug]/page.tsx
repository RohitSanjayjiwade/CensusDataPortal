import { notFound } from "next/navigation";
import Link from "next/link"
import { District_List } from "@/constants/data/districts";
import { getDistrictWithCitiesBySlug, onGetDistrictName } from "@/actions/district";
import DistrictRelatedCities from "@/components/districts/districtRelatedCities";
import NotFound from "@/app/not-found";
import { Metadata } from 'next';
import NextBreadcrumb from "@/components/NextBreadcrumb";

interface SearchParamsProps {
    params: {
        districtSlug: string
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
		`Explore detailed information about District, including population data and city information.`;

	const districtName = await onGetDistrictName(params.districtSlug);
	if (districtName) {
		return {
			metadataBase: new URL('https://census2011'),
			title: `${districtName} Details - Population | Sex Ratio & Literacy Rate and Cities` || title,
			description: `Explore detailed information about ${districtName}, including population data and city information.` || description,
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


export default async function DistrictDetails({ params, searchParams }: SearchParamsProps) {
    const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 2; // Define how many items you want per page

    const district = await getDistrictWithCitiesBySlug(params.districtSlug, currentPage, itemsPerPage);

    if (!district) NotFound();

    const paginatedDistricts = district && district.cities ? district?.cities : [];
    const districtName = district?.districtName || ''
    const pageCount = district?.pageCount || 1

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

                <DistrictRelatedCities
                    cities={paginatedDistricts}
                    districtTotalData={district?.districtData}
                    districtName={districtName}
                    pageCount={pageCount}
                    districtRuralData={district?.districtRuralData}
                    districtUrbanData={district?.districtUrbanData}
                />

            </div>
        </div>

    );


}