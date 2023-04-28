<?php
require('_header.php');
?>

<div id="btn-score">
    <button class="button is-danger is-large" id="btn-read">Načti výsledky</button>
</div>

<section class=" table-results">
    <article class="container">
        <table id="result-table" class="table is-striped">
            <thead>
                <tr class="is-selected">
                    <th>Tým</th>
                    <th>Jméno</th>
                    <th>Skóre</th>
                </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
        <div id="notfound"></div>
    </article>
</section>

<div id="">
    <a href="index.php">
        <button class="button is-info is-large">ZPĚT</button>
    </a>
</div>

<?php
require('_footer.php');
?>