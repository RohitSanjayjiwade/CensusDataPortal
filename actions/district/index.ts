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



export const populatedDistricts = async () => {
  try {
      // Fetch districts with the year 2011 and urban data
      const districts = await client.district.findMany({
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
                      urban_data: {
                          select: {
                              totalPopulationPersons: true,
                          }
                      }
                  }
              }
          }
      });

      // Sort districts by urban population in descending order
      const sortedDistricts = districts
          .map(city => ({
              ...city,
              totalPopulationPersons: city.years[0]?.urban_data?.totalPopulationPersons || 0
          }))
          .sort((a, b) => b.totalPopulationPersons - a.totalPopulationPersons)
          .slice(0, 5); // Take the top 5 districts

      return sortedDistricts;

  } catch (error) {
      console.error('Error fetching populated Districts:', error);
      throw new Error('Failed to fetch populated Districts');
  }
};


// const topMetropolitanAreas = async () => {
//   try {
//     // Fetch all sub-districts with their urban data
//     const subDistricts = await prisma.subDistrict.findMany({
//       include: {
//         urban_data: {
//           select: {
//             totalPopulationPersons: true
//           }
//         }
//       }
//     });

//     // Fetch all districts with their urban data
//     const districts = await prisma.district.findMany({
//       include: {
//         urban_data: {
//           select: {
//             totalPopulationPersons: true
//           }
//         }
//       }
//     });

//     // Aggregate and sort sub-districts and districts by their total urban population
//     const metropolitanAreas = [
//       ...subDistricts.map(subDistrict => ({
//         name: subDistrict.name,
//         totalUrbanPopulation: subDistrict.urban_data?.totalPopulationPersons || 0
//       })),
//       ...districts.map(district => ({
//         name: district.name,
//         totalUrbanPopulation: district.urban_data?.totalPopulationPersons || 0
//       }))
//     ].sort((a, b) => b.totalUrbanPopulation - a.totalUrbanPopulation);

//     // Return top 5 metropolitan areas
//     return metropolitanAreas.slice(0, 5);
//   } catch (error) {
//     console.error('Error fetching top metropolitan areas:', error);
//     throw new Error('Failed to fetch top metropolitan areas');
//   }
// };
