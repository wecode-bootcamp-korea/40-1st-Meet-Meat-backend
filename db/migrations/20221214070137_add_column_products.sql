-- migrate:up
ALTER TABLE products ADD products_type_id int NOT NULL;

-- migrate:down
