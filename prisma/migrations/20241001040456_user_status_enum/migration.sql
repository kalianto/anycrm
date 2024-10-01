/*
  Warnings:

  - You are about to alter the column `status` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `status` ENUM('PENDING', 'INACTIVE', 'ACTIVE') NOT NULL;
