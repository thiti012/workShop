-- CreateTable
CREATE TABLE "BillSale" (
    "id" SERIAL NOT NULL,
    "custimerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "customerAdress" TEXT NOT NULL,
    "payDate" TIMESTAMP(3) NOT NULL,
    "payTime" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'wait',
    "statusSend" TEXT NOT NULL,

    CONSTRAINT "BillSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillSaleDetail" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "billSaleId" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "BillSaleDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BillSaleDetail" ADD CONSTRAINT "BillSaleDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillSaleDetail" ADD CONSTRAINT "BillSaleDetail_billSaleId_fkey" FOREIGN KEY ("billSaleId") REFERENCES "BillSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
