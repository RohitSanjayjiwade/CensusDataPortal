/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Data` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Data` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_District" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "districtCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    CONSTRAINT "District_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_District" ("districtCode", "id", "name", "slug", "stateId") SELECT "districtCode", "id", "name", "slug", "stateId" FROM "District";
DROP TABLE "District";
ALTER TABLE "new_District" RENAME TO "District";
CREATE UNIQUE INDEX "District_districtCode_key" ON "District"("districtCode");
CREATE UNIQUE INDEX "District_slug_key" ON "District"("slug");
CREATE TABLE "new_Data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stateCode" TEXT NOT NULL,
    "districtCode" TEXT NOT NULL,
    "subDistrictCode" TEXT NOT NULL,
    "townVillageCode" TEXT NOT NULL,
    "wardCode" TEXT NOT NULL,
    "enumerationBlockCode" TEXT NOT NULL,
    "levelOfAdminUnit" TEXT NOT NULL,
    "areaName" TEXT NOT NULL,
    "totalRuralUrban" TEXT NOT NULL,
    "noOfHousehold" INTEGER,
    "totalPopulationPersons" INTEGER,
    "totalPopulationMales" INTEGER,
    "totalPopulationFemales" INTEGER,
    "populationInAgePersons" INTEGER,
    "populationInAgeMales" INTEGER,
    "populationInAgeFemales" INTEGER,
    "castePopulationPersons" INTEGER,
    "castePopulationMales" INTEGER,
    "castePopulationFemales" INTEGER,
    "tribePopulationPersons" INTEGER,
    "tribePopulationMales" INTEGER,
    "tribePopulationFemales" INTEGER,
    "literatesPersons" INTEGER,
    "literatesMales" INTEGER,
    "literatesFemales" INTEGER,
    "illiteratesPersons" INTEGER,
    "illiteratesMales" INTEGER,
    "illiteratesFemales" INTEGER,
    "totalWorkersPersons" INTEGER,
    "totalWorkersMales" INTEGER,
    "totalWorkersFemales" INTEGER,
    "mainWorkersPersons" INTEGER,
    "mainWorkersMales" INTEGER,
    "mainWorkersFemales" INTEGER,
    "workersCultiPersons" INTEGER,
    "workersCultiMales" INTEGER,
    "workersCultiFemales" INTEGER,
    "mainWorkersAgriLabourersPersons" INTEGER,
    "mainWorkersAgriLabourersMales" INTEGER,
    "mainWorkersAgriLabourersFemales" INTEGER,
    "mainWorkersHouseholdIndustriesPersons" INTEGER,
    "mainWorkersHouseholdIndustriesMales" INTEGER,
    "mainWorkersHouseholdIndustriesFemales" INTEGER,
    "mainWorkersOtherWorkersPersons" INTEGER,
    "mainWorkersOtherWorkersMales" INTEGER,
    "mainWorkersOtherWorkersFemales" INTEGER,
    "marginalWorkersPersons" INTEGER,
    "marginalWorkersMales" INTEGER,
    "marginalWorkersFemales" INTEGER,
    "marginalCultivatorsPersons" INTEGER,
    "marginalCultivatorsMales" INTEGER,
    "marginalCultivatorsFemales" INTEGER,
    "marginalAgriLabourersPersons" INTEGER,
    "marginalAgriLabourersMales" INTEGER,
    "marginalAgriLabourersFemales" INTEGER,
    "marginalWorkersHouseholdIndustriesPersons" INTEGER,
    "marginalWorkersHouseholdIndustriesMales" INTEGER,
    "marginalWorkersHouseholdIndustriesFemales" INTEGER,
    "marginalWorkersOtherWorkersPersons" INTEGER,
    "marginalWorkersOtherWorkersMales" INTEGER,
    "marginalWorkersOtherWorkersFemales" INTEGER,
    "marginalWorkers3To6MonthsPersons" INTEGER,
    "marginalWorkers3To6MonthsMales" INTEGER,
    "marginalWorkers3To6MonthsFemales" INTEGER,
    "marginalCultivatorsPersons3To6Months" INTEGER,
    "marginalCultivatorsMales3To6Months" INTEGER,
    "marginalCultivatorsFemales3To6Months" INTEGER,
    "marginalAgriLabourersPersons3To6Months" INTEGER,
    "marginalAgriLabourersMales3To6Months" INTEGER,
    "marginalAgriLabourersFemales3To6Months" INTEGER,
    "marginalWorkersHouseholdIndustriesPersons3To6Months" INTEGER,
    "marginalWorkersHouseholdIndustriesMales3To6Months" INTEGER,
    "marginalWorkersHouseholdIndustriesFemales3To6Months" INTEGER,
    "marginalOtherWorkersPersons3To6Months" INTEGER,
    "marginalOtherWorkersMales3To6Months" INTEGER,
    "marginalOtherWorkersFemales3To6Months" INTEGER,
    "marginalWorkersLessThan3MonthsPersons" INTEGER,
    "marginalWorkersLessThan3MonthsMales" INTEGER,
    "marginalWorkersLessThan3MonthsFemales" INTEGER,
    "marginalCultivatorsPersonsLessThan3Months" INTEGER,
    "marginalCultivatorsMalesLessThan3Months" INTEGER,
    "marginalCultivatorsFemalesLessThan3Months" INTEGER,
    "marginalAgriLabourersPersonsLessThan3Months" INTEGER,
    "marginalAgriLabourersMalesLessThan3Months" INTEGER,
    "marginalAgriLabourersFemalesLessThan3Months" INTEGER,
    "marginalWorkersHouseholdIndustriesPersonsLessThan3Months" INTEGER,
    "marginalWorkersHouseholdIndustriesMalesLessThan3Months" INTEGER,
    "marginalWorkersHouseholdIndustriesFemalesLessThan3Months" INTEGER,
    "marginalOtherWorkersPersonsLessThan3Months" INTEGER,
    "marginalOtherWorkersMalesLessThan3Months" INTEGER,
    "marginalOtherWorkersFemalesLessThan3Months" INTEGER,
    "nonWorkersPersons" INTEGER,
    "nonWorkersMales" INTEGER,
    "nonWorkersFemales" INTEGER
);
INSERT INTO "new_Data" ("areaName", "castePopulationFemales", "castePopulationMales", "castePopulationPersons", "districtCode", "enumerationBlockCode", "id", "illiteratesFemales", "illiteratesMales", "illiteratesPersons", "levelOfAdminUnit", "literatesFemales", "literatesMales", "literatesPersons", "mainWorkersAgriLabourersFemales", "mainWorkersAgriLabourersMales", "mainWorkersAgriLabourersPersons", "mainWorkersFemales", "mainWorkersHouseholdIndustriesFemales", "mainWorkersHouseholdIndustriesMales", "mainWorkersHouseholdIndustriesPersons", "mainWorkersMales", "mainWorkersOtherWorkersFemales", "mainWorkersOtherWorkersMales", "mainWorkersOtherWorkersPersons", "mainWorkersPersons", "marginalAgriLabourersFemales", "marginalAgriLabourersFemales3To6Months", "marginalAgriLabourersFemalesLessThan3Months", "marginalAgriLabourersMales", "marginalAgriLabourersMales3To6Months", "marginalAgriLabourersMalesLessThan3Months", "marginalAgriLabourersPersons", "marginalAgriLabourersPersons3To6Months", "marginalAgriLabourersPersonsLessThan3Months", "marginalCultivatorsFemales", "marginalCultivatorsFemales3To6Months", "marginalCultivatorsFemalesLessThan3Months", "marginalCultivatorsMales", "marginalCultivatorsMales3To6Months", "marginalCultivatorsMalesLessThan3Months", "marginalCultivatorsPersons", "marginalCultivatorsPersons3To6Months", "marginalCultivatorsPersonsLessThan3Months", "marginalOtherWorkersFemales3To6Months", "marginalOtherWorkersFemalesLessThan3Months", "marginalOtherWorkersMales3To6Months", "marginalOtherWorkersMalesLessThan3Months", "marginalOtherWorkersPersons3To6Months", "marginalOtherWorkersPersonsLessThan3Months", "marginalWorkers3To6MonthsFemales", "marginalWorkers3To6MonthsMales", "marginalWorkers3To6MonthsPersons", "marginalWorkersFemales", "marginalWorkersHouseholdIndustriesFemales", "marginalWorkersHouseholdIndustriesFemales3To6Months", "marginalWorkersHouseholdIndustriesFemalesLessThan3Months", "marginalWorkersHouseholdIndustriesMales", "marginalWorkersHouseholdIndustriesMales3To6Months", "marginalWorkersHouseholdIndustriesMalesLessThan3Months", "marginalWorkersHouseholdIndustriesPersons", "marginalWorkersHouseholdIndustriesPersons3To6Months", "marginalWorkersHouseholdIndustriesPersonsLessThan3Months", "marginalWorkersLessThan3MonthsFemales", "marginalWorkersLessThan3MonthsMales", "marginalWorkersLessThan3MonthsPersons", "marginalWorkersMales", "marginalWorkersOtherWorkersFemales", "marginalWorkersOtherWorkersMales", "marginalWorkersOtherWorkersPersons", "marginalWorkersPersons", "noOfHousehold", "nonWorkersFemales", "nonWorkersMales", "nonWorkersPersons", "populationInAgeFemales", "populationInAgeMales", "populationInAgePersons", "stateCode", "subDistrictCode", "totalPopulationFemales", "totalPopulationMales", "totalPopulationPersons", "totalRuralUrban", "totalWorkersFemales", "totalWorkersMales", "totalWorkersPersons", "townVillageCode", "tribePopulationFemales", "tribePopulationMales", "tribePopulationPersons", "wardCode", "workersCultiFemales", "workersCultiMales", "workersCultiPersons") SELECT "areaName", "castePopulationFemales", "castePopulationMales", "castePopulationPersons", "districtCode", "enumerationBlockCode", "id", "illiteratesFemales", "illiteratesMales", "illiteratesPersons", "levelOfAdminUnit", "literatesFemales", "literatesMales", "literatesPersons", "mainWorkersAgriLabourersFemales", "mainWorkersAgriLabourersMales", "mainWorkersAgriLabourersPersons", "mainWorkersFemales", "mainWorkersHouseholdIndustriesFemales", "mainWorkersHouseholdIndustriesMales", "mainWorkersHouseholdIndustriesPersons", "mainWorkersMales", "mainWorkersOtherWorkersFemales", "mainWorkersOtherWorkersMales", "mainWorkersOtherWorkersPersons", "mainWorkersPersons", "marginalAgriLabourersFemales", "marginalAgriLabourersFemales3To6Months", "marginalAgriLabourersFemalesLessThan3Months", "marginalAgriLabourersMales", "marginalAgriLabourersMales3To6Months", "marginalAgriLabourersMalesLessThan3Months", "marginalAgriLabourersPersons", "marginalAgriLabourersPersons3To6Months", "marginalAgriLabourersPersonsLessThan3Months", "marginalCultivatorsFemales", "marginalCultivatorsFemales3To6Months", "marginalCultivatorsFemalesLessThan3Months", "marginalCultivatorsMales", "marginalCultivatorsMales3To6Months", "marginalCultivatorsMalesLessThan3Months", "marginalCultivatorsPersons", "marginalCultivatorsPersons3To6Months", "marginalCultivatorsPersonsLessThan3Months", "marginalOtherWorkersFemales3To6Months", "marginalOtherWorkersFemalesLessThan3Months", "marginalOtherWorkersMales3To6Months", "marginalOtherWorkersMalesLessThan3Months", "marginalOtherWorkersPersons3To6Months", "marginalOtherWorkersPersonsLessThan3Months", "marginalWorkers3To6MonthsFemales", "marginalWorkers3To6MonthsMales", "marginalWorkers3To6MonthsPersons", "marginalWorkersFemales", "marginalWorkersHouseholdIndustriesFemales", "marginalWorkersHouseholdIndustriesFemales3To6Months", "marginalWorkersHouseholdIndustriesFemalesLessThan3Months", "marginalWorkersHouseholdIndustriesMales", "marginalWorkersHouseholdIndustriesMales3To6Months", "marginalWorkersHouseholdIndustriesMalesLessThan3Months", "marginalWorkersHouseholdIndustriesPersons", "marginalWorkersHouseholdIndustriesPersons3To6Months", "marginalWorkersHouseholdIndustriesPersonsLessThan3Months", "marginalWorkersLessThan3MonthsFemales", "marginalWorkersLessThan3MonthsMales", "marginalWorkersLessThan3MonthsPersons", "marginalWorkersMales", "marginalWorkersOtherWorkersFemales", "marginalWorkersOtherWorkersMales", "marginalWorkersOtherWorkersPersons", "marginalWorkersPersons", "noOfHousehold", "nonWorkersFemales", "nonWorkersMales", "nonWorkersPersons", "populationInAgeFemales", "populationInAgeMales", "populationInAgePersons", "stateCode", "subDistrictCode", "totalPopulationFemales", "totalPopulationMales", "totalPopulationPersons", "totalRuralUrban", "totalWorkersFemales", "totalWorkersMales", "totalWorkersPersons", "townVillageCode", "tribePopulationFemales", "tribePopulationMales", "tribePopulationPersons", "wardCode", "workersCultiFemales", "workersCultiMales", "workersCultiPersons" FROM "Data";
DROP TABLE "Data";
ALTER TABLE "new_Data" RENAME TO "Data";
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "City_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_City" ("cityCode", "districtId", "id", "name", "slug", "stateId") SELECT "cityCode", "districtId", "id", "name", "slug", "stateId" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE UNIQUE INDEX "City_cityCode_key" ON "City"("cityCode");
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");
CREATE TABLE "new_Village" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "villageCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "pincode" TEXT,
    "villageType" TEXT,
    "deliveryStatus" TEXT,
    "divisionName" TEXT,
    "regionName" TEXT,
    "circleName" TEXT,
    "telephone" TEXT,
    "relatedSuboffice" TEXT,
    "relatedHeadoffice" TEXT,
    CONSTRAINT "Village_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Village_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Village_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Village" ("circleName", "cityId", "deliveryStatus", "districtId", "divisionName", "id", "name", "pincode", "regionName", "relatedHeadoffice", "relatedSuboffice", "slug", "stateId", "telephone", "villageCode", "villageType") SELECT "circleName", "cityId", "deliveryStatus", "districtId", "divisionName", "id", "name", "pincode", "regionName", "relatedHeadoffice", "relatedSuboffice", "slug", "stateId", "telephone", "villageCode", "villageType" FROM "Village";
