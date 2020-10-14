-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.3.22-MariaDB-log - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5944
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mychat
CREATE DATABASE IF NOT EXISTS `mychat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `mychat`;

-- Dumping structure for table mychat.message
CREATE TABLE IF NOT EXISTS `message` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `user` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '\'\'',
  `text` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dialog` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '\'\'',
  `notReed` int(11) DEFAULT 1,
  KEY `_id` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mychat.message: ~8 rows (approximately)
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` (`_id`, `date`, `user`, `text`, `dialog`, `notReed`) VALUES
	(1, '2020-09-23 00:00:00', 'MjAyMDA5MjUyMDUzMzM=', 'хай<img class="emoji emoji--1f603 js-smile-insert" src="https://abs-0.twimg.com/emoji/v2/svg/1f603.svg" srcset="https://abs-0.twimg.com/emoji/v2/svg/1f603.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f603.svg 2x" unselectable="on">', '.MjAyMDA5MjUyMDUzMzM=.NDA0MDE4NTA0MTA2NjY=.', 1),
	(2, '2020-09-23 14:33:23', 'NDA0MDE4NTA0MTA2NjY=', 'Как дела', '.MjAyMDA5MjUyMDUzMzM=.NDA0MDE4NTA0MTA2NjY=.', 1),
	(3, '2020-09-23 20:36:12', 'NjA2MDI3NzU2MTU5OTk=', 'Ntcn', '.NjA2MDI3NzU2MTU5OTk=.MjAyMDA5MjUyMDUzMzM=.', 1),
	(5, '2020-09-23 20:38:58', 'NDA0MDE4NTA0MTA2NjY=', 'РЫба текст&nbsp;<img class=\'emoji emoji--1f3ea js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f3ea.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f3ea.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f3ea.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f929 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f929.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f929.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f929.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f618 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f618.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f618.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f618.svg 2x\' unselectable=\'on\'>&nbsp;проверка смайликов&nbsp;<img class=\'emoji emoji--1f64d js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f64d.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f64d.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f64d.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f937 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f937.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f937.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f937.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f486 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f486.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f486.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f486.svg 2x\' unselectable=\'on\'>‍<img class=\'emoji emoji--1f9cd js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f9cd.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f9cd.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f9cd.svg 2x\' unselectable=\'on\'>‍<img class=\'emoji emoji--1f93e js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 2x\' unselectable=\'on\'>‍<img class=\'emoji emoji--1f93e js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 2x\' unselectable=\'on\'>', '.NDA0MDE4NTA0MTA2NjY=.NjA2MDI3NzU2MTU5OTk=.', 1),
	(6, '2020-09-24 01:00:51', 'MjAyMDA5MjUyMDUzMzM=', 'выаыфав', '.MjAyMDA5MjUyMDUzMzM=.NDA0MDE4NTA0MTA2NjY=.', 1),
	(7, '2020-09-23 21:12:24', '3NjA2MDI3NzU2MTU5OTk=', 'Эй, я новое сообщение написал', '.3NjA2MDI3NzU2MTU5OTk=.MjAyMDA5MjUyMDUzMzM=.', 1),
	(8, '2020-09-27 19:28:49', 'NjA2MDI3NzU2MTU5OTk=', 'Костя сломался', '.NjA2MDI3NzU2MTU5OTk=.MjQyNDExMTI0NTQ5MTA4.', 1),
	(9, '2020-09-27 22:49:39', 'MzIzMjE0ODM1NTY5NjE2', 'You', '.MzIzMjE0ODM1NTY5NjE2.NjA2MDI3NzU2MTU5OTk=.', 1);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;

-- Dumping structure for table mychat.users
CREATE TABLE IF NOT EXISTS `users` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Анонимный пользователь',
  `avatar` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_create` datetime DEFAULT current_timestamp(),
  `hash` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `session` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  KEY `_id` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mychat.users: ~5 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`_id`, `fullname`, `avatar`, `date_create`, `hash`, `email`, `password`, `session`) VALUES
	(1, 'Константин', 'https://sun9-76.userapi.com/impg/c857128/v857128397/7c967/wEN19RNgVnc.jpg?size=50x0&quality=88&crop=353,120,617,617&sign=dcbdcf5814f982b881bf9801297eba5f&ava=1', '2020-09-25 20:53:33', 'JGFyZ29uMmkkdj0xOSRtPTQwOTYsdD0zLHA9MSRaY09TUkxkdkROdmpITkcxN01ucmVRJCtSR1RoSHM=', 'kaptor2@gmail.com', '~MnogovsegO1919~', 'test'),
	(2, 'Виталий', '', '2020-09-25 20:53:33', 'JGFyZ29uMmkkdj0xOSRtPTQwOTYsdD0zLHA9MSQvS2FZRnhJZEhGcU1GWm9DUzVhSUJnJHNESm1EdFU=', 'vit@gmail.com', '~MnogovsegO1919~', NULL),
	(3, 'Петя', '', '2020-09-25 20:53:33', 'JGFyZ29uMmkkdj0xOSRtPTQwOTYsdD0zLHA9MSRwUTdlNHJmSEpJakZpMTg3VUl2NzZnJFJKNzE3UkU=', 'Petr@mail.com', '~MnogovsegO1919~', NULL),
	(4, 'тестовый пользователь', '', '2020-09-26 23:50:46', NULL, 'test@gmail.com', '~MnogovsegO1919~', NULL),
	(12, 'Элина Юзаева', '', '2020-09-27 04:57:59', 'JGFyZ29uMmkkdj0xOSRtPTQwOTYsdD0zLHA9MSQwOHlXRGVoVU9KYUNqcHlzb01ZRDlBJGlMNU9LOEk=', 'kapstor2@gmail.com', 'Qwerty21', NULL),
	(16, 'Стьюи', NULL, '2020-09-27 22:31:01', NULL, 'k2aptor2@gmail.com', 'Qwerty21', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for view mychat._users
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `_users` (
	`_id` VARCHAR(36) NULL COLLATE 'utf8mb4_general_ci',
	`fullname` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`avatar` MEDIUMTEXT NULL COLLATE 'utf8mb4_unicode_ci',
	`date_create` DATETIME NULL,
	`hash` TEXT(65535) NULL COLLATE 'utf8mb4_unicode_ci'
) ENGINE=MyISAM;

-- Dumping structure for view mychat._users
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `_users`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `_users` AS select to_base64(`users`.`_id` * `users`.`date_create`) AS `_id`,`users`.`fullname` AS `fullname`,`users`.`avatar` AS `avatar`,`users`.`date_create` AS `date_create`,`users`.`hash` AS `hash` from `users`;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
