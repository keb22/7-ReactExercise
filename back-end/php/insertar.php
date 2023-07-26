<?php

include("./conexion.php");

$Nit=$_POST['Nit'];
$Telefono=$_POST['Telefono'];
$Nombre=$_POST['Nombre'];
$Correo=$_POST['Correo'];
$Cantidad=$_POST['Cantidad'];
$Fecha=$_POST['Fecha'];
$Total=$Cantidad*10000;
$FechaActual= date("d-m-Y");

$sql="INSERT INTO registros VALUES ('','$Nit','$Nombre','$Telefono','$Cantidad','$Correo','$Fecha','$Total')";
$consulta= mysqli_query($conexion,$sql);

if($consulta){
    echo "Conexión y registro exitoso";
}else{
    echo "Conexión Fallida".mysqli_error($sql);
}
?>