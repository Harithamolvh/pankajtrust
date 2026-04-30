-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20260422.e3a1824fe4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 30, 2026 at 04:38 AM
-- Server version: 8.4.3
-- PHP Version: 8.5.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pankajtrust`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_settings`
--

CREATE TABLE `app_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'text',
  `group` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-site_settings_all', 'a:0:{}', 2092883860);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `replied_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donors`
--

CREATE TABLE `donors` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `relationship` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contribution_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(12,2) DEFAULT NULL,
  `year` smallint DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `display_publicly` tinyint(1) NOT NULL DEFAULT '1',
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` smallint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `collection_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversions_disk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` bigint UNSIGNED NOT NULL,
  `manipulations` json NOT NULL,
  `custom_properties` json NOT NULL,
  `generated_conversions` json NOT NULL,
  `responsive_images` json NOT NULL,
  `order_column` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `model_type`, `model_id`, `uuid`, `collection_name`, `name`, `file_name`, `mime_type`, `disk`, `conversions_disk`, `size`, `manipulations`, `custom_properties`, `generated_conversions`, `responsive_images`, `order_column`, `created_at`, `updated_at`) VALUES
('019ddbf8-f2e9-70cc-bade-379808ec80fd', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'e0fa3821-5584-44a9-8228-f55e86cc4ef9', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 41752, '[]', '{\"title\": null, \"description\": \"Prayer by Students\"}', '[]', '[]', 1, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f314-712f-8113-20cbef33e013', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '7cbe160b-f775-4845-bc38-94e8da57e368', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 54870, '[]', '{\"title\": null, \"description\": \"Prayer during the inaugural function.\"}', '[]', '[]', 2, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f324-711b-ba65-f4b00689ea8f', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '0a15aa54-7f86-4b80-a367-c87bd2044c17', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 33591, '[]', '{\"title\": null, \"description\": \"Sri K S K Panicker, Vice Chairman of Trust, offering welcome address.\"}', '[]', '[]', 3, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f330-72de-81a3-15a38940e601', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '4358bd59-5e54-48d8-a4c6-d9ba4c69c3e2', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 71293, '[]', '{\"title\": null, \"description\": \"Audience attending the inaugural function.\"}', '[]', '[]', 4, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f33e-7321-b398-337b1c80f2d1', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '08f18754-7818-4dd6-b723-c25a70a8f354', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 34002, '[]', '{\"title\": null, \"description\": \"Prof. M K Sanu is being welcomed to the function.\"}', '[]', '[]', 5, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f34c-713e-9417-647ff21cec34', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '7aec139c-0aa3-468f-ba62-f5d54eb4f8a1', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 44079, '[]', '{\"title\": null, \"description\": \"Welcome to Sri D Ramachandran Potti, Chairman, Gandhi Peace Foundation, Kochi\"}', '[]', '[]', 6, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f35b-7203-89c4-3a7ebed1a585', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '189f6e89-41d9-4aa8-be53-04ff0450c046', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 38975, '[]', '{\"title\": null, \"description\": \"Weclome to Sri K P Chandrashekharan Nair, DGM, Federal Bank, Aluva.\"}', '[]', '[]', 7, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f369-72fc-a9d8-0f36c475447d', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '9d9bca6d-0b50-4dde-ae4a-a956d8f9c942', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 40407, '[]', '{\"title\": null, \"description\": \"Welcome to Prof. N Parvati Manoranjini, Principal, Maharaja\\\"s college.\"}', '[]', '[]', 8, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f377-704b-8a46-88d62582dc24', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '07b10da8-d2fc-436e-8d1d-d37ace5bd06a', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 51496, '[]', '{\"title\": null, \"description\": \"M K Das, former editor of The New Indian Express, Kochi is being welcomed.\"}', '[]', '[]', 9, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f384-7020-8329-76e5ef0e7830', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '9dd1b4f7-d4f1-444e-8d57-55670b67f9a0', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 46380, '[]', '{\"title\": null, \"description\": \"Introductory speech by Sri A V Rajan, Retired Customs Superintendent and a close friend of Thampil Pankaj.\"}', '[]', '[]', 10, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f39e-71a2-8a2b-f0e181b70947', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '0dde03e4-8d58-4409-b7fc-0e97184aa654', 'meeting_gallery', '11', '11.jpg', 'image/jpeg', 'public', 'public', 36465, '[]', '{\"title\": null, \"description\": \"Principal of Maharaj\\\"s College, Prof. N Parvati Manoranjini addressing the audience.\"}', '[]', '[]', 11, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3af-727b-be86-f5326cc143a2', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '124dd939-6c87-48e0-b314-68db11b8a9d4', 'meeting_gallery', '12', '12.jpg', 'image/jpeg', 'public', 'public', 43128, '[]', '{\"title\": null, \"description\": \"Prof. M K Sanu handing over 32 volumes of Britannica Encyclopedia to Maharaja\\\"s college library on behalf of Trust.\"}', '[]', '[]', 12, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3bb-735d-ae0f-d34a229562f2', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '3edd49e7-53ef-4e2a-b615-53777f5dde96', 'meeting_gallery', '13', '13.jpg', 'image/jpeg', 'public', 'public', 50254, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti handing over cheque of contribution of the trust to Maharaja\\\"s college.\"}', '[]', '[]', 13, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3c6-72ba-bb41-70501b9f704a', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '0d27816c-dfe4-40a2-b0dd-16b6d248751a', 'meeting_gallery', '14', '14.jpg', 'image/jpeg', 'public', 'public', 43425, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 14, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3d1-72ba-995a-65dc79450c18', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'b5007bf2-dece-4aa4-b882-ba3b6bd86872', 'meeting_gallery', '15', '15.jpg', 'image/jpeg', 'public', 'public', 42583, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 15, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3de-7259-af6e-f22e392db9ac', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'f77cd707-d1f3-4009-8862-da62d49981d8', 'meeting_gallery', '16', '16.jpg', 'image/jpeg', 'public', 'public', 39013, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 16, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3e9-7396-bbfd-dfa507d59824', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'eae83c68-2e66-4955-ba7d-2cae34c177f5', 'meeting_gallery', '17', '17.jpg', 'image/jpeg', 'public', 'public', 39232, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 17, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f3f9-7183-9158-1befb93b38e7', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '42c3091f-83e4-4000-a060-4410ae813a8b', 'meeting_gallery', '18', '18.jpg', 'image/jpeg', 'public', 'public', 39244, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 18, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f406-7345-a0f7-9b54113e07c8', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'effc50eb-a7c6-4ae5-b49d-d37b5d78a116', 'meeting_gallery', '19', '19.jpg', 'image/jpeg', 'public', 'public', 38591, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 19, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f412-7301-a012-c1b9f140628e', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'aaa109aa-ac74-4864-9bd9-47083344b097', 'meeting_gallery', '20', '20.jpg', 'image/jpeg', 'public', 'public', 37944, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti distributing scholarship to students.\"}', '[]', '[]', 20, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f41d-7149-9a56-43e7773f3f37', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '8b41eb5f-f5e5-4904-804a-23aff74957a8', 'meeting_gallery', '21', '21.jpg', 'image/jpeg', 'public', 'public', 29454, '[]', '{\"title\": null, \"description\": \"Prof. M K Sanu addressing the students.\"}', '[]', '[]', 21, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f428-73ba-862c-d4eda73cd84d', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'de1e0955-7cc1-4afe-aa3a-bb49d3dae772', 'meeting_gallery', '22', '22.jpg', 'image/jpeg', 'public', 'public', 28080, '[]', '{\"title\": null, \"description\": \"Sri D Ramachandran Potti addressing the audience.\"}', '[]', '[]', 22, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f437-7211-846a-f3df38b57ca5', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '410cb30b-dd53-4564-95d8-8e18e5f959c2', 'meeting_gallery', '23', '23.jpg', 'image/jpeg', 'public', 'public', 46291, '[]', '{\"title\": null, \"description\": \"Sri. M K Das offering felicitation.\"}', '[]', '[]', 23, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f443-717f-9928-0eae7333e52a', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'f7230d52-8a30-4448-a9ea-f6b698da6b24', 'meeting_gallery', '24', '24.jpg', 'image/jpeg', 'public', 'public', 39491, '[]', '{\"title\": null, \"description\": \"Sri. M K Das offering felicitation.\"}', '[]', '[]', 24, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f44f-73e5-ab24-37564b826b59', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '46378557-f04a-4900-8cf8-27663a99389b', 'meeting_gallery', '25', '25.jpg', 'image/jpeg', 'public', 'public', 34298, '[]', '{\"title\": null, \"description\": \"Sri K P Chandrashekharan Nair offering felicitation.\"}', '[]', '[]', 25, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f45b-72f8-865d-b6a15b62a967', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'c70e1549-f9a0-4c26-a495-af1f325519e9', 'meeting_gallery', '26', '26.jpg', 'image/jpeg', 'public', 'public', 32140, '[]', '{\"title\": null, \"description\": \"A scholarship recipient offering thanks.\"}', '[]', '[]', 26, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f46b-7373-90ed-ac8e60606768', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', 'a60b91a0-7246-44b7-964e-497ae57a3bc4', 'meeting_gallery', '27', '27.jpg', 'image/jpeg', 'public', 'public', 33407, '[]', '{\"title\": null, \"description\": \"Smt. T R Ambika Devi, trust member, offering vote of thanks.\"}', '[]', '[]', 27, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f47d-734f-93ba-0379b4ac75ce', 'App\\Models\\Meeting', '019ddbf8-f2c8-7041-be40-d2a680ff1274', '2be14d4d-6be2-43ad-9206-72f90c8a9111', 'meeting_gallery', '28', '28.jpg', 'image/jpeg', 'public', 'public', 58666, '[]', '{\"title\": null, \"description\": \"First batch of scholarship recipients.\"}', '[]', '[]', 28, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f495-7019-829c-a92ac0909c7d', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '0c0faa70-a951-440a-a075-e679eade3f37', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 44772, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4a1-719b-90b4-5e7c1b628ca5', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '47334b3e-2206-4651-97da-5e83c56fbc2b', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 43325, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 2, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4ad-71c2-8288-a812cedb8282', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '82d0d8f8-59d7-49b5-ad4a-03baf07f9c61', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 44831, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 3, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4b8-7226-8c98-99c1dda88b2a', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', 'edd685e2-75e5-4530-be3c-616e2e5c1298', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 47973, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 4, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4c3-71de-9e38-b0ba5c361b4a', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '21075e33-56da-466f-a3b2-ea6bf6949d97', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 46999, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 5, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4cf-73e3-9a1a-fc0366c9026f', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '315a2a0c-8c1f-4a53-972f-c953e661ba6d', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 42125, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 6, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4db-71a3-921b-e1b9c915c2f5', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '86b92fdd-d9c5-40dc-b4cf-64a1a04d447f', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 47026, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 7, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4e8-7194-ac28-d007bbc149f2', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '765544b5-bf8d-414d-ba0e-98e0cfbac79c', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 38456, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 8, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f4f6-72ee-b4b2-92b9da1fd2e2', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', 'eaabbbda-5759-41e0-b69f-ac3001abcf50', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 46159, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 9, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f502-7318-b769-d4f872371454', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '16702418-f197-4fa5-8898-8c87e40bf699', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 41584, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 10, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f50e-73bf-8392-de47ceb559c4', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', 'ba33acdb-0c3c-42cb-9437-3a31c15a57c2', 'meeting_gallery', '11', '11.jpg', 'image/jpeg', 'public', 'public', 46844, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 11, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f51b-70d9-a0d9-7f5ed9b91244', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '2a759061-c66f-46d8-b2a5-d889b33a568e', 'meeting_gallery', '12', '12.jpg', 'image/jpeg', 'public', 'public', 43511, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 12, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f526-7161-b1e3-eaf614ebf886', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '5c8bf951-49e6-4e17-9ab9-4fadd5260808', 'meeting_gallery', '13', '13.jpg', 'image/jpeg', 'public', 'public', 43480, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 13, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f532-73e6-bfcc-2928e121f584', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '681b70b1-68ba-4a9a-886d-0b77e492fc6e', 'meeting_gallery', '14', '14.jpg', 'image/jpeg', 'public', 'public', 41814, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 14, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f53e-73b4-b263-e5da7c2ffb9e', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', 'c1e28faf-7d5c-402e-9bf2-4bb0dbfe5e0c', 'meeting_gallery', '15', '15.jpg', 'image/jpeg', 'public', 'public', 40657, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 15, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f54a-70c5-b194-71c46af4d07c', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '7204f75a-5093-4fca-a1cb-b3e46be3784a', 'meeting_gallery', '16', '16.jpg', 'image/jpeg', 'public', 'public', 256557, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 16, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f555-73e1-a3ef-353688b934e7', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '5f5ec6b9-059f-4544-a4b0-d7eacb813ee0', 'meeting_gallery', '17', '17.jpg', 'image/jpeg', 'public', 'public', 46894, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 17, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f562-731e-a949-24acd1ae3d9a', 'App\\Models\\Meeting', '019ddbf8-f48e-72db-ab15-18f3621e4de1', '76cc8d40-c9fd-4dfb-adf1-5c6485af998a', 'meeting_gallery', '18', '18.jpg', 'image/jpeg', 'public', 'public', 43869, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 18, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f579-722b-9211-b6d0dcc693ea', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'b04abd51-5276-48c7-8c53-d90795d34836', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 46959, '[]', '{\"title\": null, \"description\": \"The banner of the academic year 2012-13 Scholarship Distribution function\"}', '[]', '[]', 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f588-7296-839d-65207522deee', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '0a8a5d75-ccce-408d-b937-a02c77394049', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 85142, '[]', '{\"title\": null, \"description\": \"Shri. T J Joseph, Municipal Chairman, Thodupuzha, who was the Chief Guest for the day, arriving\"}', '[]', '[]', 2, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f594-71bd-beb0-1ee5d3b82579', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '39dcd285-1881-4846-8b0e-ae80987ee344', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 36818, '[]', '{\"title\": null, \"description\": \"Prayer by students\"}', '[]', '[]', 3, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5a2-7049-a940-4e9d77d3a779', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '22c0eb27-5bd9-4afa-8892-663be8d24138', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 46451, '[]', '{\"title\": null, \"description\": \"Smt. Ambika Devi, Trustee of the Trust, delivering the welcome speech\"}', '[]', '[]', 4, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5ae-730b-b9aa-fa8dd35e4302', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '0b95237a-1969-47f7-bb84-612d2a07bd84', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 46345, '[]', '{\"title\": null, \"description\": \"Shri. T P B Panicker delivering Annual Report of the year 2011-2012\"}', '[]', '[]', 5, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5ba-7351-9732-b10f80c989fa', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '119dbf3f-4be9-4c7c-af04-075c35826913', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 46557, '[]', '{\"title\": null, \"description\": \"Shri. T J Joseph inaugurating the function by lighting the lamp\"}', '[]', '[]', 6, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5c7-7169-9833-d6b99014927f', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'cdd6db4a-e3f1-4c76-8ec7-8a636ad08072', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 44040, '[]', '{\"title\": null, \"description\": \"Shri. K K Rajan, AEO, lighting the lamp\"}', '[]', '[]', 7, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5d3-72b5-af73-b64e175a0f83', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'cb9d6b40-f7f3-40d9-9672-1ddcd7fa5cd4', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 45174, '[]', '{\"title\": null, \"description\": \"Shri. Thampil Pankaj lighting the lamp\"}', '[]', '[]', 8, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5e0-71d7-b2db-d1e5638e354d', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '11a4bce2-1ad1-460c-8bb3-f2c39a22a329', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 45401, '[]', '{\"title\": null, \"description\": \"Smt. Santha Pankaj lighting the lamp\"}', '[]', '[]', 9, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5ec-71d7-8ca0-c23d64f89484', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'f47b8c0b-3942-4a81-b205-fe9de26bb1a4', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 45063, '[]', '{\"title\": null, \"description\": \"The audience\"}', '[]', '[]', 10, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f5f8-72a3-8ad2-e38425c57d08', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '3a9fd708-4589-4807-a9bf-f4a917eeb090', 'meeting_gallery', '11', '11.jpg', 'image/jpeg', 'public', 'public', 48928, '[]', '{\"title\": null, \"description\": \"Shri. Thampil Pankaj delivering felicitation\"}', '[]', '[]', 11, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f605-7087-afc0-c407cd36eb3c', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '585df6a2-5b1f-4135-892c-d3a1f8ce78da', 'meeting_gallery', '12', '12.jpg', 'image/jpeg', 'public', 'public', 38666, '[]', '{\"title\": null, \"description\": \"Shri. T J Joseph handing over scholarships\"}', '[]', '[]', 12, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f610-7260-89a3-8f0b4e5911ab', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'b0066844-4f2f-4bb0-ab2a-1e179311dfdc', 'meeting_gallery', '13', '13.jpg', 'image/jpeg', 'public', 'public', 45016, '[]', '{\"title\": null, \"description\": \"Shri. Thampil Pankaj handing over scholarships\"}', '[]', '[]', 13, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f621-71d3-9341-f9f90ced9166', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '538f933e-e11e-4d89-9f63-02a0937d4cff', 'meeting_gallery', '14', '14.jpg', 'image/jpeg', 'public', 'public', 46279, '[]', '{\"title\": null, \"description\": \"Dr. T R Sreedevi delivering felicitation\"}', '[]', '[]', 14, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f62d-727d-8d66-631a2e4392e4', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'fe0f7d98-280f-413a-9ba0-7e60337310a0', 'meeting_gallery', '15', '15.jpg', 'image/jpeg', 'public', 'public', 38762, '[]', '{\"title\": null, \"description\": \"A scholarship recipient sharing her experience\"}', '[]', '[]', 15, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f63a-7117-97b5-4d1e227cb4b0', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '9de2650c-9ffb-443a-ab83-24ffd9faf4ae', 'meeting_gallery', '16', '16.jpg', 'image/jpeg', 'public', 'public', 36012, '[]', '{\"title\": null, \"description\": \"Another scholarship recipient sharing her experience\"}', '[]', '[]', 16, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f646-7108-9871-705e51a46ae3', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '9e322f0e-73cc-47c1-ab5d-7e3b9093ae83', 'meeting_gallery', '17', '17.jpg', 'image/jpeg', 'public', 'public', 43519, '[]', '{\"title\": null, \"description\": \"Another scholarship recipient sharing her experience\"}', '[]', '[]', 17, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f651-70e5-b1c0-1001565152d8', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '14e84e24-4d56-41f4-9a74-178aa1388358', 'meeting_gallery', '18', '18.jpg', 'image/jpeg', 'public', 'public', 43166, '[]', '{\"title\": null, \"description\": \"Shri. G Rajagopalan delivering vote of thanks\"}', '[]', '[]', 18, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f65e-7317-a13b-bc85b0ae3cff', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', '5ce361a7-d165-4f4b-9524-03bd06e35920', 'meeting_gallery', '19', '19.jpg', 'image/jpeg', 'public', 'public', 79501, '[]', '{\"title\": null, \"description\": \"18 of 19 students receiving Pankaj Trust scholarships for college education in 2012. One student represented by her mother\"}', '[]', '[]', 19, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f669-7303-9807-71a70adb3c15', 'App\\Models\\Meeting', '019ddbf8-f572-708c-a260-24a719c1497f', 'fed18923-1103-4596-b93e-c83ef15b1b4b', 'meeting_gallery', '20', '20.jpg', 'image/jpeg', 'public', 'public', 89728, '[]', '{\"title\": null, \"description\": \"Group picture of the scholarship recipients with their parents\"}', '[]', '[]', 20, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f680-7003-9075-a6b824abc973', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', 'b35db0c7-da4a-43e2-b08e-c8fe83f3b79e', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 54865, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f68c-73cc-aab9-9f3491a6421e', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '72710c98-06f1-43a2-93d9-6c1d468af738', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 40021, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 2, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f698-706e-93bd-63122f5249b1', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', 'c28db764-c2ef-4412-9f8d-db978141291b', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 43594, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 3, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6a4-73fd-8a78-365e28b57eff', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '83cded4c-1f3a-4235-bd70-2ffd41383f57', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 39109, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 4, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6b0-72c1-969e-8e3eff12b686', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '2182a6cb-0137-4e25-baf5-0de03143325e', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 47880, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 5, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6bc-712a-b46a-d4c3b96edc58', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '80de3582-a8d2-404d-9ddf-b3032cc64805', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 47804, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 6, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6c7-730a-8c08-34d3e81900c5', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '14a57aa0-02e9-463d-b1fa-9b1d72bd0751', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 45243, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 7, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6d3-73c5-aeed-a4b1e36929f5', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '39683177-582c-4b3e-8150-3003ac18fe0c', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 45764, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 8, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6e0-72cd-af0f-1d45bbafefee', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', '0261234d-b65d-45e4-8ba8-a901b9fc1d9f', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 151329, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 9, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6ee-723a-b08e-5af7a88b4d94', 'App\\Models\\Meeting', '019ddbf8-f679-733d-97e4-27eb4464c9e4', 'd769c9ec-925c-46fc-8b3d-95848421d145', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 43594, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 10, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f704-7260-8c8a-9f6e932b3ac6', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '2bf7eb7c-4c72-4719-a82a-a741a623def7', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 46625, '[]', '{\"title\": null, \"description\": \"Starting the 2014-15 Academic Year Scholarship Distribution function (Ernakulam District) with Prayer\"}', '[]', '[]', 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f711-7399-9ecb-5ddb79f4e929', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', 'df1d6487-3c67-4e05-a378-36612ac9f6e9', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 43919, '[]', '{\"title\": null, \"description\": \"Shri. G Rajagopalan, Executive Treasurer of the Trust, delivering the Welcome Speech\"}', '[]', '[]', 2, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f71e-732b-851b-005d43115811', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '468cccab-51cb-4c43-8780-6d33336608f3', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 44688, '[]', '{\"title\": null, \"description\": \"Shri. T P B Panicker, delivering the Presidential Address\"}', '[]', '[]', 3, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f72b-71bc-ab6e-8dbfb2925480', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '8e2a57ca-bf7b-43bd-aefc-39d0c42edddb', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 43690, '[]', '{\"title\": null, \"description\": \"Inaugral speech by Shri. M B Muraleedaran, Councillor\"}', '[]', '[]', 4, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f737-716c-835b-b3ad0d1fc5f7', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', 'af67926b-0e1a-4720-9474-97626da6cde2', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 46453, '[]', '{\"title\": null, \"description\": \"Scholarship recipients attending the function.\"}', '[]', '[]', 5, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f744-7270-9349-766edcd6f888', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '1a8ae2d5-a706-445c-8ee8-559af1bff773', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 42975, '[]', '{\"title\": null, \"description\": \"Shri. M B Muraleedaran handing over scholarships\"}', '[]', '[]', 6, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f751-7399-be8c-258f9ecd4f65', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', 'a6e676b1-f79b-49bd-b6ba-149127aef29a', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 43352, '[]', '{\"title\": null, \"description\": \"Distribution of scholarships\"}', '[]', '[]', 7, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f75f-70d6-8dc5-a03f282a1f8e', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', 'e1bb3ec6-6b55-4a26-843c-a5cd6eb149e9', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 42915, '[]', '{\"title\": null, \"description\": \"Distribution of scholarships\"}', '[]', '[]', 8, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f76d-71c6-bb93-10baf7a14a55', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '3bd4ff2f-9765-4904-92d1-7f53929c4598', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 43556, '[]', '{\"title\": null, \"description\": \"Distribution of scholarships\"}', '[]', '[]', 9, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f77a-70cb-acb3-a4b9ddc2b923', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', 'a78cc816-94fd-4f54-8ca4-27392fe3e859', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 43838, '[]', '{\"title\": null, \"description\": \"Distribution of scholarships\"}', '[]', '[]', 10, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f788-73bb-8cb1-128b3f96e2ef', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '1fe4a8e6-d1df-4bcf-9617-ad68b93e8982', 'meeting_gallery', '11', '11.jpg', 'image/jpeg', 'public', 'public', 49043, '[]', '{\"title\": null, \"description\": \"A scholarship recipient sharing her experience\"}', '[]', '[]', 11, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f795-7123-9de1-fa9813fcc882', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '3503e439-b220-4db9-9a13-90886c2b73fe', 'meeting_gallery', '12', '12.jpg', 'image/jpeg', 'public', 'public', 44995, '[]', '{\"title\": null, \"description\": \"Shri. R Sreeraj introducing the Trust website to scholarship recipients\"}', '[]', '[]', 12, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7a2-708a-a7cb-f6fe8a08593d', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '57a285ef-f48e-416a-87ff-c6dc41148dbe', 'meeting_gallery', '13', '13.jpg', 'image/jpeg', 'public', 'public', 47596, '[]', '{\"title\": null, \"description\": \"Smt. K Sreelatha, offering Vote of Thanks\"}', '[]', '[]', 13, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7b0-72e7-ad7b-fcb8ca95afc0', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '2b4ce359-cf93-4ab7-9e53-39a3a594b63f', 'meeting_gallery', '14', '14.jpg', 'image/jpeg', 'public', 'public', 63077, '[]', '{\"title\": null, \"description\": \"Group photo of scholarship recipients (Ernakulam District)\"}', '[]', '[]', 14, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7bf-7107-bc71-4f8aa3a92d23', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '75d79a97-eadd-4413-b27d-db83a3679490', 'meeting_gallery', '15', '15.jpg', 'image/jpeg', 'public', 'public', 72015, '[]', '{\"title\": null, \"description\": \"Group photo of scholarship recipients with their parents and Trust members (Ernakulam District)\"}', '[]', '[]', 15, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7d0-728b-a0e5-d02c67f1f7b0', 'App\\Models\\Meeting', '019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '9b4dee69-791e-4080-a4b1-97161982c3d5', 'meeting_gallery', '16', '16.jpg', 'image/jpeg', 'public', 'public', 58281, '[]', '{\"title\": null, \"description\": \"Group photo of scholarship recipients (Idukki District)\"}', '[]', '[]', 16, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7ec-7140-9d2a-56a550d49740', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', 'd5a97827-3ea1-4d10-afa7-557782f494a1', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 504642, '[]', '{\"title\": null, \"description\": \"Scholarship recipients(EKM):Christina Roy,Priyanka Laslet,Mariya Joicy,Geethu TS,Jaimy Mol KJ,Aparna Mohan,Nepun Urumese,Akshay K,Suhail Ashraf,Rahul M R,Vijayakumar S\"}', '[]', '[]', 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7f9-70e1-bb16-39538f21e495', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', '81438b12-c307-44ab-8a1f-00d8b48c2746', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 31103, '[]', '{\"title\": null, \"description\": \"Scholarship Recipient : Amrutha Santhosh\"}', '[]', '[]', 2, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f806-709c-afd1-0972d8cfed3a', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', 'b2af343e-c667-4b79-a93c-fdeffa84bf46', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 944043, '[]', '{\"title\": null, \"description\": \"Scholarship recipients(Idukki):Amal V S,Subin Shaji,Albin M Michael,Parvathy Babu,Athira TV, Aswathy Ashokan,Reshma Ramesh,Divya Devadas,Bismi Ibrahim\"}', '[]', '[]', 3, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f815-71e2-a78a-dc7381ae2527', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', 'a596fd03-8439-464c-bb34-092f9da22563', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 512864, '[]', '{\"title\": null, \"description\": \"Group photo of the scholarship recipients of Idukki district with the Trust members\"}', '[]', '[]', 4, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f824-730a-af39-a040b0c5765f', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', 'fe5783a5-d4d8-4c66-b334-7321b070d1ea', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 479544, '[]', '{\"title\": null, \"description\": \"Shri. K S K Panicker, Trustee of the Trust, handing over scholarships to the recipients of Idukki district\"}', '[]', '[]', 5, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f833-737c-8030-6750cdab3f3a', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', '73f85b92-e0b1-4566-a36e-2ddc2fdda661', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 936160, '[]', '{\"title\": null, \"description\": \"Scholarship recipients of Idukki district attending the function with their parents\"}', '[]', '[]', 6, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f843-714f-98c3-e11351758c1a', 'App\\Models\\Meeting', '019ddbf8-f7e2-71c4-928f-451423a63144', '2455758b-7110-4e9f-8024-fda41d77ce32', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 503365, '[]', '{\"title\": null, \"description\": \"Inaugural speech by Smt. Ambika Devi, Trustee of the Trust during Idukki district scholarship distribution ceremony\"}', '[]', '[]', 7, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f866-71a5-888b-7228da5e27bb', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', '7ffc4ffc-d053-427c-b4ce-373426c96821', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 2492372, '[]', '{\"title\": null, \"description\": \"Ernakulam District Scholarship Recipients(Standing - left to right) : Sarath Babu, Nidhilesh P S, Vinayak P R, Gokul Gopinath,  Megha Mani, Shilpa M S, Adithya Murali, Chippy Pradeep, Saliha K R\"}', '[]', '[]', 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f87d-739d-9803-8a0e46393530', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', '9f967895-03d5-4596-817a-efd6bd276403', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 2244754, '[]', '{\"title\": null, \"description\": \"Idukki District Scholarship Recipients(left to right) : Emmanuel Jose, Ashly Johny, Anjali N Ajith, Amitha Ajayakumar,  Arya R, Devika Sivan, Rinnu Mariya Roy, Prathibha Mol N J, Aswathy Rajesh\"}', '[]', '[]', 2, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f892-715e-a24b-f066acbd5419', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', '14a3423b-1f1c-40ac-952e-32845a119b5d', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 957334, '[]', '{\"title\": null, \"description\": \"Special Scholarship Award to the primary school students in Maradu Mangayil School for the year 2016\"}', '[]', '[]', 3, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f8a8-7114-907c-217aa5f79893', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', 'bb25f94f-fb9e-411d-8c9a-2bf5787b1a7f', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 941504, '[]', '{\"title\": null, \"description\": \"Special Scholarship Award to the primary school students in Maradu Mangayil School for the year 2016\"}', '[]', '[]', 4, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f8bb-708c-b78f-31b8fd83b696', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', '234e0d22-b8e7-4ebe-8c4a-efba92e86493', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 1065267, '[]', '{\"title\": null, \"description\": \"Special Scholarship Award to the primary school students in Maradu Mangayil School for the year 2016\"}', '[]', '[]', 5, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f8cd-7335-9123-ac45be9f9abe', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', 'e3305156-fb14-4445-80dc-8c3c6c6fcf3e', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 1136550, '[]', '{\"title\": null, \"description\": \"Special Scholarship Award to the primary school students in Maradu Mangayil School for the year 2016\"}', '[]', '[]', 6, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f8de-70da-a801-2c387704026f', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', 'a458508e-e974-496d-88db-c1fba926e321', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 952263, '[]', '{\"title\": null, \"description\": \"Special Scholarship Award to the primary school students in Maradu Mangayil School for the year 2016\"}', '[]', '[]', 7, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f8ed-7217-8372-ecba4d11bb02', 'App\\Models\\Meeting', '019ddbf8-f859-7014-95dc-0541868f8a35', '0de1803b-f1a6-4a33-9fdd-d2dfc79a930e', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 949872, '[]', '{\"title\": null, \"description\": \"Special Scholarship Award to the primary school students in Maradu Mangayil School for the year 2016\"}', '[]', '[]', 8, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f909-73e3-92eb-25c7f73fb1ea', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '295b8ed3-2b62-4dc4-848e-05f8cfe872d6', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 75881, '[]', '{\"title\": null, \"description\": \"Ernakulam District Scholarship Recipients\"}', '[]', '[]', 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f918-70e7-a5f7-89cb169f49fb', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '836523a5-157e-48c0-b142-0b1a03b9f49a', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 326744, '[]', '{\"title\": null, \"description\": \"Idukki District Scholarship Recipients(left to right) : Akshay Narayan, Jishnu Raj, Yadu Krishna VS, Sumitha PA, Lakshmi K Rajan, Parvathy Jiji, Anakha PS, Athira V Murali, Vandana Vinod, Vidya Rajeev\"}', '[]', '[]', 2, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f928-71c5-bca4-a220a8511e04', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '793ef1b0-eaae-4cae-8f84-55981641e807', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 113176, '[]', '{\"title\": null, \"description\": \"Scholarship Recipients from Idukki district along with their parents\"}', '[]', '[]', 3, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f937-7384-828b-e6bb09df400b', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '979fc61a-c2c6-4d3d-bc4f-23826c8b54a6', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 101286, '[]', '{\"title\": null, \"description\": \"Scholarship ceremony was conducted in loving memory of Trust Board Member, Santha Pankaj\"}', '[]', '[]', 4, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f945-704e-adc1-cfbfebe00caa', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '62b754e3-22b7-4a81-8f20-7b05eb697cd3', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 130410, '[]', '{\"title\": null, \"description\": \"Scholarship Distribution Ceremony held at Ernakulam on August 2017\"}', '[]', '[]', 5, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f956-722a-83f9-d7977eb8d491', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '061ce67d-4a42-46c8-bb71-92c94933f498', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 99151, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Ernakulam district\"}', '[]', '[]', 6, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f965-72ac-9b78-3c1762c0b905', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '38ceade0-097e-40a0-a853-00e6da20378d', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 87654, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Ernakulam district\"}', '[]', '[]', 7, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f975-7089-b056-f341e7f43fb6', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '32f77306-1d6e-4035-b5eb-360180dad794', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 104583, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Ernakulam district\"}', '[]', '[]', 8, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f984-713c-85c9-9f0f34e5cd8e', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '543d84fc-20e3-4ecd-a89f-6a6e3fe8dc18', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 93692, '[]', '{\"title\": null, \"description\": \"Scholarship Recipients from Ernakulam district along with the Trust members\"}', '[]', '[]', 9, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f992-70c0-afe7-e51d8753e21d', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', 'e7de5df1-1eeb-4fb0-ae78-ac785f7f57bb', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 93965, '[]', '{\"title\": null, \"description\": \"Scholarship distribution ceremony at Idukki district\"}', '[]', '[]', 10, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9a2-7160-aac5-a570ef4bdc24', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '349ccdb7-394a-4832-996e-59353581d3e9', 'meeting_gallery', '11', '11.jpg', 'image/jpeg', 'public', 'public', 93965, '[]', '{\"title\": null, \"description\": \"Scholarship distribution ceremony at Idukki district\"}', '[]', '[]', 11, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9b1-71b7-823f-233983274fcd', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', 'a395d818-0bbe-4cd8-b5e3-3a3d3689577f', 'meeting_gallery', '12', '12.jpg', 'image/jpeg', 'public', 'public', 98783, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 12, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9c0-708d-ac99-d9794b2f664f', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '5404f4e1-163c-44f9-9179-e3b1b5ba7d25', 'meeting_gallery', '13', '13.jpg', 'image/jpeg', 'public', 'public', 105790, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 13, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9d0-7269-94cc-ac99e0f79573', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', 'ea39e57a-08cf-4b9c-88a7-e8e296b1b780', 'meeting_gallery', '14', '14.jpg', 'image/jpeg', 'public', 'public', 106726, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 14, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9df-7299-8af9-a6e5d29b4304', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '4b1548e2-2774-44c8-a770-30b43f1aa7c3', 'meeting_gallery', '15', '15.jpg', 'image/jpeg', 'public', 'public', 108375, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 15, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9ed-72a8-b0f0-d92afb729a90', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '6b3f42b8-0f62-4c69-a483-9dd310482e8e', 'meeting_gallery', '16', '16.jpg', 'image/jpeg', 'public', 'public', 95165, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 16, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f9fb-719a-a433-86d8cc730193', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '021d5c9a-93ac-4631-912a-ae65c5153c1e', 'meeting_gallery', '17', '17.jpg', 'image/jpeg', 'public', 'public', 108253, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 17, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa0b-70e7-b2d1-96be6b79d6e8', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', 'fda65212-022c-4952-8c23-63f2967bc484', 'meeting_gallery', '18', '18.jpg', 'image/jpeg', 'public', 'public', 109652, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 18, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa1b-70fe-9735-205291a4894b', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', '85e5c569-fad1-46d6-8898-3961950d6001', 'meeting_gallery', '19', '19.jpg', 'image/jpeg', 'public', 'public', 102533, '[]', '{\"title\": null, \"description\": \"Scholarship distribution at Idukki district\"}', '[]', '[]', 19, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa2a-73ca-8486-6d0abd071654', 'App\\Models\\Meeting', '019ddbf8-f901-713c-83f9-482f793bfe54', 'aa5a50d9-3404-481d-8312-21623c6368f9', 'meeting_gallery', '20', '20.jpg', 'image/jpeg', 'public', 'public', 81057, '[]', '{\"title\": null, \"description\": \"Scholarship Recipients from Idukki district along with the Trust members\"}', '[]', '[]', 20, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa4d-71e4-9aaa-17b73c30eb16', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '09b70921-d4ea-44ee-98fc-1ca4d49a5d19', 'meeting_gallery', '01', '01.jpg', 'image/jpeg', 'public', 'public', 4280864, '[]', '{\"title\": null, \"description\": \"Ernakulam Scholarships: From Left to right, Top to Bottom: Reshma, Gayatri, Athira, Rahul, Sooraj, Neethu Mohan, Swarna, Remya Devu\"}', '[]', '[]', 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa66-71f8-9d43-cf6da1ee6aee', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', 'a2ee8357-c187-4e07-a4b0-82b9d7005291', 'meeting_gallery', '02', '02.jpg', 'image/jpeg', 'public', 'public', 2500048, '[]', '{\"title\": null, \"description\": \"Thodupuzha Scholarships: From Left to right, Top to Bottom: Adheena Shiji, Bibin Binoy, Mohisin P.M (sitting), Sreeparvathy, Devika Rajesh, Krishna Priya T.V, Sreekutty Santhosh, Devika. D, Haritha Suresh, Reshma Remesh, Aryamole E. S.\"}', '[]', '[]', 2, '2026-04-29 19:50:20', '2026-04-29 19:50:20');
INSERT INTO `media` (`id`, `model_type`, `model_id`, `uuid`, `collection_name`, `name`, `file_name`, `mime_type`, `disk`, `conversions_disk`, `size`, `manipulations`, `custom_properties`, `generated_conversions`, `responsive_images`, `order_column`, `created_at`, `updated_at`) VALUES
('019ddbf8-fa7f-73fb-8135-5ca693b816bd', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', 'f15c500c-d20e-4a22-bdf3-4d5e23b3491b', 'meeting_gallery', '03', '03.jpg', 'image/jpeg', 'public', 'public', 4213166, '[]', '{\"title\": null, \"description\": \"Scholarship students with our trust members.\"}', '[]', '[]', 3, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa99-733f-b957-7d2c6b720f26', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '16668db7-c1f3-4cae-a018-d7ef45af4b52', 'meeting_gallery', '04', '04.jpg', 'image/jpeg', 'public', 'public', 2550772, '[]', '{\"title\": null, \"description\": \"Scholarship students with our trust members.\"}', '[]', '[]', 4, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fab0-72ea-a05b-bc0fd355ca17', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '4d9bfe9e-f4e2-49c4-87a8-2cb47e871670', 'meeting_gallery', '05', '05.jpg', 'image/jpeg', 'public', 'public', 2681451, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 5, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fac9-727d-8712-ad277a8579b3', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '03e8cf55-4f83-4244-aaa9-b01cbadea342', 'meeting_gallery', '06', '06.jpg', 'image/jpeg', 'public', 'public', 2775633, '[]', '{\"title\": null, \"description\": \"\"}', '[]', '[]', 6, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fae0-7013-b678-ad9811a9fc7b', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', 'f9d831b0-ac9b-4a0e-8334-785d64fc4492', 'meeting_gallery', '07', '07.jpg', 'image/jpeg', 'public', 'public', 4107530, '[]', '{\"title\": null, \"description\": \"Our beloved member, K.S.K. Panicker\"}', '[]', '[]', 7, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-faf6-7215-b70d-aeee386bb4aa', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '3b4766d5-823f-4c1a-9f68-ddc2ed465e20', 'meeting_gallery', '08', '08.jpg', 'image/jpeg', 'public', 'public', 1957159, '[]', '{\"title\": null, \"description\": \"lighting lamp for our beloved member, Shri. K.S.K. Panicker\"}', '[]', '[]', 8, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb09-7047-8e43-542da8c8370f', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '1a0faaaf-980b-4efa-8d7a-215c33fe44fd', 'meeting_gallery', '09', '09.jpg', 'image/jpeg', 'public', 'public', 1242934, '[]', '{\"title\": null, \"description\": \"Shri. Rajagopal welcoming chief guests to their seat\"}', '[]', '[]', 9, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb23-7059-8bd9-13ebc2181d1e', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', 'ef38dfe6-d3af-4119-8298-81cde330f956', 'meeting_gallery', '10', '10.jpg', 'image/jpeg', 'public', 'public', 1241747, '[]', '{\"title\": null, \"description\": \"Shri. Rajagopal welcoming trust treasurer Shri. Sasi\"}', '[]', '[]', 10, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb3c-718f-8752-2eaceff7e377', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '08350f89-02b0-44c4-8935-41153e0e4a5d', 'meeting_gallery', '11', '11.jpg', 'image/jpeg', 'public', 'public', 3958480, '[]', '{\"title\": null, \"description\": \"Prayer by Soumya\"}', '[]', '[]', 11, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb54-73b4-b49d-2e1ce09b3067', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '3a6def2c-8592-414f-a386-b036dec27afc', 'meeting_gallery', '12', '12.jpg', 'image/jpeg', 'public', 'public', 1946222, '[]', '{\"title\": null, \"description\": \"Group Prayer\"}', '[]', '[]', 12, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb6a-7043-a408-3e0de1bf5397', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '2e9f7a7b-4bab-4ca0-ad88-6234b9ab4170', 'meeting_gallery', '13', '13.jpg', 'image/jpeg', 'public', 'public', 1325055, '[]', '{\"title\": null, \"description\": \"A word about Shri. K.S.K. Panicker\"}', '[]', '[]', 13, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb7e-72c9-b44c-57feaa544d15', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '058a9694-1a94-4593-9b16-f91ec25669a9', 'meeting_gallery', '14', '14.jpg', 'image/jpeg', 'public', 'public', 1378112, '[]', '{\"title\": null, \"description\": \"Paying respects to Shri. K.S.K. Panicker\"}', '[]', '[]', 14, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fb8f-73dc-a417-7146807cd498', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '2f3a4601-9395-4d87-b038-5c813a5eab92', 'meeting_gallery', '15', '15.jpg', 'image/jpeg', 'public', 'public', 1239559, '[]', '{\"title\": null, \"description\": \"Paying respects to Shri. K.S.K. Panicker\"}', '[]', '[]', 15, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fba1-724b-a8f8-6ecd1e6d1e4a', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '977fcb21-c45d-48ee-ad0e-c4655f5e16d8', 'meeting_gallery', '16', '16.jpg', 'image/jpeg', 'public', 'public', 1367878, '[]', '{\"title\": null, \"description\": \"Speech by Shri. Rajagopal\"}', '[]', '[]', 16, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fbb7-72e3-9b6e-67823f1939cd', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '320634b8-0d0a-48cb-9f2c-db7d11b56535', 'meeting_gallery', '17', '17.jpg', 'image/jpeg', 'public', 'public', 4190971, '[]', '{\"title\": null, \"description\": \"Speech by Shri. T.P.B.Panicker\"}', '[]', '[]', 17, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fbcf-7016-88d2-03cd5af5077a', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '4b293cea-846f-4b27-951d-662d7790ed26', 'meeting_gallery', '18', '18.jpg', 'image/jpeg', 'public', 'public', 3185610, '[]', '{\"title\": null, \"description\": \"Speech by Shri. Sasi\"}', '[]', '[]', 18, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fbe5-72ea-b590-fe3b1811657d', 'App\\Models\\Meeting', '019ddbf8-fa3e-73b6-858c-30df80e70b9b', '931e996c-8618-455c-9f81-9090518887a8', 'meeting_gallery', '19', '19.jpg', 'image/jpeg', 'public', 'public', 2333896, '[]', '{\"title\": null, \"description\": \"Speech by Shri. Sasi\"}', '[]', '[]', 19, '2026-04-29 19:50:20', '2026-04-29 19:50:20');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `district` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `minutes` text COLLATE utf8mb4_unicode_ci,
  `agenda` text COLLATE utf8mb4_unicode_ci,
  `venue` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `venue_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'e.g., school, hall',
  `is_distribution` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Defines if the meeting held is for scholarship distribution',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `delete_reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `year_id`, `name`, `date`, `district`, `minutes`, `agenda`, `venue`, `venue_type`, `is_distribution`, `created_at`, `updated_at`, `deleted_at`, `delete_reason`) VALUES
('019ddbf8-f2c8-7041-be40-d2a680ff1274', '019ddbf8-f2c3-71c3-8c9b-8875ee1810e5', '', '1999-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:18', '2026-04-29 19:50:18', NULL, NULL),
('019ddbf8-f48e-72db-ab15-18f3621e4de1', '019ddbf8-f48a-7278-b96e-49a847cf887f', '', '2008-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19', NULL, NULL),
('019ddbf8-f572-708c-a260-24a719c1497f', '019ddbf8-f56e-7078-a46a-f539e2ef88ee', '', '2012-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19', NULL, NULL),
('019ddbf8-f679-733d-97e4-27eb4464c9e4', '019ddbf8-f675-71b3-a753-494860214f7b', '', '2013-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19', NULL, NULL),
('019ddbf8-f6fd-7263-9237-08ed4cb59f6e', '019ddbf8-f6f9-7239-aac9-019ddc9ef3ad', '', '2014-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19', NULL, NULL),
('019ddbf8-f7e2-71c4-928f-451423a63144', '019ddbf8-f7de-7248-ada6-84581ea0a0b3', '', '2015-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19', NULL, NULL),
('019ddbf8-f859-7014-95dc-0541868f8a35', '019ddbf8-f854-71a3-a5cb-f67401566ed1', '', '2016-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20', NULL, NULL),
('019ddbf8-f901-713c-83f9-482f793bfe54', '019ddbf8-f8fb-7190-b422-c63e623e6a09', '', '2017-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20', NULL, NULL),
('019ddbf8-fa3e-73b6-858c-30df80e70b9b', '019ddbf8-fa38-7151-995a-3bb27fbfb537', '', '2018-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20', NULL, NULL),
('019ddbf8-fbfd-7292-a0b3-af124df80ff5', '019ddbf8-fbf9-73a2-bdeb-6e6870696bfb', '', '2019-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `meeting_user`
--

CREATE TABLE `meeting_user` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meeting_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `signature` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comments` text COLLATE utf8mb4_unicode_ci,
  `status` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `delete_reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_04_24_052845_create_donors_table', 1),
(5, '2026_04_24_052845_create_gallery_images_table', 1),
(6, '2026_04_24_052845_create_schools_table', 1),
(7, '2026_04_24_052846_create_contact_messages_table', 1),
(8, '2026_04_24_052846_create_news_posts_table', 1),
(9, '2026_04_24_052846_create_app_settings_table', 1),
(10, '2026_04_24_052847_create_recipients_table', 1),
(11, '2026_04_24_052859_create_media_table', 1),
(12, '2026_04_24_105338_add_role_to_users_table', 1),
(13, '2026_04_29_180730_create_academic_years_table', 1),
(14, '2026_04_29_180731_create_meetings_table', 1),
(15, '2026_04_29_180739_create_meeting_user_table', 1),
(16, '2026_04_30_005238_create_trustee_homes_table', 1),
(18, '2026_04_29_180730_create_ref_academic_years_table', 2),
(19, '2026_04_30_005238_create_trustees_table', 2),
(20, '2026_04_30_031043_create_reference_tables', 2),
(21, '2026_04_30_031043_create_student_pipeline_tables', 2);

-- --------------------------------------------------------

--
-- Table structure for table `news_posts`
--

CREATE TABLE `news_posts` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(320) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(320) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ref_academic_years`
--

CREATE TABLE `ref_academic_years` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ref_academic_years`
--

INSERT INTO `ref_academic_years` (`id`, `name`, `start_date`, `end_date`, `active`, `created_at`, `updated_at`) VALUES
('019ddbf8-f2c3-71c3-8c9b-8875ee1810e5', '1999', NULL, NULL, 1, '2026-04-29 19:50:18', '2026-04-29 19:50:18'),
('019ddbf8-f48a-7278-b96e-49a847cf887f', '2008', NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f56e-7078-a46a-f539e2ef88ee', '2012', NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f675-71b3-a753-494860214f7b', '2013', NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f6f9-7239-aac9-019ddc9ef3ad', '2014', NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f7de-7248-ada6-84581ea0a0b3', '2015', NULL, NULL, 1, '2026-04-29 19:50:19', '2026-04-29 19:50:19'),
('019ddbf8-f854-71a3-a5cb-f67401566ed1', '2016', NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-f8fb-7190-b422-c63e623e6a09', '2017', NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fa38-7151-995a-3bb27fbfb537', '2018', NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20'),
('019ddbf8-fbf9-73a2-bdeb-6e6870696bfb', '2019', NULL, NULL, 1, '2026-04-29 19:50:20', '2026-04-29 19:50:20');

-- --------------------------------------------------------

--
-- Table structure for table `ref_areas`
--

CREATE TABLE `ref_areas` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ref_colleges`
--

CREATE TABLE `ref_colleges` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_private` tinyint(1) NOT NULL DEFAULT '0',
  `area_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ref_colleges`
--

INSERT INTO `ref_colleges` (`id`, `name`, `short_name`, `is_private`, `area_id`, `active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddc5f-ec60-7034-8af0-2a0bba55b613', 'Adi Shankara College of Engineering', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec63-71a2-a2e6-d300a086c625', 'Adi Shankara Institute of Engineering and Technology, Kalady', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec65-71ab-8e29-ed06bf67f10e', 'Al Ameen College, Edathala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec67-7319-9aa9-6a6683fd69c4', 'Al Ameen Collegem Edathala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec6a-73bb-8155-1429baef53cf', 'Al Azar College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec6c-7109-9f9e-b2ca7474ac8b', 'Al-A, Ameen College, Edathala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec6e-70d0-be23-15a2da99c792', 'Alphonsa College, Pala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec70-7264-9802-ba19ef1a2021', 'Amrita Institute', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec72-7029-b2b3-3f088c69db5d', 'B. Sc New Man College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec74-7081-90a3-27ec8dd48f57', 'B.M College, Trikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec76-7159-ba09-1a208c8ccc55', 'B.M. College, Trikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec78-7333-84e0-569b9220cd9b', 'B.M.C College, Trikkakkara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec7a-72a9-b5b7-3b3f43ab7ae7', 'B.M.C, Trikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec7c-7289-b6b0-6714c331e410', 'B.M.College, Thrikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec7e-707b-b1b5-cb2f9ad25dbc', 'Baselios College of Engg.', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec81-70a8-94fe-8430b65c8b51', 'Baselious Ponlose II Catholicas College, Piravom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec83-701f-82c0-c2eaa1d0abc0', 'Baselius College, Piravam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec85-7099-8e71-b069207e67c1', 'Bharat Mata College, Thrikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec86-7053-948e-c71bf18bfb43', 'Bharata Matha College, Thrikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec89-70de-b3af-30ad2642e265', 'Bharathmatha School of Legal Studies, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec8b-715a-94f2-7fb0c5a07fb9', 'BMC, Trikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec9b-722c-b2c2-71a8b4069b84', 'BPC College, Piravom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec9d-717c-bf32-9eb3a9d8109e', 'Chinmaya Arts,Commerce and Science College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec9f-7343-bd64-f5f1eb40affe', 'Chinmaya Institute of Nursing, Bangalore', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eca1-7120-b519-ecbd159e10e7', 'Chinmaya Viswavidyapeeth, Veliyanadu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eca4-72dd-ac2e-b350cc5b75bd', 'CISAT, Muvattupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eca6-71d6-80cf-de6cda4b75b0', 'Co Operative College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eca8-7157-b9e9-ebc421f96ed8', 'Co-operative College Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecaa-710e-877c-931f66d83c4d', 'Co-operative College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecac-7004-9e25-9c9d46874c18', 'Co-Operative Law College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecae-7176-b7e2-b8ab0ce7e061', 'Co. Op. College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecb0-72e9-85c4-2b11a331d5b4', 'Co.Op College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecb2-707b-925f-ba06fda1fac1', 'Co.Operative College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecb5-7290-898a-6cde9fec0494', 'Cochin College, Kochi', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecb7-723b-9932-697addd7a3b1', 'Cochin Institute of Science & Tech, Muvattupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecb9-71bc-8257-4d2d22bfb286', 'College of Applied Science', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecbb-71ba-a748-6a424f9f7be5', 'College of Applied Science, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecbe-705b-bb1e-5aa98ea4119b', 'College of Applied Sciences, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecc0-73cb-bd7b-f368c1e09f3f', 'College of Engineering, Muttom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecc2-73ff-ac8a-4842264a7915', 'Cooperative College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecc4-739f-af88-2ff9adf17b7a', 'D B College, Thalayolaparamb, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecc6-700f-91fc-772e3bac4057', 'Devaswom Board College, Thalayolaparambu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecc8-7036-b0fa-969a1205d096', 'Dhanalakshmi Sreenivasa College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eccb-733d-82ea-4f02cfe02da1', 'DIET, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eccd-7283-a288-08a2b342b397', 'Easo Bhavan College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eccf-705b-ad51-b1cb4a3ebc50', 'Easobhavan College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecd1-7313-9841-df235d833d46', 'Edathala College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecd4-736c-84a9-473276907874', 'Engineering College, Kothamangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecd6-7091-aa82-748b3f96f8f5', 'Foodcraft Institute, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecd8-7394-8559-e7dc665a4d5f', 'GMDC - LBS Center, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecda-70f8-9507-268b3794a481', 'GNM School of Nursing Cochin Port Trust', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecdc-7052-b45e-bc1b6d7726cb', 'GNM, Belaum', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecde-708d-8617-29b3f0ec01df', 'GNM, Lisie Hospital, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ece0-70b8-9819-205984c3bfae', 'GNM, Prema School of Nursing', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ece2-7097-9a57-e047b66f5fa8', 'GNM, Shimoga', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ece5-7304-a839-dc85c7528946', 'Government Arts College, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ece7-7041-9594-6a6463c8359e', 'Government Poly Technic College, Kalamaserry, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ece9-719f-964e-01383a7313a1', 'Government Polytechnic College, Muttom, Idukki', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecea-727d-a2d4-b12fe372280f', 'Govt College Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eced-7012-bfab-4173e638531e', 'Govt College Kottayame, N Paravoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecef-704c-91cb-7ac09c337d42', 'Govt College Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecf1-7379-a1d3-40dcfa7af08a', 'Govt Engg College Idukki', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecf4-73ce-98fe-3281be33d213', 'Govt Polytechnic Kothamangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecf6-70c1-a8db-e63ac1912729', 'Govt Polytechnic Purapuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecf9-72f5-b82b-3a295b90c7fd', 'Govt. College Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecfb-70cc-b7e5-6ab9f49d1246', 'Govt. College, Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ecfe-714e-b859-7336ece2aacb', 'Govt. College, Manimalakunnu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed01-7264-9cf2-8d0c20a4e1c9', 'Govt. Engg College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed03-7358-87a3-a007135ed25c', 'Govt. Engineering College, Trivandrum', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed05-7077-bca4-43ce0f352c42', 'Govt. Hospital, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed07-7158-8ce9-4f154fcee3cd', 'Govt. Poly Tech Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed09-7085-a255-4896894026f9', 'Govt. Poly Technic', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed0b-7386-b026-a0d699350b1e', 'Govt. Polytechnic, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed0d-73b8-95a3-9748d70e7e5d', 'Govt. Polytechnic, Muttom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed0f-70e2-bc3e-202be1be3e7b', 'Govt. Polytechnic, Muttom, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed11-70d7-a5ba-53de6a014a1a', 'Govt. Polytechnic, Perumbavoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed13-71d5-aa55-92b0e75ebd12', 'Govt. Polytechnic, Purapuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed16-7038-aa63-8958849ec3b3', 'Govt. Polytechnic, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed18-70aa-83f5-849589298b7d', 'Govt. School of Nursing, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed1b-72e3-9929-9e23a620f5b3', 'Govt. School of Nursing, Idukki', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed1d-723a-b592-02bd3e3a70f8', 'Guree Narayana College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed20-73d0-a297-b3ff281642d5', 'Henry Backer College, Melukavu, Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed22-72b3-aa7c-29e458066808', 'Henry Baker College, Melukavu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed24-7065-9cc4-c9a65070d754', 'Hentry Baker College, Methukavu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed26-72a6-82a3-1d087e071cf2', 'IHM Kovalam, Thiruvananthapuram', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed28-71dc-9fbe-5692a0c05803', 'Ilahiya College of Arts and Science, Muvattupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed2a-725f-bdbd-e7c87271e346', 'Ilahiya College of Engg & Tech', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed2d-720f-adac-12a41cc7e33e', 'Indira Gandhi Institute of Engineering & Technology, Kothamangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed30-71fc-ad84-33cc5c00d0a5', 'Indira Gandhi Institute of Engineering, Kothamangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed31-70aa-bc54-9169c48d13e3', 'ITI, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed33-715e-86db-57840d7ea6c4', 'ITIF CUSAT', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed35-729f-b3fc-8eafa60a0bb1', 'Jay Bharat Engg. College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed38-7391-9ccc-1b3c1ccc70ff', 'Jaya Hharath ,Vengola', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed3a-70d8-b119-7b3b03b407ed', 'Jayabharath College, Perumbavoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed3c-730b-b1a7-9a166ce774e5', 'Kamaraj Thoothukkudy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed3e-7353-8fad-cc67176fb281', 'Kerala Agriculture University. Thavannur', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed41-71d0-9360-81c71c718154', 'KMEA Engg College, Edathala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed43-7080-b734-d94bbf5b6741', 'LBS Centre, Science & Technology, TVM', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed45-725f-893a-f99d7eb176ac', 'Lisie College of Pharmacy, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed48-701d-b608-8e4c264e2ea1', 'Lourde College of Nursing, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed4a-717e-b05b-497942bbe68d', 'M A College, Kothamangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed4c-7395-b519-a31bee3ffe7b', 'M E S College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed4e-7060-a6a4-08444483081f', 'Maharaja\'s College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed50-7395-af3d-8397c417aca2', 'Maharaja\'s College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed52-7007-af2c-cc81bd5cd1c8', 'Maharaja\'s, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed54-70e5-b059-3e4b93be45b0', 'Maharajas College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed57-729f-87f2-74e48ce1f921', 'Maliankara College, Moothakunnam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed59-70c7-9879-f10698df0ef0', 'Mamata Nursing College,Khammam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed5b-72e1-8fcc-bb80d21270b6', 'Mangalam College of Engineering, Ettumanoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed5d-7129-bc67-e737b77e0f43', 'Mar Agastino College of Engg, Ramapuram', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed5f-7082-a202-a887d94ef336', 'Mar Gregorious Abuil Saleel Arts & Science college, N Paravoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed62-71cf-82ce-31c041b9b83a', 'Mar Gregorious College Paravoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed65-7389-9434-39c899bd66d9', 'Mary Matha College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed67-739a-8eef-528ed0ec41f2', 'Matha College of Technology', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed69-724d-bcb3-58bb7ba6e09f', 'Mother Teresa College, Bangalore', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed6b-71db-ba98-ad1e35a2b29a', 'N.S.S. Arts College, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', 'Newman\'s College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed70-732f-ac92-387332032169', 'Nirlala Arts & Science College, Mulanthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed73-7202-b62e-63628183d082', 'Nirmala Arts & Science College, Mulanthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed75-7003-b19c-536767e4922f', 'Nirmala Arts & Science College, Mullamthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed77-7369-bb62-2a7e11010e07', 'Nirmala College, Muvattupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed7a-70bc-b61b-9c6ba22b7a38', 'Nirmala College, Muvatupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed7c-725f-bb5c-d6c60d4e21a2', 'Nirmala SS College, Mulanthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed7e-732c-92ab-3f23384f40b9', 'Nooreel Islam City,Kanyakumari', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed80-73b8-8695-0e8289dd711e', 'NSS Arts College, Thripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed82-704e-95a9-d595dfba2f3c', 'NSS Arts College, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed84-7314-8247-d950270a64e5', 'Nursing, Manipal', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed86-722b-859c-66b0acb8f093', 'Nursing. Karnataka', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed88-7209-ab13-7d8803abb336', 'P E S College of Nursing, Chittoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed8a-73ee-ae9f-186448d2b729', 'Padmasree Institute of Management', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed8c-7287-a7c0-fb3ba68e129a', 'Pavanatma College, Murikkasserry', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed8f-7206-ac1e-af94fcb6f20b', 'Phoenix Aviation Training Academy, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed91-701e-a7b3-9d32d124fa57', 'Poly Technic, Kaduthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed94-71e9-9ea4-8e3b7bd05b26', 'Poly Technic, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed96-7042-99eb-dca68646ed8b', 'Poly Technic, Muttom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed98-714e-9a94-98ee2353eb3e', 'Polytechnic, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed9a-714b-bab5-b4f81ac30800', 'Polytechnic, Kotamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed9d-733f-b950-7f31e17ae6f3', 'Polytechnic, Kumily', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ed9f-71c9-a102-ce443f5c2e08', 'Polytechnic, Muttom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eda2-72db-a7db-f76701df4890', 'Queen Mothers College, Aluva', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eda3-73f3-bc4d-aff49bfba03f', 'Rajiv Gandhi Inst of Tech, Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eda5-725b-84de-73a6542c0b3a', 'Rajiv Gandhi Inst of Technology, Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eda8-734c-9783-152efebb57b7', 'Regional Agriculture Research Station, Waynad', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edaa-72ae-bcd7-bec3fb635737', 'RLV College of Music, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edac-7398-9807-9c7326b17dc6', 'S H College, Thevara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edae-70b9-803b-586d81ee21ff', 'S M College, Thuruthy, Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edb1-71a3-aa67-fa42f6aa0f76', 'S N Arts & Science College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edb2-705b-9b70-2e9c768f95df', 'S.H. College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edb5-73a0-be51-35949aefd747', 'S.H. College, Thevara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edb7-70d1-894a-38dc126734f0', 'S.N. College, Cherthala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edb9-70bd-af43-d8cd4fe2bad6', 'S.N.M. Inst. Man. Tech, Moothakunnam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edbb-71ab-945a-667ba5ce55f0', 'S.S. College, Thevara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edbe-734f-83a7-6efbf7256aa6', 'Sacred Hearts College, Thevara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edc0-72a8-a4c1-8190dcc81a65', 'Santhigiri College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edc2-7176-b802-2b85395b1296', 'Santhigiri College, Vazhithala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edc4-71c3-9f63-c778ed1d5e74', 'Saran College Of Nursing, Bangalore', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edc8-71d5-9178-79fae564bc54', 'School Of Nursing, Idukki, Muttom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edca-726c-b970-e2aabd87092e', 'Shanthigiri College, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edcb-71ca-ad37-c833aab58b0d', 'Shanthigiri College, Vazhithala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edcf-707d-bc11-521b919014a4', 'Shanthigiri College, Vazhithalla', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edd2-72c3-84db-556d54785355', 'SMC Kottayam, Manimalakunnu Centre', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edd5-730a-86de-d7ac0d2b8491', 'SNM Institute, Moothakunnam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edd7-70ee-af24-8cde1f849dfc', 'Sree Pillappa College of Engineering, Bangalore', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edda-71c1-8b0f-0caa9465b292', 'Sree Sankara College, Kalady', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eddc-71ef-9643-97fa5c7fc6dd', 'Sree Sankara Vidya Peedham, Perumbavoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edde-710b-a519-469a8106545a', 'Sree Sankaracharya University, Kalady', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ede0-73a2-99af-1805f5e43593', 'Sreesankara Vidya Peetom, Perumbavoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ede2-7288-b94e-dcded6685591', 'SS Institute of Nursing, Dhavangar', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ede4-700b-98bb-e6fc45e7cea2', 'St Albert\'s College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ede7-7170-bfce-2963292183c8', 'St Alberts', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ede9-7240-87b2-cfdeecb9aa9c', 'St Joseph', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edeb-7141-aa31-658a61e77ba8', 'St Joseph Mollamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eded-7229-ad61-ffc85b77992d', 'St. Albert\'s College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edef-7148-95ec-c851a2df5d48', 'St. Alberts College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edf1-70b6-9157-83ec87f137d9', 'St. Alberts Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edf3-7333-b8c7-e6b8bdf33932', 'St. Alberts, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edf5-713f-945f-f20bbcabd267', 'St. Dominic College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edf7-703b-a706-476b5bdb0833', 'St. Josef Academy of HE&R, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edf9-7204-8ec8-4e6d59bc5896', 'ST. Joseph Academy, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-edfb-71f4-af9b-2709cc9a510b', 'St. Joseph College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee00-738c-a1c0-fc20bcb32085', 'St. Joseph College, Moolamattam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee02-7194-9884-7f1ab305bbaf', 'St. Joseph College, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee04-73fb-9c89-707872d7f71d', 'St. Joseph College, Moolamattom, Idukki', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee06-73f1-b0af-f8dd7ff5bd79', 'St. Joseph, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee09-7276-8246-2922480f3e49', 'St. Mary\'s College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee0b-70b0-be80-b52a4ddd8032', 'St. Pauls College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee0c-72be-b2db-8cc0656598a0', 'St. Pauls College, Kalamasserry', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee0f-71c4-9a29-734a87cce205', 'St. Pauls College, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee11-71ac-a595-f371d62b4685', 'St. Pauls, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee13-73be-af7f-e1fb40613930', 'St. Peters College, Kolencherry', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee15-701a-bde8-b0d93821ba4c', 'St. PetersCollege, Kalenchery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee17-7020-aacb-e85198351e30', 'St. Stephens College, Uzhavoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee19-71ca-ae70-23e14a79dc9f', 'St. Taras College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee1b-7161-80c2-7f46e6db7a93', 'St. Terasas College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee1d-72d2-b5b6-cac5edc6c9e3', 'St. Teresa\'s College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee1f-714e-9a6a-1df0ef7b76b0', 'St. Thomas Arts and Science College, Puthencruz', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee23-735c-bfb1-7742b7101050', 'St. Thomas College, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee25-7179-9841-f914117ffaf3', 'St. Thomas, Puthenkurush', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee27-72ad-a9d1-345040fbd0c3', 'St. Xavier\'s College, Aluva', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee2a-701a-b4cc-57100f904fc4', 'St. Xaviers Aluva', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee2c-72e8-a260-347a0a249f0a', 'St. Xaviers College, Aluva', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee2e-72ff-a7e2-b11e49ae586b', 'St.Joseph Academy, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee30-7078-8111-96d66a2499e4', 'St.Peter\'s College, Kolencherry', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee33-735b-ad94-6a7b30542c60', 'Swamy Saswathikananda College, Poothotta', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee35-706d-9559-b6c357127211', 'Tandem College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee3b-72a2-9221-13e3f33dfbd3', 'Thevara College', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee40-71cf-bbb3-b5821f611bce', 'TocH Mulanthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee42-714e-814f-e43ba58389d4', 'U.C College, Aluva', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee44-73dd-a396-7d591de2cbc3', 'Universal Arts College, Mulanthuruthy', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee46-733c-a66a-52a71bd214f1', 'University College of Engg. Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee48-7395-b33c-a66a14bf7526', 'University College, Trivandrum', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee4b-71a1-8bee-b71869045ac7', 'Vagdevi College of Nursing, Bangalore', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee4d-7091-b498-4a0675da4fa3', 'Vani School of Nursing, Kadappa', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee4f-706f-b8fb-327d8391f7bf', 'Vidya Bhavan, Thripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee51-7158-a905-1dbb2877a68e', 'Vidyaniketan College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee53-7001-865b-b7f9bbac4554', 'Vidyaniketan, Cochin', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee55-72b8-b893-c0d8d01a2e46', 'Viswajyothi College of Engineering, Muvatupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee57-732f-a228-5e387452f036', 'Visweswara College, Kottayam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee5a-7341-8127-597b8f84210a', 'safasf', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee5d-7075-ad4b-37f668cf672b', 'sdscddad', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee60-7263-a86b-5e755f4d94d4', 'dasdsa', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee62-7075-9a5a-f2a191ecb530', 'wqw', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee64-70a4-96c0-c1b3d171c415', 'CDCDC', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee66-733c-b553-b3c7d4fca104', 'CDCDC', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee68-72d5-b2b2-34d3f60a2f8e', 'CDCDC', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee6b-7265-ad84-2f98ced93568', 'dcdc', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee6e-73c0-9e4d-d7f1b34abee1', 'frff4f4', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ref_courses`
--

CREATE TABLE `ref_courses` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` decimal(4,2) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ref_courses`
--

INSERT INTO `ref_courses` (`id`, `name`, `short_name`, `duration`, `active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddc5f-ee71-715f-905d-38c552427236', 'AMIE', NULL, 3.50, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee74-7068-b4fb-b2cd926a6e63', 'B Voc Food', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee77-72e9-96b0-6685367d426e', 'B.A', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee7a-73d7-8db5-23783ffcc8db', 'B.A. Accountancy', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee7e-719c-ac70-bb2afb0c3977', 'B.A. Applied Psychology', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee80-71e1-98f1-85c14cce75c6', 'B.A. Economics', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee83-701d-a8e1-de886acee1ac', 'B.A. English', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee88-70f6-ba1d-83dea2a684ee', 'B.A. English Literature', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee8b-707c-885d-bf20087e9f5c', 'B.A. Hindi', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee8f-704f-a105-b75ea1208bea', 'B.A. History', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee93-722e-8db9-f7f28df1ea1f', 'B.A. Malayalam', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee97-7134-99e3-0492c066aa87', 'B.A. Music', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee99-73bb-be0e-ddf6d45ffe8b', 'B.A. Sanskrit', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee9c-7084-9979-fcc69b4843b9', 'B.A. Sociology', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 'B.Com', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eea1-70e8-ae7b-6284d03d72f0', 'B.Com Computer Application', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eea3-72cf-b312-e9589b1eb3c4', 'B.Com Finance and Taxation', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eea5-71c4-ab34-8d184c36b311', 'B.Sc', NULL, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eea8-70fb-a427-ee5c67fcf239', 'B.Sc', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeaa-73f9-9af6-8778fa7c268c', 'B.Sc Agriculture', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeae-70a5-986f-016c87c19b5a', 'B.Sc Agriculture', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeb0-7303-82cb-e4ac2825cf8e', 'B.Sc Botony', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 'B.Sc Chemistry', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeb4-7083-a871-3d3db61005bf', 'B.Sc Computer', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeb7-7318-a42f-b0b267ccd019', 'B.Sc Electronics', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeb9-7303-876a-16c878c54006', 'B.Sc Hotel Management', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eebb-7239-8df7-d5fecf93261d', 'B.Sc Mathematics', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 'B.Sc Nursing', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eec0-72df-9e9a-8a4428aa377f', 'B.Sc Nursing', NULL, 3.50, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eec3-7319-a57c-be0bea5e0ea0', 'B.Sc Nursing', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eec6-728f-9c1e-5e5a0205e025', 'B.Sc Physics', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eecb-7324-8929-16413b8e2035', 'B.Sc Taxation', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eecd-711c-ab71-639de58be6b8', 'B.Sc Zoology', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eecf-72f3-a99c-4596de9d48c8', 'B.Tech', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eed2-730d-8952-c362de96c5f6', 'B.Tech Computer Science', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eed4-72c9-bd02-853de77bc1c3', 'B.Tech EEE', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eed6-7257-a83f-10f0ff0866fa', 'B.Tech Electronics & Communication', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeda-7194-aee1-bee6308670d5', 'B.Tech IT', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eee0-70ab-b102-fc099f627dc3', 'B.Tech Mechanical Engineering', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eee4-70ba-bcba-ab3ea496fb7c', 'B.Tech Space Science', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eee7-70d6-acfc-e9b72397e5e5', 'B.Voc Industrial Instrumentation & Automation', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eee9-73c3-9e3a-1bc172a3550a', 'B.Voc Tourism & Hospitality Management', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeeb-71fb-a17e-611c96a360c0', 'BBA', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eeee-734e-8b28-b90527def5d6', 'BBA LLB', NULL, 5.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eef2-7311-add5-0948161572b7', 'BBM', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eef4-719d-81d6-8e2b1a60569c', 'BCA', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eef7-7194-b225-7ab183cb000d', 'BE Agriculture', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eef9-7346-b984-7a4dee724174', 'BTTM', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eefc-702c-98a6-1b31d0fab9e1', 'Comp. Hardware', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eefe-73e6-8096-a7c86be3435b', 'D. Pharm', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef02-7149-9feb-b90acd8994df', 'DED', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef04-7091-9e31-c649f22f5ae2', 'Diploma', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef07-71f7-b08b-b28edcc0ef82', 'Diploma Eng.', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef09-7295-a0b3-bff6b96fc295', 'Diploma in C.A.', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef0c-73c6-8e5a-537f5d01915a', 'Diploma in Chemical Engineering', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef0e-7011-8de5-02d66a49230c', 'Diploma in Civil Engineering', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef10-7037-95a6-61fa6586b51f', 'Diploma in Computer', NULL, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef13-7146-946a-58df1ca79e4b', 'Diploma in Computer Engineering', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef16-706e-9bfc-1866901e09a2', 'Diploma in Computer Science', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef19-724e-8e62-325b23d20c54', 'Diploma in Electronics', NULL, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef1c-735d-9836-a47f7bc72331', 'Diploma in Electronics', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef1f-7136-9b87-20bda1e56748', 'Diploma in Mechanical Engineering', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef22-72d9-a11b-6f0f3b6acb6d', 'Diploma in X-Ray & Radiology', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef25-70c3-8c06-66742fffe96e', 'General Nursing', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef28-7130-a5fc-677766768ea8', 'GNM', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef2b-7311-8292-b9436b5cbf30', 'Hospital Management', NULL, 2.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef2e-7088-b692-9d7b8588e9f2', 'LLB', NULL, 5.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef30-72c3-bce7-b69039c7a246', 'M.Sc Electrical', NULL, 2.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef33-710e-a79d-921679fa9862', 'Nursing', NULL, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef36-70f4-927a-a36c14747431', 'Nursing', NULL, 3.50, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef38-7178-9ce4-71356ae26e73', 'Polytechnic - Electronic & Communications', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef3e-7276-8515-5fe1f5834661', 'Polytechnic Welding', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef42-71d0-bcf0-71f85821822b', 'TTE', NULL, 2.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef44-734b-a505-27b2b37e6411', 'aeef', NULL, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef47-71ae-8c34-28ea3ea13d3e', 'ssf', NULL, 7.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef4a-7131-82f1-e93b0dadeca0', 'dd', NULL, 23.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef4c-7338-a7ec-acd8359aed4e', 'sas', NULL, 1.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef4e-71ea-8d12-d6647dfbede3', 'dd', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef50-7370-bb11-c5ab5ce80fbc', 'ERWE', NULL, 3.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef52-7103-bfb8-edf56a587407', 'FFGF', NULL, 1.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef54-731d-b74c-c8ce987d2363', 'rggr', NULL, 4.00, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ref_districts`
--

CREATE TABLE `ref_districts` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ref_drinking_waters`
--

CREATE TABLE `ref_drinking_waters` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ref_house_ownerships`
--

CREATE TABLE `ref_house_ownerships` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ref_house_roofs`
--

CREATE TABLE `ref_house_roofs` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ref_schools`
--

CREATE TABLE `ref_schools` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_private` tinyint(1) NOT NULL DEFAULT '0',
  `area_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ref_schools`
--

INSERT INTO `ref_schools` (`id`, `name`, `short_name`, `is_private`, `area_id`, `active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddc5f-eb9d-70d5-96c8-3103c0271652', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-eba7-7126-9d91-2d4e1ffc74e8', 'APJ H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebaa-72d0-817d-f9311e43bfcd', 'B.M. College, Trikkakara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebac-7033-a7f2-e8f6e17a26c5', 'G.G.H.S.S Thripunithrura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebae-7022-8238-aa839f0784d6', 'G.H.S.S Boys, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebb1-73ff-8913-bf34bd13f427', 'G.H.S.S Girls, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebb3-7295-9a0b-53e3aa3d8b0e', 'G.H.S.S Girls, North Parur', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebb5-7217-8316-652835bf11e3', 'G.H.S.S Girls, Paravoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', 'G.H.S.S Girls, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebb9-72e1-9abe-ae350eb65a56', 'G.H.S.S, Chennamangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebbb-7105-a304-e47d5074017e', 'G.H.S.S, Chottanikkara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebbd-71e0-91cb-c948da95645a', 'G.H.S.S, Edappally', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebbf-72bb-9caf-6a8b63f9ddbb', 'G.H.S.S, Edathala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebc1-722e-b317-2e97f2325450', 'G.H.S.S, Elamakkara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebc3-701f-bf6b-ff4c51a18400', 'G.H.S.S, Kadayiruppu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebc5-704f-a5e2-9ff2e06b81ed', 'G.H.S.S, Kudayathoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebc7-70ba-bc18-cfd4a558b971', 'G.H.S.S, Muvattupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebc9-7373-a218-ce307c3f8608', 'G.H.S.S, North Parur', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebcb-7042-8489-2d7121bda025', 'G.H.S.S, Ooramana', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebcd-70fa-8b95-09a8f4caa03c', 'G.H.S.S, Peringassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebcf-72e8-98a4-6f20fe5b5b42', 'G.H.S.S, Poomala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebd1-71d7-88e1-4404dde05225', 'G.H.S.S, Puliyanam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebd3-70bd-83e9-353a71596ea3', 'G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebd5-7385-b2f8-e506681c0115', 'G.H.S.S, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebd6-72bc-8f9b-52eee47d3379', 'G.H.S.S, Vennala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', 'G.H.S.S, West Kodikulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebda-7160-81ce-af158af27807', 'G.T.H.S.S, Peringassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebdc-7177-b025-106ff670b1d0', 'G.T.H.S.S, Poomala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebde-72aa-8f24-dd89dd1b4364', 'G.V.H.S.S, Edappally', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebe0-7114-a6ed-a77db8be42d6', 'G.V.H.S.S, Kaitharam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebe2-71e4-a1e2-62d14be90e19', 'G.V.H.S.S, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebe4-7018-8940-926be9a7e396', 'G.V.H.S.S, North Edappally', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebe6-73c2-98b5-3fbb8a3cf6cf', 'G.V.H.S.S, Thattakuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebe7-73eb-af42-e57777c00979', 'G.V.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebea-72e5-a4f7-c68d21f6e767', 'H.S.S Girls, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebec-714c-9d13-13416f9e32ef', 'H.S.S Girls, Tripunithura', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebee-7166-9299-840a75929160', 'H.S.S Mangayil, Maradu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebf0-725d-90ba-43b9ac7513fe', 'H.S.S, Aluva', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebf2-7368-841d-f075f4e5af1e', 'H.S.S, Chottanikkara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebf4-71e7-a69c-f0d7991e531b', 'H.S.S, Edappally', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebf6-70fe-87d6-1db483021f89', 'H.S.S, Elamakkara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebf8-7335-a60a-a4054577d310', 'H.S.S, Kalamassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebf9-7241-8082-856d6ca6d4a1', 'H.S.S, Kudayathoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', 'H.S.S, Mamalassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ebfe-720a-b349-95dd05d6a6c3', 'H.S.S, Muthalakodam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec00-7053-b02c-52849b7359f9', 'H.S.S, Muvattupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec02-715b-9192-560463181c8c', 'H.S.S, Palakuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec04-710b-9e8e-5744f8ff6784', 'H.S.S, Peringassery', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec06-7295-9126-1a5d8962b155', 'H.S.S, Poomala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec08-73d9-b430-aed222d124a6', 'H.S.S, Puliyanam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec0a-7062-b72a-6172f860b069', 'H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec0c-73fe-af07-bd90cc358a71', 'H.S.S, Vennala', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec0e-7036-87b3-2b4624f85e04', 'M.G.M. G.H.S.S, Nayathodu', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec10-7395-be14-ab41de9bdd06', 'M.K.N.M. H.S.S, Kumaramangalam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec12-724c-94e6-8aa4558ccd33', 'Maharajas College, Ernakulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec15-73a0-b58f-c53f94be9632', 'M.T.M H.S.S, Pampakuda', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec17-73fe-80e3-51132d06b8d5', 'N.S.S H.S.S, Manakad', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec19-716d-ab42-908608db82b2', 'NSS Manakad', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec1b-730f-972f-d045814f8153', 'S.G.H.S.S Kallanickal', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', 'S.G.H.S.S Muthalakodam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec1f-7365-98d2-fb2fb6ac9e9a', 'St Mary\'s H.S.S, Kaliyar', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec21-7001-88fa-5eacb359881f', 'St. George H.S.S, Muthalakkodam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec23-7283-9a57-7e29249021ee', 'St. Joseph\'s College, Moolamattom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec26-7174-b681-5962dab02bf2', 'St. Joseph\'s H.S.S, Karimannoor', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec29-71d5-9866-85a42581a7cb', 'St. Mary\'s H.S.S, Arakkulam', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec2b-7252-8c68-2fb6934864d5', 'St. Sebastian H.S.S, Vazhithalla', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec2e-726f-8f57-4d49cf9ab4aa', 'Technical H.S.S, Muttom', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec30-70b0-b7ae-83e21f473acc', 'Technical H.S.S, Peermade', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec32-73ec-a6ef-50f03907c6ac', 'V.C.S.H.S, Puthenvelikara', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec35-70dd-90e1-05888cc2b03c', 'fgfgfg', 'fdfdf', 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec37-71f2-9c70-d602cb6ca48f', 'Devika G Nair', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec39-7257-a5e4-3ced95d9bdbe', 'dcdc', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec3b-7206-90c6-91c58aec06f0', '545', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec3d-71c3-85f1-62a9fd637430', 'dfdf', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec40-7201-b29e-97b4f0fbc156', 'dcdc', NULL, 0, NULL, 0, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec42-7293-a236-d9d5ab7fa666', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 0, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec44-7254-a77d-f031b29d68ea', 'fd', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec46-7102-8c38-28cacadad07f', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec48-7238-9825-04e295032329', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec4a-70e7-bf14-e9b5035e0d2f', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec4c-7166-b8fc-3106071cb426', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 0, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec4e-7248-a310-8e1df1985f2e', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec51-7312-a1d3-3af4223c7bb5', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec53-72cb-9dc7-6797450f2624', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec55-7055-a0fe-1916a651e63c', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec57-7045-b9d7-683c8ca09bbf', 'APJ G.H.S.S, Thodupuzha', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec59-7381-8583-75789800d764', 'dsadsd', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec5a-73d1-a0f9-f35e90645b1e', 'dsds', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ec5c-72de-8069-090d693ffa46', 'dfdf', NULL, 0, NULL, 1, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('2SSIKdW03qVvtyvhxrOA0pM3jfcM7cuMuTPguJDX', NULL, '127.0.0.1', 'Go-http-client/1.1', 'eyJfdG9rZW4iOiJYRVV2Qm8xSU90N2g3MEZ5YUdOaXRRcDVJdGxKVjJLcnJVczdiQTVzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL3BhbmthanRydXN0LmxvY2FsaG9zdFwvcmVjaXBpZW50cyIsInJvdXRlIjoicmVjaXBpZW50cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1777523226),
('dIYocg9MBrFpkjRSyf0UsZQTDFYHWTX22JlGkkwl', NULL, '127.0.0.1', 'Go-http-client/1.1', 'eyJfdG9rZW4iOiJERnNEOVdBWWp0MXl6M1R1b1duQ1FpN3ZDZkpBdVFBdnM0R0VoY01qIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1777523226),
('lMdjTjBtRhjHJHUu5PoTgEWWHob6lII1egKzVdph', NULL, '127.0.0.1', 'Go-http-client/1.1', 'eyJfdG9rZW4iOiJsSHNtQzRBTTFqS1ZMdU93bDQzOXg2aU1GdFBpY1RpSDBvd2RwRk85IiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1777523281),
('st2E5gEYmQbzRZRIPZroliV081DSMaXD5pwIK2PE', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJ5M2ZTYkFBcHI5UWtKaDVQTHRBVlN1VUdBM2xBTGxJRjhiTDZZNTF3IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL3BhbmthanRydXN0LmxvY2FsaG9zdCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1777523865),
('VUuv2e58h8U3bSLPRinE8grjIxuhx39U5hxrZxdw', '019ddbf8-edd2-73ff-866d-de53d029432b', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiIxSFFkdXNPRERlenlja0ZEN0VHbFMxTE1yVXNuNE9ld0FPdHZaM3l2IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL3BhbmthanRydXN0LmxvY2FsaG9zdFwvYWRtaW4iLCJyb3V0ZSI6ImFkbWluLmRhc2hib2FyZCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX0sInVybCI6W10sImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjoiMDE5ZGRiZjgtZWRkMi03M2ZmLTg2NmQtZGU1M2QwMjk0MzJiIn0=', 1777523873),
('xKilHpGFwvlQURJY4OGJBWAPqAsvlLtvQGnPDxTy', NULL, '127.0.0.1', 'Go-http-client/1.1', 'eyJfdG9rZW4iOiJhdWJmM0dyTGlEaFFIcTdWSlFiYnVza1MyUWh1cXgweVVjMm81RkZyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL3BhbmthanRydXN0LmxvY2FsaG9zdFwvcmVjaXBpZW50cyIsInJvdXRlIjoicmVjaXBpZW50cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1777523281);

-- --------------------------------------------------------

--
-- Table structure for table `std_applications`
--

CREATE TABLE `std_applications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invite_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `landmark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route` text COLLATE utf8mb4_unicode_ci,
  `mark_sslc` decimal(5,2) DEFAULT NULL,
  `mark_p1` decimal(5,2) DEFAULT NULL,
  `mark_p2` decimal(5,2) DEFAULT NULL,
  `reg_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferred_college_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferred_course_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_district_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_area_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_house_ownership_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_house_roof_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_drinking_water_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `house_land_size` decimal(8,2) DEFAULT NULL,
  `bank_details` json DEFAULT NULL,
  `parent_acknowledgement` tinyint(1) NOT NULL DEFAULT '0',
  `student_signature` tinyint(1) NOT NULL DEFAULT '0',
  `school_approval` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `std_appl_achievements`
--

CREATE TABLE `std_appl_achievements` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `std_appl_relatives`
--

CREATE TABLE `std_appl_relatives` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `relation_category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Parent, Sibling, Contact',
  `relation_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Father, Brother, Neighbor, etc',
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `highest_qualification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `occupation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `income` decimal(10,2) NOT NULL DEFAULT '0.00',
  `alive` tinyint(1) NOT NULL DEFAULT '1',
  `disabled` tinyint(1) NOT NULL DEFAULT '0',
  `comments` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `std_appl_statuses`
--

CREATE TABLE `std_appl_statuses` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comments` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `std_invites`
--

CREATE TABLE `std_invites` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_school_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_academic_year_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `referred_by_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `need_otp` tinyint(1) NOT NULL DEFAULT '0',
  `appl_status` int NOT NULL DEFAULT '5',
  `cancelled` tinyint(1) NOT NULL DEFAULT '0',
  `cancel_reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `std_recipients`
--

CREATE TABLE `std_recipients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_year` int DEFAULT NULL,
  `ref_school_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_college_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ref_course_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` decimal(4,2) DEFAULT NULL,
  `remarks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `inactive_from` datetime DEFAULT NULL,
  `inactive_reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `std_recipients`
--

INSERT INTO `std_recipients` (`id`, `application_id`, `name`, `start_year`, `ref_school_id`, `ref_college_id`, `ref_course_id`, `duration`, `remarks`, `active`, `inactive_from`, `inactive_reason`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddc5f-ef5e-7142-9eab-6a7f26de78fc', NULL, 'Binu James', 1999, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef62-708b-83ca-6d8e4650c2d2', NULL, 'Fasila .P.M', 1999, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ee48-7395-b33c-a66a14bf7526', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef65-701c-a834-148e2867195b', NULL, 'Mary Juliet', 1999, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ee1b-7161-80c2-7f46e6db7a93', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef67-720c-99d7-041bd8c3bf27', NULL, 'Rajani .C.S', 1999, '019ddc5f-ec23-7283-9a57-7e29249021ee', '019ddc5f-ecc6-700f-91fc-772e3bac4057', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef6a-73f7-bd6e-89df58fa5383', NULL, 'Sangeetha .N', 1999, '019ddc5f-ebd6-72bc-8f9b-52eee47d3379', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef6c-736f-8c64-6b1d8bf2c4d0', NULL, 'Smitha Sukumaran', 1999, '019ddc5f-ec23-7283-9a57-7e29249021ee', '019ddc5f-ecd4-736c-84a9-473276907874', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef6e-73e0-a1ca-b7f5eb288f07', NULL, 'Renjini .N', 1999, NULL, '019ddc5f-ec81-70a8-94fe-8430b65c8b51', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef71-7227-a451-a73730826abd', NULL, 'Divya N. Nair', 2000, '019ddc5f-ec1f-7365-98d2-fb2fb6ac9e9a', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef74-70a1-a4fc-70d79b014691', NULL, 'Preethi .P.K', 2000, '019ddc5f-ec19-716d-ab42-908608db82b2', '019ddc5f-ee42-714e-814f-e43ba58389d4', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef76-73e9-87cb-4b66f3f7d4f5', NULL, 'Jidesh .K.P', 2000, '019ddc5f-ec19-716d-ab42-908608db82b2', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef79-7277-b0ff-bf45f6a5a247', NULL, 'Divya Kumari', 2000, '019ddc5f-ebfe-720a-b349-95dd05d6a6c3', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef7c-7209-b2bb-ccbfb1f4d7fc', NULL, 'Suhada O.I', 2000, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ee23-735c-bfb1-7742b7101050', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef7f-70c7-8e40-8ef0dc77be97', NULL, 'Soumya .T.R', 2000, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:47', '2026-04-29 21:42:47', NULL),
('019ddc5f-ef81-704c-8953-6a0614ac6127', NULL, 'Vinu Varghese', 2000, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef84-73c8-9d0d-7b588f7dd23c', NULL, 'Saritha .K.R', 2000, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef86-70a6-b840-e2871f1ffc28', NULL, 'Suma .T.K', 2000, '019ddc5f-ec23-7283-9a57-7e29249021ee', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef89-73e0-a89b-ac6cd854d07c', NULL, 'Sajitha .R', 2001, '019ddc5f-ec08-73d9-b430-aed222d124a6', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef8c-735d-958e-ced7bf584ab8', NULL, 'Silvy Varghese', 2001, '019ddc5f-ebd6-72bc-8f9b-52eee47d3379', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, 'Discontinued', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef8f-71eb-9988-f3d51a98daee', NULL, 'Nibu Rajan', 2001, '019ddc5f-ec1f-7365-98d2-fb2fb6ac9e9a', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef93-7295-ad70-06b3c055d8b4', NULL, 'Anitha Thomas', 2001, '019ddc5f-ec1f-7365-98d2-fb2fb6ac9e9a', '019ddc5f-ed84-7314-8247-d950270a64e5', '019ddc5f-ef33-710e-a79d-921679fa9862', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef96-71a9-8c41-ed3457e33b17', NULL, 'Sinin T.C', 2001, '019ddc5f-ebbf-72bb-9caf-6a8b63f9ddbb', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef98-706a-b857-1b59705890c4', NULL, 'Manjusha K.V', 2001, '019ddc5f-ebbf-72bb-9caf-6a8b63f9ddbb', '019ddc5f-ed57-729f-87f2-74e48ce1f921', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef9b-711d-87ad-1b10c59048dd', NULL, 'Soumya Baby', 2001, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-ef9d-7227-a35f-b10aaae47b55', NULL, 'Divya .D', 2001, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efa0-712e-b148-62bb9077c4bf', NULL, 'Syam Mohan', 2001, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed9f-71c9-a102-ce443f5c2e08', '019ddc5f-ef19-724e-8e62-325b23d20c54', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efa2-73f9-8a81-b42bf08adb38', NULL, 'Rekha .K.V', 2001, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed9f-71c9-a102-ce443f5c2e08', '019ddc5f-ef22-72d9-a11b-6f0f3b6acb6d', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efa5-709d-a933-90e062f5d5c2', NULL, 'Dhanya .S. Nair', 2001, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ed9d-733f-b950-7f31e17ae6f3', '019ddc5f-ef10-7037-95a6-61fa6586b51f', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efa7-7391-a8df-9e7a0d778f08', NULL, 'Britto Joseph', 2001, '019ddc5f-ebaa-72d0-817d-f9311e43bfcd', '019ddc5f-ec76-7159-ba09-1a208c8ccc55', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efaa-7119-bf09-a44087b63165', NULL, 'Radhika .K.K', 2002, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efb2-73f2-9186-d4fb86e2d099', NULL, 'Shine .P. Nellithanam', 2002, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed13-71d5-aa55-92b0e75ebd12', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efbd-712a-a9d9-f74b37a4f0ec', NULL, 'Anoop Ajith', 2002, '019ddc5f-ebcd-70fa-8b95-09a8f4caa03c', '019ddc5f-ecfe-714e-b859-7336ece2aacb', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efc3-7353-b623-4d03575ea2f2', NULL, 'Aswathy Raj', 2002, '019ddc5f-ebcd-70fa-8b95-09a8f4caa03c', '019ddc5f-ee15-701a-bde8-b0d93821ba4c', '019ddc5f-eeb0-7303-82cb-e4ac2825cf8e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efc6-7370-8eac-1555afb21bf2', NULL, 'Manu .M.M', 2002, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ec7a-72a9-b5b7-3b3f43ab7ae7', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efc8-70aa-a8f7-f0f029b83a16', NULL, 'Soumya Satheesh', 2002, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef16-706e-9bfc-1866901e09a2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efca-717e-8008-003d16b8066f', NULL, 'Shani .P.A', 2002, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-edb5-73a0-be51-35949aefd747', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efcc-7343-ad02-f881b684a2a8', NULL, 'Rajitha .K.R', 2002, '019ddc5f-ebfe-720a-b349-95dd05d6a6c3', '019ddc5f-ee19-71ca-ae70-23e14a79dc9f', '019ddc5f-eebb-7239-8df7-d5fecf93261d', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efce-7397-975e-05dc845be3b0', NULL, 'Jomon Poulose', 2002, '019ddc5f-ec1f-7365-98d2-fb2fb6ac9e9a', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef0e-7011-8de5-02d66a49230c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efd1-7256-af06-2329db4826c5', NULL, 'Saritha N.D', 2002, '019ddc5f-ebbb-7105-a304-e47d5074017e', '019ddc5f-ee2c-72e8-a260-347a0a249f0a', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efd3-72a1-992b-94a5da643700', NULL, 'Rini Prabha .K', 2002, '019ddc5f-ebbb-7105-a304-e47d5074017e', '019ddc5f-ed18-70aa-83f5-849589298b7d', '019ddc5f-ef25-70c3-8c06-66742fffe96e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efd5-71f3-a24c-a4ea564783a3', NULL, 'Sunanda .K.S', 2002, '019ddc5f-ebd6-72bc-8f9b-52eee47d3379', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efd7-7315-9947-b9cb69746837', NULL, 'Special Scholarship \r\n Satheesh Gopinath', 2002, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ed9f-71c9-a102-ce443f5c2e08', NULL, NULL, 'Special Scholarship', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efd9-7185-938e-f3e11e8d6d14', NULL, 'Arun Kumar .P.M', 2003, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efdb-72ee-9d8e-65f39b1476ae', NULL, 'Praseetha .K.K', 2003, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed86-722b-859c-66b0acb8f093', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efdd-7286-9356-0acfb9c548cf', NULL, 'Jaseena V.M', 2003, '019ddc5f-ebcd-70fa-8b95-09a8f4caa03c', '019ddc5f-eddc-71ef-9643-97fa5c7fc6dd', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efdf-706f-9c58-e19ab5e4408b', NULL, 'Manju .M.M', 2003, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ec78-7333-84e0-569b9220cd9b', '019ddc5f-eebb-7239-8df7-d5fecf93261d', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efe2-7221-ae76-4a717f10ef50', NULL, 'Sanoj Soundaram', 2003, '019ddc5f-ebe6-73c2-98b5-3fbb8a3cf6cf', '019ddc5f-ee0f-71c4-9a29-734a87cce205', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efe4-73aa-9170-ba7f97b0dfba', NULL, 'Aswathy Visnanad', 2003, '019ddc5f-ebea-72e5-a4f7-c68d21f6e767', '019ddc5f-ee0f-71c4-9a29-734a87cce205', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efe6-7146-b14d-53fd72905ab8', NULL, 'Sabitha M.S', 2003, '019ddc5f-ebea-72e5-a4f7-c68d21f6e767', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efe9-7177-8dd2-5ec3c0ea7b9a', NULL, 'Srilekha .M.S', 2003, '019ddc5f-ec1f-7365-98d2-fb2fb6ac9e9a', '019ddc5f-edda-71c1-8b0f-0caa9465b292', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efec-71a7-9b2e-b2db817ff8c3', NULL, 'Rejitha .K.R', 2003, '019ddc5f-ebb9-72e1-9abe-ae350eb65a56', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efef-72e6-a7cb-85eb89f458de', NULL, 'Silpa .P.A', 2003, '019ddc5f-ebcf-72e8-98a4-6f20fe5b5b42', '019ddc5f-ed2a-725f-bdbd-e7c87271e346', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-eff2-7292-ac7b-fcbc61c3ebe7', NULL, 'Priyan K.C', 2003, '019ddc5f-ebae-7022-8238-aa839f0784d6', '019ddc5f-ee13-73be-af7f-e1fb40613930', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-eff4-73eb-aa34-99f6bfdfcb84', NULL, 'Deepa Chandran', 2004, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ee4d-7091-b498-4a0675da4fa3', '019ddc5f-ef33-710e-a79d-921679fa9862', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-eff7-7270-afe2-6f0e0d648e93', NULL, 'Aneesh Parameswaran', 2004, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed77-7369-bb62-2a7e11010e07', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-effa-7081-a508-ef4c0f5a1397', NULL, 'Rajitha Mol', 2004, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-effd-723f-8037-d6e99e16291b', NULL, 'Anju Murali', 2004, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ee00-738c-a1c0-fc20bcb32085', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-efff-7018-be85-eaf84e5b2da7', NULL, 'Praveenkumar .V.N', 2004, NULL, NULL, NULL, NULL, 'Discontinued after 1st installment of 1st year', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f002-73cd-bb06-bcf5d5d5acf0', NULL, 'Mary .V. George', 2004, '019ddc5f-ebe6-73c2-98b5-3fbb8a3cf6cf', NULL, NULL, NULL, 'Selected but did not join for higher studies', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f004-717c-95bb-4074880d776e', NULL, 'Shifina .P.A', 2004, '019ddc5f-ebe7-73eb-af42-e57777c00979', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef10-7037-95a6-61fa6586b51f', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f007-7261-b500-0e39ec47bac3', NULL, 'Eldo Rajan', 2004, NULL, NULL, NULL, NULL, 'Discontinued after 1st installment', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f009-7173-82f9-902055fdf01c', NULL, 'Brinta Nelson', 2004, '019ddc5f-ebcf-72e8-98a4-6f20fe5b5b42', '019ddc5f-ee42-714e-814f-e43ba58389d4', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f00c-72e6-af83-5e668973a739', NULL, 'Sonia Rose .M.P', 2004, '019ddc5f-ebb9-72e1-9abe-ae350eb65a56', '019ddc5f-ee1b-7161-80c2-7f46e6db7a93', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f00e-711d-ac0c-c8558aecf5a0', NULL, 'Nimmy T.V', 2004, '019ddc5f-ebb9-72e1-9abe-ae350eb65a56', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef19-724e-8e62-325b23d20c54', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f011-73fd-b520-58f19e3ff60f', NULL, 'Neethu A.R.', 2005, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ec72-7029-b2b3-3f088c69db5d', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f013-731c-b19d-e87b67a8a785', NULL, 'Rajaneesh T.N', 2005, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ec72-7029-b2b3-3f088c69db5d', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f016-726e-b7cc-d5d583ef8593', NULL, 'Anju Chellapan', 2005, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ece0-70b8-9819-205984c3bfae', '019ddc5f-ef33-710e-a79d-921679fa9862', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f019-73c0-a7b4-7401f57350ab', NULL, 'Soumya Sukumaran', 2005, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ecaa-710e-877c-931f66d83c4d', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f01b-70eb-8fbd-09e86a85967f', NULL, 'Shemeera T.B', 2005, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ec65-71ab-8e29-ed06bf67f10e', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f01e-71fd-947d-abb8ffd8ad26', NULL, 'Junitha Bhanu .V.S', 2005, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ec74-7081-90a3-27ec8dd48f57', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f020-70b1-bcee-60faef453b08', NULL, 'Sanila Suresh', 2005, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ecde-708d-8617-29b3f0ec01df', '019ddc5f-ef33-710e-a79d-921679fa9862', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f023-71a4-a76c-e6ca3f77b6a5', NULL, 'Hima M', 2005, '019ddc5f-ebea-72e5-a4f7-c68d21f6e767', '019ddc5f-ed94-71e9-9ea4-8e3b7bd05b26', '019ddc5f-ef10-7037-95a6-61fa6586b51f', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f025-72f3-bf26-7483db5029de', NULL, 'Pradeep Kumar .K.H', 2005, '019ddc5f-ebea-72e5-a4f7-c68d21f6e767', '019ddc5f-ee0f-71c4-9a29-734a87cce205', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f028-7377-b2a6-3b7270dcfddd', NULL, 'Maya .I.S', 2005, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ecda-70f8-9507-268b3794a481', '019ddc5f-ef33-710e-a79d-921679fa9862', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f02a-737b-b276-c3ef5557509d', NULL, 'Darsana Haridas', 2005, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f02d-703b-9ff4-fd02f2c65233', NULL, 'Aparna Venugopal', 2005, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-edb2-705b-9b70-2e9c768f95df', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f02f-72fc-a5a7-677e17aca0cb', NULL, 'Simi P.M', 2005, '019ddc5f-ebc5-704f-a5e2-9ff2e06b81ed', '019ddc5f-ec67-7319-9aa9-6a6683fd69c4', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f032-7327-aa6e-57cf19fa9fb9', NULL, 'Rini M.S', 2005, '019ddc5f-ebe7-73eb-af42-e57777c00979', '019ddc5f-edf1-70b6-9157-83ec87f137d9', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f034-704b-8e23-bbf967ffa6a5', NULL, 'Divya Ravi', 2006, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f037-70ae-be95-a816dfc26699', NULL, 'Arya K', 2006, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed0f-70e2-bc3e-202be1be3e7b', '019ddc5f-ef0e-7011-8de5-02d66a49230c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f03a-72d2-946e-1050845328ac', NULL, 'Tintu Thankachan', 2006, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ecaa-710e-877c-931f66d83c4d', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f03c-72dd-9536-9e0ca38d9b6b', NULL, 'Ajesh', 2006, '019ddc5f-ec29-71d5-9866-85a42581a7cb', '019ddc5f-ecd6-7091-aa82-748b3f96f8f5', NULL, 1.25, '15 months', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f03e-706c-a8e6-778a1740a880', NULL, 'Midhin P K', 2006, '019ddc5f-ec29-71d5-9866-85a42581a7cb', '019ddc5f-ee17-7020-aacb-e85198351e30', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f040-71ee-909a-613885dc34e6', NULL, 'Sariga', 2006, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ed80-73b8-8695-0e8289dd711e', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f043-7153-9237-a5d3817b37ad', NULL, 'Soundharya', 2006, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ede4-700b-98bb-e6fc45e7cea2', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f045-70d0-a020-f02081665408', NULL, 'Vidya P S', 2006, '019ddc5f-ebf9-7241-8082-856d6ca6d4a1', '019ddc5f-ede4-700b-98bb-e6fc45e7cea2', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f047-7148-990d-bce92271426f', NULL, 'Kapil Dev', 2006, '019ddc5f-ebe7-73eb-af42-e57777c00979', '019ddc5f-ed31-70aa-bc54-9169c48d13e3', '019ddc5f-ef3e-7276-8515-5fe1f5834661', 3.00, 'discontinued after 1 year', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f04a-7375-8ef7-2631bf653e83', NULL, 'Nasifa K P', 2006, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-edd5-730a-86de-d7ac0d2b8491', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f04c-7091-9a07-212c9ed84a31', NULL, 'Delson Paul', 2006, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ed05-7077-bca4-43ce0f352c42', '019ddc5f-ef25-70c3-8c06-66742fffe96e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f04f-7074-9899-182cbc3b4f65', NULL, 'K C Priyan', 2006, '019ddc5f-ebda-7160-81ce-af158af27807', '019ddc5f-ec70-7264-9802-ba19ef1a2021', '019ddc5f-ef2b-7311-8292-b9436b5cbf30', 2.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f052-739b-b0c9-8ad1cde8ab8d', NULL, 'Deepa Mohan', 2006, '019ddc5f-ec10-7395-be14-ab41de9bdd06', '019ddc5f-ecfb-70cc-b7e5-6ab9f49d1246', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 3.00, 'Specially given for 2 years', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f054-73d0-8afe-cfbedff2756e', NULL, 'Manjusha P.M', 2007, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-eccb-733d-82ea-4f02cfe02da1', '019ddc5f-ef42-71d0-bcf0-71f85821822b', 2.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f057-7075-9a20-fedf83937332', NULL, 'Geethu Sukumaran', 2007, '019ddc5f-ec15-73a0-b58f-c53f94be9632', '019ddc5f-ece2-7097-9a57-e047b66f5fa8', '019ddc5f-ef33-710e-a79d-921679fa9862', 3.50, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f059-7135-a00a-9352d0c0deae', NULL, 'Silna T.N', 2007, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ecdc-7052-b45e-bc1b6d7726cb', '019ddc5f-ef33-710e-a79d-921679fa9862', 3.50, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f05b-7200-8115-6415dd49c518', NULL, 'Bijimol T.V', 2007, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f05d-7182-bd79-ad24347ff005', NULL, 'Sanu M. Thomas', 2007, '019ddc5f-ec0e-7036-87b3-2b4624f85e04', '019ddc5f-eccb-733d-82ea-4f02cfe02da1', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f061-72bd-a363-966f16677681', NULL, 'Krishnakumar S.S', 2007, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ecf9-72f5-b82b-3a295b90c7fd', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f063-73a2-9f1a-0944b968d9dd', NULL, 'Liya K.B', 2007, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-edef-7148-95ec-c851a2df5d48', '019ddc5f-eea5-71c4-ab34-8d184c36b311', NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f065-7089-8d76-528c937b7348', NULL, 'Sabeena S', 2007, '019ddc5f-ebea-72e5-a4f7-c68d21f6e767', '019ddc5f-ed9a-714b-bab5-b4f81ac30800', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f069-714a-acf7-dc8b18aa21e5', NULL, 'Priya K.S', 2007, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f06b-7332-93b8-bec91401a0e7', NULL, 'Neenu Narayanan', 2007, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ed38-7391-9ccc-1b3c1ccc70ff', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f06e-7209-bd80-816cea628d5f', NULL, 'Flemine Gracious', 2007, '019ddc5f-ebf9-7241-8082-856d6ca6d4a1', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f070-701e-836c-92b608425fb7', NULL, 'Rekha K.R', 2007, '019ddc5f-ebf9-7241-8082-856d6ca6d4a1', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f074-7079-84e0-0578f38f95a4', NULL, 'Manikuttan K.S', 2007, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-ed54-70e5-b059-3e4b93be45b0', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f077-725f-867e-3747ea5b3602', NULL, 'Saranya Krishnan', 2007, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-ee3b-72a2-9221-13e3f33dfbd3', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f07a-71cd-b681-0c0039a9fea3', NULL, 'Saranya Sivadasan', 2007, '019ddc5f-ec00-7053-b02c-52849b7359f9', '019ddc5f-ed18-70aa-83f5-849589298b7d', '019ddc5f-ef33-710e-a79d-921679fa9862', 3.50, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f07c-7026-83e0-d0d723ef5e6b', NULL, 'Amal Raveendran', 2007, NULL, NULL, NULL, NULL, 'Special one time Rs. 2000/-', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f07e-7312-bf0f-db8f6f8046b0', NULL, 'Anoop O R', 2008, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ede9-7240-87b2-cfdeecb9aa9c', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f081-734a-87f2-f1efa3c1e9f3', NULL, 'Sajil M S', 2008, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ee57-732f-a228-5e387452f036', '019ddc5f-ee71-715f-905d-38c552427236', 3.50, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f083-7235-a213-e5890160e24d', NULL, 'Amal Raveendran', 2008, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ec63-71a2-a2e6-d300a086c625', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f086-7012-919c-b5a009e758c0', NULL, 'Praseeda Prabhakaran', 2008, '019ddc5f-ec0a-7062-b72a-6172f860b069', '019ddc5f-edeb-7141-aa31-658a61e77ba8', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f088-72ac-a7a0-2b13f9e5be9f', NULL, 'Sooraj Lal', 2008, '019ddc5f-ec0a-7062-b72a-6172f860b069', '019ddc5f-ed01-7264-9cf2-8d0c20a4e1c9', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f08a-734d-a5c4-8967ac152c6e', NULL, 'Surya Vijayan', 2008, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f08d-72db-95c9-ec6f926de97a', NULL, 'Surumiyath', 2008, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-ed69-724d-bcb3-58bb7ba6e09f', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 3.50, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f08f-7136-bdbe-b9756e305044', NULL, 'Iglasonnet', 2008, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ee27-72ad-a9d1-345040fbd0c3', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f091-7398-9c9c-724bccc93e13', NULL, 'Geethu V S', 2008, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ec85-7099-8e71-b069207e67c1', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f094-7133-b3a4-b24df71fb415', NULL, 'Regula Uthamman', 2008, '019ddc5f-ebf9-7241-8082-856d6ca6d4a1', '019ddc5f-ecd1-7313-9841-df235d833d46', '019ddc5f-eeb4-7083-a871-3d3db61005bf', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f096-70e8-8e84-22a1287bcbb5', NULL, 'Teenu Kuriakose', 2008, '019ddc5f-ec0c-73fe-af07-bd90cc358a71', '019ddc5f-ed59-70c7-9879-f10698df0ef0', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f099-7365-87ef-1479d6b277cb', NULL, 'Unnikrishnan', 2008, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ee4f-706f-b8fb-327d8391f7bf', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f09d-7174-b2ac-370fd80c3b76', NULL, 'Vishnu A R', 2008, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ecd1-7313-9841-df235d833d46', '019ddc5f-ef1f-7136-9b87-20bda1e56748', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f09f-73a3-be68-8129822e32a0', NULL, 'Vysakh Viswanath', 2008, '019ddc5f-ebea-72e5-a4f7-c68d21f6e767', '019ddc5f-ed0b-7386-b026-a0d699350b1e', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0a2-7045-833a-3e408e12462b', NULL, 'Vishnu Das Vijayan', 2009, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ecf1-7379-a1d3-40dcfa7af08a', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0a4-72d3-9af6-a1c0da11506d', NULL, 'Vishnu P.M', 2009, '019ddc5f-ebdc-7177-b025-106ff670b1d0', '019ddc5f-ecef-704c-91cb-7ac09c337d42', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0a6-72d7-8d4a-dbc49c55c7e2', NULL, 'Arun Babu', 2009, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ede7-7170-bfce-2963292183c8', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0a9-724a-851c-e9ebfaef2947', NULL, 'Athira K.S', 2009, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ecea-727d-a2d4-b12fe372280f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0ac-72e1-9142-03b5a654385c', NULL, 'Rajila V.A', 2009, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-eda3-73f3-bc4d-aff49bfba03f', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0ae-73b4-823f-8b893cbe587a', NULL, 'Thritha P.S', 2009, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ede7-7170-bfce-2963292183c8', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0b0-71b4-b3d9-dc5a42e3b119', NULL, 'Sarath Martin', 2009, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ec60-7034-8af0-2a0bba55b613', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0b3-7317-8451-63581fcb6d95', NULL, 'Devan C.H', 2009, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ecf6-70c1-a8db-e63ac1912729', '019ddc5f-ef07-71f7-b08b-b28edcc0ef82', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0b5-714b-b5da-b0befcb5762c', NULL, 'Salu Babu', 2009, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-eca8-7157-b9e9-ebc421f96ed8', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0b7-701b-ba5b-fe61577cbede', NULL, 'Hitha Thankachi', 2009, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ed62-71cf-82ce-31c041b9b83a', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0ba-7023-a49d-c86d9341f2f4', NULL, 'Athira Babu', 2009, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ecf4-73ce-98fe-3281be33d213', '019ddc5f-ef07-71f7-b08b-b28edcc0ef82', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0bd-72a0-8fdf-142f75f80ad4', NULL, 'Robin Sebastian', 2009, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed33-715e-86db-57840d7ea6c4', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0c0-72ab-84d1-226920aad0a3', NULL, 'Jomol T joseph', 2010, '019ddc5f-ec15-73a0-b58f-c53f94be9632', '019ddc5f-ed3e-7353-8fad-cc67176fb281', '019ddc5f-eeaa-73f9-9af6-8778fa7c268c', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0c4-732b-bc99-3a829f32c540', NULL, 'Lakshmi Priya M', 2010, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-ed75-7003-b19c-536767e4922f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0c6-7354-aa06-692226158b58', NULL, 'Nitin Shivan', 2010, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed07-7158-8ce9-4f154fcee3cd', '019ddc5f-ef0c-73c6-8e5a-537f5d01915a', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0c9-7206-83e1-695d6f1e8030', NULL, 'Ajaya K', 2010, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed2d-720f-adac-12a41cc7e33e', '019ddc5f-eed2-730d-8952-c362de96c5f6', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0cb-722e-a95b-fd7087a89cd7', NULL, 'Gayathri Mohan', 2010, '019ddc5f-ec0e-7036-87b3-2b4624f85e04', '019ddc5f-ee55-72b8-b893-c0d8d01a2e46', '019ddc5f-eed6-7257-a83f-10f0ff0866fa', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0cd-7198-99fb-55fcd85ebf6f', NULL, 'Jenson KJ', 2010, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed11-70d7-a5ba-53de6a014a1a', '019ddc5f-ef19-724e-8e62-325b23d20c54', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0cf-73af-9628-ad51d9bbb4a6', NULL, 'Athira K V', 2010, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0d1-703e-85ca-c3ef7b351472', NULL, 'Anupa Vishwanath', 2010, '019ddc5f-ebf9-7241-8082-856d6ca6d4a1', '019ddc5f-edbe-734f-83a7-6efbf7256aa6', '019ddc5f-ee9c-7084-9979-fcc69b4843b9', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0d3-7223-a051-22da3a7732ed', NULL, 'Mary Johnsy', 2010, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ee2a-701a-b4cc-57100f904fc4', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0d5-70b0-9fdf-f17de509a27b', NULL, 'Arun PA', 2010, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-ecc6-700f-91fc-772e3bac4057', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0d8-72ba-b4b1-a1a9a51a625e', NULL, 'Midhun K Jayan', 2010, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ed16-7038-aa63-8958849ec3b3', '019ddc5f-ef13-7146-946a-58df1ca79e4b', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0da-70f7-8202-9658bbe57d71', NULL, 'Restin Baby', 2010, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ed0d-73b8-95a3-9748d70e7e5d', '019ddc5f-ef13-7146-946a-58df1ca79e4b', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0dc-73a4-be0c-91387fcb2c38', NULL, 'Aswathy Sivan', 2010, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-ec9f-7343-bd64-f5f1eb40affe', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0df-7136-b241-18bef99eb02f', NULL, 'Sruthy Baby', 2010, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ed16-7038-aa63-8958849ec3b3', '019ddc5f-ef13-7146-946a-58df1ca79e4b', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0e1-7063-b7ee-4edc304289f9', NULL, 'Aswathy R', 2010, '019ddc5f-ec0a-7062-b72a-6172f860b069', '019ddc5f-ee02-7194-9884-7f1ab305bbaf', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0e3-70c9-9c03-4d716a4510dd', NULL, 'Akhila Mohanan', 2010, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-ed43-7080-b734-d94bbf5b6741', NULL, NULL, 'Discontinued after one year', 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0e6-73f7-bfc3-d5424fc538a5', NULL, 'Vishnu Das Vijayan', 2011, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ecf1-7379-a1d3-40dcfa7af08a', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0e8-7380-8376-4e123766d980', NULL, 'Vishnu P.M', 2011, '019ddc5f-ebdc-7177-b025-106ff670b1d0', '019ddc5f-ecef-704c-91cb-7ac09c337d42', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0ea-739b-8120-c84356bf3159', NULL, 'Arun Babu', 2011, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ede7-7170-bfce-2963292183c8', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0ec-71ab-8901-24c535abbde1', NULL, 'Athira K.S', 2011, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-eced-7012-bfab-4173e638531e', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0ef-7225-aa5c-913cb76a502f', NULL, 'Rajila V.A', 2011, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-eda5-725b-84de-73a6542c0b3a', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0f1-7362-8fb3-4fabeed75e76', NULL, 'Thritha P.S', 2011, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ede7-7170-bfce-2963292183c8', '019ddc5f-eea5-71c4-ab34-8d184c36b311', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0f3-7213-9af2-cd98a13035a9', NULL, 'Sarath Martin', 2011, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ec60-7034-8af0-2a0bba55b613', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0f5-702f-af44-a42bb4dfc24b', NULL, 'Devan C.H', 2011, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ecf6-70c1-a8db-e63ac1912729', '019ddc5f-ef07-71f7-b08b-b28edcc0ef82', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0f7-7293-9612-e02029c77efe', NULL, 'Salu Babu', 2011, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-eca8-7157-b9e9-ebc421f96ed8', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0f9-729e-9736-4a5f12865133', NULL, 'Hitha Thankachi', 2011, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ed62-71cf-82ce-31c041b9b83a', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0fb-71ed-8085-91099ad2a460', NULL, 'Athira Babu', 2011, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ecf4-73ce-98fe-3281be33d213', '019ddc5f-ef07-71f7-b08b-b28edcc0ef82', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f0fd-737a-a35c-e4c7488ff1f9', NULL, 'Robin Sebastian', 2011, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed33-715e-86db-57840d7ea6c4', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f100-711a-ae7d-643409fd6658', NULL, 'Geetha R', 2012, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-ed5b-72e1-8fcc-bb80d21270b6', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f102-7139-bd74-28cdafcdc32a', NULL, 'Ashwathy Vasu', 2012, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed0d-73b8-95a3-9748d70e7e5d', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f104-7181-9c37-276d55c3af6e', NULL, 'Ashwathy T K', 2012, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ed3a-70d8-b119-7b3b03b407ed', '019ddc5f-eea1-70e8-ae7b-6284d03d72f0', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f106-7243-bb2b-e7c1891a1f8d', NULL, 'Gopika Krishnan', 2012, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee77-72e9-96b0-6685367d426e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f109-70ef-8b06-ecc803325e38', NULL, 'Anoop O R', 2012, NULL, '019ddc5f-ecbe-705b-bb1e-5aa98ea4119b', '019ddc5f-ef30-72c3-bce7-b69039c7a246', 2.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f10b-7133-9bf8-190fe315ae98', NULL, 'Binu Chacko', 2012, '019ddc5f-ebd5-7385-b2f8-e506681c0115', '019ddc5f-ecc2-73ff-ac8a-4842264a7915', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f10d-7313-ab0f-6c7ebf71030b', NULL, 'Midhun Das', 2012, '019ddc5f-ec0e-7036-87b3-2b4624f85e04', '019ddc5f-ecc0-73cb-bd7b-f368c1e09f3f', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f10f-737e-bcb4-b98e3c2bb80c', NULL, 'Megha Ramaswamy', 2012, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ed4e-7060-a6a4-08444483081f', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f111-719c-9d8a-c4a580824350', NULL, 'Jaseela T K', 2012, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-eccd-7283-a288-08a2b342b397', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f113-7302-aa5c-c575aa99dfc7', NULL, 'Anagha Unnikrishnan', 2012, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed98-714e-9a94-98ee2353eb3e', '019ddc5f-ef04-7091-9e31-c649f22f5ae2', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f115-7139-b311-b6688a5f4de8', NULL, 'Faseela Mytheen', 2012, '019ddc5f-ebd3-70bd-83e9-353a71596ea3', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f117-7259-8b2d-5e9ac50de3de', NULL, 'Sreeja Gopalan', 2012, '019ddc5f-ebb7-71e2-bd19-29f9c6e2268f', '019ddc5f-eded-7229-ad61-ffc85b77992d', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f11a-72aa-8aaa-f23589987a77', NULL, 'Anoop Santhosh', 2012, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ec6a-73bb-8155-1429baef53cf', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f11c-703f-9975-64f3bcb2ab76', NULL, 'Parvathy Muthuraj', 2012, '019ddc5f-ebdc-7177-b025-106ff670b1d0', '019ddc5f-eccd-7283-a288-08a2b342b397', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f11e-71a4-916f-a28007da2ed2', NULL, 'Sarath Murugan', 2012, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-edaa-72ae-bcd7-bec3fb635737', '019ddc5f-ee97-7134-99e3-0492c066aa87', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f121-7014-80db-990ef8afa3e7', NULL, 'Praveena Prabhakaran', 2012, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ec6e-70d0-be23-15a2da99c792', '019ddc5f-eebb-7239-8df7-d5fecf93261d', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f123-7371-81fe-4e1c33736e2b', NULL, 'Sanjay A S', 2012, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ee06-73f1-b0af-f8dd7ff5bd79', '019ddc5f-eef2-7311-add5-0948161572b7', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f125-715f-9dc9-952958576475', NULL, 'Ann Mary Baby', 2012, '019ddc5f-ebf4-71e7-a69c-f0d7991e531b', '019ddc5f-ee4b-71a1-8bee-b71869045ac7', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f128-71dc-abd4-b8aceb795c68', NULL, 'Maheswari S', 2012, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed3c-730b-b1a7-9a166ce774e5', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f12a-73f1-82eb-0813471e42bd', NULL, 'Sayana T S', 2013, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-edb7-70d1-894a-38dc126734f0', '019ddc5f-ee93-722e-8db9-f7f28df1ea1f', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f12c-70a2-9927-0de01fe40c89', NULL, 'Subramanyan', 2013, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-edbb-71ab-945a-667ba5ce55f0', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f12e-71d4-800f-c102ffed34bd', NULL, 'Sreeja Jayan', 2013, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-ec76-7159-ba09-1a208c8ccc55', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f130-70b7-a14a-cb7e8e24d517', NULL, 'Gopika T G', 2013, '019ddc5f-ebd3-70bd-83e9-353a71596ea3', '019ddc5f-ecbb-71ba-a748-6a424f9f7be5', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f133-7243-94fc-d4592ec0efba', NULL, 'Revathy P R', 2013, '019ddc5f-ec08-73d9-b430-aed222d124a6', '019ddc5f-ec76-7159-ba09-1a208c8ccc55', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f135-70d3-a6ef-917110c59e3c', NULL, 'Sreejith P V', 2013, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ed50-7395-af3d-8397c417aca2', '019ddc5f-ee8f-704f-a105-b75ea1208bea', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f137-7194-88ec-bd226895066c', NULL, 'Athira Reji', 2013, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-edf9-7204-8ec8-4e6d59bc5896', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f139-73af-95d9-68d7dd16b5c9', NULL, 'Manjeshwar K M', 2013, '019ddc5f-ec0e-7036-87b3-2b4624f85e04', '019ddc5f-edcb-71ca-ad37-c833aab58b0d', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL);
INSERT INTO `std_recipients` (`id`, `application_id`, `name`, `start_year`, `ref_school_id`, `ref_college_id`, `ref_course_id`, `duration`, `remarks`, `active`, `inactive_from`, `inactive_reason`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddc5f-f13c-70a4-94c6-84ce9ff843ea', NULL, 'Mithun C Pushparaj', 2013, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-edca-726c-b970-e2aabd87092e', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f13e-70dd-a8f8-25b40bf14689', NULL, 'Chinchu Vijayan', 2013, '019ddc5f-ec17-73fe-80e3-51132d06b8d5', '019ddc5f-ecae-7176-b7e2-b8ab0ce7e061', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f141-7009-88ad-303c6818c94d', NULL, 'Athira T S', 2013, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-edcb-71ca-ad37-c833aab58b0d', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f144-73ad-a352-f770331fac94', NULL, 'Sebasatian P J', 2013, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ed67-739a-8eef-528ed0ec41f2', '019ddc5f-eee0-70ab-b102-fc099f627dc3', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f146-7183-aa82-6d55f929bb92', NULL, 'Arya Sivadas', 2013, '019ddc5f-ec15-73a0-b58f-c53f94be9632', '019ddc5f-ed96-7042-99eb-dca68646ed8b', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f148-71ac-8e12-7ebfb3344ebb', NULL, 'Vishnu P V', 2013, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-edb9-70bd-af43-d8cd4fe2bad6', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f14b-7284-a8c9-23fe3f24ef0c', NULL, 'Aryamol TB', 2013, '019ddc5f-ec0a-7062-b72a-6172f860b069', '019ddc5f-ed1b-72e3-9929-9e23a620f5b3', '019ddc5f-ef25-70c3-8c06-66742fffe96e', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f14d-7070-a2f7-32c43fce6e46', NULL, 'Vishnudas M', 2013, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ecae-7176-b7e2-b8ab0ce7e061', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f14f-7241-a553-1f314b1d6639', NULL, 'Athira S', 2013, '019ddc5f-ec1b-730f-972f-d045814f8153', '019ddc5f-ecae-7176-b7e2-b8ab0ce7e061', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f152-73a3-9563-25b9a44c1236', NULL, 'Sethulakshmi R', 2013, '019ddc5f-ec12-724c-94e6-8aa4558ccd33', '019ddc5f-edcb-71ca-ad37-c833aab58b0d', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f154-716d-9e7a-ea080964c393', NULL, 'Lijo Joy', 2013, '019ddc5f-ec02-715b-9192-560463181c8c', '019ddc5f-ed91-701e-a7b3-9d32d124fa57', '019ddc5f-eefc-702c-98a6-1b31d0fab9e1', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f156-7078-a2e8-4e24e7b01152', NULL, 'Meera Ramesh', 2013, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-ee02-7194-9884-7f1ab305bbaf', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f158-703c-ae03-1fc3b84dffe7', NULL, 'Vishal R Raveendran', 2013, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ee53-7001-865b-b7f9bbac4554', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f15c-7245-afe7-4fbd983aa95a', NULL, 'Archana Balan', 2014, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ec7c-7289-b6b0-6714c331e410', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f15e-72d1-9a3c-11438b07ee20', NULL, 'Aswathy Asokan', 2014, '019ddc5f-ec02-715b-9192-560463181c8c', '019ddc5f-ed6b-71db-ba98-ad1e35a2b29a', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f160-70bd-b6ff-a8565f04893d', NULL, 'Meena Balakrishnan', 2014, '019ddc5f-ec02-715b-9192-560463181c8c', '019ddc5f-ed7e-732c-92ab-3f23384f40b9', '019ddc5f-eee4-70ba-bcba-ab3ea496fb7c', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f162-700f-b6d7-9d924e86643c', NULL, 'Nainu Mol', 2014, '019ddc5f-ec08-73d9-b430-aed222d124a6', '019ddc5f-ec8b-715a-94f2-7fb0c5a07fb9', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f166-713a-a4b5-b98a84bc8e77', NULL, 'Rifana K.A.', 2014, '019ddc5f-ec1d-73b7-b066-4bdb56e13e9e', '019ddc5f-ec8b-715a-94f2-7fb0c5a07fb9', '019ddc5f-eecb-7324-8929-16413b8e2035', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f16a-705d-9bfc-9c45902b7b76', NULL, 'Shanida Nizar', 2014, '019ddc5f-ec06-7295-9126-1a5d8962b155', '019ddc5f-ee35-706d-9559-b6c357127211', '019ddc5f-ee7a-73d7-8db5-23783ffcc8db', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f16c-728b-9683-d5657dd846a0', NULL, 'Sreekutty T.K.', 2014, '019ddc5f-ec02-715b-9192-560463181c8c', '019ddc5f-ed48-701d-b608-8e4c264e2ea1', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f172-7303-af26-ce11f0177c94', NULL, 'Vani Subramanyan', 2014, '019ddc5f-ec04-710b-9e8e-5744f8ff6784', '019ddc5f-ed4e-7060-a6a4-08444483081f', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f177-71c8-84be-f158d643dfea', NULL, 'Ammu P.R.', 2014, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-edc8-71d5-9178-79fae564bc54', '019ddc5f-ef28-7130-a5fc-677766768ea8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f179-73ac-9f36-a7ff0745bdf0', NULL, 'Arya Sasi', 2014, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ecae-7176-b7e2-b8ab0ce7e061', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f17b-7162-a8d4-fdd0f65d3021', NULL, 'Athira S.', 2014, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ecbb-71ba-a748-6a424f9f7be5', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f17d-7211-b61e-f145b7f86015', NULL, 'Bibin Thomas', 2014, '019ddc5f-ebd3-70bd-83e9-353a71596ea3', '019ddc5f-edd7-70ee-af24-8cde1f849dfc', '019ddc5f-eed2-730d-8952-c362de96c5f6', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f180-71ab-9bb7-39a69632d3d2', NULL, 'Jishnu Manoj', 2014, NULL, '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f182-7260-a138-5fa137244155', NULL, 'Karthika M.R.', 2014, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-ed7a-70bc-b61b-9c6ba22b7a38', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f184-7233-9922-40886729235a', NULL, 'Krishna Das K.', 2014, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ed1d-723a-b592-02bd3e3a70f8', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f186-7138-a8a8-4ebd56083417', NULL, 'Minnu Prasad', 2014, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f189-731d-8ba1-f61604d10bf7', NULL, 'Saranya Sasi', 2014, NULL, '019ddc5f-edcf-707d-bc11-521b919014a4', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f18b-7218-8cea-377b80bb10ce', NULL, 'Soumya T.C.', 2014, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ed24-7065-9cc4-c9a65070d754', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f18e-73de-b400-0c94b2c97e50', NULL, 'Vishnu Santhosh', 2014, '019ddc5f-ebe0-7114-a6ed-a77db8be42d6', '019ddc5f-ed03-7358-87a3-a007135ed25c', '019ddc5f-eeda-7194-aee1-bee6308670d5', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f190-72ff-9e3d-dfaa7be62fa4', NULL, 'Vishnu Shovi', 2014, NULL, '019ddc5f-edca-726c-b970-e2aabd87092e', '019ddc5f-eeeb-71fb-a17e-611c96a360c0', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f193-72d8-85d0-48d4479b6d06', NULL, 'Mariya Joicy P J', 2015, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-edf3-7333-b8c7-e6b8bdf33932', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f195-72eb-a4a2-8a88355f7099', NULL, 'Priyanka Laslet K S', 2015, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-edf3-7333-b8c7-e6b8bdf33932', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f197-7229-9052-9886263c1294', NULL, 'Rahul M R', 2015, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ed7c-725f-bb5c-d6c60d4e21a2', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f199-713d-b412-29b2ad7e57e8', NULL, 'Geethu T S', 2015, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ed52-7007-af2c-cc81bd5cd1c8', '019ddc5f-eebb-7239-8df7-d5fecf93261d', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f19b-7094-a73c-cb10dd2e03ad', NULL, 'Suhail Ashraf', 2015, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ee40-71cf-bbb3-b5821f611bce', '019ddc5f-eee0-70ab-b102-fc099f627dc3', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f19d-7325-8e6e-11fc396f99d3', NULL, 'Albin M Michael', 2015, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ed35-729f-b3fc-8eafa60a0bb1', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1a0-7332-82ab-7017a5fe761a', NULL, 'Jaimy Mol K J', 2015, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ee25-7179-9841-f914117ffaf3', '019ddc5f-eeeb-71fb-a17e-611c96a360c0', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1a2-71af-9c42-baec8bf99128', NULL, 'Parvathy Babu', 2015, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ec7e-707b-b1b5-cb2f9ad25dbc', '019ddc5f-eed4-72c9-bd02-853de77bc1c3', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1a4-7163-9131-80131046dfd4', NULL, 'Aparna Mohan', 2015, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ec83-701f-82c0-c2eaa1d0abc0', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1a6-73d9-ad7f-8e56e3b26d1c', NULL, 'Amal V S', 2015, '019ddc5f-ec0a-7062-b72a-6172f860b069', '019ddc5f-edf7-703b-a706-476b5bdb0833', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1a8-700a-9798-40dd577f192d', NULL, 'Reshma Ramesh', 2015, NULL, '019ddc5f-ed5d-7129-bc67-e737b77e0f43', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1aa-7274-88da-ff9c47652619', NULL, 'Aswathy Ashokan', 2015, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-eccb-733d-82ea-4f02cfe02da1', '019ddc5f-ef02-7149-9feb-b90acd8994df', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1ae-708a-add3-b7064a0e525a', NULL, 'Athira T V', 2015, '019ddc5f-ebe0-7114-a6ed-a77db8be42d6', '019ddc5f-ecb0-72e9-85c4-2b11a331d5b4', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1b0-70d8-8d91-cb7c47a29970', NULL, 'Akshay K', 2015, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ec63-71a2-a2e6-d300a086c625', '019ddc5f-eee0-70ab-b102-fc099f627dc3', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1b3-73a0-8689-42bebd44b89a', NULL, 'Amrutha Santhosh', 2015, '019ddc5f-ebee-7166-9299-840a75929160', '019ddc5f-ede2-7288-b94e-dcded6685591', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1b6-7286-ad7f-ce46890f22ad', NULL, 'Divya Devadas', 2015, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-ed22-72b3-aa7c-29e458066808', '019ddc5f-ee83-701d-a8e1-de886acee1ac', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1b9-7252-890e-6d8a048be540', NULL, 'Subin Shaji', 2015, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ecb2-707b-925f-ba06fda1fac1', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1bc-7019-bf1f-31b0ecc201d6', NULL, 'Bismi Ibrahim', 2015, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee93-722e-8db9-f7f28df1ea1f', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1be-73bd-ba61-0f8047440279', NULL, 'Christina Roy', 2015, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ee11-71ac-a595-f371d62b4685', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1c0-7231-a29c-28e60c5e8ee0', NULL, 'Nepun Urumese', 2015, '019ddc5f-ebfe-720a-b349-95dd05d6a6c3', '019ddc5f-ecb7-723b-9932-697addd7a3b1', NULL, NULL, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1c3-72b6-9960-13d162c0b71b', NULL, 'Vijayakumar', 2015, '019ddc5f-ebdc-7177-b025-106ff670b1d0', '019ddc5f-ed8f-7206-ac1e-af94fcb6f20b', '019ddc5f-eeeb-71fb-a17e-611c96a360c0', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1c6-7214-9154-6e120342b5c6', NULL, 'Adhithya Murali', 2016, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-edac-7398-9807-9c7326b17dc6', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1c8-73ca-a6b9-ceacc5c24b80', NULL, 'Nidhilesh P S', 2016, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ed41-71d0-9360-81c71c718154', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1cb-71fd-8899-810ffc890045', NULL, 'Emmanuel Jose', 2016, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ee02-7194-9884-7f1ab305bbaf', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1cd-71db-8820-a2f8c55e4ee9', NULL, 'Chippy Pradeep', 2016, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ed5f-7082-a202-a887d94ef336', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1d0-70bb-8823-8eb772bbf71f', NULL, 'Shilpa M S', 2016, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ee51-7158-a905-1dbb2877a68e', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1d2-7171-8240-c593480bfef9', NULL, 'Amitha Ajayakumar', 2016, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-edc2-7176-b802-2b85395b1296', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1d5-7198-aa73-16dc2492d09f', NULL, 'Sarath Babu', 2016, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-eda2-72db-a7db-f76701df4890', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1d8-706e-a1d9-1b6cb0466812', NULL, 'Megha Mani', 2016, '019ddc5f-ebdc-7177-b025-106ff670b1d0', '019ddc5f-ee1d-72d2-b5b6-cac5edc6c9e3', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1da-7024-a119-367cec0fb02d', NULL, 'Sreehari Reji', 2016, NULL, '019ddc5f-ee46-733c-a66a-52a71bd214f1', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1dd-716c-8e50-b29e42d3b219', NULL, 'Devika Sivan', 2016, '019ddc5f-ebe0-7114-a6ed-a77db8be42d6', '019ddc5f-ed77-7369-bb62-2a7e11010e07', '019ddc5f-ee93-722e-8db9-f7f28df1ea1f', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1df-7302-8523-f2dca173d856', NULL, 'Arya R', 2016, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ee02-7194-9884-7f1ab305bbaf', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1e2-73c0-b7c7-68159140ae95', NULL, 'Vinayak P R', 2016, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ed73-7202-b62e-63628183d082', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1e5-70f9-8d32-02fe130762f7', NULL, 'Ashley Johny', 2016, '019ddc5f-ebde-72aa-8f24-dd89dd1b4364', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1ec-71ad-a00c-ea2dabf34bf4', NULL, 'Anjali N Ajith', 2016, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-ed4a-717e-b05b-497942bbe68d', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1ef-736b-b2f6-0f189a7a09c8', NULL, 'Prathibha mol N J', 2016, '019ddc5f-ebe2-71e4-a1e2-62d14be90e19', '019ddc5f-ecd8-7394-8559-e7dc665a4d5f', '019ddc5f-ef09-7295-a0b3-bff6b96fc295', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1f2-71b6-b719-5cae57b4b3cd', NULL, 'Rinnu Mariya Roy', 2016, '019ddc5f-ebe0-7114-a6ed-a77db8be42d6', '019ddc5f-ed88-7209-ab13-7d8803abb336', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1f4-7004-a1e0-994c22e67a88', NULL, 'Saliha K R', 2016, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ed45-725f-893a-f99d7eb176ac', '019ddc5f-eefe-73e6-8096-a7c86be3435b', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1f7-73b2-ae0d-9f7ad5a72f9d', NULL, 'Anna Maria Oommen Mathew', 2016, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ee0c-72be-b2db-8cc0656598a0', '019ddc5f-ee83-701d-a8e1-de886acee1ac', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1f9-707e-b785-ad8135b23848', NULL, 'Aswathy Rajesh', 2016, '019ddc5f-ebde-72aa-8f24-dd89dd1b4364', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1fc-7059-8906-74c5730c311c', NULL, 'Gokul Gopinathan', 2016, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ec9b-722c-b2c2-71a8b4069b84', '019ddc5f-eeb7-7318-a42f-b0b267ccd019', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f1fe-7158-a0da-a5489c0dae35', NULL, 'Rohith Raj Pai', 2016, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ec9d-717c-bf32-9eb3a9d8109e', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 0, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f201-72a7-80c5-0a435a518c67', NULL, 'Ebin PF', 2017, '019ddc5f-ebc3-701f-bf6b-ff4c51a18400', '019ddc5f-ed26-72a6-82a3-1d087e071cf2', '019ddc5f-eeb9-7303-876a-16c878c54006', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f204-7042-952e-c404f9ae26b8', NULL, 'Vrinda Lakshmanan', 2017, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ec89-70de-b3af-30ad2642e265', '019ddc5f-ef2e-7088-b692-9d7b8588e9f2', 5.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f206-72f1-8b3b-0f8fe943c7cf', NULL, 'Parvathi Jiji', 2017, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-ed20-73d0-a297-b3ff281642d5', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f207-70fb-9c53-f959bfbf2c43', NULL, 'Anagha PS', 2017, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f20a-70b8-b1c8-652119cd0957', NULL, 'Vikas Viswanath', 2017, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ece7-7041-9594-6a6463c8359e', '019ddc5f-ef19-724e-8e62-325b23d20c54', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f20c-72e2-8d8d-1d734deb7e18', NULL, 'Soorya PR', 2017, '019ddc5f-ebda-7160-81ce-af158af27807', '019ddc5f-ecc4-739f-af88-2ff9adf17b7a', '019ddc5f-ee8b-707c-885d-bf20087e9f5c', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f20e-71e2-800c-278a5f921b00', NULL, 'Soorya Rajan', 2017, '019ddc5f-ebd1-71d7-88e1-4404dde05225', '019ddc5f-edae-70b9-803b-586d81ee21ff', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f211-70f7-9827-0e55ded661a2', NULL, 'Vandana Vinodh', 2017, NULL, '019ddc5f-ee04-73fb-9c89-707872d7f71d', '019ddc5f-ee88-70f6-ba1d-83dea2a684ee', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f213-72ee-a45e-bbb6fc678c16', NULL, 'Yadhu Krishna VS', 2017, '019ddc5f-ebe0-7114-a6ed-a77db8be42d6', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eeb2-73bc-8d32-a2744774a9aa', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f216-72be-874a-4cad3e5b3aea', NULL, 'Bibitha Jhonson', 2017, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ed28-71dc-9fbe-5692a0c05803', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f218-71fc-87e5-01ddc3f351df', NULL, 'Neethu Soman', 2017, '019ddc5f-ebae-7022-8238-aa839f0784d6', '019ddc5f-ee33-735b-ad94-6a7b30542c60', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f21b-7210-8f35-b83affa46714', NULL, 'Jishnu Raj', 2017, '019ddc5f-ec21-7001-88fa-5eacb359881f', '019ddc5f-edc0-72a8-a4c1-8190dcc81a65', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f21e-707f-ba29-918784beaa0c', NULL, 'Ramya M', 2017, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-ed50-7395-af3d-8397c417aca2', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f221-7083-bd3e-6ab3f7fdd691', NULL, 'Lekshmi K Rajan', 2017, '019ddc5f-ec2b-7252-8c68-2fb6934864d5', '019ddc5f-edde-710b-a519-469a8106545a', '019ddc5f-ee99-73bb-be0e-ddf6d45ffe8b', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f224-70f6-b1e5-61d11de700c6', NULL, 'Sneha Reesan', 2017, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ee1f-714e-9a6a-1df0ef7b76b0', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f226-7164-b263-2dbb80b656da', NULL, 'Sumitha PA', 2017, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ece9-719f-964e-01383a7313a1', '019ddc5f-ef19-724e-8e62-325b23d20c54', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f229-7396-a07b-7326eb6497d8', NULL, 'Athira V Murali', 2017, '019ddc5f-ebd8-71ff-8e9e-839a22ba6b72', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f22b-7243-af4c-b47bf126e498', NULL, 'Krishna Priya Manoj', 2017, '019ddc5f-ebbd-71e0-91cb-c948da95645a', '019ddc5f-ed30-71fc-ad84-33cc5c00d0a5', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f22e-707b-96b8-e9b9a4914d42', NULL, 'Vidya Rajeev', 2017, NULL, '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f231-71fc-bd89-1f57d8d4e43a', NULL, 'Arathi Ravi', 2017, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-ec6e-70d0-be23-15a2da99c792', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f234-728c-b55b-3112d1411f5b', NULL, 'Akshay Narayan', 2017, NULL, '019ddc5f-eca4-72dd-ac2e-b350cc5b75bd', '019ddc5f-eecf-72f3-a99c-4596de9d48c8', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f236-715c-bb82-ea1cbeac5898', NULL, 'Rahul E R', 2018, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ecb5-7290-898a-6cde9fec0494', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f238-70f5-b39e-f28961c2ad92', NULL, 'Remya Murukan', 2018, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ed82-704e-95a9-d595dfba2f3c', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f23b-72c1-b904-3752515923a2', NULL, 'Neethu Mohan', 2018, '019ddc5f-ebc1-722e-b317-2e97f2325450', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f23e-7198-8c70-3ef9e27ab8d6', NULL, 'Athira', 2018, '019ddc5f-ebc9-7373-a218-ce307c3f8608', '019ddc5f-ede0-73a2-99af-1805f5e43593', '019ddc5f-ee8f-704f-a105-b75ea1208bea', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f240-709c-890b-e72bc322c8a0', NULL, 'Swarna T S', 2018, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ee44-73dd-a396-7d591de2cbc3', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f243-72cd-af7f-73db3c16b5cb', NULL, 'Gayathri Satheesan', 2018, '019ddc5f-ebdc-7177-b025-106ff670b1d0', '019ddc5f-ed70-732f-ac92-387332032169', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f245-7283-a3da-55f15a2ebfde', NULL, 'Reshma R', 2018, '019ddc5f-ebc7-70ba-bc18-cfd4a558b971', '019ddc5f-eccf-705b-ad51-b1cb4a3ebc50', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f248-70b1-8c38-2dc3884304fe', NULL, 'Sooraj C S', 2018, '019ddc5f-ebec-714c-9d13-13416f9e32ef', '019ddc5f-ec6c-7109-9f9e-b2ca7474ac8b', '019ddc5f-eef9-7346-b984-7a4dee724174', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f24a-7347-8249-ffb3f0f3c94c', NULL, 'Devu K G', 2018, '019ddc5f-ebc1-722e-b317-2e97f2325450', '019ddc5f-ee30-7078-8111-96d66a2499e4', '019ddc5f-eeb0-7303-82cb-e4ac2825cf8e', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f24d-721b-a80d-fd0e33501b6f', NULL, 'Lakshmipriya Mohanan', 2018, '019ddc5f-ebfc-723c-8fed-b36d95ecf5e6', '019ddc5f-eca1-7120-b519-ecbd159e10e7', '019ddc5f-ee7e-719c-ac70-bb2afb0c3977', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f24f-7138-9f48-e6526f9257e8', NULL, 'Bibin Binoy', 2018, '019ddc5f-ebcb-7042-8489-2d7121bda025', '019ddc5f-ed8c-7287-a7c0-fb3ba68e129a', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f252-7333-9935-7364ae86279a', NULL, 'Reshma Ramesh', 2018, NULL, '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f254-71ed-8ba1-4e5f42d86db4', NULL, 'Krishnapriya T V', 2018, '019ddc5f-eb9d-70d5-96c8-3103c0271652', '019ddc5f-eda8-734c-9783-152efebb57b7', '019ddc5f-eeaa-73f9-9af6-8778fa7c268c', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f257-73b4-b91f-3878d014bdcd', NULL, 'Devika D', 2018, NULL, '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f259-7190-9e23-667b7483e0ff', NULL, 'Adheena Shiji', 2018, '019ddc5f-eb9d-70d5-96c8-3103c0271652', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f25d-729e-92df-435a05468e78', NULL, 'Muhsin P M', 2018, '019ddc5f-ebf0-725d-90ba-43b9ac7513fe', '019ddc5f-edc2-7176-b802-2b85395b1296', '019ddc5f-eef4-719d-81d6-8e2b1a60569c', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f25f-7188-8cb0-cb873b6924d9', NULL, 'Haritha Suresh', 2018, NULL, '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f262-7252-ad2c-5bacd24ee3f6', NULL, 'Sreekutty Santhosh', 2018, '019ddc5f-ebde-72aa-8f24-dd89dd1b4364', '019ddc5f-ee2e-72ff-a7e2-b11e49ae586b', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f265-7323-ab4b-ae2fd6159fb9', NULL, 'Aryamol E S', 2018, '019ddc5f-ebe0-7114-a6ed-a77db8be42d6', '019ddc5f-ed77-7369-bb62-2a7e11010e07', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f267-72d4-85b8-d7146c56cd5d', NULL, 'Sree Parvathy', 2018, NULL, '019ddc5f-ecac-7004-9e25-9c9d46874c18', '019ddc5f-eeee-734e-8b28-b90527def5d6', 5.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f26a-70ae-b0b1-827ec0f27eb4', NULL, 'Devika Rajesh', 2018, NULL, '019ddc5f-edc4-71c3-9f63-c778ed1d5e74', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f26d-72f6-bc29-4360ee798b29', NULL, 'Pallavi Kumari', 2019, '019ddc5f-ebb3-7295-9a0b-53e3aa3d8b0e', '019ddc5f-ec86-7053-948e-c71bf18bfb43', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f26f-731b-8383-6e78c5101ad3', NULL, 'Athira Chandran', 2019, '019ddc5f-ebac-7033-a7f2-e8f6e17a26c5', '019ddc5f-ece5-7304-a839-dc85c7528946', '019ddc5f-eea3-72cf-b312-e9589b1eb3c4', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f271-72e4-b3cc-537c6398fdc1', NULL, 'Rajalakshmi N', 2019, '019ddc5f-ebac-7033-a7f2-e8f6e17a26c5', '019ddc5f-edd2-72c3-84db-556d54785355', '019ddc5f-eebd-73cc-abd8-fd7a8e0aa57d', 4.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f274-7183-bbb8-8fdf42c4c2b6', NULL, 'Sharon Shaji', 2019, '019ddc5f-ebb1-73ff-8913-bf34bd13f427', '019ddc5f-ed09-7085-a255-4896894026f9', '019ddc5f-ef38-7178-9ce4-71356ae26e73', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f277-71e3-a2ef-79eb760d6278', NULL, 'Mary Rintu Sequira', 2019, '019ddc5f-ebe4-7018-8940-926be9a7e396', '019ddc5f-ee0b-70b0-be80-b52a4ddd8032', '019ddc5f-eee9-73c3-9e3a-1bc172a3550a', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f27a-734c-85cc-f256078c4608', NULL, 'Athira A S', 2019, '019ddc5f-ebb5-7217-8316-652835bf11e3', '019ddc5f-edb1-71a3-aa67-fa42f6aa0f76', '019ddc5f-eea3-72cf-b312-e9589b1eb3c4', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f27d-705a-b56a-037800a1a7b1', NULL, 'Haris M A', 2019, '019ddc5f-ebb3-7295-9a0b-53e3aa3d8b0e', '019ddc5f-ed4c-7395-b519-a31bee3ffe7b', '019ddc5f-eee7-70d6-acfc-e9b72397e5e5', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f281-72a1-9e1a-02d050daaac0', NULL, 'Sandra Santhosh', 2019, '019ddc5f-eba7-7126-9d91-2d4e1ffc74e8', '019ddc5f-edf5-713f-945f-f20bbcabd267', '019ddc5f-eec6-728f-9c1e-5e5a0205e025', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f284-737f-8474-c72a41bb6a2c', NULL, 'Ameesha Xavier', 2019, NULL, '019ddc5f-ecc8-7036-b0fa-969a1205d096', '019ddc5f-eef7-7194-b225-7ab183cb000d', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f287-71f0-9d1d-6edd4c2edd85', NULL, 'Darsana M', 2019, '019ddc5f-ebf2-7368-841d-f075f4e5af1e', '019ddc5f-edfb-71f4-af9b-2709cc9a510b', '019ddc5f-eef2-7311-add5-0948161572b7', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f289-73b8-a5a3-6223cea258db', NULL, 'Bhagyalakshmi', 2019, '019ddc5f-eba7-7126-9d91-2d4e1ffc74e8', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eea3-72cf-b312-e9589b1eb3c4', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f28c-7099-b0d9-6c08d1ddd5c5', NULL, 'Devika G Nair', 2019, '019ddc5f-ec2e-726f-8f57-4d49cf9ab4aa', '019ddc5f-edfb-71f4-af9b-2709cc9a510b', '019ddc5f-eea3-72cf-b312-e9589b1eb3c4', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f28e-702b-98a0-6892db750caa', NULL, 'Aswin Manoj', 2019, '019ddc5f-ec26-7174-b681-5962dab02bf2', '019ddc5f-ed8a-73ee-ae9f-186448d2b729', '019ddc5f-ee74-7068-b4fb-b2cd926a6e63', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f290-71a8-9f25-2d483217ebcc', NULL, 'Bavitha Lakshmi', 2019, '019ddc5f-ebf4-71e7-a69c-f0d7991e531b', '019ddc5f-edfb-71f4-af9b-2709cc9a510b', '019ddc5f-ee80-71e1-98f1-85c14cce75c6', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f292-72a6-8912-d477013718a5', NULL, 'Kavya Krishna', 2019, '019ddc5f-eba7-7126-9d91-2d4e1ffc74e8', '019ddc5f-ecb9-71bc-8257-4d2d22bfb286', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f295-70c9-86de-cf4b854941c1', NULL, 'Abhijith M S', 2019, '019ddc5f-ebf8-7335-a60a-a4054577d310', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee83-701d-a8e1-de886acee1ac', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f297-71d8-a6d7-bf5de877d414', NULL, 'Yadukrishnan C R', 2019, '019ddc5f-ebf6-70fe-87d6-1db483021f89', '019ddc5f-eca6-71d6-80cf-de6cda4b75b0', '019ddc5f-ee9e-70d1-ad0b-b4ec31e251bd', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f29a-710e-88f8-42d14a9a47ab', NULL, 'Anjali Sunil', 2019, '019ddc5f-ebf8-7335-a60a-a4054577d310', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-eecd-711c-ab71-639de58be6b8', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f29d-7384-ab0e-0c25c8acefe1', NULL, 'Meenu Jose', 2019, '019ddc5f-ec32-73ec-a6ef-50f03907c6ac', '019ddc5f-ed6e-72bb-bf4f-733bd6390e9f', '019ddc5f-ee93-722e-8db9-f7f28df1ea1f', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f2a1-7056-8c88-cb7a637ccc6a', NULL, 'Ananthakrishnan H', 2019, '019ddc5f-ec30-70b0-b7ae-83e21f473acc', '019ddc5f-ed65-7389-9434-39c899bd66d9', '019ddc5f-eeb9-7303-876a-16c878c54006', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL),
('019ddc5f-f2a4-73c7-bc84-126c87e7ac68', NULL, 'Anusha Shyju', 2019, '019ddc5f-ebf2-7368-841d-f075f4e5af1e', '019ddc5f-ee09-7276-8246-2922480f3e49', '019ddc5f-ee8f-704f-a105-b75ea1208bea', 3.00, NULL, 1, NULL, NULL, '2026-04-29 21:42:48', '2026-04-29 21:42:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trustees`
--

CREATE TABLE `trustees` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` enum('Male','Female','Other') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `whatsapp` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rank` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Trustee',
  `work` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trustees`
--

INSERT INTO `trustees` (`id`, `user_id`, `home_id`, `gender`, `mobile`, `whatsapp`, `rank`, `work`, `active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddc8e-3d73-70e2-ad0f-f4b4f7014ae2', '019ddbf8-dcd0-70ad-850b-b28f2bdd4b2f', '019ddbf8-db0c-7284-bd5d-f17d675ce9b1', 'Male', '9447025996', NULL, 'Chairman', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d7e-7013-b86e-ca7087a1ce38', '019ddbf8-de77-7210-ab41-5ad35a6fcd36', '019ddbf8-db1c-7174-b6d5-5a8ec1b7879f', 'Male', '9446842300', NULL, 'Vise Chairman', NULL, 0, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d82-70c6-9ec1-fde610dc80df', '019ddbf8-e023-71bf-a67f-f966bdcb6ad7', '019ddbf8-db0c-7284-bd5d-f17d675ce9b1', 'Male', '9446479439', NULL, 'Vise Chairman', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d87-7000-b006-295db27ccf2a', '019ddbf8-e1dc-73b7-9242-720ca27092de', '019ddbf8-db22-727e-914f-3e342dfbd138', 'Male', '9447375605', NULL, 'Executive Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d8b-7241-ab91-dc2e36581c4c', '019ddbf8-e390-724d-9bdc-135a3ad91ad7', '019ddbf8-db32-7058-a6d9-f8199e802a14', 'Male', '7708658828', NULL, 'Treasurer', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d8f-70c3-906c-25bbe70f6f39', '019ddbf8-e54c-722f-92b6-0b6d3f042459', NULL, 'Male', '9895713081', '9400578612', 'Trustee', NULL, 0, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d93-7246-b772-aed2528949f7', '019ddbf8-e704-72a4-98ac-7c312a354fca', '019ddbf8-db2c-7262-9109-5f70785eb22d', 'Female', '9446846651', NULL, 'Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d97-7291-a2aa-bf0efbd9f638', '019ddbf8-e898-70c5-b779-d59cecbfb40c', NULL, 'Male', NULL, NULL, 'Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d9b-7361-b713-1fffc040d6e1', '019ddbf8-ea39-7341-a6c7-0942d42f9880', '019ddbf8-db22-727e-914f-3e342dfbd138', 'Female', NULL, NULL, 'Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3d9e-70f6-b8b0-428bc962e034', '019ddbf8-ebf1-7165-984b-e74b0643171d', '019ddbf8-db0c-7284-bd5d-f17d675ce9b1', 'Female', '9446033069', NULL, 'Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3da2-728e-bff3-a5c5458c633f', '019ddbf8-edd2-73ff-866d-de53d029432b', '019ddbf8-db0c-7284-bd5d-f17d675ce9b1', 'Male', '9400143527', NULL, 'Trustee', 'IT', 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3da5-734f-b8c9-072f353fa170', '019ddbf8-ef5b-71d2-8862-f3cc39167c98', NULL, 'Male', '8547728803', NULL, 'Trustee', 'IT', 0, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3da9-7135-ab6b-3c40444f7a52', '019ddbf8-f0fe-73b3-844b-9f7c633c2cb2', '019ddbf8-db37-708d-bb79-e180e9cb3563', 'Male', '6282431543', NULL, 'Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL),
('019ddc8e-3dad-708c-af45-0ab9d7b8570b', '019ddbf8-f2b0-724c-8659-80ca342a272f', NULL, 'Male', NULL, NULL, 'Trustee', NULL, 1, '2026-04-29 22:33:22', '2026-04-29 22:33:22', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trustee_homes`
--

CREATE TABLE `trustee_homes` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `landline` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_1` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_2` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_3` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_4` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trustee_homes`
--

INSERT INTO `trustee_homes` (`id`, `name`, `landline`, `address_1`, `address_2`, `address_3`, `address_4`, `active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('019ddbf8-db0c-7284-bd5d-f17d675ce9b1', 'Thoppil', '04842783069', '25/247 - A, Thoppil House, Thathodath Lane,', 'Mekkara, Market Road,', 'Tripunithura - 682301', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL),
('019ddbf8-db1c-7174-b6d5-5a8ec1b7879f', 'Sreenilayam', NULL, 'Sreenilayam House,', 'Kavumpady,', 'Muvattupuzha - 686661', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL),
('019ddbf8-db22-727e-914f-3e342dfbd138', 'Palliparambil Krishna Vihar', NULL, 'Palliparambil Krishna Vihar,', 'Near Panchayath Office,', 'Ramammangalam - 686663', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL),
('019ddbf8-db27-71b4-ae59-c02ec8e0b8e5', 'North Thoppil', NULL, 'North Thoppil House, Thoppil Lane', 'Karikode, Thodupuzha EAST P.O.', 'PIN - 685585', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL),
('019ddbf8-db2c-7262-9109-5f70785eb22d', 'Sreelakshmi', NULL, 'Sreelakshmi,', 'Karikode,', 'Thodupuzha East - 685585', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL),
('019ddbf8-db32-7058-a6d9-f8199e802a14', 'Sasidharan K', NULL, 'Geetha Bahavan,', 'Vennala,', 'Kochi - 682028', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL),
('019ddbf8-db37-708d-bb79-e180e9cb3563', 'Krishna Vihar', NULL, 'Krishna Vihar', 'Kolenchery P.O., Ernakulam District,', 'Kerala - 682 311', NULL, 1, '2026-04-29 19:50:12', '2026-04-29 19:50:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `is_admin`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
('019ddbf8-dcd0-70ad-850b-b28f2bdd4b2f', 'Dr. Thampil Pankaj', 'dr.thampil.pankaj@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:13', '2026-04-29 22:30:01'),
('019ddbf8-de77-7210-ab41-5ad35a6fcd36', 'K S K Panicker', 'k.s.k.panicker@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:13', '2026-04-29 22:30:01'),
('019ddbf8-e023-71bf-a67f-f966bdcb6ad7', 'T P B Panicker', 't.p.b.panicker@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:13', '2026-04-29 22:30:01'),
('019ddbf8-e1dc-73b7-9242-720ca27092de', 'G Rajagopalan', 'g.rajagopalan@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:14', '2026-04-29 22:30:01'),
('019ddbf8-e390-724d-9bdc-135a3ad91ad7', 'Sasidharan K', 'sasidharan.k@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:14', '2026-04-29 22:30:01'),
('019ddbf8-e54c-722f-92b6-0b6d3f042459', 'M Rajagopalan', 'm.rajagopalan@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:15', '2026-04-29 22:30:01'),
('019ddbf8-e704-72a4-98ac-7c312a354fca', 'T R Ambika Devi', 't.r.ambika.devi@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:15', '2026-04-29 22:30:01'),
('019ddbf8-e898-70c5-b779-d59cecbfb40c', 'Ramesan T N', 'ramesan.t.n@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:16', '2026-04-29 22:30:01'),
('019ddbf8-ea39-7341-a6c7-0942d42f9880', 'K Sreelatha', 'k.sreelatha@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:16', '2026-04-29 22:30:01'),
('019ddbf8-ebf1-7165-984b-e74b0643171d', 'K Sreekumari', 'k.sreekumari@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:16', '2026-04-29 22:30:01'),
('019ddbf8-edd2-73ff-866d-de53d029432b', 'Jayakrishnan Thoppil', 'mail@iamjk.in', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:17', '2026-04-29 22:30:01'),
('019ddbf8-ef5b-71d2-8862-f3cc39167c98', 'R Sreeraj', 'r.sreeraj@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:17', '2026-04-29 22:30:01'),
('019ddbf8-f0fe-73b3-844b-9f7c633c2cb2', 'Ramesh S', 'ramesh.s@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:18', '2026-04-29 22:30:01'),
('019ddbf8-f2b0-724c-8659-80ca342a272f', 'R Sreedharan Nair', 'r.sreedharan.nair@pankajtrust.org', NULL, '$2y$12$Dw9coVPR4d7hY2yKyAnW3./VeQM1kqxzQxSlpzj8Y37Oeg2IxDoNK', 1, 'admin', NULL, '2026-04-29 19:50:18', '2026-04-29 22:30:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_settings`
--
ALTER TABLE `app_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `site_settings_key_unique` (`key`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donors`
--
ALTER TABLE `donors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `media_uuid_unique` (`uuid`),
  ADD KEY `media_model_type_model_id_index` (`model_type`,`model_id`),
  ADD KEY `media_order_column_index` (`order_column`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meetings_year_id_foreign` (`year_id`);

--
-- Indexes for table `meeting_user`
--
ALTER TABLE `meeting_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meeting_user_meeting_id_foreign` (`meeting_id`),
  ADD KEY `meeting_user_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_posts`
--
ALTER TABLE `news_posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `news_posts_slug_unique` (`slug`),
  ADD KEY `news_posts_author_id_foreign` (`author_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `ref_academic_years`
--
ALTER TABLE `ref_academic_years`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ref_academic_years_name_unique` (`name`);

--
-- Indexes for table `ref_areas`
--
ALTER TABLE `ref_areas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ref_areas_district_id_foreign` (`district_id`);

--
-- Indexes for table `ref_colleges`
--
ALTER TABLE `ref_colleges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ref_colleges_area_id_foreign` (`area_id`);

--
-- Indexes for table `ref_courses`
--
ALTER TABLE `ref_courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ref_districts`
--
ALTER TABLE `ref_districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ref_drinking_waters`
--
ALTER TABLE `ref_drinking_waters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ref_house_ownerships`
--
ALTER TABLE `ref_house_ownerships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ref_house_roofs`
--
ALTER TABLE `ref_house_roofs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ref_schools`
--
ALTER TABLE `ref_schools`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ref_schools_area_id_foreign` (`area_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `std_applications`
--
ALTER TABLE `std_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_applications_invite_id_foreign` (`invite_id`),
  ADD KEY `std_applications_preferred_college_id_foreign` (`preferred_college_id`),
  ADD KEY `std_applications_preferred_course_id_foreign` (`preferred_course_id`),
  ADD KEY `std_applications_ref_district_id_foreign` (`ref_district_id`),
  ADD KEY `std_applications_ref_area_id_foreign` (`ref_area_id`),
  ADD KEY `std_applications_ref_house_ownership_id_foreign` (`ref_house_ownership_id`),
  ADD KEY `std_applications_ref_house_roof_id_foreign` (`ref_house_roof_id`),
  ADD KEY `std_applications_ref_drinking_water_id_foreign` (`ref_drinking_water_id`);

--
-- Indexes for table `std_appl_achievements`
--
ALTER TABLE `std_appl_achievements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_appl_achievements_application_id_foreign` (`application_id`);

--
-- Indexes for table `std_appl_relatives`
--
ALTER TABLE `std_appl_relatives`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_appl_relatives_application_id_foreign` (`application_id`);

--
-- Indexes for table `std_appl_statuses`
--
ALTER TABLE `std_appl_statuses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_appl_statuses_application_id_foreign` (`application_id`);

--
-- Indexes for table `std_invites`
--
ALTER TABLE `std_invites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_invites_user_id_foreign` (`user_id`),
  ADD KEY `std_invites_ref_school_id_foreign` (`ref_school_id`),
  ADD KEY `std_invites_ref_academic_year_id_foreign` (`ref_academic_year_id`),
  ADD KEY `std_invites_referred_by_id_foreign` (`referred_by_id`);

--
-- Indexes for table `std_recipients`
--
ALTER TABLE `std_recipients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_recipients_application_id_foreign` (`application_id`),
  ADD KEY `std_recipients_ref_school_id_foreign` (`ref_school_id`),
  ADD KEY `std_recipients_ref_college_id_foreign` (`ref_college_id`),
  ADD KEY `std_recipients_ref_course_id_foreign` (`ref_course_id`);

--
-- Indexes for table `trustees`
--
ALTER TABLE `trustees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trustees_user_id_foreign` (`user_id`),
  ADD KEY `trustees_home_id_foreign` (`home_id`);

--
-- Indexes for table `trustee_homes`
--
ALTER TABLE `trustee_homes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_settings`
--
ALTER TABLE `app_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_year_id_foreign` FOREIGN KEY (`year_id`) REFERENCES `ref_academic_years` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `meeting_user`
--
ALTER TABLE `meeting_user`
  ADD CONSTRAINT `meeting_user_meeting_id_foreign` FOREIGN KEY (`meeting_id`) REFERENCES `meetings` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `meeting_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `news_posts`
--
ALTER TABLE `news_posts`
  ADD CONSTRAINT `news_posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `ref_areas`
--
ALTER TABLE `ref_areas`
  ADD CONSTRAINT `ref_areas_district_id_foreign` FOREIGN KEY (`district_id`) REFERENCES `ref_districts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `ref_colleges`
--
ALTER TABLE `ref_colleges`
  ADD CONSTRAINT `ref_colleges_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `ref_areas` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `ref_schools`
--
ALTER TABLE `ref_schools`
  ADD CONSTRAINT `ref_schools_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `ref_areas` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `std_applications`
--
ALTER TABLE `std_applications`
  ADD CONSTRAINT `std_applications_invite_id_foreign` FOREIGN KEY (`invite_id`) REFERENCES `std_invites` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `std_applications_preferred_college_id_foreign` FOREIGN KEY (`preferred_college_id`) REFERENCES `ref_colleges` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_applications_preferred_course_id_foreign` FOREIGN KEY (`preferred_course_id`) REFERENCES `ref_courses` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_applications_ref_area_id_foreign` FOREIGN KEY (`ref_area_id`) REFERENCES `ref_areas` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_applications_ref_district_id_foreign` FOREIGN KEY (`ref_district_id`) REFERENCES `ref_districts` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_applications_ref_drinking_water_id_foreign` FOREIGN KEY (`ref_drinking_water_id`) REFERENCES `ref_drinking_waters` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_applications_ref_house_ownership_id_foreign` FOREIGN KEY (`ref_house_ownership_id`) REFERENCES `ref_house_ownerships` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_applications_ref_house_roof_id_foreign` FOREIGN KEY (`ref_house_roof_id`) REFERENCES `ref_house_roofs` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `std_appl_achievements`
--
ALTER TABLE `std_appl_achievements`
  ADD CONSTRAINT `std_appl_achievements_application_id_foreign` FOREIGN KEY (`application_id`) REFERENCES `std_applications` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `std_appl_relatives`
--
ALTER TABLE `std_appl_relatives`
  ADD CONSTRAINT `std_appl_relatives_application_id_foreign` FOREIGN KEY (`application_id`) REFERENCES `std_applications` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `std_appl_statuses`
--
ALTER TABLE `std_appl_statuses`
  ADD CONSTRAINT `std_appl_statuses_application_id_foreign` FOREIGN KEY (`application_id`) REFERENCES `std_applications` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `std_invites`
--
ALTER TABLE `std_invites`
  ADD CONSTRAINT `std_invites_ref_academic_year_id_foreign` FOREIGN KEY (`ref_academic_year_id`) REFERENCES `ref_academic_years` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_invites_ref_school_id_foreign` FOREIGN KEY (`ref_school_id`) REFERENCES `ref_schools` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_invites_referred_by_id_foreign` FOREIGN KEY (`referred_by_id`) REFERENCES `trustees` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_invites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `std_recipients`
--
ALTER TABLE `std_recipients`
  ADD CONSTRAINT `std_recipients_application_id_foreign` FOREIGN KEY (`application_id`) REFERENCES `std_applications` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_recipients_ref_college_id_foreign` FOREIGN KEY (`ref_college_id`) REFERENCES `ref_colleges` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_recipients_ref_course_id_foreign` FOREIGN KEY (`ref_course_id`) REFERENCES `ref_courses` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `std_recipients_ref_school_id_foreign` FOREIGN KEY (`ref_school_id`) REFERENCES `ref_schools` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `trustees`
--
ALTER TABLE `trustees`
  ADD CONSTRAINT `trustees_home_id_foreign` FOREIGN KEY (`home_id`) REFERENCES `trustee_homes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `trustees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
