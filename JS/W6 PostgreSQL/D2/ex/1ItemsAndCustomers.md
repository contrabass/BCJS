-- Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
-- SELECT * FROM items
-- ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items
-- WHERE price::numeric >= 80
-- ORDER BY price DESC

-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT last_name, first_name from customers
-- ORDER BY last_name ASC
-- LIMIT 3

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name from customers
-- ORDER BY last_name DESC

-- 2.Create a table named purchases. It should have 2 columns : customer_id and item_id. These columns are references from the tables customers and items. Edit the data of the purchases table:
CREATE TABLE purchases(
	purchase_id INT GENERATED ALWAYS AS IDENTITY,
	customer_id INT,
	item_id INT,
	PRIMARY KEY (purchase_id),
	CONSTRAINT fk_customer
		FOREIGN KEY (customer_id)
			REFERENCES customers(id),
	CONSTRAINT fk_items
		FOREIGN KEY (item_id)
			REFERENCES items(id)
)

-- 2.1. Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
INSERT INTO purchases (customer_id)
VALUES (1)
--seemingly worked
-- 2.2. Add 5 rows which reference existing customers and items.
INSERT INTO purchases (customer_id, item_id)
VALUES(1,1),
(1,2),
(2,3),
(3,1),
(5,2);

-- 3. Use SQL to get the following from the database:
-- 3.1. All purchases. Is this information useful to us?
SELECT * FROM purchases;
-- 3.2. All purchases, joining with the customers table.
SELECT * FROM purchases LEFT JOIN customers ON customer_id = id
-- 3.3. Purchases of the customer with the ID equal to 4.
SELECT * FROM purchases JOIN customers ON customer_id = id WHERE id=4
-- 3.4. Purchases for a large desk AND a small desk
SELECT
id, item_name, price, purchase_id, customer_id, item_id
FROM purchases JOIN items ON item_id = id WHERE item_name LIKE '%Desk';

-- 4. Create a purchase for Scott Scott – he bought a hard drive.
INSERT INTO items (item_name,price)
VALUES ('Hard Drive', 9.99)
SELECT id FROM items WHERE item_name = 'Hard Drive'
INSERT INTO purchases (customer_id,item_id)
VALUES (3,4)

-- 5. Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- 5.1. Customer first name
SELECT first_name FROM purchases INNER JOIN customers on purchases.customer_id = customers.id

-- 5.2. Customer last name
SELECT last_name FROM purchases INNER JOIN customers on purchases.customer_id = customers.id
SELECT first_name, last_name FROM purchases INNER JOIN customers on purchases.customer_id = customers.id

-- 5.3. Item name
SELECT item_name FROM purchases INNER JOIN items ON purchases.item_id = items.id

-- not required in assignment
SELECT first_name, last_name, item_name, price from purchases INNER JOIN customers ON purchases.customer_id = customers.id INNER JOIN items ON purchases.item_id = items.id