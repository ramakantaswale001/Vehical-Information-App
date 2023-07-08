-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2023 at 06:51 AM
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
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `id` int(20) NOT NULL,
  `first_name` varchar(300) NOT NULL,
  `last_name` varchar(300) NOT NULL,
  `owner_dob` varchar(255) NOT NULL,
  `contact_email` varchar(50) NOT NULL,
  `contact_phone_no` bigint(15) NOT NULL,
  `business_phone_no` bigint(15) NOT NULL,
  `business_email` varchar(50) NOT NULL,
  `pin_code` int(20) NOT NULL,
  `state` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `organization_name` varchar(200) NOT NULL,
  `type_of_business_id` int(200) NOT NULL,
  `registration_date` date NOT NULL,
  `company_description` text NOT NULL,
  `office_address` text NOT NULL,
  `office_city` varchar(100) NOT NULL,
  `office_state` varchar(100) NOT NULL,
  `office_country` varchar(100) NOT NULL,
  `GST_number` int(100) NOT NULL,
  `created` varchar(255) NOT NULL,
  `modified` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `owner`
--

INSERT INTO `owner` (`id`, `first_name`, `last_name`, `owner_dob`, `contact_email`, `contact_phone_no`, `business_phone_no`, `business_email`, `pin_code`, `state`, `company_name`, `organization_name`, `type_of_business_id`, `registration_date`, `company_description`, `office_address`, `office_city`, `office_state`, `office_country`, `GST_number`, `created`, `modified`) VALUES
(3, 'ram', 'aswale', '2023-06-21', 'rama@gmail.com', 984152312, 8421221121, 'ram@gmail.com', 442908, 'mh', 'rk tech', 'it', 1, '2023-06-21', 'it company', 'nagpur', 'nagpur', 'mh', 'india', 544125, '2023-02-24', '2023-06-21'),
(4, 'Sandip', 'Kohlekar', '0000-00-00', 'sk@gmail.com', 745612355, 784512655, 'sk@gmail.com', 444402, 'Maharashtra', 'Ram Tech', 'IT', 1, '0000-00-00', 'Hello', 'Hello Nagar,Nagpur', 'Nagpur', 'Maharashtra', 'India', 4512565, '0000-00-00', '0000-00-00'),
(5, 'Sandip', 'Kohlekar', '0000-00-00', 'sk@gmail.com', 745612355, 784512655, 'sk@gmail.com', 444402, 'Maharashtra', 'Ram Tech', 'IT', 1, '0000-00-00', 'Hello', 'Hello Nagar,Nagpur', 'Nagpur', 'Maharashtra', 'India', 4512565, '0000-00-00', '0000-00-00'),
(6, 'Sandip', 'Kohlekar', '0000-00-00', 'sk@gmail.com', 745612355, 784512655, 'sk@gmail.com', 444402, 'Maharashtra', 'Ram Tech', 'IT', 1, '0000-00-00', 'Hello', 'Hello Nagar,Nagpur', 'Nagpur', 'Maharashtra', 'India', 4512565, '0000-00-00', '0000-00-00'),
(7, 'ramakant', 'Kohlekar', '12/11/2022', 'sk@gmail.com', 745612355, 784512655, 'sk@gmail.com', 444402, 'Maharashtra', 'Ram Tech', 'IT', 1, '0000-00-00', 'Hello', 'Hello Nagar,Nagpur', 'Nagpur', 'Maharashtra', 'India', 4512565, '14/04/2022', '16/04/2022');

-- --------------------------------------------------------

--
-- Table structure for table `type_of_business`
--

CREATE TABLE `type_of_business` (
  `id` int(20) NOT NULL,
  `name` varchar(300) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `type_of_business`
--

INSERT INTO `type_of_business` (`id`, `name`, `created`) VALUES
(1, 'car', '2023-02-27'),
(2, 'bus', '2023-02-24'),
(3, 'bike', '2023-02-24');

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
(34, 'Shubham', 'Kahate', 'sk@gmail.com', 'e99a18c428cb38d5f260853678922e03', 774556212, 'Laxmi Nagar,Nagpur', 110024, 'pnj.jpg'),
(35, 'ram', 'aswale', 'rama@gmail.com', 'e04f28cc33cb20274dd3ff44e600a923', 4455454, 'sdfsssrfs', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_image`
--

CREATE TABLE `vehicle_image` (
  `id` int(20) NOT NULL,
  `image_name` varchar(200) NOT NULL,
  `image_path` varchar(200) NOT NULL,
  `image_type` varchar(200) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicle_image`
--

INSERT INTO `vehicle_image` (`id`, `image_name`, `image_path`, `image_type`, `created`) VALUES
(1, 'ram', 'new/image/ram.jpej', 'jpej', '2023-03-03');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_registration`
--

CREATE TABLE `vehicle_registration` (
  `id` int(20) NOT NULL,
  `vehicle_type_id` int(20) NOT NULL,
  `seating_capacity` int(100) NOT NULL,
  `vehicle_image_id` int(20) NOT NULL,
  `type_of_vehicle` enum('Car','Bus','Both') NOT NULL,
  `rate_per_km` int(100) NOT NULL,
  `rent_amount` int(11) NOT NULL,
  `owner_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicle_registration`
--

INSERT INTO `vehicle_registration` (`id`, `vehicle_type_id`, `seating_capacity`, `vehicle_image_id`, `type_of_vehicle`, `rate_per_km`, `rent_amount`, `owner_id`) VALUES
(14, 2, 20, 1, 'Bus', 15, 5000, 3),
(15, 2, 20, 1, 'Car', 15, 5000, 3);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_type`
--

CREATE TABLE `vehicle_type` (
  `id` int(20) NOT NULL,
  `type` varchar(100) NOT NULL,
  `created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicle_type`
--

INSERT INTO `vehicle_type` (`id`, `type`, `created`) VALUES
(1, 'car', '2023-02-24'),
(2, 'bike', '2023-02-24'),
(3, 'bus', '2023-02-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_of_business` (`type_of_business_id`);

--
-- Indexes for table `type_of_business`
--
ALTER TABLE `type_of_business`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_image`
--
ALTER TABLE `vehicle_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_type_id` (`vehicle_type_id`,`vehicle_image_id`,`owner_id`),
  ADD KEY `owner_id` (`owner_id`),
  ADD KEY `vehicle_image_id` (`vehicle_image_id`);

--
-- Indexes for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `owner`
--
ALTER TABLE `owner`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `type_of_business`
--
ALTER TABLE `type_of_business`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `vehicle_image`
--
ALTER TABLE `vehicle_image`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `owner`
--
ALTER TABLE `owner`
  ADD CONSTRAINT `owner_ibfk_1` FOREIGN KEY (`type_of_business_id`) REFERENCES `type_of_business` (`id`);

--
-- Constraints for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  ADD CONSTRAINT `vehicle_registration_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`),
  ADD CONSTRAINT `vehicle_registration_ibfk_2` FOREIGN KEY (`vehicle_image_id`) REFERENCES `vehicle_image` (`id`),
  ADD CONSTRAINT `vehicle_registration_ibfk_3` FOREIGN KEY (`vehicle_type_id`) REFERENCES `vehicle_type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
