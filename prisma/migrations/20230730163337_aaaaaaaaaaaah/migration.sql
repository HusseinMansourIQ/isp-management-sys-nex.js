/*
  Warnings:

  - Changed the type of `left_debt` on the `invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `am_change` on the `invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "left_debt",
ADD COLUMN     "left_debt" INTEGER NOT NULL,
DROP COLUMN "am_change",
ADD COLUMN     "am_change" INTEGER NOT NULL;
