<?php

if($_POST['send']){
    
    $Name = $_POST["name"];
    $Surname = $_POST["surname"];
    $Email = $_POST["e-mail"];
    $Hometown = $_POST["hometown"];
    $Gender = $_POST["Gender"];
    $Ways = $_POST["ways"];
    $Message = $_POST["message"];
    $Send = $_POST["send"];

    
        header("Comunication.php");
        echo "Ad Soyad : $Name $Surname <br>";
        echo "E-Mail : $Email <br>";
        echo "Şehir : $Hometown <br>";
        echo "Cinsiyet : $Gender <br>";
        echo "Sitemi Nasıl Buldun? : ";
        foreach ($Ways as $key => $value) {
            echo "$value , ";
        }
        echo "<br>Mesaj : $Message";
        }

else{
    header("Location:../../src/Comunication.html");
}
?>