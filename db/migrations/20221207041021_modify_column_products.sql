-- migrate:up
ALTER TABLE products CHANGE tags_id tag_id int NULL;
ALTER TABLE products CHANGE categories_id category_ig int NOT NULL;

-- migrate:down
DROP TABLE products;
