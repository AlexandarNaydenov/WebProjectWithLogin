<?php

    class DataBase {

        private $connection;

        function __construct() {
            $host = "localhost";
            $dbname = "scheduale";
            $username = "root";
            $password = "";

            $dsn = "mysql:host=$host;dbname=$dbname";

            $this->connection = new PDO($dsn, $username, $password);
        }

        function getConnection() {
            return $this->connection;
        }

    }

?>