/*
  Warnings:

  - You are about to drop the column `custimerName` on the `BillSale` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `BillSale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillSale" DROP COLUMN "custimerName",
ADD COLUMN     "customerName" TEXT NOT NULL;
