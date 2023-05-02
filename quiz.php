<section id="quiz" style="display: none">

    <article class="container">

        <div class="quiz">
            <div id="question"></div>

            <div id="choices">
                <button class="btn is-light" id="A" onclick="checkAnswer('A')"></button>
                <button class="btn is-light" id="B" onclick="checkAnswer('B')"></button>
                <button class="btn is-light" id="C" onclick="checkAnswer('C')"></button>
                <button class="btn is-light" id="D" onclick="checkAnswer('D')"></button>
            </div>
        </div>
    </article>


    <article class="container">
        <div class="notification is-info">
            <div id=" timer">

                <div id="counter"></div>

            </div>
            <div class="progress">
                <progress id="progress" class="progress is-danger" value="" max="60"></progress>
            </div>
            <div id="correct">
                <div id="prog"></div>
            </div>

        </div>
    </article>
</section>

<div id="score-container" class="score-window">
    <div class="form-container">
        <form action="database/_post.php" method="post">

            <div class="btn-start is-mobile">
                <input type="text" class="input is-large" name="userteam" id="form-Team" value="" readonly>
            </div>

            <div class="btn-start is-mobile">
                <input type="text" class="input is-large" name="username" id="form-Name" value="" readonly>
            </div>

            <div class="btn-start is-mobile">
                <input type="text" class="input is-large" name="userscore" id="form-Score" value="" readonly>
            </div>

            <input type="submit" name="adduser" id="btn-end" class="button is-medium is-danger" value="ULOŽ VÝSLEDEK">
        </form>
    </div>
</div>