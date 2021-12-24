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
	`comment` TEXT,
	PRIMARY KEY (`course_id`) 
);


ALTER TABLE courses (
	instructor_id smallint
);

ALTER TABLE courses MODIFY COLUMN(
	`course_id` INT NOT NULL AUTO_INCREMENT
);

ALTER TABLE `courses` MODIFY COLUMN `course_id` INT AUTO_INCREMENT;

/* */
DROP TABLE attainu_database.courses;


/*DML
INSERT
UPDATE
DELETE
*/


INSERT INTO courses(number_lectures, course_name, duration_in_hours) 
VALUES(15, "FE", 24.999);


UPDATE courses SET number_lectures = 35 WHERE course_name="BE";

/* course_id=3 */

DELETE FROM courses WHERE course_id=2;


/* DQL
	SELECT
 */
 
 
 SELECT course_name, number_lectures
 FROM courses 
 WHERE 
 duration_in_hours > 19.6; 


 SELECT *
 FROM courses 
 WHERE 
 duration_in_hours > 19.6;  
 
 
 
SELECT * FROM film 
WHERE 
release_year = 2006 AND rating="PG" AND rental_rate <= 3 
ORDER BY LENGTH DESC
;
 

