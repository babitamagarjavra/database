<?php

include 'Database.php';

if (isset($_POST['display'])) {

    switch ($_POST['display']) {

        case 'category1':

            $table = 'author';

            $a = new Database();

            $output = $a->display($table);

            print_r(json_encode($output));

            break;

        case 'category2':

            $table = 'book';

            $a = new Database();

            $output = $a->display($table);

            print_r(json_encode($output));

            break;

        case 'category3':

            $table = 'publisher';

            $a = new Database();

            $output = $a->display($table);

            print_r(json_encode($output));

            break;
    }
}
