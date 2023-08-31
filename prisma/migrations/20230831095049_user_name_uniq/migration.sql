/*
  Warnings:

  - A unique constraint covering the columns `[manager_name]` on the table `invoice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "invoice_manager_name_key" ON "invoice"("manager_name");
