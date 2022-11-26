/*
  Warnings:

  - The `created_time` column on the `GamePackage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_time` column on the `GamePackage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_time` column on the `Timeline` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_time` column on the `Timeline` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `created_time` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated_time` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `platform` on table `GamePackage` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `start_time` on the `Timeline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "GamePackage" ADD COLUMN     "timelineId" INTEGER,
ALTER COLUMN "platform" SET NOT NULL,
DROP COLUMN "created_time",
ADD COLUMN     "created_time" TIMESTAMP(3),
DROP COLUMN "updated_time",
ADD COLUMN     "updated_time" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Timeline" ADD COLUMN     "userId" INTEGER,
DROP COLUMN "start_time",
ADD COLUMN     "start_time" TIMESTAMP(3) NOT NULL,
DROP COLUMN "created_time",
ADD COLUMN     "created_time" TIMESTAMP(3),
DROP COLUMN "updated_time",
ADD COLUMN     "updated_time" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_time",
ADD COLUMN     "created_time" TIMESTAMP(3),
DROP COLUMN "updated_time",
ADD COLUMN     "updated_time" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePackage" ADD CONSTRAINT "GamePackage_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "Timeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;
