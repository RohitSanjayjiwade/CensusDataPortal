interface District {
    id: number;
    name: string;
    population_total: number;
    population_rural: number;
    population_urban: number;
}

interface DistrictData {
    id: number;
    name: string;
    slug: string;
    districts: District[];
}


export const Cities: Record<string, DistrictData>  = {
    "maharashtra": {
        "id": 1,
        "name": "Maharashtra",
        "slug": "maharashtra",
        "districts": [
            {
                "id": 1,
                "name": "Mumbai",
                "population_total": 12442373,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Pune",
                "population_total": 9426959,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Nagpur",
                "population_total": 4653570,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Nashik",
                "population_total": 6109052,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "madhya-pradesh": {
        "id": 2,
        "name": "Madhya Pradesh",
        "slug": "madhya-pradesh",
        "districts": [
            {
                "id": 1,
                "name": "Bhopal",
                "population_total": 2368145,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Indore",
                "population_total": 3272335,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Gwalior",
                "population_total": 2032036,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Jabalpur",
                "population_total": 2635657,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "jammu-kashmir": {
        "id": 3,
        "name": "Jammu & Kashmir",
        "slug": "jammu-kashmir",
        "districts": [
            {
                "id": 1,
                "name": "Srinagar",
                "population_total": 1269751,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Jammu",
                "population_total": 1526406,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Anantnag",
                "population_total": 1070144,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Baramulla",
                "population_total": 1015503,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "karnataka": {
        "id": 4,
        "name": "Karnataka",
        "slug": "karnataka",
        "districts": [
            {
                "id": 1,
                "name": "Bangalore",
                "population_total": 9588910,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Mysore",
                "population_total": 3005694,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Hubli",
                "population_total": 1292999,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Mangalore",
                "population_total": 623841,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "tamil-nadu": {
        "id": 5,
        "name": "Tamil Nadu",
        "slug": "tamil-nadu",
        "districts": [
            {
                "id": 1,
                "name": "Chennai",
                "population_total": 7090000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Coimbatore",
                "population_total": 3458045,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Madurai",
                "population_total": 3038252,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Tiruchirappalli",
                "population_total": 2713858,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "rajasthan": {
        "id": 6,
        "name": "Rajasthan",
        "slug": "rajasthan",
        "districts": [
            {
                "id": 1,
                "name": "Jaipur",
                "population_total": 6663971,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Jodhpur",
                "population_total": 3687165,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Udaipur",
                "population_total": 3067549,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Kota",
                "population_total": 1950491,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "uttar-pradesh": {
        "id": 7,
        "name": "Uttar Pradesh",
        "slug": "uttar-pradesh",
        "districts": [
            {
                "id": 1,
                "name": "Lucknow",
                "population_total": 3382000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Kanpur",
                "population_total": 2767031,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Agra",
                "population_total": 1585704,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Varanasi",
                "population_total": 1211000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "gujarat": {
        "id": 8,
        "name": "Gujarat",
        "slug": "gujarat",
        "districts": [
            {
                "id": 1,
                "name": "Ahmedabad",
                "population_total": 5570585,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Surat",
                "population_total": 4467797,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Vadodara",
                "population_total": 2065771,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Rajkot",
                "population_total": 1500488,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "west-bengal": {
        "id": 9,
        "name": "West Bengal",
        "slug": "west-bengal",
        "districts": [
            {
                "id": 1,
                "name": "Kolkata",
                "population_total": 4486679,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Howrah",
                "population_total": 1077075,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Darjeeling",
                "population_total": 1846823,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Siliguri",
                "population_total": 513264,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    "bihar": {
        "id": 10,
        "name": "Bihar",
        "slug": "bihar",
        "districts": [
            {
                "id": 1,
                "name": "Patna",
                "population_total": 5838465,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Gaya",
                "population_total": 4391418,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Bhagalpur",
                "population_total": 3037766,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 4,
                "name": "Muzaffarpur",
                "population_total": 4778610,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    }
}
