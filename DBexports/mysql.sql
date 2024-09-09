-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbname
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

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
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,'Agustin Ortizortiz',31,'Agustin Ortizortiz.jpg'),(2,'Alita Willmer',31,'Alita Willmer.jpg'),(3,'Anjanette Devendorf',33,'Anjanette Devendorf.jpg'),(4,'Arden Fingal',37,'Arden Fingal.jpg'),(5,'Arminda Aristy',26,'Arminda Aristy.jpg'),(6,'Augustine Lucko',38,'Augustine Lucko.jpg'),(7,'Augustine Tuero',38,'Augustine Tuero.jpg'),(8,'Barabara Kieltyka',21,'Barabara Kieltyka.jpg'),(9,'Birgit Squibbs',22,'Birgit Squibbs.jpg'),(10,'Bo Dembek',30,'Bo Dembek.jpg'),(11,'Britteny Abalos',38,'Britteny Abalos.jpg'),(12,'Brittney Mcclaren',25,'Brittney Mcclaren.jpg'),(13,'Bruce Alsager',32,'Bruce Alsager.jpg'),(14,'Caitlyn Novar',20,'Caitlyn Novar.jpg'),(15,'Camilila Keyzer',32,'Camilila Keyzer.jpg'),(16,'Carmon Dziadzio',29,'Carmon Dziadzio.jpg'),(17,'Carolyne Sjodin',33,'Carolyne Sjodin.jpg'),(18,'Carson Rupolo',33,'Carson Rupolo.jpg'),(19,'Cassy Es',27,'Cassy Es.jpg'),(20,'Chanel Emshwiller',20,'Chanel Emshwiller.jpg'),(21,'Christian Schamel',40,'Christian Schamel.jpg'),(22,'Coral Gysel',30,'Coral Gysel.jpg'),(23,'Dean Semanco',28,'Dean Semanco.jpg'),(24,'Deann Baltasar',20,'Deann Baltasar.jpg'),(25,'Dillon Ponder',29,'Dillon Ponder.jpg'),(26,'Dong Cansler',36,'Dong Cansler.jpg'),(27,'Eda Testone',28,'Eda Testone.jpg'),(28,'Edyth Cernohous',28,'Edyth Cernohous.jpg'),(29,'Elias Bellack',22,'Elias Bellack.jpg'),(30,'Eliza Crandall',38,'Eliza Crandall.jpg'),(31,'Emmanuel Dahmen',29,'Emmanuel Dahmen.jpg'),(32,'Erin Buzick',26,'Erin Buzick.jpg'),(33,'Erwin Mosch',24,'Erwin Mosch.jpg'),(34,'Ezekiel Jaskiewicz',39,'Ezekiel Jaskiewicz.jpg'),(35,'Flora Cisneros',33,'Flora Cisneros.jpg'),(36,'Garrett Zier',38,'Garrett Zier.jpg'),(37,'Genaro Adolphsen',35,'Genaro Adolphsen.jpg'),(38,'Genny Miyata',20,'Genny Miyata.jpg'),(39,'Georgianna Cabal',21,'Georgianna Cabal.jpg'),(40,'Gilbert Carpin',23,'Gilbert Carpin.jpg'),(41,'Holly Dienger',31,'Holly Dienger.jpg'),(42,'Jake Travick',32,'Jake Travick.jpg'),(43,'Janita Lestina',36,'Janita Lestina.jpg'),(44,'Joe Herberger',23,'Joe Herberger.jpg'),(45,'Jonie Bryda',28,'Jonie Bryda.jpg'),(46,'Josef Towey',22,'Josef Towey.jpg'),(47,'Judie Calisti',37,'Judie Calisti.jpg'),(48,'Julie Kilps',31,'Julie Kilps.jpg'),(50,'Krystal Delahaye',36,'Krystal Delahaye.jpg'),(51,'Lamar Ruys',32,'Lamar Ruys.jpg'),(52,'Laticia Steder',40,'Laticia Steder.jpg'),(53,'Laurie Goldberger',32,'Laurie Goldberger.jpg'),(54,'Laurinda Bjur',29,'Laurinda Bjur.jpg'),(55,'Leonora Lawal',25,'Leonora Lawal.jpg'),(56,'Lettie Barquera',36,'Lettie Barquera.jpg'),(57,'Letty Gillfillan',28,'Letty Gillfillan.jpg'),(58,'Lilia Rutten',39,'Lilia Rutten.jpg'),(59,'Lorenzo Sprengel',22,'Lorenzo Sprengel.jpg'),(64,'Mari Serratt',20,'Mari Serratt.jpg'),(68,'Matt Rosten',34,'Matt Rosten.jpg'),(70,'Monte Venezio',38,'Monte Venezio.jpg');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;

