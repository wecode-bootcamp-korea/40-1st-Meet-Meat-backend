-- migrate:up
CREATE TABLE tags(
        id int NOT NULL PRIMARY KEY,
        description VARCHAR(100) NULL
    );

-- migrate:down
DROP TABLE tags;
