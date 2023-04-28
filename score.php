<?php
require('_header.php');
$result = include('database/_read.php');

?>


<section class="table-results">
    <article class="container">
        <table id="result-table" class="table is-striped">
            <thead>
                <tr class="is-selected">
                    <th>Místo</th>
                    <th>Tým</th>
                    <th>Skóre</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr>
                    <?php
                    $number = 0;
                    while ($data = mysqli_fetch_assoc($result)) {
                        ?>
                    <tr>
                        <td>
                            <?php $number += 1;  echo($number);?>
                        </td>
                        <td>
                            <?php echo $data['team']; ?>
                        </td>
                        <td>
                            <?php echo $data['score']; ?>
                        </td>
                    </tr>
                    <?php
                    }
                    ?>

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