DROP TABLE "Village";
ALTER TABLE "new_Village" RENAME TO "Village";
CREATE UNIQUE INDEX "Village_villageCode_key" ON "Village"("villageCode");
CREATE UNIQUE INDEX "Village_slug_key" ON "Village"("slug");
CREATE TABLE "new_Year" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "stateId" INTEGER,
    "districtId" INTEGER,
    "cityId" INTEGER,
    "villageId" INTEGER,
    "dataId" INTEGER,
    "ruralDataId" INTEGER,
    "urbanDataId" INTEGER,
    CONSTRAINT "Year_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Year_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Year_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Year_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "Village" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Year_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Year_ruralDataId_fkey" FOREIGN KEY ("ruralDataId") REFERENCES "Data" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Year_urbanDataId_fkey" FOREIGN KEY ("urbanDataId") REFERENCES "Data" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Year" ("cityId", "dataId", "districtId", "id", "ruralDataId", "stateId", "urbanDataId", "villageId", "year") SELECT "cityId", "dataId", "districtId", "id", "ruralDataId", "stateId", "urbanDataId", "villageId", "year" FROM "Year";
DROP TABLE "Year";
ALTER TABLE "new_Year" RENAME TO "Year";
CREATE UNIQUE INDEX "Year_dataId_key" ON "Year"("dataId");
CREATE UNIQUE INDEX "Year_ruralDataId_key" ON "Year"("ruralDataId");
CREATE UNIQUE INDEX "Year_urbanDataId_key" ON "Year"("urbanDataId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
