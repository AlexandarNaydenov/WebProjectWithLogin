
function openModalForm(id){
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
    var btn = document.getElementById(id);

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

    modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("modal_form").reset();
        document.getElementById("modal_form").removeChild(button);
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.getElementById("modal_form").reset();
            document.getElementById("modal_form").removeChild(button);
        }
    }

    var button = document.createElement("INPUT");
    button.setAttribute("type","submit");
	button.innerHTML = "Запиши";
    button.setAttribute("id","Save"+id);
    var form = document.getElementById("modal_form");
    form.addEventListener("submit", function () {
        var recordID = button.id.toString().substring(9);
        insertInformationIntoRecord(recordID);
        form.removeChild(button);
        form.reset();
        modal.style.display = "none";
    });
    form.appendChild(button);
}

function insertInformationIntoRecord(recordID){
    var name = document.getElementById("name").value;
    var fn = document.getElementById("fn").value;
    var topic = document.getElementById("topic").value;
    var category = document.getElementById("category").value;
    var password = document.getElementById("pass").value;


    var currPassword;
    fetch('http://localhost/WebProject/php/getRecords.php')
        .then(response => response.json())
        .then(function(data) {
            data.forEach(element => {
                if(!element.id.localeCompare(recordID)){
                    currPassword = element.password.toString();
                    if(!currPassword.localeCompare(password) || !currPassword.localeCompare("")){
                        const xhr = new XMLHttpRequest();
                        xhr.open("POST", "./php/addInformation.php",false);
                        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr.send("&id="+recordID+"&name="+name+"&fn="+fn+"&topic="+topic+"&category="+category+"&password="+password);
                        document.getElementById(element.record_date.toString()).click();
                    }else{
                        alert("Wrong password!");
                    }
                }
            })
        })
        .catch(function(error) {
            console.log('Request failed', error);
        })

}