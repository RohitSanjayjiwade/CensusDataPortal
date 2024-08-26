import { formatPopulationInCrores } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";
import TotalInfo from "./TotalInfo";
import UrbanInfo from "./UrbanInfo";
import RuralInfo from "./RuralInfo";


type Props = {
    stateName: string
    stateTotalData?: any | null;
    type: 'Total' | 'Urban' | 'Rural'
    stateUrbanData?: any | null;
    totalPopulation?: number
    stateRuralData?: any | null;
}



const DynamicInfo = ({ stateName, stateTotalData, type, stateUrbanData, totalPopulation, stateRuralData }: Props) => {

    switch (type) {
        case 'Total':
            return <TotalInfo stateName={stateName} stateTotalData={stateTotalData} />;
        case 'Urban':
            return <UrbanInfo stateName={stateName} stateUrbanData={stateUrbanData} totalPopulation={totalPopulation} />;
        case 'Rural':
            return <RuralInfo stateName={stateName} stateRuralData={stateRuralData} totalPopulation={totalPopulation} />;
        default:
            return <p>Invalid type specified</p>;
    }





}

export default DynamicInfo;
