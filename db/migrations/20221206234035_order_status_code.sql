-- migrate:up
CREATE TABLE order_status_code(
    id int NOT NULL PRIMARY KEY,
    description VARCHAR(50) NOT NULL
    );

-- migrate:down
DROP TABLE order_status_code;
