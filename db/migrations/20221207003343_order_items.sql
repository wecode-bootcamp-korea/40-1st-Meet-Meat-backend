-- migrate:up
CREATE TABLE order_items(
    id int NOT NULL PRIMARY KEY,
    orders_id int NOT NULL,
    products_id int NOT NULL,
    total_price_with_point DECIMAL(10,1) NULL,
    total_quantity int NULL,
    order_item_status_code_id int NULL,
    FOREIGN KEY (order_item_status_code_id) REFERENCES order_item_status_code(id),
    FOREIGN KEY (products_id) REFERENCES products(id),
    FOREIGN KEY (orders_id) REFERENCES orders(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- migrate:down
DROP TABLE order_items;
