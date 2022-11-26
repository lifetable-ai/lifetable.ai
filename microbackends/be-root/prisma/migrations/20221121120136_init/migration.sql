/*
  Warnings:

  - You are about to drop the column `timelineId` on the `GamePackage` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Timeline` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "GamePackage" DROP CONSTRAINT "GamePackage_timelineId_fkey";

-- DropForeignKey
ALTER TABLE "Timeline" DROP CONSTRAINT "Timeline_userId_fkey";

-- AlterTable
ALTER TABLE "GamePackage" DROP COLUMN "timelineId",
ALTER COLUMN "platform" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Timeline" DROP COLUMN "userId";
