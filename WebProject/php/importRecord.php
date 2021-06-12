<?php
require_once("./db.php");

function importRecord(string $record_date_par, string $record_starting_time_par, string $record_ending_time_par, string $is_break_par, string $student_name_par, string $student_fn_par, string $presentation_topic_par, string $presentation_category_par, string $password_par, string $lector_notes_par, string $lector_grade_par){
    try{
        $dataBase = new DataBase();
        $connection = $dataBase->getConnection();
        $newRecord = "INSERT INTO record(record_date,record_starting_time,record_ending_time,is_break,student_name,student_fn,presentation_topic,presentation_category,password,lector_notes,lector_grade) 
        values ('$record_date_par','$record_starting_time_par','$record_ending_time_par','$is_break_par','$student_name_par','$student_fn_par','$presentation_topic_par','$presentation_category_par','$password_par','$lector_notes_par','$lector_grade_par')";
        $stmt = $connection->prepare($newRecord);
        $stmt->execute();

    } catch (PDOException $exception){
        echo $exception->getMessage();
    }

}

importRecord($_POST['date'],$_POST['startingTime'],$_POST['endingTime'],$_POST['is_break'],$_POST['student_name'],$_POST['student_fn'],$_POST['presentation_topic'],$_POST['presentation_category'],$_POST['password'],$_POST['lector_notes'],$_POST['lector_grade']);

?>
