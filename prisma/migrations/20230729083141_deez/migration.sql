/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Follows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_followingId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "bio";

-- DropTable
DROP TABLE "Follows";

-- CreateTable
CREATE TABLE "Costumers" (
    "id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "debt" TEXT NOT NULL,

    CONSTRAINT "Costumers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" TEXT NOT NULL,
    "manager_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "left_debt" TEXT NOT NULL,
    "paid_debt" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);
