-- migrate:up
ALTER TABLE  products DROP FOREIGN KEY products_ibfk_2;
ALTER TABLE  products DROP FOREIGN KEY products_ibfk_3;
ALTER TABLE  products DROP FOREIGN KEY products_ibfk_4;
ALTER TABLE  products DROP FOREIGN KEY products_ibfk_5;


-- migrate:down

