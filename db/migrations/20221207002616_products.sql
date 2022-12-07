-- migrate:up
CREATE TABLE products(
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,1) NOT NULL,
    image VARCHAR(1000) NULL,
    description VARCHAR(1000) NOT NULL,
    date VARCHAR(100) NULL,
    tags_id int NULL,
    categories_id int NOT NULL,
    products_options_id int NOT NULL,
    FOREIGN KEY (tags_id) REFERENCES tags(id),
    FOREIGN KEY (categories_id) REFERENCES categories(id),
    FOREIGN KEY (products_options_id) REFERENCES products_options(id)
    );

-- migrate:down
DROP TABLE products;
