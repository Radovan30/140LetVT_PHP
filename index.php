<?php
session_start();
require('_header.php');
?>

<section id="select-settings">
    <div class="level-item">
        <div class="btn-start is-mobile">
            <label for="selectName"></label>
            <input type="text" id="selectName" class="input is-link is-large" placeholder="Jméno*">
        </div>
    </div>

    <div class="level-item">
        <div class="btn-start select is-link is-large">
            <label for="selectTeam">
                <select id="selectTeam">
                    <option value="">Vyber tým</option>
                    <option value="101Gang">101Gang</option>
                    <option value="Error 404">Error 404</option>
                    <option value="POJACI">POJÁCI</option>
                    <option value="Emesaci z Liskace">Emesáci z Lískáče</option>
                    <option value="FM Kulisaci">FM Kulišáci</option>
                    <option value="Mechanici ze Zengrovky">Mechanici ze Zengrovky</option>
                    <option value="Kulisaci">Kulišáci</option>
                </select>
            </label>
        </div>
    </div>
</section>

<div class="btn-start">
    <button class="button is-danger is-large" id="btn-start">Spustit
        kvíz
    </button>
</div>

<div id="btn-result">
    <a href="score.php">
        <button class="button is-info is-large">Výsledky</button>
    </a>
</div>

<?php
require('quiz.php');
require('_footer.php');
?>