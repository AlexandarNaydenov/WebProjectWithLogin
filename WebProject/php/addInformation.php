<?php
require_once("./db.php");

function addInformation(string $id_par,string $student_name_par, string $student_fn_par, string $presentation_topic_par, string $presentation_category_par, string $password_par){
    try{
        $dataBase = new DataBase();
        $connection = $dataBase->getConnection();
        //$newRecord = "INSERT INTO record(student_name,student_fn,presentation_topic,presentation_category,presentation_description) values ('$student_name_par','$student_fn_par','$presentation_topic_par','$presentation_category_par','$presentation_description_par')";
        $newRecord = "UPDATE record
        SET student_name = '$student_name_par',student_fn = '$student_fn_par',presentation_topic='$presentation_topic_par',presentation_category='$presentation_category_par',password='$password_par'
        WHERE id = '$id_par'";
        $stmt = $connection->prepare($newRecord);
        $stmt->execute();

    } catch (PDOException $exception){
        echo $exception->getMessage();
    }

}

addInformation($_POST['id'],$_POST['name'],$_POST['fn'],$_POST['topic'],$_POST['category'],$_POST['password']);

?>
