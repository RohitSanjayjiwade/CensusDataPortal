-- CreateTable
CREATE TABLE "Data" (
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
    "nonWorkersFemales" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "State" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "District" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    CONSTRAINT "District_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "City_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Village" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "villageType" TEXT,
    "deliveryStatus" TEXT,
    "divisionName" TEXT,
    "regionName" TEXT,
    "circleName" TEXT,
    "telephone" TEXT,
    "relatedSuboffice" TEXT,
    "relatedHeadoffice" TEXT,
    CONSTRAINT "Village_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Village_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Village_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Year" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "stateId" INTEGER,
    "districtId" INTEGER,
    "cityId" INTEGER,
    "villageId" INTEGER,
    "dataId" INTEGER,
    "ruralDataId" INTEGER,
    "urbanDataId" INTEGER,
    CONSTRAINT "Year_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Year_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Year_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Year_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "Village" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Year_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Year_ruralDataId_fkey" FOREIGN KEY ("ruralDataId") REFERENCES "Data" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Year_urbanDataId_fkey" FOREIGN KEY ("urbanDataId") REFERENCES "Data" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "State_slug_key" ON "State"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "District_slug_key" ON "District"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Village_slug_key" ON "Village"("slug");
