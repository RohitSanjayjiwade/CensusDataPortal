import { notFound } from "next/navigation";
import Link from "next/link"
import { District_List } from "@/constants/data/districts";


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PaginationDemo } from "@/components/pagination";
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


async function getCitiesByDistrictSlug(slug: string) {
    const district = await District_List.find((disrict) => disrict.slug === slug);

    if (district) {
        return { districtName: district?.name, cities: district?.cities };
    } else {
        console.error('State not found');
        return undefined;
    }
}

export default async function DistrictDetails({ params, searchParams }: SearchParamsProps) {
    const district = await getCitiesByDistrictSlug(params.districtSlug);
    const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 2; // Define how many items you want per page


    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedStates = district && 'cities' in district ? district?.cities?.slice(startIndex, startIndex + itemsPerPage) : [];
    const pageCount = district?.cities ? Math.ceil(district?.cities?.length / itemsPerPage) : 0;

    return (
        <div className="mt-5 w-full">
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='text-amber-500'
                containerClasses='flex py-2 bg-gradient-to-r from-purple-600 to-blue-600'
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
            />
            <p><Link href="/states">Back</Link></p>

            <Table>
                <TableCaption>{district && 'cities' in district ? district?.districtName : 'District Name Not Available'} City List</TableCaption>
                <TableHeader>
                    <TableRow className='bg-blue-600 text-base max-sm:text-sm hover:bg-blue-800'>
                        <TableHead className='text-white font-bold p-2.5'>#</TableHead>
                        <TableHead className='text-white font-bold p-2.5 w-4/12'>City</TableHead>
                        <TableHead className='text-white font-bold p-2.5'>Population (Total)</TableHead>
                        <TableHead className='text-white font-bold p-2.5'>Population (Rural)</TableHead>
                        <TableHead className='text-white font-bold p-2.5'>Population (Urban)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedStates ? paginatedStates.map((city: any, index: number) => (

                        <TableRow key={city.id} className='text-base max-sm:text-xs'>
                            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
                            <TableCell className='p-2.5'><Link href={`/cities/${city.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{city.name}</Link></TableCell>
                            <TableCell className='p-2.5'>{city.population_total}</TableCell>
                            <TableCell className='p-2.5'>{city.population_rural}</TableCell>
                            <TableCell className='p-2.5'>{city.population_urban}</TableCell>

                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">
                                No data available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <PaginationDemo pageCount={pageCount} />

        </div>

    );


}