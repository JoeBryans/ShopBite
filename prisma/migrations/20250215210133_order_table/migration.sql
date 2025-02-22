/*
  Warnings:

  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `orderitem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderItem` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_productId_fkey`;

-- DropIndex
DROP INDEX `Order_productId_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `productId`,
    ADD COLUMN `deliveryStatus` VARCHAR(191) NULL,
    ADD COLUMN `orderItem` JSON NOT NULL,
    ADD COLUMN `paymentStatus` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `orderitem`;
