"use server"
import { client } from '@/lib/prisma'


export const onGetAllStates = async (page: number, itemsPerPage: number) => {
  try {
    // Query to get the total number of states for pagination
    const totalStatesCount = await client.state.count();

    // Query to get the states with pagination
    const states = await client.state.findMany({
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

    if (states) {
      const pageCount = Math.ceil(totalStatesCount / itemsPerPage);
      return {
        states,
        pageCount: pageCount
      }
    }
  } catch (error) {
    console.log(error)
  }
}




export const onGetStateWithDistricts = async (slug: string, page: number, itemsPerPage: number) => {
  try {
    const states = await client.state.findUnique({
      where: {
        slug: slug
      },
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: {
            districts: true,
          },
        },
        districts: {
          skip: (page - 1) * itemsPerPage, // Add pagination
          take: itemsPerPage, // Add pagination
          select: {
            id: true,
            name: true,
            slug: true,
            // Add other fields from the District model as needed
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
        },
        years: {
          where: {
            year: 2011
          },
          select: {
            year: true,
            data: true,
            rural_data: true,
            urban_data: true,
          },
        },
      },
    })

    if (states) {
      const pageCount = Math.ceil(states._count.districts / itemsPerPage);
      return {
        stateName: states.name,
        stateData: states.years[0].data,
        stateRuralData: states.years[0].rural_data,
        stateUrbanData: states.years[0].urban_data,
        districts: states.districts,
        pageCount: pageCount
      }
    }
  } catch (error) {
    console.error('Error fetching state and districts:', error);
    throw new Error('Failed to fetch state and districts');
  }
}