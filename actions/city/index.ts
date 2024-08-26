"use server"
import { client } from '@/lib/prisma'


// export const onGetStateName = async(slug: string) => {
//   try{
//     const stateName = await client.state.findUnique({
//       where: {
//         slug: slug,
//       },
//       select:{
//         name: true
//       }
//     })

//     if(stateName)
//     {
//       return stateName.name
//     }

//   }catch(error){
//     console.log(error)
//   }
// }


export const onGetAllCities = async (page: number, itemsPerPage: number) => {
    try {
        // Query to get the total number of states for pagination
        const totalCitiesCount = await client.city.count();

        // Query to get the states with pagination
        const cities = await client.city.findMany({
            skip: (page - 1) * itemsPerPage, // Add pagination
            take: itemsPerPage, // Add pagination
            select: {
                id: true,
                name: true,
                slug: true,
                years: {
                    where: {
                        year: 2011
                    },
                    select: {
                        year: true,
                        data: {
                            select: {
                                totalPopulationPersons: true
                            }
                        },
                        rural_data: {
                            select: {
                                totalPopulationPersons: true
                            }
                        },
                        urban_data: {
                            select: {
                                totalPopulationPersons: true
                            }
                        },
                    },
                },
            },
        })

        if (cities) {
            const pageCount = Math.ceil(totalCitiesCount / itemsPerPage);
            return {
                cities,
                pageCount: pageCount
            }
        }
    } catch (error) {
        console.log(error)
    }
}


export const getCityWithVillagesBySlug = async (slug: string, page: number, itemsPerPage: number) => {
    try {
        const cities = await client.city.findUnique({
            where: {
                slug: slug
            },
            select: {
                id: true,
                name: true,
                slug: true,
                _count: {
                    select: {
                        villages: true,
                    },
                },
                villages: {
                    skip: (page - 1) * itemsPerPage, // Add pagination
                    take: itemsPerPage, // Add pagination
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        years: {
                            where: {
                                year: 2011,
                            },
                            select: {
                                year: true,
                                data: {
                                    select: {
                                        totalPopulationPersons: true,
                                    }
                                },
                                rural_data: {
                                    select: {
                                        totalPopulationPersons: true,
                                    },
                                },
                                urban_data: {
                                    select: {
                                        totalPopulationPersons: true,
                                    },
                                },
                            },
                        },
                    },
                },
                years: {
                    where: {
                        year: 2011,
                    },
                    select: {
                        data: true,
                        rural_data: true,
                        urban_data: true,
                    },
                },
            },
        })

        if (cities) {
            const pageCount = Math.ceil(cities?._count.villages / itemsPerPage)
            return {
                cityName: cities.name,
                cityData: cities.years[0].data,
                cityRuralData: cities.years[0].rural_data,
                cityUrbanData: cities.years[0].urban_data,
                villages: cities.villages,
                pageCount: pageCount
            }
        }
    } catch (error) {
        console.error('Error fetching city and villages:', error);
        throw new Error('Failed to fetch city and villages');
    }
}
