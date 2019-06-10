CREATE DATABASE IF NOT EXISTS worker;
use worker;
CREATE TABLE IF NOT EXISTS workers (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
position VARCHAR(30) NOT NULL,
pay int not null #версия 5.6 поэтому я перерыл всё но так и не нашёл денежный тип данных воспользовался интом.
);
insert into workers (id, first_name, last_name, position, pay) values(null, "Kirill", "Skachkov", "director", 100000);
insert into workers (id, first_name, last_name, position, pay) values(null, "Anton", "Grusha", "meneger", 30000);
insert into workers (id, first_name, last_name, position, pay) values(null, "Vladimir"," Persov", "meneger", 30000);
insert into workers (id, first_name, last_name, position, pay) values(null," Nikita"," Krutov", "cleaner", 25000);
