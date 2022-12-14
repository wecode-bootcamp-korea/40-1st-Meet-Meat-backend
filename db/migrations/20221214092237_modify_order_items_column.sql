-- migrate:up
ALTER TABLE order_items CHANGE total_price_with_point total_price DECIMAL(10,2) NULL;


-- migrate:down

