function importFromCSV(){
    fetch("../WebProject/files/records.csv")
        .then(response => response.text())
        .then(data => processData(data))
}

function processData(data){
    let array = data.toString().split("\r\n");
    for(let i=0;i<array.length-1;i++){
        let row = array[i].toString().split(";");
        let date = row[1];
        let startingTime = row[2];
        let endingTime = row[3];
        let is_break = row[4]
        let student_name = row[5];
        let student_fn = row[6];
        let presentation_topic = row[7];
        let presentation_category = row[8]
        let password = row[9]
        let lector_notes = row[10];
        let lector_grade = row[11];

        console.log(row);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "../WebProject/php/importRecord.php", false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("&date=" + date + "&startingTime=" + startingTime + "&endingTime=" + endingTime + "&is_break=" + is_break + "&student_name=" + student_name
            + "&student_fn=" + student_fn + "&presentation_topic=" + presentation_topic + "&presentation_category=" + presentation_category + "&password=" + password + "&lector_notes=" + lector_notes + "&lector_grade=" + lector_grade);
    }
}