/*
  Warnings:

  - Added the required column `overview` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `overview` JSON NOT NULL,
    ADD COLUMN `shippingInfo` TEXT NULL,
    ADD COLUMN `sku` VARCHAR(191) NULL,
    MODIFY `description` TEXT NULL;
