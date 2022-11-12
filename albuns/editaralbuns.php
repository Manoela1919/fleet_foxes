<?php
    include "conexao.php";

    $id = $_POST["id"];
    $nome = $_POST["nome"];
    $imagem = $_POST["imagem"];
    $spotify = $_POST["spotify"];
    $deezer = $_POST["deezer"];
    $youtube = $_POST["youtube"];
    $musicas = $_POST["musicas"];
    $tipo = $_POST["tipo"];
    $data = $_POST["data"];
    $faixas = $_POST["faixas"];

    if (strlen($nome) === 0 || strlen($email) === 0 || strlen($telefone) === 0 ) {
        echo '<script>alert("Dados Inválidos")</script>';
        echo '<script>(window.location = "index.php?msg=error")</script>';
        return;
    }

    $editando_cadastro = "UPDATE albuns SET nome='$nome', imagem='$imagem', spotify='$spotify', deezer='$deezer', youtube='$youtube', musicas='$musicas', tipo='$tipo', data='$data', faixas='$faixas'
    WHERE id = '$id'";

    $query_cadastro = mysqli_query($connect, $editando_cadastro);

    header("Location: indexalbuns.php");
?>