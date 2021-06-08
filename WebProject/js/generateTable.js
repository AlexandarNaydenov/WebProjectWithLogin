
function generateTable(){

    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var count = document.getElementById("count").value;
    var interval = document.getElementById("interval").value;
    var breaks = document.getElementById("breaks").value;
    var end=time;
    var start;
    var peoplesBeforeBreak=Math.round(count/(parseInt(breaks)+parseInt(1)));
    var stop=parseInt(count)+parseInt(breaks);
    var oldInterval=interval;
    var breaksCounter=0;
    var information=0;
    for(var i=1; i<=stop;i++){
        start=end;
        if(i%parseInt(parseInt(peoplesBeforeBreak)+parseInt(1)) === 0 && breaksCounter < breaks){
            interval=parseInt(15);
            breaksCounter++;
            information=parseInt(1);
        } else {
            interval=parseInt(oldInterval);
            information=0;
        }
        var timeArr=start.toString().split(":");
        var first=parseInt(60)-parseInt(timeArr[1]);
        if ( parseInt(first) > parseInt(interval)){
            timeArr[1]=parseInt(timeArr[1])+parseInt(interval);
        }
        else {
            timeArr[0]=parseInt(timeArr[0])+parseInt(1);
            timeArr[1]=parseInt(timeArr[1])+parseInt(interval)-parseInt(60);
        }
        end=timeArr[0]+ ":"+timeArr[1]+":00";
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "../WebProject/php/addRecord.php",false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("&date="+date+"&startingTime="+start+"&endingTime="+end+"&information="+information);
    }
    reloadDates();
}

function reloadDates(){
    document.getElementById("buttons").remove();
    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id","buttons");
    document.getElementById("dateButtonsContainer").appendChild(buttonsDiv);
    initContent();
    document.getElementById("generate_table_form").reset();
}
