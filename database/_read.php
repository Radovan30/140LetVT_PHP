<?php

$con = include('conectionDB.php');

$team = "";
$name = "";
$score = "";

//query to get data from the table
$sql = "SELECT * FROM result";

$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_array($result)) {

    $team = $team . '"'. $row['team'].'",';
    $name = $name . '"'. $row['username'] .'",';
    $score = $score . '"'. $row['score'] .'",';
}

$team = trim($team,",");
$name = trim($name,",");
$score = trim($score,",");

echo $team;
echo $name;
echo $score;
//"INSERT INTO result (team, username, score)