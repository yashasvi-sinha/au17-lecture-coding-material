/*
DDL
=======
CREATE
ALTER
TRUNCATE
DROPbank
RENAME
*/

/* SQL Query to create a database */
CREATE DATABASE attainu_database;


CREATE TABLE courses (
	course_id INT,
	course_name VARCHAR(100),
	number_lectures SMALLINT,
	duration_in_hours FLOAT,
	`comment` TEXT
);


/*DML
INSERT
UPDATE
DELETE
*/

INSERT INTO students VALUES(1, "Test Student", "5854571547");

INSERT INTO students VALUES(2, "Test Student2", "5854571547");
INSERT INTO students VALUES(3, "Test Student3", "5854571547");


INSERT INTO courses VALUES(1, "FullStack", 15, 21.56, "ASDASD");


