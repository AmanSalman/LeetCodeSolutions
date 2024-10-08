# Write your MySQL query statement below

DELETE a
FROM person a
JOIN person b ON a.email = b.email
WHERE a.id > b.id;
