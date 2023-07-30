/*
  Warnings:

  - You are about to drop the column `manager_id` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `invoice` table. All the data in the column will be lost.
  - Added the required column `manager_name` to the `invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "manager_id",
DROP COLUMN "user_id",
ADD COLUMN     "manager_name" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL;
