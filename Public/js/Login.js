function un(){
    var un = document.getElementById("ID").value;
    if(un.includes('B181210050@sakarya.edu.tr')){
        return true;
    }
    else{
        return false;
    }
}
function pass(){
    var pass = document.getElementById("Password").value;
    if(pass.includes('123456')){
        return true;
    }
    else{
        return false;
    }
}
function Submit() {
    if(un()&&pass()){
        return true;
    }
    else {
        alert("Giriş Başarısız");
        return false;
    }
}
