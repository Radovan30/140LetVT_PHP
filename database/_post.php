<?php
include('message.php');
$con = include('connect.php');

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

    $query = mysqli_query($con, $query);

    if (!$query) {
        die("Data was not saved successfully!");
    }

    // $_SESSION['message'] = "Data uložena";
    header('Location: ../index.php?');
    exit(0);


}