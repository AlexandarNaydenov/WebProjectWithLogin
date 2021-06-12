function exportRecordsIntoCSV(){
    fetch('http://localhost/WebProjectFinal/WebProject/php/getRecords.php')
        .then(response => response.json())
        .then(data => downloadRecords(data))
        .catch(function(error) {
        console.log('Request failed', error);
    })
}

function downloadRecords(records){

    let csvContent = "data:text/csv;charset=utf-8,";

    records.forEach(function (element){
        let row = element.id + ";" + element.record_date + ";" + element.record_starting_time + ";" +element.record_ending_time + ";" +element.is_break + ";" +element.student_name + ";" +element.student_fn + ";" +element.presentation_topic + ";" +element.presentation_category + ";" +element.password + ";" +element.lector_notes + ";" +element.lector_grade;
        csvContent += row + "\r\n";
    })

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "records.csv");
    document.body.appendChild(link);

    link.click();
}