import { formatPopulationInCrores } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";
import { calculateSexRatio } from "@/lib/utils";
import { calculatePercentage } from "@/lib/utils";
import { formatPercentage } from "@/lib/utils";


type Props = {
    stateName: string
    stateTotalData: any | null;
}



const TotalInfo = ({ stateName, stateTotalData }: Props) => {
    const formattedStateName = stateName.charAt(0).toUpperCase() + stateName.slice(1).toLowerCase();

    // Default values if stateTotalData is null
    const totalPopulationPersons = stateTotalData?.totalPopulationPersons ?? 0;
    const totalPopulationMales = stateTotalData?.totalPopulationMales ?? 0;
    const totalPopulationFemales = stateTotalData?.totalPopulationFemales ?? 0;

    const literatesPersons = stateTotalData?.literatesPersons ?? 0;
    const literatesMales = stateTotalData?.literatesMales ?? 0;
    const literatesFemales = stateTotalData?.literatesFemales ?? 0;

    const illiteratesPersons = stateTotalData?.illiteratesPersons ?? 0;
    const illiteratesMales = stateTotalData?.illiteratesMales ?? 0;
    const illiteratesFemales = stateTotalData?.illiteratesFemales ?? 0;


    const NATIONAL_AVERAGE_SEX_RATIO = 943

    // Calculate the sex ratio if totalPopulationMales is not zero
    const sexRatio = totalPopulationMales > 0
        ? calculateSexRatio(totalPopulationFemales , totalPopulationMales)
        : "Data not available";


    // Calculate literacy rates
    const literacyRateOverall = calculatePercentage(literatesPersons, totalPopulationPersons)
    const literacyRateMale = calculatePercentage(literatesMales, totalPopulationMales)
    const literacyRateFemale = calculatePercentage(literatesFemales, totalPopulationFemales)


    // Calculate illiteracy rates
    const illiteracyRateOverall = calculatePercentage(illiteratesPersons, totalPopulationPersons)
    const illiteracyRateMale = calculatePercentage(illiteratesMales, totalPopulationMales)
    const illiteracyRateFemale = calculatePercentage(illiteratesFemales, totalPopulationFemales)

    // Calculate percentage of India's population
    const indiaPopulation = 1210854977; // Example total population of India in 2011
    const populationPercentage = calculatePercentage(totalPopulationPersons, indiaPopulation)

    return (
        <section className="mb-4">
            <h1 className="xl:text-[40px] leading-tight text-gray-900 subpixel-antialiased font-semibold">{formattedStateName} Population | Sex Ratio | Literacy</h1>
            <p className="text-gray-800 text-base/6 mt-0">
                As per the latest census data, {formattedStateName} has a population of {formatPopulationInCrores(stateTotalData?.totalPopulationPersons)}.
                The total population of {formattedStateName} is {formatNumber(totalPopulationPersons)}, with males numbering {formatNumber(totalPopulationMales)} and females {formatNumber(totalPopulationFemales)}.
                &nbsp;{formattedStateName} accounts for {formatPercentage(populationPercentage)} of India&apos;s population in 2011.
                {/* As per details from Census 2011, {formattedStateName} has a population of {stateTotalData?.totalPopulationPersons} Crores, an increase from 16.62 Crore in 2001. The total population of {formattedStateName} as per the latest census data is 199,812,341, with males numbering 104,480,510 and females 95,331,831. In 2001, the population was 166,197,921, with 87,565,369 males and 78,632,552 females. The total population growth in this decade was 20.23%, compared to 25.80% in the previous decade. {formattedStateName} accounts for 16.50% of India's population in 2011, up from 16.16% in 2001. */}
            </p>

            <h2 className="xl:text-2xl leading-7 text-gray-900 subpixel-antialiased font-semibold mt-6">{formattedStateName} Sex Ratio 2024</h2>
            <p className="text-gray-800 text-base/6 mt-0">
                The sex ratio in {formattedStateName} is {sexRatio} females per 1000 males, which is {totalPopulationMales > 0 ? (Number(sexRatio) < NATIONAL_AVERAGE_SEX_RATIO ? 'below ' : 'above ') : 'unknown'}
                the national average of {NATIONAL_AVERAGE_SEX_RATIO}.
            </p>

            <h2 className="xl:text-2xl leading-7 text-gray-900 subpixel-antialiased font-semibold mt-6">{formattedStateName} Literacy Rate 2024</h2>
            <p className="text-gray-800 text-base/6 mt-0">
                The literacy rate in {formattedStateName} has seen an upward trend and is currently {formatPercentage(literacyRateOverall)}.
                Male literacy stands at {formatPercentage(literacyRateMale)}, while female literacy is at {formatPercentage(literacyRateFemale)}.
            </p>

            <h2 className="xl:text-2xl leading-7 text-gray-900 subpixel-antialiased font-semibold mt-6">{formattedStateName} Illiteracy Rate 2024</h2>
            <p className="text-gray-800 text-base/6 mt-0">
                The illiteracy rate in {formattedStateName} is {formatPercentage(illiteracyRateOverall)}, with male illiteracy at {formatPercentage(illiteracyRateMale)} and female illiteracy at {formatPercentage(illiteracyRateFemale)}.
            </p>

            {/* <h2 className="xl:text-2xl leading-7 text-gray-900 subpixel-antialiased font-semibold mt-6">{formattedStateName} 2024 Population</h2>
            <p className="text-gray-800 text-base/6 mt-0">
                The last census of {formattedStateName} was conducted in 2011. The 2021 census has been postponed or cancelled. However, based on projected growth rates, the population of {formattedStateName} in 2024 is estimated to be significantly higher.
            </p> */}
        </section>
    )
}

export default TotalInfo;
