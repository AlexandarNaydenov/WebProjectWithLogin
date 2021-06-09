<?php
require_once("./db.php");

function deleteRecord(string $id_par){
    try{
        $dataBase = new DataBase();
        $connection = $dataBase->getConnection();
        $newRecord = "DELETE FROM record WHERE id = '$id_par'";
        $stmt = $connection->prepare($newRecord);
        $stmt->execute();

    } catch (PDOException $exception){
        echo $exception->getMessage();
    }

}

deleteRecord($_POST['id']);

?>
