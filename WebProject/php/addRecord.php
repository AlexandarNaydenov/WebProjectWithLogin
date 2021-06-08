<?php
require_once("./db.php");

function addRecord(string $record_date_par,string $record_starting_time_par, string $record_ending_time_par,string $information_id_par){
    try{
        $dataBase = new DataBase();
        $connection = $dataBase->getConnection();
        $newRecord = "INSERT INTO record(record_date,record_starting_time,record_ending_time,is_break) values ('$record_date_par','$record_starting_time_par','$record_ending_time_par','$information_id_par')";
        $stmt = $connection->prepare($newRecord);
        $stmt->execute();

    } catch (PDOException $exception){
        echo $exception->getMessage();
    }

}

addRecord($_POST['date'],$_POST['startingTime'],$_POST['endingTime'],$_POST['information']);

?>
