-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               10.3.22-MariaDB-log - mariadb.org binary distribution
-- Операционная система:         Win64
-- HeidiSQL Версия:              11.0.0.5944
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных mychat
CREATE DATABASE IF NOT EXISTS `mychat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `mychat`;

-- Дамп структуры для таблица mychat.dialogs
CREATE TABLE IF NOT EXISTS `dialogs` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `user` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  KEY `_id` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы mychat.dialogs: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `dialogs` DISABLE KEYS */;
INSERT INTO `dialogs` (`_id`, `user`) VALUES
	(1, ',1,3,');
/*!40000 ALTER TABLE `dialogs` ENABLE KEYS */;

-- Дамп структуры для таблица mychat.message
CREATE TABLE IF NOT EXISTS `message` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT current_timestamp(),
  `user` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '\'\'',
  `text` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dialog` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '\'\'',
  `notReed` int(11) DEFAULT 1,
  KEY `_id` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы mychat.message: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` (`_id`, `date`, `user`, `text`, `dialog`, `notReed`) VALUES
	(1, '2020-09-23 00:00:00', '3', 'Хай', '1', 1),
	(2, '2020-09-23 14:33:23', '3', 'Как дела', '1', 1);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;

-- Дамп структуры для таблица mychat.users
CREATE TABLE IF NOT EXISTS `users` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Анонимный пользователь',
  `avatar` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT '\'\'',
  KEY `_id` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы mychat.users: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`_id`, `fullname`, `avatar`) VALUES
	(1, 'Константин', ''),
	(2, 'Виталий', ''),
	(3, 'Петя', '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
