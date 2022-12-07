-- migrate:up
CREATE TABLE categories(
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
    );


-- migrate:down
DROP TABLE categories;