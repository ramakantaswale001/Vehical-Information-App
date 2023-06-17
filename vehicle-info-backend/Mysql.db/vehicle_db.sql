-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2023 at 10:54 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vehicle_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `owner_registation`
--

CREATE TABLE `owner_registation` (
  `id` int(20) NOT NULL,
  `first_name` varchar(300) NOT NULL,
  `last_name` varchar(300) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_no` bigint(20) NOT NULL,
  `company_name` varchar(300) NOT NULL,
  `type_of_business` varchar(65) NOT NULL,
  `estb_yr` varchar(20) NOT NULL,
  `company_description` text NOT NULL,
  `office_address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `owner_registation`
--

INSERT INTO `owner_registation` (`id`, `first_name`, `last_name`, `email`, `phone_no`, `company_name`, `type_of_business`, `estb_yr`, `company_description`, `office_address`) VALUES
(1, 'Shubham', 'Jain', 'sj@gmail.com', 784564122, 'SJ Vehicles', 'Car,Buses,Both', '14/06/2023', 'Car Businesses', 'Nagpur'),
(2, 'Sandip', 'Kohlekar', 'sk@gmail.com', 786541250, 'AJ Vehicles', 'Car', '14/06/2023', 'Car Businesses', 'Nagpur'),
(3, 'ravi', 'poterkar', 'ravi@gmail.com', 8885419114, 'adani', 'Both', '2023-06-13', 'dfcfsfd', 'chandrapur'),
(15, 'Amit', 'Deshmukh', 'ad@gmail.com', 784556123, 'SK Automobiles', 'vehicles', '16/06/2015', 'Car Showroom', 'Shivaji Nagar,Nagpur'),
(16, 'Amol ', 'Patil', 'ap@gmail.com', 7541255225, 'SK Automobiles', 'Car Showroom', '16/06/2015', 'Showroom', 'Naredra Nagar,Nagpur');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `firstName` varchar(300) NOT NULL,
  `lastName` varchar(300) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone_no` bigint(15) NOT NULL,
  `address` text NOT NULL,
  `pin_code` int(65) NOT NULL,
  `photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `phone_no`, `address`, `pin_code`, `photo`) VALUES
(20, 'rama', 'aswale', 'rama@gmail.com', 'e04f28cc33cb20274dd3ff44e600a923', 878461156, 'nagpur', 110024, 'rama.jpej'),
(21, 'vipul', 'thombre', 'vipul@gmail.com', '57f231b1ec41dc6641270cb09a56f897', 754123648, 'nandanvan Nagpur', 444500, ''),
(33, 'Shubham', 'Kahate', 'sk@gmail.com', 'e99a18c428cb38d5f260853678922e03', 745165123, 'Mahavir Nagar,Nagpur', 110024, 'png.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_registration`
--

CREATE TABLE `vehicle_registration` (
  `id` int(20) NOT NULL,
  `select_vehicle` varchar(100) NOT NULL,
  `seating_capacity` varchar(100) NOT NULL,
  `AC_NonAC` varchar(50) NOT NULL,
  `rate_per_km` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicle_registration`
--

INSERT INTO `vehicle_registration` (`id`, `select_vehicle`, `seating_capacity`, `AC_NonAC`, `rate_per_km`) VALUES
(9, 'MarutiSuzuki', '6', 'AC', '25KM'),
(10, 'HONDA', '7', 'AC', '22Km'),
(11, 'Renault Duster', '4', 'AC', '25Km'),
(12, 'Aulto800', '4', 'NonAC', '30KM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `owner_registation`
--
ALTER TABLE `owner_registation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `owner_registation`
--
ALTER TABLE `owner_registation`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
