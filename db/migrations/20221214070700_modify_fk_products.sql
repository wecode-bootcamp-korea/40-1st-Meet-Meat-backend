-- migrate:up
ALTER TABLE products ADD CONSTRAINT tag_id_fk FOREIGN KEY (tag_id) REFERENCES tags(id);
ALTER TABLE products ADD CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id);
ALTER TABLE products ADD CONSTRAINT products_size_id_fk FOREIGN KEY (products_size_id) REFERENCES products_size(id);
ALTER TABLE products ADD CONSTRAINT products_type_id_fk FOREIGN KEY (products_type_id) REFERENCES products_type(id);

-- migrate:down