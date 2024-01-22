<?php

if(isset($_GET["response"])){
    $header = "From:tosinbetz@gmail.com \r\n"; 
    $header .= "Cc:tosinbetz@gmail.com \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n"; 

    mail("axele1524@gmail.com", "Respuesta Propuesta", "<b>".$_GET["response"]."</b>",$header);
}