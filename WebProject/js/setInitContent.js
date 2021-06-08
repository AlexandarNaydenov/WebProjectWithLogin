function initContent(){

    changeAdminAccess();

    fetch('http://localhost/WebProject/php/getRecords.php')
        .then(response => response.json())
        .then(function(data) {
            var currDate = "0000-00-00";
            data.forEach(element => {
                if(currDate.localeCompare(element.record_date)){
                    currDate = element.record_date;
                    var btn = document.createElement("BUTTON");
                    btn.innerHTML = element.record_date.toString();
                    btn.setAttribute("id",element.record_date.toString());
					btn.setAttribute("class","dateOptions");
                    btn.addEventListener("click", function (){
                        document.getElementById("records").innerHTML = "";
                        getRecordsByDate(element.record_date.toString());
                    });
                    document.getElementById("buttons").appendChild(btn);
                }
            })
        }).catch(function(error) {
        console.log('Request failed', error);
    })
}
