# Recreate test Dive Inn database

DROP DATABASE IF EXISTS dive_inn_test_db;

CREATE DATABASE dive_inn_test_db;
USE dive_inn_test_db;

# Create default user if it doesn't exist
DROP USER IF EXISTS 'DiveMaster'@'localhost';
CREATE USER 'DiveMaster'@'localhost' IDENTIFIED WITH mysql_native_password BY 'D1v3M4st3r!!';
GRANT ALL PRIVILEGES ON *.* TO 'DiveMaster'@'localhost'; # IDENTIFIED BY 'D1v3M4st3r!!';
FLUSH PRIVILEGES;

# TODO - How TF to do IF statements
-- IF EXISTS USER 'DiveMaster'@localhost' THEN
--     \! echo 'exists';
-- ELSE
--     \! echo 'not exists';
-- END IF

# Recreate test table

DROP TABLE IF EXISTS test_table;

CREATE TABLE test_table (
    PRIMARY KEY (test_id),
    test_id         INT             NOT NULL AUTO_INCREMENT,
    test_char       CHAR(1)         NOT NULL,
    test_null_char  CHAR(1),
    test_varchar    VARCHAR(100),
    test_text       TEXT,
    test_int        INTEGER,
    test_double     DOUBLE,
    test_decimal    DECIMAL(8,2),
    test_date       DATE,          -- 'YYYY-MM-DD'
    test_time       TIME,          -- 'HH:MM:SS'
    test_datetime   DATETIME,      -- 'YYYY-MM-DD HH:MM:SS'
    test_json       JSON
);

INSERT INTO test_table (test_char, test_null_char, test_varchar, test_text, test_int, test_double, test_decimal, test_date, test_time, test_datetime, test_json)
VALUES
    ('a', NULL, 'abc123', 'text value', 1, 1.0001, 100000.01, '1000-01-01', '00:00:00', '1111-11-11 11:11:11', '{ "name": "testJson", "value": "object" }'),
    ('b', 'n', 'def456', 'text value number 2', 2, 2.0002, 200000.02, '2000-02-02', '02:02:02', '2222-12-22 22:22:22', '["val1", "val2", "val3", "val4"]'),
    ('c', NULL, 'ghi789', 'text value number 3', 3, 3.0003, 300000.03, '3000-03-03', '03:03:03', '3333-12-31 23:59:59', '{ "name": "testJson2", "value": ["val1", "val2", "val3"] }'),
    ('d', NULL, 'jklmno', 'text value number 4', 4, 4.0004, 400000.04, CURRENT_DATE(), CURRENT_TIME(), NOW(), '{}'),
    ('e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);


DROP TABLE IF EXISTS font_type;
CREATE TABLE font_type (
    PRIMARY KEY (font_type_id),
    font_type_id    INT             NOT NULL AUTO_INCREMENT,
    type            VARCHAR(20)     NOT NULL
);
INSERT INTO font_type (type)
VALUES
    ('page_title'),
    ('main_nav'),
    ('section_title'),
    ('section_header'),
    ('section_text');

-- DROP TABLE IF EXISTS google_fonts;
-- CREATE TABLE fonts (
--     PRIMARY KEY (font_id),
--     font_id         INT             NOT NULL AUTO_INCREMENT,
--     family          VARCHAR(20)     NOT NULL,
--     href            VARCHAR(20)     NOT NULL,
--     ui_text         DECIMAL(4,3),
--     options         JSON
-- );
-- INSERT INTO fonts (font_family, font_size_rem, font_weight, letter_spacing)
-- VALUES
--     ('Alfa Slab One', 'Alfa+Slab+One', null, null),
--     ('Anton', 'Anton', null, null),
--     ('Bevan', 'Bevan', null, null),
--     ('Patua One', 'Patua+One', null, null),
--     ('Piedra', 'Piedra', null, null),
--     ('PT Sans', 'PT+Sans:wght@400;700', null, {});

DROP TABLE IF EXISTS fonts;
CREATE TABLE fonts (
    PRIMARY KEY (font_id),
    font_id         INT             NOT NULL AUTO_INCREMENT,
    font_family     VARCHAR(20)     NOT NULL,
    ui_text         VARCHAR(20),
    href_name       VARCHAR(20)
);
INSERT INTO fonts (font_family, ui_text, href_name)
VALUES
    ('Alfa Slab One', null, null),
    ('Anton', null, null),
    ('Bevan', null, null),
    ('Patua One', null, null),
    ('Piedra', null, null),
    ('PT Sans', null, null),
    ('PT Sans', 'PT Sans Bold', 'PT+Sans:wght@700');


-- DROP TABLE IF EXISTS header_fonts;
-- CREATE TABLE header_fonts (
--     PRIMARY KEY (header_font_id),
--     header_font_id          INT     NOT NULL AUTO_INCREMENT,
--     fk_fonts_font_id        INT     NOT NULL,
--     FOREIGN KEY (fk_fonts_font_id) 
--         REFERENCES fonts(font_id)
--         ON DELETE CASCADE
-- );
-- INSERT INTO header_fonts (fk_fonts_font_id)
-- VALUES
--     (1), (2), (3), (4), (5);

-- DROP TABLE IF EXISTS text_fonts;
-- CREATE TABLE text_fonts (
--     PRIMARY KEY (text_font_id),
--     text_font_id            INT     NOT NULL AUTO_INCREMENT,
--     fk_fonts_font_id        INT     NOT NULL,
--     FOREIGN KEY (fk_fonts_font_id) 
--         REFERENCES fonts(font_id)
--         ON DELETE CASCADE
-- );
-- INSERT INTO text_fonts (fk_fonts_font_id)
-- VALUES
--     (6), (7);


DROP TABLE IF EXISTS font_setting;
CREATE TABLE font_setting (
    PRIMARY KEY (font_setting_id),
    font_setting_id             INT     NOT NULL AUTO_INCREMENT,
    fk_font_type_font_type_id   INT     NOT NULL,   
    FOREIGN KEY (fk_font_type_font_type_id) 
        REFERENCES font_type(font_type_id)
        ON DELETE CASCADE,
    fk_fonts_font_id            INT     NOT NULL,   
    FOREIGN KEY (fk_fonts_font_id) 
        REFERENCES fonts(font_id)
        ON DELETE CASCADE
);
INSERT INTO font_setting (fk_font_type_font_type_id, fk_fonts_font_id)
VALUES
    (1, 1), (2, 1), (3, 2), (4, 2), (5, 6);