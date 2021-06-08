<?php
require_once("./db.php");

function addNotesAndGrade(string $id_par,string $notes_par,string $grade_par){
    try{
        $dataBase = new DataBase();
        $connection = $dataBase->getConnection();
        $newRecord = "UPDATE record
        SET lector_notes = '$notes_par',lector_grade = '$grade_par'
        WHERE id = '$id_par'";
        $stmt = $connection->prepare($newRecord);
        $stmt->execute();

    } catch (PDOException $exception){
        echo $exception->getMessage();
    }

}

addNotesAndGrade($_POST['id'],$_POST['notes'],$_POST['grade']);

?>
