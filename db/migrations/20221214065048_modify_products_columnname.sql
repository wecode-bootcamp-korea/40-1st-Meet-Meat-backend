-- migrate:up
ALTER TABLE products CHANGE products_options_id products_size_id int NOT NULL;

-- migrate:down

