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


export const onGetAllVillages = async (page: number, itemsPerPage: number) => {
    try {
        // Query to get the total number of villages for pagination
        const totalVillagesCount = await client.village.count();

        // Query to get the villages with pagination
        const villages = await client.village.findMany({
            skip: (page - 1) * itemsPerPage, // Add pagination
            take: itemsPerPage, // Add pagination
            select: {
                id: true,
                name: true,
                slug: true,
                state: {
                    select: {
                        name: true,
                        slug: true,
                    }
                },
                district: {
                    select: {
                        name: true,
                        slug: true,
                    }
                },
                years: {
                    where: {
                        year: 2011
                    },
                    select: {
                        year: true,
                        rural_data: {
                            select: {
                                totalPopulationPersons: true,
                            }
                        }
                    }
                }
            }
        })

        if (villages) {
            const pageCount = Math.ceil(totalVillagesCount / itemsPerPage);
            return {
                villages,
                pageCount: pageCount
            }
        }
    } catch (error) {
        console.log(error)
    }
}


export const getVillageInfoBySlug = async (slug: string) => {
    try {
        const villageInfo = await client.village.findUnique({
            where: {
                slug,
            },
            select: {
                id: true,
                name: true,
                slug: true,
                years: {
                    where: {
                        year: 2011,
                    },
                    select: {
                        rural_data: true,
                    },
                },
            },
        })

        if (villageInfo) {
            return {
                villageName: villageInfo.name,
                villageData: villageInfo.years[0].rural_data,
            };
        }
    } catch (error) {
        console.error('Error fetching village Information:', error);
        throw new Error('Failed to fetch village Information');
    }
}