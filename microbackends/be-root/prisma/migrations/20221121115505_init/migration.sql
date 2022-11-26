-- AlterTable
ALTER TABLE "GamePackage" ALTER COLUMN "created_time" SET DATA TYPE TEXT,
ALTER COLUMN "updated_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Timeline" ALTER COLUMN "start_time" SET DATA TYPE TEXT,
ALTER COLUMN "created_time" SET DATA TYPE TEXT,
ALTER COLUMN "updated_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "created_time" SET DATA TYPE TEXT,
ALTER COLUMN "updated_time" SET DATA TYPE TEXT;
