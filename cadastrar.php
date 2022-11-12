<?php
    include "conexao.php";

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    if (strlen($nome) === 0 || strlen($email) === 0 ) {
        echo '<script>alert("Dados Inválidos")</script>';
        echo '<script>(window.location = "index.php?msg=error")</script>';
        return;
    }

    $recebendo_cadastro = "INSERT INTO cadastros VALUES (NULL, '$nome', '$email', '$senha')";
    $query_cadastro = mysqli_query($connect, $recebendo_cadastro);

    header("Location: index.php");
?>