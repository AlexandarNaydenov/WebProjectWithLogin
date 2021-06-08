let adminAccess = false;

function addAdminAccess(){
    window.open("http://localhost/WebProjectFinal/WebProject/php/login.php");
}

function changeAdminAccess(){
    if(checkAdminAccess()){
        adminAccess = true;
        displayAdminElements();
    }
}

function checkAdminAccess(){
    return window.location.href.includes("admin");
}

function displayAdminElements(){
    var lectorButtons = document.getElementsByClassName("rate");
    for(var i=0;i<lectorButtons.length;i++){
        lectorButtons[i].style.visibility = 'visible';
    }
}
