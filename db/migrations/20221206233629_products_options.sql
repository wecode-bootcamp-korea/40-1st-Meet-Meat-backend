-- migrate:up
CREATE TABLE products_options(
    id int NOT NULL PRIMARY KEY,
    size VARCHAR(50) NULL,
    type VARCHAR(50) NULL
    );

-- migrate:down
DROP TABLE products_options;
