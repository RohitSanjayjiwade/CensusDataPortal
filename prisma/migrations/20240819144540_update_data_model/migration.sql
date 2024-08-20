/*
  Warnings:

  - A unique constraint covering the columns `[year,stateId]` on the table `Year` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[year,districtId]` on the table `Year` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[year,cityId]` on the table `Year` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[year,villageId]` on the table `Year` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Year_year_stateId_key" ON "Year"("year", "stateId");

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_districtId_key" ON "Year"("year", "districtId");

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_cityId_key" ON "Year"("year", "cityId");

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_villageId_key" ON "Year"("year", "villageId");
