interface Village {
    id: number;
    name: string;
    slug: string
    population_total: number;
}

interface City {
    id: number;
    name: string;
    slug: string;
    population_total: number;
    population_rural: number;
    population_urban: number;
    villages?: Village[];
}

export const CITY_LIST: City[] = [
    {
        "id": 1,
        "name": "South Mumbai",
        "slug": "1-south-mumbai",
        "population_total": 1234567,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 1, "name": "Koliwada", "slug": "1-koliwada", "population_total": 10000},
            { "id": 2, "name": "Charni Road", "slug": "2-charni-road", "population_total": 15000}
        ]
    },
    {
        "id": 2,
        "name": "Andheri",
        "slug": "2-andheri",
        "population_total": 2345678,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 3, "name": "Versova", "slug": "3-versova", "population_total": 20000},
            { "id": 4, "name": "D N Nagar", "slug": "4-d-n-nagar", "population_total": 25000}
        ]
    },
    {
        "id": 3,
        "name": "Bandra",
        "slug": "3-bandra",
        "population_total": 3456789,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 5, "name": "Bandra East", "slug": "5-bandra-east", "population_total": 30000},
            { "id": 6, "name": "Bandra West", "slug": "6-bandra-west", "population_total": 35000}
        ]
    },
    {
        "id": 4,
        "name": "Pimpri-Chinchwad",
        "slug": "4-pimpri-chinchwad",
        "population_total": 3456789,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 7, "name": "Pimpri", "slug": "7-pimpri", "population_total": 40000},
            { "id": 8, "name": "Chinchwad", "slug": "8-chinchwad", "population_total": 45000}
        ]
    },
    {
        "id": 5,
        "name": "Shivajinagar",
        "slug": "5-shivajinagar",
        "population_total": 4567890,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 9, "name": "Shivaji Park", "slug": "9-shivaji-park", "population_total": 50000},
            { "id": 10, "name": "Chaturshringi", "slug": "10-chaturshringi", "population_total": 55000}
        ]
    },
    {
        "id": 6,
        "name": "Kothrud",
        "slug": "6-kothrud",
        "population_total": 2345678,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 11, "name": "Kothrud Gaon", "slug": "11-kothrud-gaon", "population_total": 60000},
            { "id": 12, "name": "Pashan", "slug": "12-pashan", "population_total": 65000}
        ]
    },
    {
        "id": 7,
        "name": "Sitabuldi",
        "slug": "7-sitabuldi",
        "population_total": 567890,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 13, "name": "Village 13", "slug": "13-village-13", "population_total": 15000},
            { "id": 14, "name": "Village 14", "slug": "14-village-14", "population_total": 12000}
        ]
    },
    {
        "id": 8,
        "name": "Panchpaoli",
        "slug": "8-panchpaoli",
        "population_total": 678901,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 15, "name": "Village 15", "slug": "15-village-15", "population_total": 17000},
            { "id": 16, "name": "Village 16", "slug": "16-village-16", "population_total": 18000}
        ]
    },
    {
        "id": 9,
        "name": "Koradi",
        "slug": "9-koradi",
        "population_total": 345678,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 17, "name": "Village 17", "slug": "17-village-17", "population_total": 12000},
            { "id": 18, "name": "Village 18", "slug": "18-village-18", "population_total": 13000}
        ]
    },
    {
        "id": 10,
        "name": "Nashik Road",
        "slug": "10-nashik-road",
        "population_total": 789012,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 19, "name": "Village 19", "slug": "19-village-19", "population_total": 15000},
            { "id": 20, "name": "Village 20", "slug": "20-village-20", "population_total": 16000}
        ]
    },
    {
        "id": 11,
        "name": "Deolali",
        "slug": "11-deolali",
        "population_total": 890123,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 21, "name": "Village 21", "slug": "21-village-21", "population_total": 17000},
            { "id": 22, "name": "Village 22", "slug": "22-village-22", "population_total": 18000}
        ]
    },
    {
        "id": 12,
        "name": "Gangapur",
        "slug": "12-gangapur",
        "population_total": 234567,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 23, "name": "Village 23", "slug": "23-village-23", "population_total": 12000},
            { "id": 24, "name": "Village 24", "slug": "24-village-24", "population_total": 13000}
        ]
    },
    {
        "id": 13,
        "name": "Bhopal City",
        "slug": "13-bhopal-city",
        "population_total": 2000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 25, "name": "Village 25", "slug": "25-village-25", "population_total": 25000},
            { "id": 26, "name": "Village 26", "slug": "26-village-26", "population_total": 26000}
        ]
    },
    {
        "id": 14,
        "name": "Habibganj",
        "slug": "14-habibganj",
        "population_total": 500000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 27, "name": "Village 27", "slug": "27-village-27", "population_total": 30000},
            { "id": 28, "name": "Village 28", "slug": "28-village-28", "population_total": 31000}
        ]
    },
    {
        "id": 15,
        "name": "Indore City",
        "slug": "15-indore-city",
        "population_total": 3000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 29, "name": "Village 29", "slug": "29-village-29", "population_total": 27000},
            { "id": 30, "name": "Village 30", "slug": "30-village-30", "population_total": 28000}
        ]
    },
    {
        "id": 16,
        "name": "Mhow",
        "slug": "16-mhow",
        "population_total": 500000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 31, "name": "Village 31", "slug": "31-village-31", "population_total": 32000},
            { "id": 32, "name": "Village 32", "slug": "32-village-32", "population_total": 33000}
        ]
    },
    {
        "id": 17,
        "name": "Gwalior City",
        "slug": "17-gwalior-city",
        "population_total": 2000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 33, "name": "Village 33", "slug": "33-village-33", "population_total": 22000},
            { "id": 34, "name": "Village 34", "slug": "34-village-34", "population_total": 23000}
        ]
    },
    {
        "id": 18,
        "name": "Morena",
        "slug": "18-morena",
        "population_total": 32000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 35, "name": "Village 35", "slug": "35-village-35", "population_total": 34000},
            { "id": 36, "name": "Village 36", "slug": "36-village-36", "population_total": 35000}
        ]
    },
    {
        "id": 19,
        "name": "Jabalpur City",
        "slug": "19-jabalpur-city",
        "population_total": 2600000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 37, "name": "Village 37", "slug": "37-village-37", "population_total": 15000},
            { "id": 38, "name": "Village 38", "slug": "38-village-38", "population_total": 16000}
        ]
    },
    {
        "id": 20,
        "name": "Katangi",
        "slug": "20-katangi",
        "population_total": 35657,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 39, "name": "Village 39", "slug": "39-village-39", "population_total": 12000},
            { "id": 40, "name": "Village 40", "slug": "40-village-40", "population_total": 13000}
        ]
    },
    {
        "id": 21,
        "name": "Srinagar City",
        "slug": "21-srinagar-city",
        "population_total": 1200000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 41, "name": "Village 41", "slug": "41-village-41", "population_total": 8000},
            { "id": 42, "name": "Village 42", "slug": "42-village-42", "population_total": 9000}
        ]
    },
    {
        "id": 22,
        "name": "Anantnag",
        "slug": "22-anantnag",
        "population_total": 50000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 43, "name": "Village 43", "slug": "43-village-43", "population_total": 2000},
            { "id": 44, "name": "Village 44", "slug": "44-village-44", "population_total": 3000}
        ]
    },
    {
        "id": 23,
        "name": "Jammu City",
        "slug": "23-jammu-city",
        "population_total": 1500000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 45, "name": "Village 45", "slug": "45-village-45", "population_total": 15000},
            { "id": 46, "name": "Village 46", "slug": "46-village-46", "population_total": 20000}
        ]
    },
    {
        "id": 24,
        "name": "Udhampur",
        "slug": "24-udhampur",
        "population_total": 26000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 47, "name": "Village 47", "slug": "47-village-47", "population_total": 1200},
            { "id": 48, "name": "Village 48", "slug": "48-village-48", "population_total": 1400}
        ]
    },
    {
        "id": 25,
        "name": "Anantnag City",
        "slug": "25-anantnag-city",
        "population_total": 1000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 49, "name": "Village 49", "slug": "49-village-49", "population_total": 20000},
            { "id": 50, "name": "Village 50", "slug": "50-village-50", "population_total": 30000}
        ]
    },
    {
        "id": 26,
        "name": "Bijbehara",
        "slug": "26-bijbehara",
        "population_total": 70000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 51, "name": "Village 51", "slug": "51-village-51", "population_total": 15000},
            { "id": 52, "name": "Village 52", "slug": "52-village-52", "population_total": 20000}
        ]
    },
    {
        "id": 27,
        "name": "Baramulla City",
        "slug": "27-baramulla-city",
        "population_total": 1000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 53, "name": "Village 53", "slug": "53-village-53", "population_total": 15000},
            { "id": 54, "name": "Village 54", "slug": "54-village-54", "population_total": 20000}
        ]
    },
    {
        "id": 28,
        "name": "Sopore",
        "slug": "28-sopore",
        "population_total": 50000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 55, "name": "Village 55", "slug": "55-village-55", "population_total": 10000},
            { "id": 56, "name": "Village 56", "slug": "56-village-56", "population_total": 15000}
        ]
    },
    {
        "id": 29,
        "name": "Bangalore City",
        "slug": "29-bangalore-city",
        "population_total": 9000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 57, "name": "Village 57", "slug": "57-village-57", "population_total": 25000},
            { "id": 58, "name": "Village 58", "slug": "58-village-58", "population_total": 30000}
        ]
    },
    {
        "id": 30,
        "name": "Whitefield",
        "slug": "30-whitefield",
        "population_total": 500000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 59, "name": "Village 59", "slug": "59-village-59", "population_total": 10000},
            { "id": 60, "name": "Village 60", "slug": "60-village-60", "population_total": 15000}
        ]
    },
    {
        "id": 31,
        "name": "Mysore City",
        "slug": "31-mysore-city",
        "population_total": 3000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 61, "name": "Village 61", "slug": "61-village-61", "population_total": 20000},
            { "id": 62, "name": "Village 62", "slug": "62-village-62", "population_total": 15000}
        ]
    },
    {
        "id": 32,
        "name": "Nanjangud",
        "slug": "32-nanjangud",
        "population_total": 5694,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 63, "name": "Village 63", "slug": "63-village-63", "population_total": 3000},
            { "id": 64, "name": "Village 64", "slug": "64-village-64", "population_total": 2694}
        ]
    },
    {
        "id": 33,
        "name": "Hubli City",
        "slug": "33-hubli-city",
        "population_total": 1200000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 65, "name": "Village 65", "slug": "65-village-65", "population_total": 20000},
            { "id": 66, "name": "Village 66", "slug": "66-village-66", "population_total": 15000}
        ]
    },
    {
        "id": 34,
        "name": "Dharwad",
        "slug": "34-dharwad",
        "population_total": 92999,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 67, "name": "Village 67", "slug": "67-village-67", "population_total": 10000},
            { "id": 68, "name": "Village 68", "slug": "68-village-68", "population_total": 92999}
        ]
    },
    {
        "id": 35,
        "name": "Mangalore City",
        "slug": "35-mangalore-city",
        "population_total": 600000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 69, "name": "Village 69", "slug": "69-village-69", "population_total": 15000},
            { "id": 70, "name": "Village 70", "slug": "70-village-70", "population_total": 12000}
        ]
    },
    {
        "id": 36,
        "name": "Udupi",
        "slug": "36-udupi",
        "population_total": 23841,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 71, "name": "Village 71", "slug": "71-village-71", "population_total": 8000},
            { "id": 72, "name": "Village 72", "slug": "72-village-72", "population_total": 4500}
        ]
    },
    {
        "id": 37,
        "name": "Coimbatore City",
        "slug": "37-coimbatore-city",
        "population_total": 1800000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 73, "name": "Village 73", "slug": "73-village-73", "population_total": 12000 },
            { "id": 74, "name": "Village 74", "slug": "74-village-74", "population_total": 8000 }
        ]
    },
    {
        "id": 38,
        "name": "Pollachi",
        "slug": "38-pollachi",
        "population_total": 10000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 75, "name": "Village 75", "slug": "75-village-75", "population_total": 3000 },
            { "id": 76, "name": "Village 76", "slug": "76-village-76", "population_total": 2500 }
        ]
    },
    {
        "id": 39,
        "name": "Chennai City",
        "slug": "39-chennai-city",
        "population_total": 10000000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 77, "name": "Village 77", "slug": "77-village-77", "population_total": 50000 },
            { "id": 78, "name": "Village 78", "slug": "78-village-78", "population_total": 40000 }
        ]
    },
    {
        "id": 40,
        "name": "Tambaram",
        "slug": "40-tambaram",
        "population_total": 400000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 79, "name": "Village 79", "slug": "79-village-79", "population_total": 10000 },
            { "id": 80, "name": "Village 80", "slug": "80-village-80", "population_total": 8000 }
        ]
    },
    {
        "id": 41,
        "name": "Hyderabad City",
        "slug": "41-hyderabad-city",
        "population_total": 9500000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 81, "name": "Village 81", "slug": "81-village-81", "population_total": 60000 },
            { "id": 82, "name": "Village 82", "slug": "82-village-82", "population_total": 50000 }
        ]
    },
    {
        "id": 42,
        "name": "Secunderabad",
        "slug": "42-secunderabad",
        "population_total": 746000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 83, "name": "Village 83", "slug": "83-village-83", "population_total": 20000 },
            { "id": 84, "name": "Village 84", "slug": "84-village-84", "population_total": 15000 }
        ]
    },
    {
        "id": 43,
        "name": "Secunderabad City",
        "slug": "43-secunderabad-city",
        "population_total": 746000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 85, "name": "Village 85", "slug": "85-village-85", "population_total": 12000 },
            { "id": 86, "name": "Village 86", "slug": "86-village-86", "population_total": 10000 }
        ]
    },
    {
        "id": 44,
        "name": "Jaipur City",
        "slug": "44-jaipur-city",
        "population_total": 3110000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 87, "name": "Village 87", "slug": "87-village-87", "population_total": 60000 },
            { "id": 88, "name": "Village 88", "slug": "88-village-88", "population_total": 50000 }
        ]
    },
    {
        "id": 45,
        "name": "Jodhpur City",
        "slug": "45-jodhpur-city",
        "population_total": 1050000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 89, "name": "Village 89", "slug": "89-village-89", "population_total": 40000 },
            { "id": 90, "name": "Village 90", "slug": "90-village-90", "population_total": 30000 }
        ]
    },
    {
        "id": 46,
        "name": "Udaipur City",
        "slug": "46-udaipur-city",
        "population_total": 478000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 91, "name": "Village 91", "slug": "91-village-91", "population_total": 20000 },
            { "id": 92, "name": "Village 92", "slug": "92-village-92", "population_total": 15000 }
        ]
    },
    {
        "id": 47,
        "name": "Kota City",
        "slug": "47-kota-city",
        "population_total": 1000000,
        "population_rural": 500000,
        "population_urban": 500000,
        "villages": [
            { "id": 93, "name": "Village 93", "slug": "93-village-93", "population_total": 50000 },
            { "id": 94, "name": "Village 94", "slug": "94-village-94", "population_total": 40000 }
        ]
    },
    {
        "id": 48,
        "name": "Bundi",
        "slug": "48-bundi",
        "population_total": 250000,
        "population_rural": 150000,
        "population_urban": 100000,
        "villages": [
            { "id": 95, "name": "Village 95", "slug": "95-village-95", "population_total": 20000 },
            { "id": 96, "name": "Village 96", "slug": "96-village-96", "population_total": 15000 }
        ]
    },
    {
        "id": 49,
        "name": "Baran",
        "slug": "49-baran",
        "population_total": 300000,
        "population_rural": 200000,
        "population_urban": 100000,
        "villages": [
            { "id": 97, "name": "Village 97", "slug": "97-village-97", "population_total": 30000 },
            { "id": 98, "name": "Village 98", "slug": "98-village-98", "population_total": 25000 }
        ]
    },
    {
        "id": 50,
        "name": "Lucknow City",
        "slug": "50-lucknow-city",
        "population_total": 3390000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 99, "name": "Village 99", "slug": "99-village-99", "population_total": 70000 },
            { "id": 100, "name": "Village 100", "slug": "100-village-100", "population_total": 60000 }
        ]
    },
    {
        "id": 51,
        "name": "Kanpur City",
        "slug": "51-kanpur-city",
        "population_total": 2760000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 101, "name": "Village 101", "slug": "101-village-101", "population_total": 80000 },
            { "id": 102, "name": "Village 102", "slug": "102-village-102", "population_total": 70000 }
        ]
    },
    {
        "id": 52,
        "name": "Agra City",
        "slug": "52-agra-city",
        "population_total": 1580000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 103, "name": "Village 103", "slug": "103-village-103", "population_total": 25000 },
            { "id": 104, "name": "Village 104", "slug": "104-village-104", "population_total": 20000 }
        ]
    },
    {
        "id": 53,
        "name": "Varanasi City",
        "slug": "53-varanasi-city",
        "population_total": 1200000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 105, "name": "Village 105", "slug": "105-village-105", "population_total": 30000 },
            { "id": 106, "name": "Village 106", "slug": "106-village-106", "population_total": 25000 }
        ]
    },
    {
        "id": 54,
        "name": "Ahmedabad City",
        "slug": "54-ahmedabad-city",
        "population_total": 3500000,
        "population_rural": 100000,
        "population_urban": 3400000,
        "villages": [
            { "id": 107, "name": "Village 107", "slug": "107-village-107", "population_total": 70000 },
            { "id": 108, "name": "Village 108", "slug": "108-village-108", "population_total": 60000 }
        ]
    },
    {
        "id": 55,
        "name": "Gandhinagar",
        "slug": "55-gandhinagar",
        "population_total": 1200000,
        "population_rural": 300000,
        "population_urban": 900000,
        "villages": [
            { "id": 109, "name": "Village 109", "slug": "109-village-109", "population_total": 50000 },
            { "id": 110, "name": "Village 110", "slug": "110-village-110", "population_total": 40000 }
        ]
    },
    {
        "id": 56,
        "name": "Sanand",
        "slug": "56-sanand",
        "population_total": 500000,
        "population_rural": 400000,
        "population_urban": 100000,
        "villages": [
            { "id": 111, "name": "Village 111", "slug": "111-village-111", "population_total": 30000 },
            { "id": 112, "name": "Village 112", "slug": "112-village-112", "population_total": 25000 }
        ]
    },
    {
        "id": 57,
        "name": "Bavla",
        "slug": "57-bavla",
        "population_total": 370000,
        "population_rural": 270000,
        "population_urban": 100000,
        "villages": [
            { "id": 113, "name": "Village 113", "slug": "113-village-113", "population_total": 20000 },
            { "id": 114, "name": "Village 114", "slug": "114-village-114", "population_total": 15000 }
        ]
    },
    {
        "id": 58,
        "name": "Surat City",
        "slug": "58-surat-city",
        "population_total": 4000000,
        "population_rural": 100000,
        "population_urban": 3900000,
        "villages": [
            { "id": 115, "name": "Village 115", "slug": "115-village-115", "population_total": 50000 },
            { "id": 116, "name": "Village 116", "slug": "116-village-116", "population_total": 40000 }
        ]
    },
    {
        "id": 59,
        "name": "Navsari",
        "slug": "59-navsari",
        "population_total": 467797,
        "population_rural": 300000,
        "population_urban": 167797,
        "villages": [
            { "id": 117, "name": "Village 117", "slug": "117-village-117", "population_total": 20000 },
            { "id": 118, "name": "Village 118", "slug": "118-village-118", "population_total": 15000 }
        ]
    },
    {
        "id": 60,
        "name": "Vadodara City",
        "slug": "60-vadodara-city",
        "population_total": 1700000,
        "population_rural": 200000,
        "population_urban": 1500000,
        "villages": [
            { "id": 119, "name": "Village 119", "slug": "119-village-119", "population_total": 40000 },
            { "id": 120, "name": "Village 120", "slug": "120-village-120", "population_total": 35000 }
        ]
    },
    {
        "id": 61,
        "name": "Padra",
        "slug": "61-padra",
        "population_total": 365771,
        "population_rural": 200000,
        "population_urban": 165771,
        "villages": [
            { "id": 121, "name": "Village 121", "slug": "121-village-121", "population_total": 20000 },
            { "id": 122, "name": "Village 122", "slug": "122-village-122", "population_total": 15000 }
        ]
    },
    {
        "id": 62,
        "name": "Rajkot City",
        "slug": "62-rajkot-city",
        "population_total": 1200000,
        "population_rural": 200000,
        "population_urban": 1000000,
        "villages": [
            { "id": 123, "name": "Village 123", "slug": "123-village-123", "population_total": 30000 },
            { "id": 124, "name": "Village 124", "slug": "124-village-124", "population_total": 25000 }
        ]
    },
    {
        "id": 63,
        "name": "Morbi",
        "slug": "63-morbi",
        "population_total": 300488,
        "population_rural": 150000,
        "population_urban": 150488,
        "villages": [
            { "id": 125, "name": "Village 125", "slug": "125-village-125", "population_total": 20000 },
            { "id": 126, "name": "Village 126", "slug": "126-village-126", "population_total": 15000 }
        ]
    },
    {
        "id": 64,
        "name": "Kolkata City",
        "slug": "64-kolkata-city",
        "population_total": 4400000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 127, "name": "Village 127", "slug": "127-village-127", "population_total": 70000 },
            { "id": 128, "name": "Village 128", "slug": "128-village-128", "population_total": 60000 }
        ]
    },
    {
        "id": 65,
        "name": "Howrah",
        "slug": "65-howrah",
        "population_total": 86679,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 129, "name": "Village 129", "slug": "129-village-129", "population_total": 10000 },
            { "id": 130, "name": "Village 130", "slug": "130-village-130", "population_total": 8000 }
        ]
    },
    {
        "id": 66,
        "name": "Howrah City",
        "slug": "66-howrah-city",
        "population_total": 1000000,
        "population_rural": 150000,
        "population_urban": 850000,
        "villages": [
            { "id": 131, "name": "Village 131", "slug": "131-village-131", "population_total": 25000 },
            { "id": 132, "name": "Village 132", "slug": "132-village-132", "population_total": 20000 }
        ]
    },
    {
        "id": 67,
        "name": "Uluberia",
        "slug": "67-uluberia",
        "population_total": 77075,
        "population_rural": 30000,
        "population_urban": 47075,
        "villages": [
            { "id": 133, "name": "Village 133", "slug": "133-village-133", "population_total": 15000 },
            { "id": 134, "name": "Village 134", "slug": "134-village-134", "population_total": 12000 }
        ]
    },
    {
        "id": 68,
        "name": "Darjeeling City",
        "slug": "68-darjeeling-city",
        "population_total": 1000000,
        "population_rural": 400000,
        "population_urban": 600000,
        "villages": [
            { "id": 135, "name": "Village 135", "slug": "135-village-135", "population_total": 30000 },
            { "id": 136, "name": "Village 136", "slug": "136-village-136", "population_total": 25000 }
        ]
    },
    {
        "id": 69,
        "name": "Siliguri",
        "slug": "69-siliguri",
        "population_total": 846823,
        "population_rural": 200000,
        "population_urban": 646823,
        "villages": [
            { "id": 137, "name": "Village 137", "slug": "137-village-137", "population_total": 40000 },
            { "id": 138, "name": "Village 138", "slug": "138-village-138", "population_total": 35000 }
        ]
    },
    {
        "id": 70,
        "name": "Siliguri City",
        "slug": "70-siliguri-city",
        "population_total": 657000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 139, "name": "Village 139", "slug": "139-village-139", "population_total": 25000 },
            { "id": 140, "name": "Village 140", "slug": "140-village-140", "population_total": 20000 }
        ]
    },
    {
        "id": 71,
        "name": "Patna City",
        "slug": "71-patna-city",
        "population_total": 1680000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 141, "name": "Village 141", "slug": "141-village-141", "population_total": 30000 },
            { "id": 142, "name": "Village 142", "slug": "142-village-142", "population_total": 25000 }
        ]
    },
    {
        "id": 72,
        "name": "Gaya City",
        "slug": "72-gaya-city",
        "population_total": 439000,
        "population_rural": 51464342,
        "population_urban": 17084095,
        "villages": [
            { "id": 143, "name": "Village 143", "slug": "143-village-143", "population_total": 20000 },
            { "id": 144, "name": "Village 144", "slug": "144-village-144", "population_total": 15000 }
        ]
    },
    {
        "id": 73,
        "name": "Bhagalpur City",
        "slug": "73-bhagalpur-city",
        "population_total": 2500000,
        "population_rural": 1000000,
        "population_urban": 1500000,
        "villages": [
            { "id": 145, "name": "Village 145", "slug": "145-village-145", "population_total": 30000 },
            { "id": 146, "name": "Village 146", "slug": "146-village-146", "population_total": 25000 }
        ]
    },
    {
        "id": 74,
        "name": "Nathnagar",
        "slug": "74-nathnagar",
        "population_total": 537766,
        "population_rural": 300000,
        "population_urban": 237766,
        "villages": [
            { "id": 147, "name": "Village 147", "slug": "147-village-147", "population_total": 25000 },
            { "id": 148, "name": "Village 148", "slug": "148-village-148", "population_total": 20000 }
        ]
    },
    {
        "id": 75,
        "name": "Muzaffarpur City",
        "slug": "75-muzaffarpur-city",
        "population_total": 3500000,
        "population_rural": 1500000,
        "population_urban": 2000000,
        "villages": [
            { "id": 149, "name": "Village 149", "slug": "149-village-149", "population_total": 40000 },
            { "id": 150, "name": "Village 150", "slug": "150-village-150", "population_total": 35000 }
        ]
    },
    {
        "id": 76,
        "name": "Kanti",
        "slug": "76-kanti",
        "population_total": 1278610,
        "population_rural": 500000,
        "population_urban": 778610,
        "villages": [
            { "id": 151, "name": "Village 151", "slug": "151-village-151", "population_total": 20000 },
            { "id": 152, "name": "Village 152", "slug": "152-village-152", "population_total": 15000 }
        ]
    }
   
];