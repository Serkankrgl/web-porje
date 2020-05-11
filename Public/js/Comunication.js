function CheckName() {
    var Name = document.getElementById("Name").value;
    if(Name!=''&&Name.length>=3) {
        return true;
    }
    else{
        document.getElementById("Name").value='';
        document.getElementById('Name').placeholder = 'İsim Alanını Boş Bırakmayınız!';
        return false;
        
    }
}

function CheckSurname() {
    var Surname = document.getElementById("Surname").value;
    if(Surname!=''&&Surname.length>=3) {
        Surname='';
        return true;
    }
    else{
        document.getElementById('Surname').placeholder = 'Soyisim Alanını Boş Bırakmayınız!';
        return false;
    }
}

function CheckEmail() {
    var Email = document.getElementById("E-mail").value;
    
    if(Email.includes('@')&& Email.includes('.com')&&Email!='') {
        return true;
    }
    else{
        Email='';
        document.getElementById('E-mail').placeholder = 'Mail Adresinizi Düzgün Giriniz!'
        return false;
    }
}


function CheckMessage() {
    var Message = document.getElementById("Message").value;
    if(Message.length >= 10 && Message != ''){
        return true;
    }
    else{
        Message="";
        document.getElementById('Message').placeholder="Lütfen Mesajınızı Düzeltiniz!"
        return false;
    }
}
function CheckGender(){
    if(Gender!=""){
        return true;
    }
    else{
        return false;
    }
}
function CheckWays(){
        var Ways = document.querySelectorAll("#ways");
        if(Ways[0].checked!=false
            ||Ways[1].checked!=false
            ||Ways[2].checked!=false
            ||Ways[3].checked!=false){
            return true
        }
        else{
            return false;
        }

}

function clickEvent() {
        if(CheckName() &&CheckSurname()&& CheckEmail() && CheckMessage()&&CheckWays() ){
        
            return true;
        }
        else {
            alert("Başarısız");
            return false;
        }
}