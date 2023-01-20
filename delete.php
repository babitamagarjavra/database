<?php

include 'Database.php';

$id = $_POST['delete'];

$table= $_POST['table'];

$a = new database();

$a->delete($table,$id);

?>