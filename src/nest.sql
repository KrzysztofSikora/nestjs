-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Lis 16, 2023 at 08:52 PM
-- Wersja serwera: 8.0.20
-- Wersja PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nest`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Matches`
--

CREATE TABLE `Matches` (
  `id` int NOT NULL,
  `place` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Matches`
--

INSERT INTO `Matches` (`id`, `place`, `date`, `createdAt`, `updatedAt`) VALUES
(1, 'Krakow', '2023-11-16 12:37:10', '2023-11-16 19:37:10', '2023-11-16 19:37:10'),
(2, 'Warszawa', '2023-11-23 09:37:45', '2023-11-16 19:37:45', '2023-11-16 19:37:45'),
(3, 'Gdynia', '2023-11-21 09:38:07', '2023-11-16 19:38:07', '2023-11-16 19:38:07');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `MatchTeams`
--

CREATE TABLE `MatchTeams` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `matchId` int NOT NULL,
  `teamId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `MatchTeams`
--

INSERT INTO `MatchTeams` (`createdAt`, `updatedAt`, `matchId`, `teamId`) VALUES
('2023-11-16 19:38:46', '2023-11-16 19:38:46', 1, 3),
('2023-11-16 19:38:54', '2023-11-16 19:38:54', 2, 2),
('2023-11-16 19:38:30', '2023-11-16 19:38:30', 3, 1),
('2023-11-16 19:38:39', '2023-11-16 19:38:39', 3, 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Players`
--

CREATE TABLE `Players` (
  `id` int NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `teamId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Players`
--

INSERT INTO `Players` (`id`, `firstName`, `lastName`, `number`, `teamId`, `createdAt`, `updatedAt`) VALUES
(1, 'Jan', 'Kowalski', 11, 2, '2023-11-16 19:34:22', '2023-11-16 19:34:22'),
(2, 'Czesiek', 'Tester', 12, 3, '2023-11-16 19:34:43', '2023-11-16 19:34:43'),
(3, 'Waldek', 'TestowyDrugi', 33, 1, '2023-11-16 19:35:11', '2023-11-16 19:35:11'),
(4, 'Arek', 'Nietester', 4, 2, '2023-11-16 19:35:39', '2023-11-16 19:35:39');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Teams`
--

CREATE TABLE `Teams` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Teams`
--

INSERT INTO `Teams` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Zieloni', '2023-11-16 19:33:15', '2023-11-16 19:33:15'),
(2, 'Niebiescy', '2023-11-16 19:33:29', '2023-11-16 19:33:29'),
(3, 'Czerwoni', '2023-11-16 19:33:45', '2023-11-16 19:33:45');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `Matches`
--
ALTER TABLE `Matches`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `MatchTeams`
--
ALTER TABLE `MatchTeams`
  ADD PRIMARY KEY (`matchId`,`teamId`),
  ADD KEY `teamId` (`teamId`);

--
-- Indeksy dla tabeli `Players`
--
ALTER TABLE `Players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teamId` (`teamId`);

--
-- Indeksy dla tabeli `Teams`
--
ALTER TABLE `Teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Players`
--
ALTER TABLE `Players`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `MatchTeams`
--
ALTER TABLE `MatchTeams`
  ADD CONSTRAINT `MatchTeams_ibfk_1` FOREIGN KEY (`matchId`) REFERENCES `Teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `MatchTeams_ibfk_2` FOREIGN KEY (`teamId`) REFERENCES `Matches` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Players`
--
ALTER TABLE `Players`
  ADD CONSTRAINT `Players_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `Teams` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
