-- migrate:up
CREATE TABLE orders(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customers_id int NOT NULL,
    order_status_code_id int NOT NULL,
    detail VARCHAR(200) NOT NULL,
    FOREIGN KEY (customers_id) REFERENCES customers(id),
    FOREIGN KEY (order_status_code_id) REFERENCES order_status_code(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- migrate:down
DROP TABLE orders;
