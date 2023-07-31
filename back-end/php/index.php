<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "museo";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);




//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nit=$data->nit;
    $nombre=$data->nombre;
    $telefono=$data->telefono;
    $correo=$data->correo;
    $cantidad=$data->cantidad;
    $fecha=$data->fecha;
    $fechaAct=date("d-m-Y");
    $total=$cantidad;

            
     $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO registro VALUES('','$nit','$nombre','$telefono','$cantidad','$correo','$fecha','$total','$fechaAct') ");
     echo json_encode([$data]);


    exit();
}else{
    echo json_encode(["failed"=>1]);
}
?>