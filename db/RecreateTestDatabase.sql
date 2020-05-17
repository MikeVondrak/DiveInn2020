# Recreate test Dive Inn database

DROP DATABASE IF EXISTS dive_inn_test_db;

CREATE DATABASE dive_inn_test_db;
USE dive_inn_test_db;

DROP TABLE IF EXISTS test_table;

CREATE TABLE test_table (
    PRIMARY KEY (test_id),
    test_id          INT             NOT NULL AUTO_INCREMENT,
    test_char        CHAR(1)         NOT NULL,
    test_null_char   CHAR(1),
    test_varchar     VARCHAR(100),
    test_text        TEXT,
    test_int         INTEGER,
    test_double      DOUBLE,
    test_decimal     DECIMAL(8,2),
    test_date        DATE,          -- 'YYYY-MM-DD'
    test_time        TIME,          -- 'HH:MM:SS'
    test_datetime    DATETIME,      -- 'YYYY-MM-DD HH:MM:SS'
    test_json        JSON
);

INSERT INTO test_table (test_char, test_null_char, test_varchar, test_text, test_int, test_double, test_decimal, test_date, test_time, test_datetime, test_json) 
VALUES  
    ('a', NULL, 'abc123', 'text value', 1, 1.0001, 100000.01, '1000-01-01', '00:00:00', '1111-11-11 11:11:11', '{ "name": "testJson", "value": "object" }'),
    ('b', 'n', 'def456', 'text value number 2', 2, 2.0002, 200000.02, '2000-02-02', '02:02:02', '2222-12-22 22:22:22', '["val1", "val2", "val3", "val4"]'),
    ('c', NULL, 'ghi789', 'text value number 3', 3, 3.0003, 300000.03, '3000-03-03', '03:03:03', '3333-12-31 23:59:59', '{ "name": "testJson2", "value": ["val1", "val2", "val3"] }'),
    ('d', NULL, 'jklmno', 'text value number 4', 4, 4.0004, 400000.04, CURRENT_DATE(), CURRENT_TIME(), NOW(), '{}'),
    ('e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);


/* CREATE TABLE test_table (
    testId              INT NOT NULL AUTO_INCREMENT,
    testValue           VARCHAR(100),
    PRIMARY KEY (`testId`)
);
INSERT INTO test_table ( testValue ) VALUES 
    ( 'test value 1' ),
    ( 'test value 2' ),
    ( 'test value 3' ),
    ( 'test value 4' ); */

