-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
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

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "districtCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Village" (
    "id" SERIAL NOT NULL,
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

    CONSTRAINT "Village_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "stateId" INTEGER,
    "districtId" INTEGER,
    "cityId" INTEGER,
    "villageId" INTEGER,
    "dataId" INTEGER,
    "ruralDataId" INTEGER,
    "urbanDataId" INTEGER,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "State_stateCode_key" ON "State"("stateCode");

-- CreateIndex
CREATE UNIQUE INDEX "State_slug_key" ON "State"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "District_districtCode_key" ON "District"("districtCode");

-- CreateIndex
CREATE UNIQUE INDEX "District_slug_key" ON "District"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "City_cityCode_key" ON "City"("cityCode");

-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Village_villageCode_key" ON "Village"("villageCode");

-- CreateIndex
CREATE UNIQUE INDEX "Village_slug_key" ON "Village"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Year_dataId_key" ON "Year"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "Year_ruralDataId_key" ON "Year"("ruralDataId");

-- CreateIndex
CREATE UNIQUE INDEX "Year_urbanDataId_key" ON "Year"("urbanDataId");

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Village" ADD CONSTRAINT "Village_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Village" ADD CONSTRAINT "Village_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Village" ADD CONSTRAINT "Village_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "Village"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_ruralDataId_fkey" FOREIGN KEY ("ruralDataId") REFERENCES "Data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_urbanDataId_fkey" FOREIGN KEY ("urbanDataId") REFERENCES "Data"("id") ON DELETE CASCADE ON UPDATE CASCADE;
