-- migrate:up
ALTER TABLE customers MODIFY point DECIMAL(10.2);

-- migrate:down
TABLE DROP customers;
