
function getRecordsByDate(date){
    fetch('http://localhost/WebProjectFinal/WebProject/php/getRecords.php')
        .then(response => response.json())
        .then(function(data) {
            setRecordsInHTML(data, date);
        }).catch(function(error) {
        console.log('Request failed', error);
    })
}

function setRecordsInHTML(records, currDate) {
    records.forEach(record => {
        if(record.record_date === currDate){

            let docElement = document.getElementById("records");

            if(!(record.is_break).localeCompare("0")) {
                let btn = document.createElement("BUTTON");
                btn.innerHTML = record.record_starting_time + " - "+record.record_ending_time;
				btn.setAttribute("class","recordBtn");
                if(record.student_name.localeCompare("")){
                    btn.innerHTML = btn.innerHTML+" | "+record.student_name+", "+record.student_fn+", "+record.presentation_topic;
					btn.setAttribute("class","recordBtnTaken");
                }
                btn.setAttribute("id","BtnID"+parseInt(record.id));
                btn.addEventListener("click", function (){
                    openModalForm(btn.id);
                });
                docElement.appendChild(btn);

                //Lector Button
                let lectorButton = document.createElement("BUTTON");
                lectorButton.innerHTML = "Оцени";
                lectorButton.setAttribute("id","LectorBtn"+parseInt(record.id));
				lectorButton.setAttribute("class","rate");
				if(!checkAdminAccess()){
				    lectorButton.style.visibility = 'hidden';
                }
                lectorButton.addEventListener("click", function (){
                    addNotesAndGrades(record.id);
                });
                docElement.appendChild(lectorButton);

                //Remove record button
                let removeRecordButton = document.createElement("BUTTON");
                removeRecordButton.innerHTML = "Премахни";
                removeRecordButton.setAttribute("id","Remove"+parseInt(record.id));
                removeRecordButton.setAttribute("class","rate");
                if(!checkAdminAccess()){
                    removeRecordButton.style.visibility = 'hidden';
                }
                removeRecordButton.addEventListener("click", function (){
                    changeTimes(record.id);
                });
                docElement.appendChild(removeRecordButton);
            }else{
                let para = document.createElement("p");
                let node = document.createTextNode("Почивка");
				para.setAttribute("class","break");
                para.appendChild(node);
                let docElement = document.getElementById("records");
                docElement.appendChild(para);
            }}
    });
}
