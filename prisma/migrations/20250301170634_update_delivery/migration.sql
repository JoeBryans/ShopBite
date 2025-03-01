-- AlterTable
ALTER TABLE `order` MODIFY `deliveryStatus` VARCHAR(191) NULL DEFAULT 'pending',
    MODIFY `paymentStatus` VARCHAR(191) NULL DEFAULT 'pending';
