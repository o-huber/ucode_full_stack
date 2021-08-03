CREATE DATABASE ucode_web;
CREATE user 'kovsiannik'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'kovsiannik'@'localhost';