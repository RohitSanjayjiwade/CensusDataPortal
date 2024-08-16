type Props = {}

const StaticInfo = (props: Props) => {
    return (
        <section className="mb-1">
            <h1 className="xl:text-[40px] text-gray-900 subpixel-antialiased font-semibold">States Census 2011</h1>
            <p className="text-gray-800 text-base/6 mt-0">
                The Indian Census 2011 can be referred to as the seventh census operation after Indian independence. The national census 2011 has been run on all the 28 states of the country and the seven Union Territories. There have been surveys on cities and districts as well. The data of Indian census 2011 covers all the major aspects of society like population, sex ratio and literacy percentage as well.
                Here is a list on census 2011 data of India.
            </p>
            <p className="text-gray-800 text-base/6 mt-4">
                There are presently 28 states in India. The total population of the country is 1.21 billion presently. According to the State Census 2011, the most populated state in India is Uttar Pradesh with a population of 19.96 crores. The least populated state in the country is Sikkim with a population of 60,7688.
                The census of Indian states 2011 reveals that Kerala is the highest literate state in the country with a 93.91% literacy rate. Bihar is the least literate state with a literacy rate of 63.82%. The Indian census 2011 state-wise shows that Kerala represents the highest sex ratio with 1084 females per 1000 males while Haryana features the lowest sex ratio in India with just 877 women per 1000 males.
            </p>
            <p className="text-gray-800 text-base/6 mt-4">
                According to the Indian census 2011 carried out in districts, the Thane district of Maharashtra displays the highest population with a population figure of 1.11 crore. Dibang valley district of Arunachal Pradesh displays the lowest population in the country with a population of 7,948. When it comes to literacy in Indian districts the Serchhip district in Mizoram shines the brightest with a literacy rate of 98.76%. Koraput district in Orissa shows the least literacy level with a literacy rate of 49.87%. As per the parameter of sex ratio, Mahe district in Puducherry comes up with the maximum sex ratio in the country with 1176 females per 1000 males. The Jhajjar district in Haryana shows the least level of sex ratio: 774 females per 1000 males.
            </p>
            <p className='text-gray-800 text-base/6 mt-4'>
                During the census 2011 on cities, some major facts have come out. As regards to population, Mumbai of Maharashtra comes up as the most populous city on the country with a population of 1.25 crores. Nagda city in Uttar Pradesh features the least population figure in the country: 100,036. The Indian city with the highest rate of literacy is Aizwal (Mizoram) with a literacy rate of 98.80%. On the contrary, Rampur city in Uttar Pradesh is the Indian city with the lowest literacy level- the literacy rate in Rampur is 60.74%. According to Indian Census 2011, Kozhikode (Kerala) has the highest sex ratio with 1093 females per 1000 males. But the Vapi city in Gujarat features the lowest sex ratio with 734 women per 1000 men
            </p>

            {/* Add more static information as needed */}
        </section>
    )
}

export default StaticInfo;