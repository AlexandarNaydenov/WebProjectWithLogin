var currRecordID;
var interval;

function addNotesAndGrades(recordID){
    document.getElementById("myForm").style.display = "block";
    currRecordID = recordID;
}

function closeFormButton(){
    document.getElementById("form-container").reset();
    document.getElementById("myForm").style.display = "none";

}

function saveNotesAndGrades(){
    var notes = document.getElementById("notes").value;
    var grade = document.getElementById("grade").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../WebProject/php/addNotesAndGrade.php",false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("&id="+currRecordID+"&notes="+notes+"&grade="+grade);

    document.getElementById("form-container").reset();
    document.getElementById("myForm").style.display = "none";
}

function startTimer() {

    var duration;
	clearInterval(interval);
    fetch('http://localhost/WebProjectFinal/WebProject/php/getRecords.php')
        .then(response => response.json())
        .then(function(data) {
            data.forEach(element => {
                if(element.id === currRecordID){
                    var s = element.record_starting_time.split(':');
                    var e = element.record_ending_time.split(':');

                    var end = parseInt(e[0])* 60+ parseInt(e[1]);
                    var start = parseInt(s[0])*60 + parseInt(s[1]);

                    duration = (end - start)*1;
                }
            })
        }).then(function (){
            var timer = duration, minutes, seconds;
             interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.querySelector("#clockTime").textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                errorMessage("Времето изтече!");
            }
        }, 1000);
    }).catch(function(error) {
        console.log('Request failed', error);
    })
}

function errorMessage(message){
    let container = document.getElementById("outOfTime-container");
    let button = document.createElement("button");
    button.setAttribute("onclick","removeTimeUpAlert()");
    button.setAttribute("id","removeTimeUpAlertButton");
    button.innerHTML="Ok";
    let box = document.createElement("div");
    box.setAttribute("id","outOfTime-box");
    let para = document.createElement("p");
    para.innerHTML=message;
    container.appendChild(box);
    box.appendChild(para);
    box.appendChild(button);
}

function removeTimeUpAlert(){
    document.getElementById("outOfTime-container").innerHTML="";
}

function endTimer(){
    clearInterval(interval);
    document.querySelector("#clockTime").textContent = "00:00";
}
