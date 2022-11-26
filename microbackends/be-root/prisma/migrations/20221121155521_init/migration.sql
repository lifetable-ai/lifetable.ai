/*
  Warnings:

  - You are about to drop the `OSC` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OSC";

-- CreateTable
CREATE TABLE "Osc" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_time" TIMESTAMP(3),
    "updated_time" TIMESTAMP(3),
    "remark" TEXT,

    CONSTRAINT "Osc_pkey" PRIMARY KEY ("id")
);
