<?php
include('conexao.php');

$user = json_decode(file_get_contents('php://input'), true);

$email = $user["email"];
$senha = $user["senha"];

$verificar = "SELECT * FROM cadastros WHERE email = '$email' and senha = '$senha' ";
$verificando_query = mysqli_query($connect, $verificar);

$resultado = mysql_num_rows($verificar);


?>