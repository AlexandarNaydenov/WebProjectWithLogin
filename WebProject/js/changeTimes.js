function changeTimes(){
    var date = document.getElementById("date1").value;
    var hour = document.getElementById("hour").value;
	var timeArr=hour.toString().split(":");
    fetch('http://localhost/WebProjectFinal/WebProject/php/getRecords.php')
	.then(response => response.json())
	.then(function(data) {
		for (const element of data) {
			var timeArrStart=element.record_starting_time.toString().split(":");
			var timeArrEnd=element.record_ending_time.toString().split(":");
			let duration = (parseInt(timeArrEnd[0])*60+parseInt(timeArrEnd[1])) - (parseInt(timeArrStart[0])*60+parseInt(timeArrStart[1]));
			if(!element.record_date.toString().localeCompare(date.toString()) ){
				if(parseInt(timeArr[0]) === parseInt(timeArrStart[0])){
					if(parseInt(timeArr[1]) < parseInt(timeArrStart[1])){
						//var answer = changeHours(element.record_starting_time, element.record_ending_time, duration);
						alert("Hello");
					}
					} else if(parseInt(timeArr[0]) < parseInt(timeArrStart[0])){
					alert("Hello");
				}
			}
		}
	}
	)
	.catch(function(error) {
		console.log('Request failed', error);
	})
	
}

function changeHours(startingTime, endingTime, interval){
	startingTime = endingTime;
	var startArr=startingTime.toString().split(":");
	var first=parseInt(60)-parseInt(startArr[1]);
	if ( parseInt(first) > parseInt(interval)){
		startArr[1]=parseInt(startArr[1])+parseInt(interval);
	}
	else {
		startArr[0]=parseInt(startArr[0])+parseInt(1);
		startArr[1]=parseInt(startArr[1])+parseInt(interval)-parseInt(60);
	}

	endingTime=timeArr[0]+ ":"+timeArr[1]+":00";

	return startingTime+"/"+endingTime;
}