-- MySQL dump 10.13  Distrib 8.3.0, for macos13.6 (arm64)
--
-- Host: localhost    Database: my_twitter
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `my_twitter`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `my_twitter` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `my_twitter`;

--
-- Table structure for table `conv`
--

DROP TABLE IF EXISTS `conv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conv` (
  `id` int NOT NULL AUTO_INCREMENT,
  `messages_id` int NOT NULL,
  `sender_id` int NOT NULL,
  `receivers_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_id` (`messages_id`),
  KEY `sender_id` (`sender_id`),
  KEY `receivers_id` (`receivers_id`),
  CONSTRAINT `conv_ibfk_1` FOREIGN KEY (`messages_id`) REFERENCES `messages` (`id`),
  CONSTRAINT `conv_ibfk_2` FOREIGN KEY (`sender_id`) REFERENCES `messages` (`sender_id`),
  CONSTRAINT `conv_ibfk_3` FOREIGN KEY (`receivers_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conv`
--

LOCK TABLES `conv` WRITE;
/*!40000 ALTER TABLE `conv` DISABLE KEYS */;
/*!40000 ALTER TABLE `conv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `follower_user_id` int NOT NULL,
  `followed_user_id` int NOT NULL,
  `follow_created_at` timestamp NOT NULL,
  KEY `follower_user_id` (`follower_user_id`),
  KEY `followed_user_id` (`followed_user_id`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`follower_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`followed_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (17,8,'2024-03-17 12:59:03'),(17,6,'2024-03-17 12:59:53'),(17,1,'2024-03-17 13:03:05'),(15,11,'2024-03-17 13:09:28'),(15,1,'2024-03-17 14:01:40'),(15,8,'2024-03-17 14:28:48');
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `htag`
--

DROP TABLE IF EXISTS `htag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `htag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `body` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `body` (`body`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `htag`
--

LOCK TABLES `htag` WRITE;
/*!40000 ALTER TABLE `htag` DISABLE KEYS */;
/*!40000 ALTER TABLE `htag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `images_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `joinhtag`
--

DROP TABLE IF EXISTS `joinhtag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `joinhtag` (
  `htag_id` int NOT NULL,
  `post_id` int NOT NULL,
  KEY `htag_id` (`htag_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `joinhtag_ibfk_1` FOREIGN KEY (`htag_id`) REFERENCES `htag` (`id`),
  CONSTRAINT `joinhtag_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joinhtag`
--

LOCK TABLES `joinhtag` WRITE;
/*!40000 ALTER TABLE `joinhtag` DISABLE KEYS */;
/*!40000 ALTER TABLE `joinhtag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int NOT NULL,
  `body` varchar(255) NOT NULL,
  `post_id` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sender_id` (`sender_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `body` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (49,'1st tweet',15,'active',NULL,'2024-03-13 21:01:27'),(50,'2nd tweet',15,'active',NULL,'2024-03-13 21:02:37'),(51,'second try tweet',15,'active',NULL,'2024-03-13 21:09:49'),(52,'second try tweet',15,'active',NULL,'2024-03-13 21:10:13'),(53,'5th tweet',15,'active',NULL,'2024-03-13 21:11:13'),(54,'fdfdf',15,'active',NULL,'2024-03-14 13:25:06'),(55,'dff',15,'active',NULL,'2024-03-14 13:25:19'),(56,'Tweet 1',15,'active',NULL,'2024-03-14 14:32:44'),(57,'Test tweet 2',15,'active',NULL,'2024-03-14 14:35:03'),(58,'Test tweet 2',15,'active',NULL,'2024-03-14 14:36:12'),(59,'Test tweet 2',15,'active',NULL,'2024-03-14 14:36:27'),(60,'Test tweet 2',15,'active',NULL,'2024-03-14 14:37:50'),(61,'',15,'active',NULL,'2024-03-16 16:56:18'),(62,'17',15,'active',NULL,'2024-03-17 14:00:22'),(63,'',15,'active',NULL,'2024-03-17 14:00:37'),(64,'fdfdf',15,'active',NULL,'2024-03-17 15:10:46'),(65,'fdfdf',15,'active',NULL,'2024-03-17 15:10:51'),(66,'fdfdf',15,'active',NULL,'2024-03-17 15:10:51'),(67,'newOONE',15,'active',NULL,'2024-03-17 15:12:02'),(68,'azerezzefe',15,'active',NULL,'2024-03-17 19:35:45'),(69,'aaa',15,'active',NULL,'2024-03-17 19:35:53'),(70,'aaa',15,'active',NULL,'2024-03-17 19:35:54'),(71,'aaa',15,'active',NULL,'2024-03-17 19:36:08'),(72,'azeaze',15,'active',NULL,'2024-03-17 19:36:29'),(73,'Tweet test',15,'active',NULL,'2024-03-17 19:38:02'),(74,'sdfdf',15,'active',NULL,'2024-03-17 19:40:15'),(75,'zaazeeze',15,'active',NULL,'2024-03-17 19:42:07'),(76,'fghjklmkjhgfdcghjklmùlkj',15,'active',NULL,'2024-03-17 19:47:16'),(77,'azedf',15,'active',NULL,'2024-03-17 19:57:24'),(78,'azgf',18,'active',NULL,'2024-03-17 19:58:27'),(79,'MONTRE',15,'active',NULL,'2024-03-17 20:03:39'),(80,'MONTRE',15,'active',NULL,'2024-03-17 20:03:40'),(81,'MONTRE',15,'active',NULL,'2024-03-17 20:03:40'),(82,'MONTRE',15,'active',NULL,'2024-03-17 20:03:40'),(83,'MONTRE',15,'active',NULL,'2024-03-17 20:03:40'),(84,'MONTRE',15,'active',NULL,'2024-03-17 20:03:41'),(85,'MONTRE',15,'active',NULL,'2024-03-17 20:03:41'),(86,'',15,'active',NULL,'2024-03-17 20:04:51'),(87,'TEST',15,'active',NULL,'2024-03-17 20:05:00'),(88,'TEST',15,'active',NULL,'2024-03-17 20:05:42'),(89,'aaa',15,'active',NULL,'2024-03-17 21:52:20'),(90,'a',15,'active',NULL,'2024-03-17 21:53:24'),(91,'aaa',15,'active',NULL,'2024-03-17 22:00:34'),(92,'aaa',15,'active',NULL,'2024-03-17 22:00:54'),(93,'',15,'active',NULL,'2024-03-18 14:03:49');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo_user` varchar(255) DEFAULT NULL,
  `banniere_user` varchar(255) DEFAULT NULL,
  `birthdate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified` timestamp NULL DEFAULT NULL,
  `pass` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `modif_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'andrei','drei',NULL,NULL,'2002-07-18','andrei@gmail.com',NULL,'password',NULL,'2024-03-01 10:45:29',NULL,'2024-03-01 10:45:29'),(2,'Whatever','Andrei',NULL,NULL,'2024-03-01','masked2002man@gmail.com',NULL,'70c881d4a26984ddce795f6f71817c9cf4480e79',NULL,'2024-03-01 15:43:09',NULL,'2024-03-01 15:43:09'),(4,'Whateverfsdfds','Andrei',NULL,NULL,'2024-03-02','azef@gmail.com',NULL,'9c1185a5c5e9fc54612808977ee8f548b2258d31',NULL,'2024-03-01 15:58:16',NULL,'2024-03-01 15:58:16'),(6,'azezee','Novii',NULL,NULL,'2003-02-04','trythis@gmail.com',NULL,'9c1185a5c5e9fc54612808977ee8f548b2258d31',NULL,'2024-03-04 13:35:29',NULL,'2024-03-04 13:35:29'),(7,'novyi','Novii',NULL,NULL,'2003-06-03','polzovatel@gmail.com',NULL,'c4514c4c45e45f57ded3dbe4d5477f748ba4e6ca',NULL,'2024-03-04 14:58:42',NULL,'2024-03-04 14:58:42'),(8,'AAA@gmail.com','Aamin',NULL,NULL,'1991-07-04','amin@gmail.com',NULL,'3a454f7b55356dd72f77dc78a9324bba5cd41db1',NULL,'2024-03-04 15:47:22',NULL,'2024-03-04 15:47:22'),(9,'ImpalerV2','Sofia',NULL,NULL,'2002-03-04','done@gmail.com',NULL,'1862ddd39ab7f610539c3683112fb54a5c63288f',NULL,'2024-03-04 16:01:24',NULL,'2024-03-04 16:01:24'),(10,'Sams','Sami',NULL,NULL,'2006-02-04','sams@gmail.com',NULL,'d99fb138b4c8388cdca4a9ebcc94f0b66ebe24d7',NULL,'2024-03-04 16:06:26',NULL,'2024-03-04 16:06:26'),(11,'AndRtr','Andrei',NULL,NULL,'2001-06-28','notandrew@gmail.com',NULL,'811e23a9c089ee785b4f12c6e8ea80fff003d003',NULL,'2024-03-06 09:35:31',NULL,'2024-03-06 09:35:31'),(14,'fgwdfgd','Andrei',NULL,NULL,'2024-03-09','dopustim@gmail.com',NULL,'08889bd7b151aa174c21f33f59147fa65381edea',NULL,'2024-03-09 17:21:57',NULL,'2024-03-09 17:21:57'),(15,'okk','Andrei',NULL,NULL,'2024-03-01','okk@gmail.com',NULL,'0bdc9d2d256b3ee9daae347be6f4dc835a467ffe',NULL,'2024-03-11 13:47:13',NULL,'2024-03-11 13:47:13'),(16,'secondUser','Second',NULL,NULL,'2024-03-02','sec@gmail.com',NULL,'0bdc9d2d256b3ee9daae347be6f4dc835a467ffe',NULL,'2024-03-11 15:24:09',NULL,'2024-03-11 15:24:09'),(17,'SuisMoiiii','ProfilASuivre',NULL,NULL,'2000-03-10','follower@gmail.com',NULL,'0bdc9d2d256b3ee9daae347be6f4dc835a467ffe',NULL,'2024-03-17 12:58:44',NULL,'2024-03-17 12:58:44'),(18,'NEWW','NOUVEAU',NULL,NULL,'1993-07-17','new@gmail.com',NULL,'0bdc9d2d256b3ee9daae347be6f4dc835a467ffe',NULL,'2024-03-17 19:58:20',NULL,'2024-03-17 19:58:20');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 16:16:44
