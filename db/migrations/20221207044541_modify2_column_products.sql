-- migrate:up
ALTER TABLE products CHANGE category_ig category_id int NOT NULL;

-- migrate:down
DROP TABLE products;
