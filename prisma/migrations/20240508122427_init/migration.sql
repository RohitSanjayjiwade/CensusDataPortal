/*
  Warnings:

  - A unique constraint covering the columns `[districtCode]` on the table `District` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stateCode]` on the table `State` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cityCode` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `villageCode` to the `Village` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "City_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_City" ("districtId", "id", "name", "slug", "stateId") SELECT "districtId", "id", "name", "slug", "stateId" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE UNIQUE INDEX "City_cityCode_key" ON "City"("cityCode");
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");
CREATE TABLE "new_Village" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "villageCode" TEXT NOT NULL,
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
INSERT INTO "new_Village" ("circleName", "cityId", "deliveryStatus", "districtId", "divisionName", "id", "name", "pincode", "regionName", "relatedHeadoffice", "relatedSuboffice", "slug", "stateId", "telephone", "villageType") SELECT "circleName", "cityId", "deliveryStatus", "districtId", "divisionName", "id", "name", "pincode", "regionName", "relatedHeadoffice", "relatedSuboffice", "slug", "stateId", "telephone", "villageType" FROM "Village";
DROP TABLE "Village";
ALTER TABLE "new_Village" RENAME TO "Village";
CREATE UNIQUE INDEX "Village_villageCode_key" ON "Village"("villageCode");
CREATE UNIQUE INDEX "Village_slug_key" ON "Village"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "District_districtCode_key" ON "District"("districtCode");

-- CreateIndex
CREATE UNIQUE INDEX "State_stateCode_key" ON "State"("stateCode");
