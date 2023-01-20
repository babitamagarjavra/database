<?php

include 'Database.php';

if (isset($_POST['submit'])) {
    switch ($_POST['submit']) {
        case 'author':

            $authorName = $_POST['authorname'];

            $dateofBirth = $_POST['authordob'];

            $a = new Database();

            $a->insert('author', ['Author_name' => $authorName, 'Date_of_Birth' => $dateofBirth]);

            echo ('data saved');

            break;

        case 'book':

            $bookName = $_POST['bookname'];

            $bookAuthor = $_POST['bookauthor'];

            $copiesSold = $_POST['copiessold'];

            $bookPublisher = $_POST['bookpublisher'];

            $a = new Database();

            $a->insert('book', ['book_name' => $bookName, 'book_author' => $bookAuthor, 'copies_sold' => $copiesSold,'book_publisher' => $bookPublisher]);

            echo ('data saved');
            
            break;

        case 'publisher':

            $publisherName = $_POST['publishername'];
            
            $publisherAddr = $_POST['publisheradd'];

            $a = new Database();

            $a->insert('publisher', ['publisher_name' => $publisherName, 'address' => $publisherAddr]);

            echo ('data saved');
            
            break;
    }
}
