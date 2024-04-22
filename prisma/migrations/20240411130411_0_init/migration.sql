-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `provider` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NULL,
    `street` VARCHAR(255) NULL,
    `postcode` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
