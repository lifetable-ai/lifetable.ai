-- AlterTable
ALTER TABLE "GamePackage" ALTER COLUMN "created_time" DROP NOT NULL,
ALTER COLUMN "updated_time" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Timeline" ALTER COLUMN "created_time" DROP NOT NULL,
ALTER COLUMN "updated_time" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "created_time" DROP NOT NULL,
ALTER COLUMN "updated_time" DROP NOT NULL;
