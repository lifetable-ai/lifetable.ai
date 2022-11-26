-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_active" BOOLEAN DEFAULT true,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL,
    "remark" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" SERIAL NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER,
    "userId" INTEGER,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL,
    "remark" TEXT,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GamePackage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "timelineId" INTEGER,
    "created_time" TIMESTAMP(3) NOT NULL,
    "updated_time" TIMESTAMP(3) NOT NULL,
    "remark" TEXT,

    CONSTRAINT "GamePackage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePackage" ADD CONSTRAINT "GamePackage_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "Timeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;
