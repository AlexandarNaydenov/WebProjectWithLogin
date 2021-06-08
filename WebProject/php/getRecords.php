<?php
try {
    require_once("./db.php");
    $dataBase = new DataBase();
    $connection = $dataBase->getConnection();
    $sql = "SELECT * FROM `record`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        $data_array[]=$row;
    }
    echo(json_encode($data_array));
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>