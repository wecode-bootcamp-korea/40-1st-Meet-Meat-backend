-- migrate:up
ALTER TABLE customers CHANGE address1 address_default VARCHAR(200);
ALTER TABLE customers CHANGE address2 address_second VARCHAR(200); 

-- migrate:down
DROP TABLE customers;