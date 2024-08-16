import { notFound } from "next/navigation";
import Link from "next/link"
import { CITY_LIST } from "@/constants/data/cities";


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
        citieSlug: string
    };
    searchParams?: {
        page?: string;
        query?: string;
    };
}


async function getVillagesByCitiesSlug(slug: string) {
    const city = await CITY_LIST.find((city) => city.slug === slug);

    if (city) {
        return { cityName: city?.name, villages: city?.villages };
    } else {
        console.error('State not found');
        return undefined;
    }
}

export default async function CitiesDetails({ params, searchParams }: SearchParamsProps) {
    const city = await getVillagesByCitiesSlug(params.citieSlug);
    const query = searchParams?.query ?? "";
    const currentPage = Number(searchParams?.page) || 1;
    const itemsPerPage = 2; // Define how many items you want per page


    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedStates = city && 'villages' in city ? city?.villages?.slice(startIndex, startIndex + itemsPerPage) : [];
    const pageCount = city?.villages ? Math.ceil(city?.villages?.length / itemsPerPage) : 0;

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
                <TableCaption>{city && 'villages' in city ? city?.cityName : 'City Name Not Available'} Town List</TableCaption>
                <TableHeader>
                    <TableRow className='bg-blue-600 text-base max-sm:text-xs hover:bg-blue-800'>
                        <TableHead className='text-white font-bold p-2.5'>#</TableHead>
                        <TableHead className='text-white font-bold p-2.5 w-4/12'>Town</TableHead>
                        <TableHead className='text-white font-bold p-2.5'>Population (Total)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedStates ? paginatedStates.map((town: any, index: number) => (

                        <TableRow key={town.id} className='text-base max-sm:text-xs'>
                            <TableCell className="font-medium p-2.5">{index + 1}</TableCell>
                            <TableCell className='p-2.5'><Link href={`/towns/${town.slug}`} className='underline decoration-blue-500 text-blue-700 text-base'>{town.name}</Link></TableCell>
                            <TableCell className='p-2.5'>{town.population_total}</TableCell>

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