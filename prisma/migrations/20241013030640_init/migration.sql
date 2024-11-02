/*
  Warnings:

  - The values [SATURDAY] on the enum `Day` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `birthday` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the `Annoucement` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `bloodType` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `parentId` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthday` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bloodType` on table `Teacher` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthday` on table `Teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Day_new" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');
ALTER TABLE "Lesson" ALTER COLUMN "day" TYPE "Day_new" USING ("day"::text::"Day_new");
ALTER TYPE "Day" RENAME TO "Day_old";
ALTER TYPE "Day_new" RENAME TO "Day";
DROP TYPE "Day_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Annoucement" DROP CONSTRAINT "Annoucement_classId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_parentId_fkey";

-- AlterTable
ALTER TABLE "Parent" DROP COLUMN "birthday";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "image",
ADD COLUMN     "img" TEXT,
ALTER COLUMN "bloodType" SET NOT NULL,
ALTER COLUMN "parentId" SET NOT NULL,
ALTER COLUMN "birthday" SET NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "image",
ADD COLUMN     "img" TEXT,
ALTER COLUMN "bloodType" SET NOT NULL,
ALTER COLUMN "birthday" SET NOT NULL;

-- DropTable
DROP TABLE "Annoucement";

-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "classId" INTEGER,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
