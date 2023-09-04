<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000'); // Cambiar esto según la URL de React
header('Access-Control-Allow-Methods: GET, POST , PUT , DELETE'); // Cambiar esto según los métodos a permitir
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With, Accept');
header('Access-Control-Allow-Credentials: true');




$servername = "localhost";
$username = "root";
$password = "";
$dbname = "museo";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}



// Manejar solicitud POST para crear un nuevo registro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if($data){
        $id=$data->id;
        $nit=$data->nit;
        $nombre=$data->nombre;
        $telefono=$data->telefono;
        $cantidad=$data->cantidad;
        $correo=$data->correo;
        $fecha=$data->fecha;
        $total=$data->total;
        $create_at=date("Y-m-d");
    
        // Realizar la validación de los datos antes de insertar en la base de datos
    
        $sql = "INSERT INTO registro (`id`, `nit`, `nombre`, `telefono`, `cantidad`, `correo`, `fecha`, `total`, `create_at`) VALUES ('$id','$nit','$nombre','$telefono', '$cantidad','$correo', '$fecha', '$total', '$create_at')";
        $result = $conn->query($sql);
       
    
        if($result){
            echo json_encode(["message" => "Registro actualizado exitosamente"]);
        }else{
            echo json_encode(["error" => "Registro no actualizado con error"]);
        }
        $stmt->close();
        
    }else{

    }
}

// Manejar solicitud PUT para modificar un registro
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));
    if($data){
        $id=$data->id;
        $nit=$data->nit;
        $nombre=$data->nombre;
        $telefono=$data->telefono;
        $cantidad=$data->cantidad;
        $correo=$data->correo;
        $fecha=$data->fecha;
        $total=$data->total;
        $create_at=date("Y-m-d");
    
        // Realizar la validación de los datos antes de insertar en la base de datos
    
        $sql = "UPDATE `registro` SET `id`='$id',`nit`='$nit',`nombre`='$nombre',`telefono`='$telefono',`cantidad`='$cantidad',`correo`='$correo',`fecha`='$fecha',`total`='$total',`create_at`='$create_at' WHERE id='$id'";
        $result = $conn->query($sql);
       
    
        if($result){
            echo json_encode(["message" => "Registro creado exitosamente"]);
        }else{
            echo json_encode(["error" => "Registro con error"]);
        }
     
        
    }else{

    }
}

// Manejar solicitud DELETE para obtener eliminar un registro
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM registro ORDER BY id DESC";
    $result = $conn->query($sql);
    $rows = [];

    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    echo json_encode($rows);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
 
    $id=$_GET['id'];
    if(!empty($_GET['id'])){
    
        // Consulta Delete
    
        $sql = "DELETE FROM `registro` WHERE id='$id'";
        $result = $conn->query($sql);
       
    
        if($result){
            echo json_encode(["message" => "Registro eliminado"]);
        }else{
            echo json_encode(["error" => "Registro no eliminado con error"]);
        }
      
        
    }else{
        echo json_encode(["error" => "Id no valido" ]);
    }
}

// Añadir código similar para manejar solicitudes PUT (actualización) y DELETE (borrado)
$conn->close();

?>


