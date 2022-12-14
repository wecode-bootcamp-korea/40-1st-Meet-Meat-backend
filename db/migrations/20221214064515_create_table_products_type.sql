-- migrate:up
CREATE TABLE products_type(
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        type VARCHAR(100) NULL
    );

-- migrate:down
DROP TABLE products_type
