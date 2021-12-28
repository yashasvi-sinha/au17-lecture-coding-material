

-- Sample Queries for Sakila database
-- Q = All actors first and last name
SELECT first_name, last_name AS 'l-name' FROM actor

SELECT COUNT(*) AS 'Total Films' FROM film


-- Q Display all actors with their full name as 'Actor Name'
SELECT CONCAT(first_name, " ", last_name) AS 'Actor Name' FROM actor

SELECT LOWER(CONCAT(first_name, " ", last_name)) AS 'Actor Name' FROM actor


-- Q Find all the actors where the name contains letters GEN 
SELECT CONCAT(first_name, " ", last_name) AS 'Actor Name' 
FROM actor 
WHERE first_name LIKE '%GEN' OR last_name LIKE '%GEN'

SELECT COUNT(*) AS 'Total' 
FROM actor 
WHERE first_name LIKE '%GEN%' OR last_name LIKE '%GEN%'


-- Q All actors list them by last name, also show how many actors have the same last name
-- SELECT DISTINCT first_name, last_name FROM actor ORDER BY last_name

SELECT last_name, COUNT(*) actor_count
FROM actor 
GROUP BY last_name
ORDER BY actor_count DESC


/*

SELECT ****
FROM ***
WHERE ****
GROUP BY ***
ORDER BY ***



*/

MAX() , MIN([DISTINCT] expr), AVG([DISTINCT] expr), SUM([DISTINCT] expr)

SELECT SUM(replacement_cost), AVG(replacement_cost) FROM film
