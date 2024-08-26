import { calculateSexRatio } from "@/lib/utils";
import { calculatePercentage } from "@/lib/utils";
import { formatPercentage } from "@/lib/utils";

type Props = {
    stateName: string
    stateRuralData: any | null;
    totalPopulation?: number
}



const RuralInfo = ({ stateName, stateRuralData, totalPopulation }: Props) => {
    const formattedStateName = stateName.charAt(0).toUpperCase() + stateName.slice(1).toLowerCase();

    const totalPopulationPersons = stateRuralData?.totalPopulationPersons ?? 0;
    const totalPopulationMales = stateRuralData?.totalPopulationMales ?? 0;
    const totalPopulationFemales = stateRuralData?.totalPopulationFemales ?? 0;

    const literatesPersons = stateRuralData?.literatesPersons ?? 0;
    const literatesMales = stateRuralData?.literatesMales ?? 0;
    const literatesFemales = stateRuralData?.literatesFemales ?? 0;

    // Urban data
    // Calculate literacy rates
    const ruralPopulationPercentage = calculatePercentage(totalPopulationPersons, totalPopulation);

    const ruralSexRatio = calculateSexRatio(totalPopulationFemales, totalPopulationMales)
    
    // Calculate literacy rates
    const ruralLiteracyRatePerson = calculatePercentage(literatesPersons, totalPopulationPersons)
    const ruralLiteracyRateMale = calculatePercentage(literatesMales, totalPopulationMales)
    const ruralLiteracyRateFemale = calculatePercentage(literatesFemales, totalPopulationFemales)

    return (
        <section className="mb-4">
            <h2 className="text-xl font-semibold mt-0">{formattedStateName} Rural Population</h2>
            <p className="text-gray-800 text-base/6 mt-0">
                Out of the total population of {formattedStateName}, {formatPercentage(ruralPopulationPercentage)} live in the villages of rural areas.
            </p>
            <p className="text-gray-800 text-base/6 mt-0">
                The sex ratio in rural regions is {ruralSexRatio} females per 1000 males.
                The average literacy rate in rural regions is {formatPercentage(ruralLiteracyRatePerson)}.
                with male illiteracy at {formatPercentage(ruralLiteracyRateMale)} and female illiteracy at {formatPercentage(ruralLiteracyRateFemale)}.
            </p>
        </section>
    );

}

export default RuralInfo;
