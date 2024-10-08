interface City {
    id: number;
    name: string;
    slug?: string
    population_total: number;
    population_rural: number,
    population_urban: number
}

interface District {
    id: number;
    name: string;
    slug: string;
    population_total: number;
    population_rural: number;
    population_urban: number;
    cities?: City[];
}

export const District_List: District[] = [
    {
        "id": 1,
        "name": "Mumbai",
        "slug": "1-mumbai",
        "population_total": 12442373,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 1, 
                "name": "South Mumbai",
                "slug": "1-south-mumbai",
                "population_total": 1234567,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 2,
                "name": "Andheri",
                "slug": "2-andheri",
                "population_total": 2345678,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 3,
                "name": "Bandra",
                "slug": "3-bandra",
                "population_total": 3456789,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 2,
        "name": "Pune",
        "slug": "2-pune",
        "population_total": 9426959,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 4,
                "name": "Pimpri-Chinchwad",
                "slug": "4-pimpri-chinchwad",
                "population_total": 3456789,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 5,
                "name": "Shivajinagar",
                "slug": "5-shivajinagar",
                "population_total": 4567890,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 6,
                "name": "Kothrud",
                "slug": "6-kothrud",
                "population_total": 2345678,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 3,
        "name": "Nagpur",
        "slug": "3-nagpur",
        "population_total": 4653570,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 7,
                "name": "Sitabuldi",
                "slug": "7-sitabuldi",
                "population_total": 567890,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 8,
                "name": "Panchpaoli",
                "slug": "8-panchpaoli",
                "population_total": 678901,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 9,
                "name": "Koradi",
                "slug": "9-koradi",
                "population_total": 345678,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 4,
        "name": "Nashik",
        "slug": "4-nashik",
        "population_total": 6109052,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 10,
                "name": "Nashik Road",
                "slug": "10-nashik-road",
                "population_total": 789012,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 11,
                "name": "Deolali",
                "slug": "11-deolali",
                "population_total": 890123,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 12,
                "name": "Gangapur",
                "slug": "12-gangapur",
                "population_total": 234567,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 5,
        "name": "Bhopal",
        "slug": "5-bhopal",
        "population_total": 2368145,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 13, 
                "name": "Bhopal City",
                "slug": "13-bhopal-city",
                "population_total": 2000000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 14,
                "name": "Habibganj",
                "slug": "14-habibganj",
                "population_total": 500000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 6,
        "name": "Indore",
        "slug": "6-indore",
        "population_total": 3272335,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 15,
                "name": "Indore City",
                "slug": "15-indore-city",
                "population_total": 3000000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 16,
                "name": "Mhow",
                "slug": "16-mhow",
                "population_total": 500000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 7,
        "name": "Gwalior",
        "slug": "7-gwalior",
        "population_total": 2032036,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 17,
                "name": "Gwalior City",
                "slug": "17-gwalior-city",
                "population_total": 2000000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 18,
                "name": "Morena",
                "slug": "18-morena",
                "population_total": 32000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 8,
        "name": "Jabalpur",
        "slug": "8-jabalpur",
        "population_total": 2635657,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 19,
                "name": "Jabalpur City",
                "slug": "19-jabalpur-city",
                "population_total": 2600000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 20,
                "name": "Katangi",
                "slug": "20-katangi",
                "population_total": 35657,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 9,
        "name": "Srinagar",
        "slug": "9-srinagar",
        "population_total": 1269751,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 21,
                "name": "Srinagar City",
                "slug": "21-srinagar-city",
                "population_total": 1200000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 22,
                "name": "Anantnag",
                "slug": "22-anantnag",
                "population_total": 50000,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 10,
        "name": "Jammu",
        "slug": "10-jammu",
        "population_total": 1526406,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 23,
                "name": "Jammu City",
                "slug": "23-jammu-city",
                "population_total": 1500000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 24,
                "name": "Udhampur",
                "slug": "24-udhampur",
                "population_total": 26000,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 11,
        "name": "Anantnag",
        "slug": "11-anantnag",
        "population_total": 1070144,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 25,
                "name": "Anantnag City",
                "slug": "25-anantnag-city",
                "population_total": 1000000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 26,
                "name": "Bijbehara",
                "slug": "26-bijbehara",
                "population_total": 70000,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 12,
        "name": "Baramulla",
        "slug": "12-baramulla",
        "population_total": 1015503,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 27,
                "name": "Baramulla City",
                "slug": "27-baramulla-city",
                "population_total": 1000000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 28,
                "name": "Sopore",
                "slug": "28-sopore",
                "population_total": 50000,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 13,
        "name": "Bangalore",
        "slug": "13-bangalore",
        "population_total": 9588910,
        "population_rural": 51464342,
        "population_urban": 17084095,

        "cities": [
            {
                "id": 29,
                "name": "Bangalore City",
                "slug": "29-bangalore-city",
                "population_total": 9000000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 30,
                "name": "Whitefield",
                "slug": "30-whitefield",
                "population_total": 500000,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 14,
        "name": "Mysore",
        "slug": "14-mysore",
        "population_total": 3005694,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 31,
                "name": "Mysore City",
                "slug": "31-mysore-city",
                "population_total": 3000000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 32,
                "name": "Nanjangud",
                "slug": "32-nanjangud",
                "population_total": 5694,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 15,
        "name": "Hubli",
        "slug": "15-hubli",
        "population_total": 1292999,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 33,
                "name": "Hubli City",
                "slug": "33-hubli-city",
                "population_total": 1200000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 34,
                "name": "Dharwad",
                "slug": "34-dharwad",
                "population_total": 92999,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 16,
        "name": "Mangalore",
        "slug": "16-mangalore",
        "population_total": 623841,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 35,
                "name": "Mangalore City",
                "slug": "35-mangalore-city",
                "population_total": 600000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 36,
                "name": "Udupi",
                "slug": "36-udupi",
                "population_total": 23841,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 17,
        "name": "Coimbatore",
        "slug": "17-coimbatore",
        "population_total": 1810000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 37,
                "name": "Coimbatore City",
                "slug": "37-coimbatore-city",
                "population_total": 1800000,
                "population_rural": 51464342,
                "population_urban": 17084095

            },
            {
                "id": 38,
                "name": "Pollachi",
                "slug": "38-pollachi",
                "population_total": 10000,
                "population_rural": 51464342,
                "population_urban": 17084095

            }
        ]
    },
    {
        "id": 18,
        "name": "Chennai",
        "slug": "18-chennai",
        "population_total": 10400000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 39,
                "name": "Chennai City",
                "slug": "39-chennai-city",
                "population_total": 10000000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 40,
                "name": "Tambaram",
                "slug": "40-tambaram",
                "population_total": 400000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 19,
        "name": "Hyderabad",
        "slug": "19-hyderabad",
        "population_total": 9746000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 41,
                "name": "Hyderabad City",
                "slug": "41-hyderabad-city",
                "population_total": 9500000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 42,
                "name": "Secunderabad",
                "slug": "42-secunderabad",
                "population_total": 746000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 20,
        "name": "Secunderabad",
        "slug": "20-secunderabad",
        "population_total": 746000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 43,
                "name": "Secunderabad City",
                "slug": "43-secunderabad-city",
                "population_total": 746000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 21,
        "name": "Jaipur",
        "slug": "21-jaipur",
        "population_total": 3110000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 44,
                "name": "Jaipur City",
                "slug": "44-jaipur-city",
                "population_total": 3110000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 22,
        "name": "Jodhpur",
        "slug": "22-jodhpur",
        "population_total": 1050000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 45,
                "name": "Jodhpur City",
                "slug": "45-jodhpur-city",
                "population_total": 1050000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 23,
        "name": "Udaipur",
        "slug": "23-udaipur",
        "population_total": 478000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 46,
                "name": "Udaipur City",
                "slug": "46-udaipur-city",
                "population_total": 478000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 24,
        "name": "Kota",
        "slug": "24-kota",
        "population_total": 1950491,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 47,
                "name": "Kota City",
                "slug": "47-kota-city",
                "population_total": 1000000,
                "population_rural": 500000,
                "population_urban": 500000
            },
            {
                "id": 48,
                "name": "Bundi",
                "slug": "48-bundi",
                "population_total": 250000,
                "population_rural": 150000,
                "population_urban": 100000
            },
            {
                "id": 49,
                "name": "Baran",
                "slug": "49-baran",
                "population_total": 300000,
                "population_rural": 200000,
                "population_urban": 100000
            }
        ]
    },
    {
        "id": 25,
        "name": "Lucknow",
        "slug": "25-lucknow",
        "population_total": 3390000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 50,
                "name": "Lucknow City",
                "slug": "50-lucknow-city",
                "population_total": 3390000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 26,
        "name": "Kanpur",
        "slug": "26-kanpur",
        "population_total": 2760000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 51,
                "name": "Kanpur City",
                "slug": "51-kanpur-city",
                "population_total": 2760000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 27,
        "name": "Agra",
        "slug": "27-agra",
        "population_total": 1580000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 52,
                "name": "Agra City",
                "slug": "52-agra-city",
                "population_total": 1580000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 28,
        "name": "Varanasi",
        "slug": "28-varanasi",
        "population_total": 1200000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 53,
                "name": "Varanasi City",
                "slug": "53-varanasi-city",
                "population_total": 1200000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 29,
        "name": "Ahmedabad",
        "slug": "29-ahmedabad",
        "population_total": 5570585,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 54,
                "name": "Ahmedabad City",
                "slug": "54-ahmedabad-city",
                "population_total": 3500000,
                "population_rural": 100000,
                "population_urban": 3400000
            },
            {
                "id": 55,
                "name": "Gandhinagar",
                "slug": "55-gandhinagar",
                "population_total": 1200000,
                "population_rural": 300000,
                "population_urban": 900000
            },
            {
                "id": 56,
                "name": "Sanand",
                "slug": "56-sanand",
                "population_total": 500000,
                "population_rural": 400000,
                "population_urban": 100000
            },
            {
                "id": 57,
                "name": "Bavla",
                "slug": "57-bavla",
                "population_total": 370000,
                "population_rural": 270000,
                "population_urban": 100000
            }
        ]
    },
    {
        "id": 30,
        "name": "Surat",
        "slug": "30-surat",
        "population_total": 4467797,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 58,
                "name": "Surat City",
                "slug": "58-surat-city",
                "population_total": 4000000,
                "population_rural": 100000,
                "population_urban": 3900000
            },
            {
                "id": 59,
                "name": "Navsari",
                "slug": "59-navsari",
                "population_total": 467797,
                "population_rural": 300000,
                "population_urban": 167797
            }
        ]
    },
    {
        "id": 31,
        "name": "Vadodara",
        "slug": "31-vadodara",
        "population_total": 2065771,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 60,
                "name": "Vadodara City",
                "slug": "60-vadodara-city",
                "population_total": 1700000,
                "population_rural": 200000,
                "population_urban": 1500000
            },
            {
                "id": 61,
                "name": "Padra",
                "slug": "61-padra",
                "population_total": 365771,
                "population_rural": 200000,
                "population_urban": 165771
            }
        ]
    },
    {
        "id": 32,
        "name": "Rajkot",
        "slug": "32-rajkot",
        "population_total": 1500488,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 62,
                "name": "Rajkot City",
                "slug": "62-rajkot-city",
                "population_total": 1200000,
                "population_rural": 200000,
                "population_urban": 1000000
            },
            {
                "id": 63,
                "name": "Morbi",
                "slug": "63-morbi",
                "population_total": 300488,
                "population_rural": 150000,
                "population_urban": 150488
            }
        ]
    },
    {
        "id": 33,
        "name": "Kolkata",
        "slug": "33-kolkata",
        "population_total": 4486679,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 64,
                "name": "Kolkata City",
                "slug": "64-kolkata-city",
                "population_total": 4400000,
                "population_rural": 51464342,
                "population_urban": 17084095
            },
            {
                "id": 65,
                "name": "Howrah",
                "slug": "65-howrah",
                "population_total": 86679,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 34,
        "name": "Howrah",
        "slug": "34-howrah",
        "population_total": 1077075,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 66,
                "name": "Howrah City",
                "slug": "66-howrah-city",
                "population_total": 1000000,
                "population_rural": 150000,
                "population_urban": 850000
            },
            {
                "id": 67,
                "name": "Uluberia",
                "slug": "67-uluberia",
                "population_total": 77075,
                "population_rural": 30000,
                "population_urban": 47075
            }
        ]
    },
    {
        "id": 35,
        "name": "Darjeeling",
        "slug": "35-darjeeling",
        "population_total": 1846823,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 68,
                "name": "Darjeeling City",
                "slug": "68-darjeeling-city",
                "population_total": 1000000,
                "population_rural": 400000,
                "population_urban": 600000
            },
            {
                "id": 69,
                "name": "Siliguri",
                "slug": "69-siliguri",
                "population_total": 846823,
                "population_rural": 200000,
                "population_urban": 646823
            }
        ]
    },
    {
        "id": 36,
        "name": "Siliguri",
        "slug": "36-siliguri",
        "population_total": 657000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 70,
                "name": "Siliguri City",
                "slug": "70-siliguri-city",
                "population_total": 657000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 37,
        "name": "Patna",
        "slug": "37-patna",
        "population_total": 1680000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 71,
                "name": "Patna City",
                "slug": "71-patna-city",
                "population_total": 1680000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 38,
        "name": "Gaya",
        "slug": "38-gaya",
        "population_total": 439000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 72,
                "name": "Gaya City",
                "slug": "72-gaya-city",
                "population_total": 439000,
                "population_rural": 51464342,
                "population_urban": 17084095
            }
        ]
    },
    {
        "id": 39,
        "name": "Bhagalpur",
        "slug": "39-bhagalpur",
        "population_total": 3037766,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 73,
                "name": "Bhagalpur City",
                "slug": "73-bhagalpur-city",
                "population_total": 2500000,
                "population_rural": 1000000,
                "population_urban": 1500000
            },
            {
                "id": 74,
                "name": "Nathnagar",
                "slug": "74-nathnagar",
                "population_total": 537766,
                "population_rural": 300000,
                "population_urban": 237766
            }
        ]
    },
    {
        "id": 40,
        "name": "Muzaffarpur",
        "slug": "40-muzaffarpur",
        "population_total": 4778610,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "cities": [
            {
                "id": 75,
                "name": "Muzaffarpur City",
                "slug": "75-muzaffarpur-city",
                "population_total": 3500000,
                "population_rural": 1500000,
                "population_urban": 2000000
            },
            {
                "id": 76,
                "name": "Kanti",
                "slug": "76-kanti",
                "population_total": 1278610,
                "population_rural": 500000,
                "population_urban": 778610
            }
        ]
    },
];