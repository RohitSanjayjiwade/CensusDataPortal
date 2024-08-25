import TabsMenu from '@/components/tabs'
import { TabsContent } from '@/components/ui/tabs'
import { STAES_TABS_MENU } from '@/constants/menu'
import Overview from './overview'
import React, { Suspense, lazy } from 'react';
const LazyTabsMenu = lazy(() => import('@/components/tabs'));
import Demographics from './demographics';
import Education from './education';
import Employment from './employment';

type Props = {
    stateTotalData: {
        noOfHousehold?: number | null;

        totalPopulationPersons?: number | null;
        totalPopulationMales?: number | null;
        totalPopulationFemales?: number | null;

        populationInAgePersons?: number | null;
        populationInAgeMales?: number | null;
        populationInAgeFemales?: number | null;

        castePopulationPersons?: number | null;
        castePopulationMales?: number | null;
        castePopulationFemales?: number | null;

        tribePopulationPersons?: number | null;
        tribePopulationMales?: number | null;
        tribePopulationFemales?: number | null;

        literatesPersons?: number | null;
        literatesMales?: number | null;
        literatesFemales?: number | null;

        illiteratesPersons?: number | null;
        illiteratesMales?: number | null;
        illiteratesFemales?: number | null;

        totalWorkersPersons?: number | null;
        totalWorkersMales?: number | null;
        totalWorkersFemales?: number | null;

        mainWorkersPersons?: number | null;
        mainWorkersMales?: number | null;
        mainWorkersFemales?: number | null;

        workersCultiPersons?: number | null;
        workersCultiMales?: number | null;
        workersCultiFemales?: number | null;

        mainWorkersAgriLabourersPersons?: number | null;
        mainWorkersAgriLabourersMales?: number | null;
        mainWorkersAgriLabourersFemales?: number | null;

        mainWorkersHouseholdIndustriesPersons?: number | null;
        mainWorkersHouseholdIndustriesMales?: number | null;
        mainWorkersHouseholdIndustriesFemales?: number | null;

        mainWorkersOtherWorkersPersons?: number | null;
        mainWorkersOtherWorkersMales?: number | null;
        mainWorkersOtherWorkersFemales?: number | null;

        marginalWorkersPersons?: number | null;
        marginalWorkersMales?: number | null;
        marginalWorkersFemales?: number | null;

        marginalCultivatorsPersons?: number | null;
        marginalCultivatorsMales?: number | null;
        marginalCultivatorsFemales?: number | null;

        marginalAgriLabourersPersons?: number | null;
        marginalAgriLabourersMales?: number | null;
        marginalAgriLabourersFemales?: number | null;

        marginalWorkersHouseholdIndustriesPersons?: number | null;
        marginalWorkersHouseholdIndustriesMales?: number | null;
        marginalWorkersHouseholdIndustriesFemales?: number | null;

        marginalWorkersOtherWorkersPersons?: number | null;
        marginalWorkersOtherWorkersMales?: number | null;
        marginalWorkersOtherWorkersFemales?: number | null;

        marginalWorkers3To6MonthsPersons?: number | null;
        marginalWorkers3To6MonthsMales?: number | null;
        marginalWorkers3To6MonthsFemales?: number | null;

        marginalCultivatorsPersons3To6Months?: number | null;
        marginalCultivatorsMales3To6Months?: number | null;
        marginalCultivatorsFemales3To6Months?: number | null;

        marginalAgriLabourersPersons3To6Months?: number | null;
        marginalAgriLabourersMales3To6Months?: number | null;
        marginalAgriLabourersFemales3To6Months?: number | null;

        marginalWorkersHouseholdIndustriesPersons3To6Months?: number | null;
        marginalWorkersHouseholdIndustriesMales3To6Months?: number | null;
        marginalWorkersHouseholdIndustriesFemales3To6Months?: number | null;

        marginalOtherWorkersPersons3To6Months?: number | null;
        marginalOtherWorkersMales3To6Months?: number | null;
        marginalOtherWorkersFemales3To6Months?: number | null;

        marginalWorkersLessThan3MonthsPersons?: number | null;
        marginalWorkersLessThan3MonthsMales?: number | null;
        marginalWorkersLessThan3MonthsFemales?: number | null;

        marginalCultivatorsPersonsLessThan3Months?: number | null;
        marginalCultivatorsMalesLessThan3Months?: number | null;
        marginalCultivatorsFemalesLessThan3Months?: number | null;

        marginalAgriLabourersPersonsLessThan3Months?: number | null;
        marginalAgriLabourersMalesLessThan3Months?: number | null;
        marginalAgriLabourersFemalesLessThan3Months?: number | null;

        marginalWorkersHouseholdIndustriesPersonsLessThan3Months?: number | null;
        marginalWorkersHouseholdIndustriesMalesLessThan3Months?: number | null;
        marginalWorkersHouseholdIndustriesFemalesLessThan3Months?: number | null;

        marginalOtherWorkersPersonsLessThan3Months?: number | null;
        marginalOtherWorkersMalesLessThan3Months?: number | null;
        marginalOtherWorkersFemalesLessThan3Months?: number | null;

        nonWorkersPersons?: number | null;
        nonWorkersMales?: number | null;
        nonWorkersFemales?: number | null;
    } | null;
}


const TabsSection = ({ stateTotalData }: Props) => {
    return (
        <TabsMenu triggers={STAES_TABS_MENU} className='w-full max-w-screen-xl mx-auto shadow-lg'>
            <TabsContent
                value="overview"
                className="w-full p-3 h-[400px] overflow-y-scroll chat-window"
            >
                <Overview stateTotalData={stateTotalData} />
            </TabsContent>
            <TabsContent
                value="demographics"
                className="w-full p-3 h-[400px] overflow-y-scroll chat-window"
            >
                <Demographics stateTotalData={stateTotalData} />
            </TabsContent>
            <TabsContent
                value="education"
                className="w-full p-3 h-[400px] overflow-y-scroll chat-window"
            >
                <Education stateTotalData={stateTotalData} />
            </TabsContent>
            <TabsContent
                value="employment"
                className="w-full p-3 h-[400px] overflow-y-scroll chat-window"
            >
                <Employment stateTotalData={stateTotalData} />
            </TabsContent>
        </TabsMenu>)
}

export default TabsSection;