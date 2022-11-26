/*
  Warnings:

  - You are about to drop the column `userId` on the `Timeline` table. All the data in the column will be lost.
  - You are about to drop the `GamePackage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `username` to the `Timeline` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GamePackage" DROP CONSTRAINT "GamePackage_timelineId_fkey";

-- DropForeignKey
ALTER TABLE "Timeline" DROP CONSTRAINT "Timeline_userId_fkey";

-- AlterTable
ALTER TABLE "Timeline" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "GamePackage";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_time" TIMESTAMP(3),
    "updated_time" TIMESTAMP(3),
    "remark" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_time" TIMESTAMP(3),
    "updated_time" TIMESTAMP(3),
    "remark" TEXT,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OSC" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_time" TIMESTAMP(3),
    "updated_time" TIMESTAMP(3),
    "remark" TEXT,

    CONSTRAINT "OSC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Football" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_time" TIMESTAMP(3),
    "updated_time" TIMESTAMP(3),
    "remark" TEXT,

    CONSTRAINT "Football_pkey" PRIMARY KEY ("id")
);
