-- migrate:up
ALTER TABLE products ADD FOREIGN KEY (tag_id) REFERENCES tags(id);
ALTER TABLE products ADD FOREIGN KEY (category_id) REFERENCES categories(id);

-- migrate:down
DROP TABLE products;
