<!DOCTYPE html>

<html lang="cs">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>VT Jarmark - kvíz </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="src/favicon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="src/favicon/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="src/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
<header class="container has-background-light">

    <nav class="level">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading ">otázky</p>
                <p id="extract" class="title">0/30</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <img class="logo" src="src/img/VTTZ_140_3.png" alt="logo" style="height: 90px;">
        </div>

        <div class="level-item has-text-centered">
            <div>
                <label for="score" class="heading">skóre</label>
                <input type="text" class="title" id="score" size="1" value="0" readonly>
            </div>
        </div>
    </nav>

</header>
<main id="container" class=".container.is-fullhd">

    <aside class="container">
        <div class="notification is-link">
            <h1 class="h1">
                VĚDOMOSTNÍ KVÍZ <br> 140 LET VT
            </h1>
        </div>
        <div id="user">
        </div>
    </aside>