-- migrate:up
ALTER TABLE products MODIFY column category_id int NULL;
ALTER TABLE products MODIFY column products_size_id int NULL;
ALTER TABLE products MODIFY column products_type_id int NULL;

-- migrate:down

