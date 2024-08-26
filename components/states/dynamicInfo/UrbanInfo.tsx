import { formatPopulationInCrores } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";
import { calculateSexRatio } from "@/lib/utils";
import { calculatePercentage } from "@/lib/utils";
import { formatPercentage } from "@/lib/utils";

type Props = {
    stateName: string
    stateUrbanData: any | null;
    totalPopulation?: number
}



const UrbanInfo = ({ stateName, stateUrbanData, totalPopulation }: Props) => {
    const formattedStateName = stateName.charAt(0).toUpperCase() + stateName.slice(1).toLowerCase();

    const totalPopulationPersons = stateUrbanData?.totalPopulationPersons ?? 0;
    const totalPopulationMales = stateUrbanData?.totalPopulationMales ?? 0;
    const totalPopulationFemales = stateUrbanData?.totalPopulationFemales ?? 0;

    const literatesPersons = stateUrbanData?.literatesPersons ?? 0;
    const literatesMales = stateUrbanData?.literatesMales ?? 0;
    const literatesFemales = stateUrbanData?.literatesFemales ?? 0;

    // Urban data
    // Calculate literacy rates
    const urbanPopulationPercentage = calculatePercentage(totalPopulationPersons, totalPopulation);

    const urbanSexRatio = calculateSexRatio(totalPopulationFemales, totalPopulationMales)
    
    // Calculate literacy rates
    const urbanLiteracyRatePerson = calculatePercentage(literatesPersons, totalPopulationPersons)
    const urbanLiteracyRateMale = calculatePercentage(literatesMales, totalPopulationMales)
    const urbanLiteracyRateFemale = calculatePercentage(literatesFemales, totalPopulationFemales)

    return (
        <section className="mb-0">
            <h2 className="text-xl font-semibold mt-6">{formattedStateName} Urban Population</h2>
            <p className="text-gray-800 text-base/6 mt-0">
                Out of the total population of {formattedStateName}, {formatPercentage(urbanPopulationPercentage)} live in urban regions.
            </p>
            <p className="text-gray-800 text-base/6 mt-0">
                The sex ratio in urban regions is {urbanSexRatio} females per 1000 males.
                The average literacy rate in urban regions is {formatPercentage(urbanLiteracyRatePerson)}.
                with male illiteracy at {formatPercentage(urbanLiteracyRateMale)} and female illiteracy at {formatPercentage(urbanLiteracyRateFemale)}.
            </p>
        </section>
    );

}

export default UrbanInfo;
