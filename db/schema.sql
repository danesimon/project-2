CREATE DATABASE bandmember_db;

USE bandmember_db;

CREATE TABLE bandmembers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    zipcode INT(5) NOT NULL,
    genre VARCHAR (100) NOT NULL,
    instrument VARCHAR (100) NOT NULL,
    music VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
);

