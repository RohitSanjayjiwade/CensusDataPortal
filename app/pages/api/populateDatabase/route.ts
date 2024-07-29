// pages/api/populateDatabase.ts
// touch pages/api/populateDatabase.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as excel from 'exceljs';

import ExcelJS from 'exceljs'; // Ensure you have exceljs installed
import prisma from '@/app/utils/db';
import { NextResponse } from 'next/server';



async function processRows(rows: any[][], maxRowsToProcess: number) {
  let rowCount = 0;

  for (const rowData of rows) {
    if (rowCount >= maxRowsToProcess) break;

    try {
      // Destructure row data into variables
      const [
        State, District, Subdistt, TownVillage, Ward, EB, Level, Name,
        TRU, No_HH, TOT_P, TOT_M, TOT_F, P_06, M_06, F_06,
        P_SC, M_SC, F_SC, P_ST, M_ST, F_ST, P_LIT, M_LIT, F_LIT,
        P_ILL, M_ILL, F_ILL, TOT_WORK_P, TOT_WORK_M, TOT_WORK_F, MAINWORK_P, MAINWORK_M, MAINWORK_F,
        workCultP, workCultM, workCultF, mainWorkAgriLabP, mainWorkAgriLabM, mainWorkAgriLabF, mainWorkHousIndP,
        mainWorkHousIndM, mainWorkHousIndF, mainWorkOtherWorkP, mainWorkOtherWorkM, mainWorkOtherWorkF,
        marginWorkP, marginWorkM, marginWorkF, marginCultP, marginCultM, marginCultF, marginWorkAgriLabP,
        marginWorkAgriLabM, marginWorkAgriLabF, marginWorkHousIndP, marginWorkHousIndM, marginWorkHousIndF,
        marginWorkOtherWorkP, marginWorkOtherWorkM, marginWorkOtherWorkF, marginWorkTtoSP, marginWorkTtoSM,
        marginWorkTtoSF, marginCultiTtoSP, marginCultiTtoSM, marginCultiTtoSF, marginAgriLabP, marginAgriLabM,
        marginAgriLabF, marginWorkHousTtoSP, marginWorkHousTtoSM, marginWorkHousTtoSF, marginWorkOtherTtoSP,
        marginWorkOtherTtoSM, marginWorkOtherTtoSF, marginWorkLessTP, marginWorkLessTM, marginWorkLessTF,
        marginCultiLessTP, marginCultiLessTM, marginCultiLessTF, marginAgriLabLessTP, marginAgriLabLessTM,
        marginAgriLabLessTF, marginWorkHouseLessTP, marginWorkHouseLessTM, marginWorkHouseLessTF, marginOtherWorkLessTP,
        marginOtherWorkLessTM, marginOtherWorkLessTF, noWorkP, noWorkM, noWorkF
      ] = rowData;

      // Create database record using Prisma
      const data = await prisma.data.create({
        data: {
          stateCode: State,
          districtCode: District,
          subDistrictCode: Subdistt,
          townVillageCode: TownVillage,
          wardCode: Ward,
          enumerationBlockCode: EB,
          levelOfAdminUnit: Level,
          areaName: Name,
          totalRuralUrban: TRU,
          noOfHousehold: parseInt(No_HH) || 0,
          totalPopulationPersons: parseInt(TOT_P) || 0,
          totalPopulationMales: parseInt(TOT_M) || 0,
          totalPopulationFemales: parseInt(TOT_F) || 0,
          populationInAgePersons: parseInt(P_06) || 0,
          populationInAgeMales: parseInt(M_06) || 0,
          populationInAgeFemales: parseInt(F_06) || 0,
          castePopulationPersons: parseInt(P_SC) || 0,
          castePopulationMales: parseInt(M_SC) || 0,
          castePopulationFemales: parseInt(F_SC) || 0,
          tribePopulationPersons: parseInt(P_ST) || 0,
          tribePopulationMales: parseInt(M_ST) || 0,
          tribePopulationFemales: parseInt(F_ST) || 0,
          literatesPersons: parseInt(P_LIT) || 0,
          literatesMales: parseInt(M_LIT) || 0,
          literatesFemales: parseInt(F_LIT) || 0,
          illiteratesPersons: parseInt(P_ILL) || 0,
          illiteratesMales: parseInt(M_ILL) || 0,
          illiteratesFemales: parseInt(F_ILL) || 0,
          totalWorkersPersons: parseInt(TOT_WORK_P) || 0,
          totalWorkersMales: parseInt(TOT_WORK_M) || 0,
          totalWorkersFemales: parseInt(TOT_WORK_F) || 0,
          mainWorkersPersons: parseInt(MAINWORK_P) || 0,
          mainWorkersMales: parseInt(MAINWORK_M) || 0,
          mainWorkersFemales: parseInt(MAINWORK_F) || 0,
          workersCultiPersons: parseInt(workCultP) || 0,
          workersCultiMales: parseInt(workCultM) || 0,
          workersCultiFemales: parseInt(workCultF) || 0,
          mainWorkersAgriLabourersPersons: parseInt(mainWorkAgriLabP) || 0,
          mainWorkersAgriLabourersMales: parseInt(mainWorkAgriLabM) || 0,
          mainWorkersAgriLabourersFemales: parseInt(mainWorkAgriLabF) || 0,
          mainWorkersHouseholdIndustriesPersons: parseInt(mainWorkHousIndP) || 0,
          mainWorkersHouseholdIndustriesMales: parseInt(mainWorkHousIndM) || 0,
          mainWorkersHouseholdIndustriesFemales: parseInt(mainWorkHousIndF) || 0,
          mainWorkersOtherWorkersPersons: parseInt(mainWorkOtherWorkP) || 0,
          mainWorkersOtherWorkersMales: parseInt(mainWorkOtherWorkM) || 0,
          mainWorkersOtherWorkersFemales: parseInt(mainWorkOtherWorkF) || 0,
          marginalWorkersPersons: parseInt(marginWorkP) || 0,
          marginalWorkersMales: parseInt(marginWorkM) || 0,
          marginalWorkersFemales: parseInt(marginWorkF) || 0,
          marginalCultivatorsPersons: parseInt(marginCultP) || 0,
          marginalCultivatorsMales: parseInt(marginCultM) || 0,
          marginalCultivatorsFemales: parseInt(marginCultF) || 0,
          marginalAgriLabourersPersons: parseInt(marginWorkAgriLabP) || 0,
          marginalAgriLabourersMales: parseInt(marginWorkAgriLabM) || 0,
          marginalAgriLabourersFemales: parseInt(marginWorkAgriLabF) || 0,
          marginalWorkersHouseholdIndustriesPersons: parseInt(marginWorkHousIndP) || 0,
          marginalWorkersHouseholdIndustriesMales: parseInt(marginWorkHousIndM) || 0,
          marginalWorkersHouseholdIndustriesFemales: parseInt(marginWorkHousIndF) || 0,
          marginalWorkersOtherWorkersPersons: parseInt(marginWorkOtherWorkP) || 0,
          marginalWorkersOtherWorkersMales: parseInt(marginWorkOtherWorkM) || 0,
          marginalWorkersOtherWorkersFemales: parseInt(marginWorkOtherWorkF) || 0,
          marginalWorkers3To6MonthsPersons: parseInt(marginWorkTtoSP) || 0,
          marginalWorkers3To6MonthsMales: parseInt(marginWorkTtoSM) || 0,
          marginalWorkers3To6MonthsFemales: parseInt(marginWorkTtoSF) || 0,
          marginalCultivatorsPersons3To6Months: parseInt(marginCultiTtoSP) || 0,
          marginalCultivatorsMales3To6Months: parseInt(marginCultiTtoSM) || 0,
          marginalCultivatorsFemales3To6Months: parseInt(marginCultiTtoSF) || 0,
          marginalAgriLabourersPersons3To6Months: parseInt(marginAgriLabP) || 0,
          marginalAgriLabourersMales3To6Months: parseInt(marginAgriLabM) || 0,
          marginalAgriLabourersFemales3To6Months: parseInt(marginAgriLabF) || 0,
          marginalWorkersHouseholdIndustriesPersons3To6Months: parseInt(marginWorkHousTtoSP) || 0,
          marginalWorkersHouseholdIndustriesMales3To6Months: parseInt(marginWorkHousTtoSM) || 0,
          marginalWorkersHouseholdIndustriesFemales3To6Months: parseInt(marginWorkHousTtoSF) || 0,
          marginalOtherWorkersPersons3To6Months: parseInt(marginWorkOtherTtoSP) || 0,
          marginalOtherWorkersMales3To6Months: parseInt(marginWorkOtherTtoSM) || 0,
          marginalOtherWorkersFemales3To6Months: parseInt(marginWorkOtherTtoSF) || 0,
          marginalWorkersLessThan3MonthsPersons: parseInt(marginWorkLessTP) || 0,
          marginalWorkersLessThan3MonthsMales: parseInt(marginWorkLessTM) || 0,
          marginalWorkersLessThan3MonthsFemales: parseInt(marginWorkLessTF) || 0,
          marginalCultivatorsPersonsLessThan3Months: parseInt(marginCultiLessTP) || 0,
          marginalCultivatorsMalesLessThan3Months: parseInt(marginCultiLessTM) || 0,
          marginalCultivatorsFemalesLessThan3Months: parseInt(marginCultiLessTF) || 0,
          marginalAgriLabourersPersonsLessThan3Months: parseInt(marginAgriLabLessTP) || 0,
          marginalAgriLabourersMalesLessThan3Months: parseInt(marginAgriLabLessTM) || 0,
          marginalAgriLabourersFemalesLessThan3Months: parseInt(marginAgriLabLessTF) || 0,
          marginalWorkersHouseholdIndustriesPersonsLessThan3Months: parseInt(marginWorkHouseLessTP) || 0,
          marginalWorkersHouseholdIndustriesMalesLessThan3Months: parseInt(marginWorkHouseLessTM) || 0,
          marginalWorkersHouseholdIndustriesFemalesLessThan3Months: parseInt(marginWorkHouseLessTF) || 0,
          marginalOtherWorkersPersonsLessThan3Months: parseInt(marginOtherWorkLessTP) || 0,
          marginalOtherWorkersMalesLessThan3Months: parseInt(marginOtherWorkLessTM) || 0,
          marginalOtherWorkersFemalesLessThan3Months: parseInt(marginOtherWorkLessTF) || 0,
          nonWorkersPersons: parseInt(noWorkP) || 0,
          nonWorkersMales: parseInt(noWorkM) || 0,
          nonWorkersFemales: parseInt(noWorkF) || 0,
          // Map other fields similarly...
        },
      });

      // Handle administrative levels and year association based on 'Level' and 'totalRuralUrban'
      if (data) {
        console.log(`Level ${Level}`);
        console.log(`TRU: ${TRU}`);

        const year = 2011; // Specify the year as needed

        switch (Level) {
          case 'STATE':
            const state = await prisma.state.upsert({
              where: { stateCode: State },
              update: {},
              create: {
                stateCode: State,
                name: Name,
                slug: Name.toLowerCase().replace(/ /g, '-'), // Generate slug from areaName
              },
            });

            await prisma.year.create({
              data: {
                year,
                state: { connect: { stateCode: State } },
                [TRU === 'Total' ? 'data' : TRU === 'Rural' ? 'rural_data' : 'urban_data']: {
                  connect: { id: data.id },
                },
              },
            });
            break;

          case 'DISTRICT':
            const stateForDistrict = await prisma.state.findUnique({
              where: { stateCode: State },
            });

            const district = await prisma.district.upsert({
              where: { districtCode: District },
              update: {},
              create: {
                districtCode: District,
                name: Name,
                state: { connect: { id: stateForDistrict?.id } },
                slug: `${District}-${Name.toLowerCase().replace(/ /g, '-')}`, // Generate slug
              },
            });

            await prisma.year.create({
              data: {
                year,
                district: { connect: { districtCode: District } },
                [TRU === 'Total' ? 'data' : TRU === 'Rural' ? 'rural_data' : 'urban_data']: {
                  connect: { id: data.id },
                },
              },
            });
            break;

          case 'SUB-DISTRICT':
            const stateForCity = await prisma.state.findUnique({
              where: { stateCode: State },
            });

            const districtForCity = await prisma.district.findUnique({
              where: { districtCode: District },
            });

            const city = await prisma.city.upsert({
              where: { cityCode: Subdistt },
              update: {},
              create: {
                cityCode: Subdistt,
                name: Name,
                state: { connect: { id: stateForCity?.id } },
                district: { connect: { id: districtForCity?.id } },
                slug: `${Subdistt}-${Name.toLowerCase().replace(/ /g, '-')}`, // Generate slug
              },
            });

            await prisma.year.create({
              data: {
                year,
                city: { connect: { cityCode: Subdistt } },
                [TRU === 'Total' ? 'data' : TRU === 'Rural' ? 'rural_data' : 'urban_data']: {
                  connect: { id: data.id },
                },
              },
            });
            break;

          case 'VILLAGE':
            const stateForVillage = await prisma.state.findUnique({
              where: { stateCode: State },
            });

            const districtForVillage = await prisma.district.findUnique({
              where: { districtCode: District },
            });

            const cityForVillage = await prisma.city.findUnique({
              where: { cityCode: Subdistt },
            });

            await prisma.village.upsert({
              where: { villageCode: TownVillage },
              update: {},
              create: {
                villageCode: TownVillage,
                name: Name,
                state: { connect: { id: stateForVillage?.id } },
                district: { connect: { id: districtForVillage?.id } },
                city: { connect: { id: cityForVillage?.id } },
                slug: `${TownVillage}-${Name.toLowerCase().replace(/ /g, '-')}`, // Generate slug
              },
            });

            await prisma.year.create({
              data: {
                year,
                village: { connect: { villageCode: TownVillage } },
                [TRU === 'Total' ? 'data' : TRU === 'Rural' ? 'rural_data' : 'urban_data']: {
                  connect: { id: data.id },
                },
              },
            });
            break;

          default:
            console.log('Invalid level:', Level);
        }
      }
      rowCount++; // Increment row count after processing each row
    } catch (error) {
      console.error(`Error processing row`, error);
    }
  }
}


async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const workbook = new ExcelJS.Workbook();
    
    try {
  await workbook.xlsx.readFile('/home/vaibhav/Desktop/pop1.xlsx');
} catch (error) {
  console.error('Error reading Excel file:', error);


}


    const worksheet = workbook.getWorksheet;
    if (!worksheet) {
      throw new Error('Worksheet not found in the workbook');
    }
     console.log('Worksheets in the workbook:',worksheet);
workbook.worksheets.forEach((sheet, index) => {
  console.log(`Index: ${index + 1}, Name: ${sheet.name}`);
});

    const rows: any[][] = [];
    // worksheet.eachRow({ includeEmpty: false }, (row) => {
    //   rows.push(Object.values(row.values));
    // });

    console.log(`Total rows read: ${rows.length}`);

    await processRows(rows, 10); // Process the first 10 rows for now

    return NextResponse.json({ message: 'Upload successful' });
  } catch (error) {
    console.error('Error reading or processing the file:', error);
    return NextResponse.json({ message: 'Upload not' });
  }
}

export { handler as GET, handler as POST };