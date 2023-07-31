<?php 
 $host = "localhost";
 $user = "root";
 $password = "";
 $db = "museo";
 
 $conexion=mysqli_connect($host,$user,$password,$db);

 if($conexion){
    echo "Conexion exitosa";
 }else{
    echo mysqli_error($conexion);
 }

 mysqli_close($conexion);
?>