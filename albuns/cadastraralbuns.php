<?php
    include "conexao.php";

    $nome = $_POST["nome"];
    $imagem = $_POST["imagem"];
    $spotify = $_POST["spotify"];
    $deezer = $_POST["deezer"];
    $youtube = $_POST["youtube"];
    $musicas = $_POST["musicas"];
    $tipo = $_POST["tipo"];
    $data = $_POST["data"];
    $faixas = $_POST["faixas"];

    $recebendo_cadastro = "INSERT INTO albuns VALUES (NULL, nome='$nome', imagem='$imagem', spotify='$spotify', deezer='$deezer', youtube='$youtube', musicas='$musicas', tipo='$tipo', data='$data', faixas='$faixas')";
    $query_cadastro = mysqli_query($connect, $recebendo_cadastro);

    header("Location: indexalbuns.php");
?>