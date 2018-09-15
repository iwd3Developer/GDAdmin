-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2018 at 05:07 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `caldata1`
--

CREATE TABLE `caldata1` (
  `id` int(11) NOT NULL,
  `taskId` varchar(15) NOT NULL,
  `startD` datetime NOT NULL,
  `endD` datetime NOT NULL,
  `isAllDay` tinyint(4) NOT NULL,
  `title` varchar(100) NOT NULL,
  `startTimezone` varchar(100) NOT NULL,
  `endTimezone` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `recurrenceId` int(11) NOT NULL,
  `recurrenceRule` varchar(20) NOT NULL,
  `recurrenceException` varchar(20) NOT NULL,
  `franID` varchar(20) NOT NULL,
  `delflg` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `caldata1`
--

INSERT INTO `caldata1` (`id`, `taskId`, `startD`, `endD`, `isAllDay`, `title`, `startTimezone`, `endTimezone`, `description`, `recurrenceId`, `recurrenceRule`, `recurrenceException`, `franID`, `delflg`) VALUES
(4, 'A000', '2018-09-18 10:36:00', '2018-09-18 11:36:00', 0, 'Demo entry', 'null', 'null', '', 0, 'null', 'null', 'GD00KS', 0),
(5, 'A0001', '2018-09-17 10:36:00', '2018-09-17 10:36:00', 1, 'Demo entry', '', '', '', 0, '', '', 'GD00KS', 0),
(27, 'A230', '2018-09-19 10:36:00', '2018-09-19 10:36:00', 0, 'title here', '', '', '', 0, '', '', 'GD00KS', 0),
(34, 'DESttt', '2018-09-21 13:30:13', '2018-09-21 14:15:07', 0, 'TITLE-HERE', '', '', '', 0, '', '', 'GD00KS', 0),
(35, 'DESttt', '2018-09-22 13:30:13', '2018-09-22 14:15:07', 0, 'TITLE-HERE', '', '', '', 0, '', '', 'GD00KS', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `caldata1`
--
ALTER TABLE `caldata1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `caldata1`
--
ALTER TABLE `caldata1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
