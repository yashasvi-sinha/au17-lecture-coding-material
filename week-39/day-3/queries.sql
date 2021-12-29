-- Inner join
SELECT users.auid, userprofile.auid AS profile, username, PASSWORD, firstname, lastname 
FROM users INNER JOIN userprofile
ON users.auid = userprofile.auid;


SELECT * FROM users LEFT OUTER JOIN userprofile
ON users.auid = userprofile.auid


SELECT * FROM userprofile LEFT OUTER JOIN users
ON users.auid = userprofile.auid

SELECT * FROM userprofile RIGHT OUTER JOIN users
ON users.auid = userprofile.auid


SELECT * FROM userprofile CROSS JOIN users
ON users.auid = userprofile.auid



/* JOIN QUERIES FOR SAKILA DB */

-- Q1 Find first, last names as well as address of each staff member

SELECT staff.first_name, staff.last_name, address.address  
FROM staff INNER JOIN address
ON staff.address_id = address.address_id



-- Q2 List film and the number of actors listed for that specific film

SELECT film.film_id, film.title, COUNT(*) number_of_actors
FROM film INNER JOIN film_actor
ON film.film_id = film_actor.film_id
GROUP BY film.title
ORDER BY number_of_actors DESC


-- Q3 Find number of copies of films that exists in inventory.
-- SELECT film_id, COUNT(*) FROM inventory GROUP BY film_id

SELECT film.film_id, film.title, COUNT(*) in_stock
FROM film INNER JOIN inventory
ON film.film_id = inventory.film_id
GROUP BY film.film_id
ORDER BY in_stock


-- Q4 Find the total paid by each customer 
SELECT customer.first_name, customer.last_name, SUM(payment.amount) Total_Paid
from payment JOIN customer
ON payment.customer_id = customer.customer_id
GROUP BY customer.first_name, customer.last_name
ORDER BY Total_Paid DESC, customer.first_name 
 







