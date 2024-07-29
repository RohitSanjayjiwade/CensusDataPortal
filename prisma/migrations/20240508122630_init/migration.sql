-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Village" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "villageCode" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "pincode" TEXT,
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
INSERT INTO "new_Village" ("circleName", "cityId", "deliveryStatus", "districtId", "divisionName", "id", "name", "pincode", "regionName", "relatedHeadoffice", "relatedSuboffice", "slug", "stateId", "telephone", "villageCode", "villageType") SELECT "circleName", "cityId", "deliveryStatus", "districtId", "divisionName", "id", "name", "pincode", "regionName", "relatedHeadoffice", "relatedSuboffice", "slug", "stateId", "telephone", "villageCode", "villageType" FROM "Village";
DROP TABLE "Village";
ALTER TABLE "new_Village" RENAME TO "Village";
CREATE UNIQUE INDEX "Village_villageCode_key" ON "Village"("villageCode");
CREATE UNIQUE INDEX "Village_slug_key" ON "Village"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
