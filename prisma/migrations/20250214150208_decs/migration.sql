/*
  Warnings:

  - You are about to alter the column `description` on the `product` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `warranty` TEXT NULL,
    MODIFY `description` JSON NOT NULL;
