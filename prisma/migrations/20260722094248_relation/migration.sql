/*
  Warnings:

  - Added the required column `class` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "class" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
