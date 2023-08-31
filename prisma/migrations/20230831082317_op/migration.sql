/*
  Warnings:

  - The `debt` column on the `Costumers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Costumers" DROP COLUMN "debt",
ADD COLUMN     "debt" INTEGER;

-- AlterTable
ALTER TABLE "invoice" ADD COLUMN     "date" TIMESTAMP(3),
ALTER COLUMN "left_debt" DROP NOT NULL,
ALTER COLUMN "am_change" DROP NOT NULL;
