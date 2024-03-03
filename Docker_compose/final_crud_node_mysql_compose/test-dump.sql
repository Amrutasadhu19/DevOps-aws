CREATE DATABASE cruddatabase;
USE cruddatabase;
DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `rollNo` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rollNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `students` VALUES (1130328,'John Doe');
