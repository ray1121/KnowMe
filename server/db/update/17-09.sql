CREATE SCHEMA `KnowMe` DEFAULT CHARACTER SET utf8 ;


CREATE TABLE `KnowMe`.`User` (
  `id` INT(32) NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  `password` VARCHAR(32) NULL,
  PRIMARY KEY (`id`));