--
-- Table structure for table `snippets`
--

DROP TABLE IF EXISTS `snippets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `snippets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `_id` int(11) DEFAULT NULL,
  `snippet` text NOT NULL,
  `uri` varchar(255) NOT NULL,
  `back` varchar(255) NOT NULL,
  `ajax` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `db` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snippets`
--

/*!40000 ALTER TABLE `snippets` DISABLE KEYS */;
INSERT INTO `snippets` VALUES (2,197,'axios({\"method\":\'PUT\', \"url\":\'http://localhost:5000/mysql/197\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/197','js','Axios','Update','mysql','Mon, 20 May 2024 11:12:57 GMT',21,'123456789'),(3,202,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/202?&lasttableid=194\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/202?&lasttableid=194','js','Axios','Delete','mysql','Mon, 20 May 2024 11:13:26 GMT',92,'123456789'),(4,194,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mysql/194\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/194','js','Axios','Update','mysql','Mon, 20 May 2024 11:15:52 GMT',17,'123456789'),(5,198,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/198?&lasttableid=193\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/198?&lasttableid=193','js','Axios','Delete','mysql','Mon, 20 May 2024 11:27:15 GMT',85,'123456789'),(6,204,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Mon, 20 May 2024 18:13:45 GMT',253,'123456789'),(7,204,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Mon, 20 May 2024 18:13:45 GMT',253,'123456789'),(8,202,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/202?&lasttableid=194\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/202?&lasttableid=194','js','Axios','Delete','mysql','Mon, 20 May 2024 11:13:26 GMT',92,'123456789'),(9,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d7\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d7','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:24 GMT',309,'123456789'),(10,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d4\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d4','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:29 GMT',270,'123456789'),(11,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d3\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d3','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:32 GMT',259,'123456789'),(12,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d2\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d2','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:34 GMT',266,'123456789'),(13,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d6\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d6','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:40 GMT',260,'123456789'),(14,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d0\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561d0','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:43 GMT',257,'123456789'),(15,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561cf\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561cf','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:46 GMT',256,'123456789'),(16,65,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561ce\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mongoose/65f9fa5474d2d3f8aa5561ce','js','Axios','Update','mongoose','Mon, 29 Jul 2024 12:52:50 GMT',259,'123456789'),(17,205,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 01:53:22 GMT',290,'ZZZZZZZZZZ'),(18,206,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 01:53:33 GMT',215,'ZZZZZZZZZZ'),(19,207,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:08:31 GMT',193,'ZZZZZZZZZZ'),(20,208,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:10:39 GMT',220,'ZZZZZZZZZZ'),(21,209,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:10:50 GMT',122,'ZZZZZZZZZZ'),(22,210,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:12:15 GMT',146,'ZZZZZZZZZZ'),(23,211,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:13:07 GMT',133,'ZZZZZZZZZZ'),(24,212,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:13:20 GMT',100,'ZZZZZZZZZZ'),(25,213,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:13:28 GMT',84,'ZZZZZZZZZZ'),(26,214,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:13:41 GMT',266,'ZZZZZZZZZZ'),(27,215,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:13:50 GMT',85,'ZZZZZZZZZZ'),(28,216,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:13:56 GMT',99,'ZZZZZZZZZZ'),(29,217,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:14:20 GMT',94,'ZZZZZZZZZZ'),(30,218,'axios.post(\'http://localhost:5000/mysql/\', body)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/','js','Axios','Create','mysql','Thu, 01 Aug 2024 03:19:36 GMT',136,'ZZZZZZZZZZ'),(31,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=209\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=209','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:44 GMT',128,'ZZZZZZZZZZ'),(32,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=208\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=208','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:44 GMT',26,'ZZZZZZZZZZ'),(33,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=207\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=207','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:44 GMT',45,'ZZZZZZZZZZ'),(34,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=206\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=206','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:45 GMT',25,'ZZZZZZZZZZ'),(35,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=205\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=205','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:45 GMT',48,'ZZZZZZZZZZ'),(36,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=204\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=204','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:45 GMT',23,'ZZZZZZZZZZ'),(37,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=203\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=203','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:45 GMT',26,'ZZZZZZZZZZ'),(38,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=201\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=201','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:45 GMT',51,'ZZZZZZZZZZ'),(39,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=200\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=200','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:53 GMT',23,'ZZZZZZZZZZ'),(40,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=199\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=199','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:54 GMT',14,'ZZZZZZZZZZ'),(41,216,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/216?&lasttableid=197\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/216?&lasttableid=197','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:19:59 GMT',15,'ZZZZZZZZZZ'),(42,215,'axios(<br>{\"method\":\'PUT\', \"url\":\'http://localhost:5000/mysql/215\', \"data\":body},<br>{\"headers\": {\"Content-Type\":\'multipart/form-data\'}}<br>)<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/215','js','Axios','Update','mysql','Thu, 01 Aug 2024 03:20:11 GMT',55,'ZZZZZZZZZZ'),(43,210,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/210?&lasttableid=208\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/210?&lasttableid=208','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:20:35 GMT',120,'ZZZZZZZZZZ'),(44,213,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/213?&lasttableid=207\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/213?&lasttableid=207','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:24:53 GMT',194,'ZZZZZZZZZZ'),(45,213,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/213?&lasttableid=206\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/213?&lasttableid=206','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:24:56 GMT',15,'ZZZZZZZZZZ'),(46,213,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/213?&lasttableid=205\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/213?&lasttableid=205','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:24:58 GMT',16,'ZZZZZZZZZZ'),(47,209,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/209?&lasttableid=206\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/209?&lasttableid=206','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:25:30 GMT',135,'ZZZZZZZZZZ'),(48,209,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/209?&lasttableid=205\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/209?&lasttableid=205','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:25:31 GMT',18,'ZZZZZZZZZZ'),(49,215,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/215?&lasttableid=205\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/215?&lasttableid=205','js','Axios','Delete','mysql','Thu, 01 Aug 2024 03:30:26 GMT',106,'ZZZZZZZZZZ'),(50,214,'axios({\"method\":\'DELETE\', \"url\":\'http://localhost:5000/mysql/214?&lasttableid=204\'})<br>.then((response)=>{const data = response.data})','http://localhost:5000/mysql/214?&lasttableid=204','js','Axios','Delete','mysql','Thu, 01 Aug 2024 10:22:47 GMT',114,NULL);
/*!40000 ALTER TABLE `snippets` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `userphoto` varchar(255) NOT NULL DEFAULT '',
  `hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (66,'AjanetteZZ','','Anjanette Devendorf.jpg1714914422151','$2b$10$woqJpMkX8M0KfURoTViwGesCELzHAW2n42y2f/IO9YnHtYdi4MUp.'),(67,'123456789','','6a2209e65b3672acfe8d7d5644d60826.jpg1715531734716','$2b$10$4VkeJuMwotn385.WE6CqW.YcpPwOFbxPfyjahtyPDEjE29XuvElMW');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'dbname'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-06 22:38:39
