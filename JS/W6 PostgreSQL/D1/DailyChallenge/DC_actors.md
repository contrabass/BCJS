<!-- 1. Count how many actors are in the table. -->
The closest table name is actor, so actor will have zero. Actors has 200 items, as evident by
SELECT COUNT(*) FROM actor
as well as by the redundant
SELECT COUNT(DISTINCT actor_id) FROM actor
and by a simple
SELECT * FROM actor 
which fires a PGAdmin, which ends with the text 200 rows affected.
<!-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ? -->
Both first_name and last_name have a no-null constraint. Attempting to leave one of these empty will throw an error.