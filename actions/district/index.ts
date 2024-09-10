"use server"
import { client } from '@/lib/prisma'




export const onGetDistrictName = async(slug: string) => {
  try{
    const districtName = await client.district.findUnique({
      where: {
        slug: slug,
      },
      select:{
        name: true
      }
    })

    if(districtName)
    {
      return districtName.name
    }

  }catch(error){
    console.log(error)
  }
}

export const onGetAllDistricts = async (page: number, itemsPerPage: number) => {
  try {
    // Query to get the total number of states for pagination
    const totalDistrictsCount = await client.district.count();

    // Query to get the states with pagination
    const districts = await client.district.findMany({
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

    if (districts) {
      const pageCount = Math.ceil(totalDistrictsCount / itemsPerPage);
      return {
        districts,
        pageCount: pageCount
      }
    }
  } catch (error) {
    console.log(error)
  }
}




export const getDistrictWithCitiesBySlug = async (slug: string, page: number, itemsPerPage: number) => {
  try {
    const districts = await client.district.findUnique({
      where: {
        slug: slug
      },
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: {
            cities: true,
          },
        },
        cities: {
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

    if (districts) {
      const pageCount = Math.ceil(districts._count.cities / itemsPerPage);
      return {
        districtName: districts.name,
        districtData: districts.years[0].data,
        districtRuralData: districts.years[0].rural_data,
        districtUrbanData: districts.years[0].urban_data,
        cities: districts.cities,
        pageCount: pageCount
      }
    }
  } catch (error) {
    console.error('Error fetching state and districts:', error);
    throw new Error('Failed to fetch district and cities');
  }
}