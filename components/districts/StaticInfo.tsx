type Props = {};

const StaticInfo = (props: Props) => {
    return (
        <section className="mb-1">
            <h1 className="xl:text-[40px] text-gray-900 subpixel-antialiased font-semibold">
                District Census 2011
            </h1>
            <p className="text-gray-800 text-base/6 mt-0">
                According to the Census Statistics 2011, the population of India was 1,210,854,977 with 623,270,258 males and 587,584,719 females. Literacy was found to be a total of 74.04% with 65.46% literate females and 82.14% males. This was a 9.81% increase since the last census. The density of population was found out to be 382 per square kilometers. The total sex ratio was 940 females to 1000 males. The child sex ratio (of ages 0 to 6 years old) was 914 females to 1000 males. The growth rate was 17.64% and the death rate was 21.5%.
            </p>
            <p className="text-gray-800 text-base/6 mt-4">
                Census is the process by which the information of a given population is calculated on the basis of economical, educational and social records, in a given period of time. Census is calculated after regular time intervals. These are some basic census facts. In India, the census is carried out every 5 years. The last census was calculated in the year 2011. This official census 2011 was the 15th census calculation which was done India. It was carried out in two main phases- population listing and house enumeration.
            </p>
        </section>
    );
};

export default StaticInfo;
