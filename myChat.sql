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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mychat.message: ~3 rows (approximately)
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` (`_id`, `date`, `user`, `text`, `dialog`, `notReed`) VALUES
	(1, '2020-09-23 00:00:00', '1', 'Хай', '+1+2+', 1),
	(2, '2020-09-23 14:33:23', '2', 'Как дела', '+1+2+', 1),
	(3, '2020-09-23 20:36:12', '3', 'Ntcn', '+3+1+', 1),
	(5, '2020-09-23 20:38:58', '2', 'РЫба текст&nbsp;<img class=\'emoji emoji--1f3ea js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f3ea.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f3ea.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f3ea.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f929 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f929.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f929.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f929.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f618 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f618.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f618.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f618.svg 2x\' unselectable=\'on\'>&nbsp;проверка смайликов&nbsp;<img class=\'emoji emoji--1f64d js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f64d.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f64d.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f64d.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f937 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f937.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f937.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f937.svg 2x\' unselectable=\'on\'><img class=\'emoji emoji--1f486 js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f486.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f486.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f486.svg 2x\' unselectable=\'on\'>‍<img class=\'emoji emoji--1f9cd js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f9cd.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f9cd.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f9cd.svg 2x\' unselectable=\'on\'>‍<img class=\'emoji emoji--1f93e js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 2x\' unselectable=\'on\'>‍<img class=\'emoji emoji--1f93e js-smile-insert\' src=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg\' srcset=\'https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 1x, https://abs-0.twimg.com/emoji/v2/svg/1f93e.svg 2x\' unselectable=\'on\'>', '+2+3+', 1),
	(6, '2020-09-24 01:00:51', '1', 'выаыфав', '+1+2+', 1),
	(7, '2020-09-23 21:12:24', '3', 'Эй, я новое сообщение написал', '+3+1+', 1);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;

-- Dumping structure for table mychat.users
CREATE TABLE IF NOT EXISTS `users` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Анонимный пользователь',
  `avatar` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT '\'\'',
  KEY `_id` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mychat.users: ~3 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`_id`, `fullname`, `avatar`) VALUES
	(1, 'Константин', ''),
	(2, 'Виталий', ''),
	(3, 'Петя', '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
