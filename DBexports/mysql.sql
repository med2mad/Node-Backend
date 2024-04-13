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
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,'Agustin Ortizortiz',31,'Agustin Ortizortiz.jpg'),(2,'Alita Willmer',31,'Alita Willmer.jpg'),(3,'Anjanette Devendorf',33,'Anjanette Devendorf.jpg'),(4,'Arden Fingal',37,'Arden Fingal.jpg'),(5,'Arminda Aristy',26,'Arminda Aristy.jpg'),(6,'Augustine Lucko',38,'Augustine Lucko.jpg'),(7,'Augustine Tuero',38,'Augustine Tuero.jpg'),(8,'Barabara Kieltyka',21,'Barabara Kieltyka.jpg'),(9,'Birgit Squibbs',22,'Birgit Squibbs.jpg'),(10,'Bo Dembek',30,'Bo Dembek.jpg'),(11,'Britteny Abalos',38,'Britteny Abalos.jpg'),(12,'Brittney Mcclaren',25,'Brittney Mcclaren.jpg'),(13,'Bruce Alsager',32,'Bruce Alsager.jpg'),(14,'Caitlyn Novar',20,'Caitlyn Novar.jpg'),(15,'Camilila Keyzer',32,'Camilila Keyzer.jpg'),(16,'Carmon Dziadzio',29,'Carmon Dziadzio.jpg'),(17,'Carolyne Sjodin',33,'Carolyne Sjodin.jpg'),(18,'Carson Rupolo',33,'Carson Rupolo.jpg'),(19,'Cassy Es',27,'Cassy Es.jpg'),(20,'Chanel Emshwiller',20,'Chanel Emshwiller.jpg'),(21,'Christian Schamel',40,'Christian Schamel.jpg'),(22,'Coral Gysel',30,'Coral Gysel.jpg'),(23,'Dean Semanco',28,'Dean Semanco.jpg'),(24,'Deann Baltasar',20,'Deann Baltasar.jpg'),(25,'Dillon Ponder',29,'Dillon Ponder.jpg'),(26,'Dong Cansler',36,'Dong Cansler.jpg'),(27,'Eda Testone',28,'Eda Testone.jpg'),(28,'Edyth Cernohous',28,'Edyth Cernohous.jpg'),(29,'Elias Bellack',22,'Elias Bellack.jpg'),(30,'Eliza Crandall',38,'Eliza Crandall.jpg'),(31,'Emmanuel Dahmen',29,'Emmanuel Dahmen.jpg'),(32,'Erin Buzick',26,'Erin Buzick.jpg'),(33,'Erwin Mosch',24,'Erwin Mosch.jpg'),(34,'Ezekiel Jaskiewicz',39,'Ezekiel Jaskiewicz.jpg'),(35,'Flora Cisneros',33,'Flora Cisneros.jpg'),(36,'Garrett Zier',38,'Garrett Zier.jpg'),(37,'Genaro Adolphsen',35,'Genaro Adolphsen.jpg'),(38,'Genny Miyata',20,'Genny Miyata.jpg'),(39,'Georgianna Cabal',21,'Georgianna Cabal.jpg'),(40,'Gilbert Carpin',23,'Gilbert Carpin.jpg'),(41,'Holly Dienger',31,'Holly Dienger.jpg'),(42,'Jake Travick',32,'Jake Travick.jpg'),(43,'Janita Lestina',36,'Janita Lestina.jpg'),(44,'Joe Herberger',23,'Joe Herberger.jpg'),(45,'Jonie Bryda',28,'Jonie Bryda.jpg'),(46,'Josef Towey',22,'Josef Towey.jpg'),(47,'Judie Calisti',37,'Judie Calisti.jpg'),(48,'Julie Kilps',31,'Julie Kilps.jpg'),(49,'Kareem Prink',28,'Kareem Prink.jpg'),(50,'Krystal Delahaye',36,'Krystal Delahaye.jpg'),(51,'Lamar Ruys',32,'Lamar Ruys.jpg'),(52,'Laticia Steder',40,'Laticia Steder.jpg'),(53,'Laurie Goldberger',32,'Laurie Goldberger.jpg'),(54,'Laurinda Bjur',29,'Laurinda Bjur.jpg'),(55,'Leonora Lawal',25,'Leonora Lawal.jpg'),(56,'Lettie Barquera',36,'Lettie Barquera.jpg'),(57,'Letty Gillfillan',28,'Letty Gillfillan.jpg'),(58,'Lilia Rutten',39,'Lilia Rutten.jpg'),(59,'Lorenzo Sprengel',22,'Lorenzo Sprengel.jpg'),(60,'Lorinda Brandal',31,'Lorinda Brandal.jpg'),(61,'Lucila Fern',38,'Lucila Fern.jpg'),(62,'Mallie Lagro',36,'Mallie Lagro.jpg'),(63,'Manuela Welsby',35,'Manuela Welsby.jpg'),(64,'Mari Serratt',20,'Mari Serratt.jpg'),(65,'Mariano Stramel',34,'Mariano Stramel.jpg'),(66,'Markita Abdula',39,'Markita Abdula.jpg'),(67,'Marquitta Cumbaa',35,'Marquitta Cumbaa.jpg'),(68,'Matt Rosten',34,'Matt Rosten.jpg'),(69,'Melina Koloski',34,'Melina Koloski.jpg'),(70,'Monte Venezio',38,'Monte Venezio.jpg'),(71,'Natisha Bac',30,'Natisha Bac.jpg'),(72,'Nicholas Hermandez',30,'Nicholas Hermandez.jpg'),(73,'Nicholas Lauer',33,'Nicholas Lauer.jpg'),(74,'Norberto Domzalski',29,'Norberto Domzalski.jpg'),(75,'noureddine hashadi',25,'noureddine hashadi.png'),(76,'othman amrani',24,'othman amrani.jpg'),(77,'Penny Bartick',30,'Penny Bartick.jpg'),(78,'Perry Strebler',27,'Perry Strebler.jpg'),(79,'Reuben Clews',20,'Reuben Clews.jpg'),(80,'Rodolfo Gimbel',35,'Rodolfo Gimbel.jpg'),(81,'Ronnie Bihun',37,'Ronnie Bihun.jpg'),(82,'Roxanna Landau',39,'Roxanna Landau.jpg'),(83,'Rudolf Huskin',29,'Rudolf Huskin.jpg'),(84,'Samual Dozer',21,'Samual Dozer.jpg'),(85,'Samual Uphold',40,'Samual Uphold.jpg'),(86,'Serina Frewin',30,'Serina Frewin.jpg'),(87,'Shad Mcelmeel',24,'Shad Mcelmeel.jpg'),(88,'Shayne Pascoal',39,'Shayne Pascoal.jpg'),(89,'Sherly Kines',40,'Sherly Kines.jpg'),(90,'Steffanie Donahay',32,'Steffanie Donahay.jpg'),(91,'Stephan Kegel',22,'Stephan Kegel.jpg'),(92,'Susana Levenduski',25,'Susana Levenduski.jpg'),(93,'Suzann Castens',34,'Suzann Castens.jpg'),(94,'Taneka Holveck',29,'Taneka Holveck.jpg'),(95,'Teena Dudzik',32,'Teena Dudzik.jpg'),(96,'Therese Shocklee',34,'Therese Shocklee.jpg'),(97,'Towanda Schnurer',25,'Towanda Schnurer.jpg'),(98,'Tracy Descoteau',36,'Tracy Descoteau.jpg'),(99,'Twanda Klis',21,'Twanda Klis.jpg'),(100,'Winford Emmer',28,'Winford Emmer.jpg');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-13 18:21:48
