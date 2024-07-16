/*
  Warnings:

  - You are about to drop the column `customerAdress` on the `BillSale` table. All the data in the column will be lost.
  - Added the required column `customerAddress` to the `BillSale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillSale" DROP COLUMN "customerAdress",
ADD COLUMN     "customerAddress" TEXT NOT NULL;
