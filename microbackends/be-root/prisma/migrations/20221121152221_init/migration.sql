/*
  Warnings:

  - You are about to drop the column `username` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Football` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `OSC` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Timeline` table. All the data in the column will be lost.
  - Added the required column `email` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Football` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `OSC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Timeline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Film" DROP COLUMN "username",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Football" DROP COLUMN "username",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OSC" DROP COLUMN "username",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Timeline" DROP COLUMN "username",
ADD COLUMN     "email" TEXT NOT NULL;
