CREATE TABLE `needzaio_db`.`typedocument_tb` ( 
    `id` INT NOT NULL AUTO_INCREMENT ,
    `name_type_document` VARCHAR(50) NOT NULL ,  
     PRIMARY KEY  (`id`)
) ENGINE = InnoDB;
CREATE TABLE `needzaio_db`.`country_tb` ( 
    `id` INT NOT NULL AUTO_INCREMENT ,
    `country_code` VARCHAR(4) NOT NULL ,  
    `country_name` VARCHAR(100) NOT NULL ,  
     PRIMARY KEY  (`id`)
) ENGINE = InnoDB;
CREATE TABLE `needzaio_db`.`appuser_tb` ( 
    `id` INT NOT NULL AUTO_INCREMENT ,
    `last_name` VARCHAR(20) NOT NULL ,  
    `name` VARCHAR(20) NOT NULL ,
    `is_military` BOOLEAN NOT NULL ,
    `time_create` DATE NOT NULL , 
    `is_temporal` BOOLEAN NOT NULL , 
    `user_name` VARCHAR(20) NOT NULL UNIQUE,
    `password` VARCHAR(20) NOT NULL,
    `email` VARCHAR(20) NOT NULL UNIQUE,  
    `email_verified` VARCHAR(20) NOT NULL UNIQUE, 
    `verification_token` VARCHAR(200) NOT NULL, 
     PRIMARY KEY  (`id`)
) ENGINE = InnoDB;
CREATE TABLE `needzaio_db`.`userdocument_tb` (
    `user_id` INT NOT NULL,
    `document` VARCHAR(20) NOT NULL UNIQUE,  
    `type_document_id` INT NOT NULL ,  
    `placeexpedition` VARCHAR(60) NOT NULL,
    `dateexpedition` DATE NOT NULL , 
    FOREIGN KEY (user_id) REFERENCES `needzaio_db`.`appuser_tb`(id),
    FOREIGN KEY (type_document_id) REFERENCES `needzaio_db`.`typedocument_tb`(id)
) ENGINE = InnoDB;
CREATE TABLE `needzaio_db`.`contacinfotb` ( 
    `id` INT NOT NULL AUTO_INCREMENT ,
    `user_id` INT NOT NULL,
    `adress` VARCHAR(60) NOT NULL ,  
    `country_id` INT NOT NULL ,  
    `city` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `cellphone` VARCHAR(20) NOT NULL UNIQUE,
    `emergency_name` VARCHAR(100) NOT NULL,
    `emergency_phone` VARCHAR(20) NOT NULL, 
    PRIMARY KEY  (`id`),
    FOREIGN KEY (user_id) REFERENCES `needzaio_db`.`appuser_tb`(id),
    FOREIGN KEY (country_id) REFERENCES `needzaio_db`.`country_tb`(id)
) ENGINE = InnoDB;