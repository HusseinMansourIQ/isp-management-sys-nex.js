/*
  Warnings:

  - You are about to drop the column `paid_debt` on the `invoice` table. All the data in the column will be lost.
  - Added the required column `am_change` to the `invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "paid_debt",
ADD COLUMN     "am_change" TEXT NOT NULL;
