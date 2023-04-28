<?php
$con = include('conectionDB.php');

$team = "";
$username = "";
$score = "";
$msq = "";


if (isset($_POST["adduser"])) {
    $team = $_POST["userteam"];
    $username = $_POST["username"];
    $score = $_POST["userscore"];

    $query = "INSERT INTO result (team, username, score)
    VALUES('$team','$username','$score')";

    mysqli_query($con, $query);

    header('Location: ../index.php?');
    exit;
}





