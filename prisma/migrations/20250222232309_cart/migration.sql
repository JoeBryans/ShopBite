/*
  Warnings:

  - You are about to drop the column `totalQty` on the `cartitem` table. All the data in the column will be lost.
  - You are about to drop the `_carttocartitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_carttocartitem` DROP FOREIGN KEY `_CartToCartItem_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carttocartitem` DROP FOREIGN KEY `_CartToCartItem_B_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_userId_fkey`;

-- AlterTable
ALTER TABLE `cartitem` DROP COLUMN `totalQty`,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `qty` INTEGER NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_carttocartitem`;

-- DropTable
DROP TABLE `cart`;

-- CreateIndex
CREATE UNIQUE INDEX `CartItem_userId_key` ON `CartItem`(`userId`);

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
