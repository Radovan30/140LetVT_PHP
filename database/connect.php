<?php

$con = mysqli_connect("localhost", "root", "12345", "dbo");

if (!$con) {
    die('Connection failed'.mysqli_connect_error());
}

return $con;