'use client'
import { useStatesInfo } from '@/hooks/states/use-state'
import React, { Suspense, lazy } from 'react';
import { PaginationDemo } from "@/components/pagination";
import { Loader } from '../loader';
import DistrictRelatedCityData from "@/components/districts/districtRelatedCityData";
import DynamicInfo from "@/components/states/dynamicInfo";
import NotFound from '@/app/not-found';
// import TabsSection from './tabsSection';
import TabsSection from '../states/tabsSection';
import { Spinner } from '../spinner';


const LazyTabsSection = lazy(() => import('../states/tabsSection'));
const LazyAllDistictsUnderState = lazy(() => import('@/components/districts/districtRelatedCityData'));

// interface PopulationData {
//     noOfHousehold?: number | null;

//     totalPopulationPersons?: number | null;
//     totalPopulationMales?: number | null;
//     totalPopulationFemales?: number | null;

//     populationInAgePersons?: number | null;
//     populationInAgeMales?: number | null;
//     populationInAgeFemales?: number | null;

//     castePopulationPersons?: number | null;
//     castePopulationMales?: number | null;
//     castePopulationFemales?: number | null;

//     tribePopulationPersons?: number | null;
//     tribePopulationMales?: number | null;
//     tribePopulationFemales?: number | null;

//     literatesPersons?: number | null;
//     literatesMales?: number | null;
//     literatesFemales?: number | null;

//     illiteratesPersons?: number | null;
//     illiteratesMales?: number | null;
//     illiteratesFemales?: number | null;

//     totalWorkersPersons?: number | null;
//     totalWorkersMales?: number | null;
//     totalWorkersFemales?: number | null;

//     mainWorkersPersons?: number | null;
//     mainWorkersMales?: number | null;
//     mainWorkersFemales?: number | null;

//     workersCultiPersons?: number | null;
//     workersCultiMales?: number | null;
//     workersCultiFemales?: number | null;

//     mainWorkersAgriLabourersPersons?: number | null;
//     mainWorkersAgriLabourersMales?: number | null;
//     mainWorkersAgriLabourersFemales?: number | null;

//     mainWorkersHouseholdIndustriesPersons?: number | null;
//     mainWorkersHouseholdIndustriesMales?: number | null;
//     mainWorkersHouseholdIndustriesFemales?: number | null;

//     mainWorkersOtherWorkersPersons?: number | null;
//     mainWorkersOtherWorkersMales?: number | null;
//     mainWorkersOtherWorkersFemales?: number | null;

//     marginalWorkersPersons?: number | null;
//     marginalWorkersMales?: number | null;
//     marginalWorkersFemales?: number | null;

//     marginalCultivatorsPersons?: number | null;
//     marginalCultivatorsMales?: number | null;
//     marginalCultivatorsFemales?: number | null;

//     marginalAgriLabourersPersons?: number | null;
//     marginalAgriLabourersMales?: number | null;
//     marginalAgriLabourersFemales?: number | null;

//     marginalWorkersHouseholdIndustriesPersons?: number | null;
//     marginalWorkersHouseholdIndustriesMales?: number | null;
//     marginalWorkersHouseholdIndustriesFemales?: number | null;

//     marginalWorkersOtherWorkersPersons?: number | null;
//     marginalWorkersOtherWorkersMales?: number | null;
//     marginalWorkersOtherWorkersFemales?: number | null;

//     marginalWorkers3To6MonthsPersons?: number | null;
//     marginalWorkers3To6MonthsMales?: number | null;
//     marginalWorkers3To6MonthsFemales?: number | null;

//     marginalCultivatorsPersons3To6Months?: number | null;
//     marginalCultivatorsMales3To6Months?: number | null;
//     marginalCultivatorsFemales3To6Months?: number | null;

//     marginalAgriLabourersPersons3To6Months?: number | null;
//     marginalAgriLabourersMales3To6Months?: number | null;
//     marginalAgriLabourersFemales3To6Months?: number | null;

//     marginalWorkersHouseholdIndustriesPersons3To6Months?: number | null;
//     marginalWorkersHouseholdIndustriesMales3To6Months?: number | null;
//     marginalWorkersHouseholdIndustriesFemales3To6Months?: number | null;

//     marginalOtherWorkersPersons3To6Months?: number | null;
//     marginalOtherWorkersMales3To6Months?: number | null;
//     marginalOtherWorkersFemales3To6Months?: number | null;

//     marginalWorkersLessThan3MonthsPersons?: number | null;
//     marginalWorkersLessThan3MonthsMales?: number | null;
//     marginalWorkersLessThan3MonthsFemales?: number | null;

//     marginalCultivatorsPersonsLessThan3Months?: number | null;
//     marginalCultivatorsMalesLessThan3Months?: number | null;
//     marginalCultivatorsFemalesLessThan3Months?: number | null;

//     marginalAgriLabourersPersonsLessThan3Months?: number | null;
//     marginalAgriLabourersMalesLessThan3Months?: number | null;
//     marginalAgriLabourersFemalesLessThan3Months?: number | null;

//     marginalWorkersHouseholdIndustriesPersonsLessThan3Months?: number | null;
//     marginalWorkersHouseholdIndustriesMalesLessThan3Months?: number | null;
//     marginalWorkersHouseholdIndustriesFemalesLessThan3Months?: number | null;

//     marginalOtherWorkersPersonsLessThan3Months?: number | null;
//     marginalOtherWorkersMalesLessThan3Months?: number | null;
//     marginalOtherWorkersFemalesLessThan3Months?: number | null;

//     nonWorkersPersons?: number | null;
//     nonWorkersMales?: number | null;
//     nonWorkersFemales?: number | null;
//   }


type Props = {

    villageTotalData: any | null,

    villageName: string
}

const VillageRelatedInfo = ({ villageTotalData, villageName}: Props) => {
    // const filteredStates = states.filter((state) =>
    //     state.name.toLowerCase().includes(query.toLowerCase())
    //   );

    if (!villageTotalData) {
        return <NotFound />;
    }

    const formattedStateName = villageName.charAt(0).toUpperCase() + villageName.slice(1).toLowerCase();

    return (
        <div className='flex flex-col gap-4 mt-5'>
            <DynamicInfo stateName={villageName} stateTotalData={villageTotalData} type="Total" />
            <div className='flex flex-col gap-2'>
                <h2 className="xl:text-[40px] leading-tight text-gray-900 subpixel-antialiased font-semibold">{formattedStateName} Total Population Data</h2>
                <Suspense fallback={<Spinner />}>
                    <LazyTabsSection stateTotalData={villageTotalData} />
                </Suspense>
            </div>
        </div>
    );
};

export default VillageRelatedInfo;