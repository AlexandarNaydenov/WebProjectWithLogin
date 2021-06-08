<?php
require_once("./db.php");

function updateHours(string $id_par,string $new_starting_time_par,string $new_ending_time_par){
    try{
        $dataBase = new DataBase();
        $connection = $dataBase->getConnection();
        $newRecord = "UPDATE record
        SET record_starting_time = '$new_starting_time_par',record_ending_time = '$new_ending_time_par'
        WHERE id = '$id_par'";
        $stmt = $connection->prepare($newRecord);
        $stmt->execute();

    } catch (PDOException $exception){
        echo $exception->getMessage();
    }

}

updateHours($_POST['id'],$_POST['new_starting_time'],$_POST['new_ending_time']);

?>
