<?php
$con = include('connect.php');

$team = "";
$name = "";
$score = "";

//query to get data from the table
$sql = "SELECT team, SUM(score) AS score  FROM result GROUP BY team ORDER BY score DESC " ;

$result = mysqli_query($con, $sql);


return $result;