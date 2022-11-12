<?php
    include "conexao.php";

    $user = json_decode(file_get_contents('php://input'), true);

    $nome = $user["nome"];
    $email = $user["email"];
    $senha = $user["senha"];

    $recebendo_cadastro = "INSERT INTO cadastros VALUES (NULL, '$nome', '$email', '$senha')";
    $query_cadastro = mysqli_query($connect, $recebendo_cadastro);
?> 