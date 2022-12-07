-- migrate:up
CREATE TABLE order_item_status_code(
    id int NOT NULL PRIMARY KEY,
    description VARCHAR(100) NOT NULL
    );

-- migrate:down
DROP TABLE order_item_status_code
