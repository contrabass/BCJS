<!-- Add the following items to the items table:
Small Desk – 100 (ie. price)
Large desk – 300
Fan – 80 -->
-- insert into items (item_name,price)
-- values('Small Desk', 300),
-- ('Large Desk', 300),
-- ('Fan',80)

<!-- Add 5 new customers to the customers table:
Greg Jones
Sandra Jones
Scott Scott
Trevor Green
Melanie Johnson -->

-- INSERT INTO Customers("first_Name", lastname)
-- values('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson')

<!-- Use SQL to fetch the following data from the database:
All the items. -->
-- SELECT * FROM ITEMS

<!-- All the items with a price above 80 (80 not included). -->
-- SELECT * FROM ITEMS WHERE PRICE::numeric > 80

<!-- All the items with a price below 300. (300 included) -->
-- SELECT * FROM ITEMS WHERE PRICE::numeric <= 300

<!-- All customers who’s last name is ‘Smith’ (What will be your outcome?). -->
-- SELECT * FROM customers WHERE lastname = 'Smith'
-- -- There are no customers with that name, results are empty

<!-- All customers who’s last name is ‘Jones’. -->
-- SELECT * FROM customers WHERE lastname = 'Jones'

<!-- All customers who’s firstname is not ‘Scott’. -->
-- SELECT * FROM customers WHERE lastname != 'Scott'






