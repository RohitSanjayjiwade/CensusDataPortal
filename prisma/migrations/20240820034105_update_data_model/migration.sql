/*
  Warnings:

  - A unique constraint covering the columns `[year]` on the table `Year` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Year_year_key" ON "Year"("year");
