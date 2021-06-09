function changeTimes(id){
	fetch('http://localhost/WebProjectFinal/WebProject/php/getRecords.php')
		.then(response => response.json())
		.then(function(data) {
			let startingTime, endingTime, date;
			data.forEach(element => {
				if(element.id === id){
					date = element.record_date;
					startingTime = element.record_starting_time;
					endingTime = element.record_ending_time;
					deleteRecord(id);
				}else{
					if(date !== undefined)
					if(date.toString().localeCompare(element.record_date) === 0){
						updateTime(element.id,startingTime, endingTime);
						startingTime = element.record_starting_time;
						endingTime = element.record_ending_time;
					}
				}
			})
			document.getElementById(date).click();
		}).catch(function(error) {
		console.log('Request failed', error);
	})
}

function updateTime(id, startingTime, endingTime){
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "../WebProject/php/updateHours.php",false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("&id="+id+"&new_starting_time="+startingTime+"&new_ending_time="+endingTime);
}

function deleteRecord(id){
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "../WebProject/php/deleteRecord.php",false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("&id="+id);
}

