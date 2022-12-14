-- migrate:up
ALTER TABLE products MODIFY column description VARCHAR(1000) NULL;

-- migrate:down

