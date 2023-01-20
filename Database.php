<?php
class Database
{
    private $servername = 'localhost';

    private $username = 'babita';

    private $password = 'password';

    private $dbname = 'bob';

    private $result = array();

    private $mysqli = '';

    public function connect()
    {

        $con = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
        return $con;
    }

    public function insert($table, $para = array())
    {

        $table_columns = implode(',', array_keys($para));

        $table_value = implode("','", $para);

        $sql = "INSERT INTO $table($table_columns) VALUES('$table_value')";

        $conn = $this->connect();

        mysqli_query($conn, $sql);

    }

    public function display($table)
    {

        $conn = $this->connect();

        switch ($table) {

            case 'author':
                $displayQuery = "SELECT * FROM $table";
                $this->result = mysqli_query($conn, $displayQuery);
                $para = [];
                while ($row = mysqli_fetch_assoc($this->result)) {
                    $author_id = $row['Author_id'];
                    $author_name = $row['Author_name'];
                    $author_DOB = $row['Date_of_Birth'];
                    array_push($para,[$author_id, $author_name, $author_DOB]);
                    }
            
                return $para;

                break;

            case 'book':
                $displayQuery = "SELECT * FROM $table";
                $this->result = mysqli_query($conn, $displayQuery);
                $para = [];
                while ($row = mysqli_fetch_assoc($this->result)) {
                    $book_id = $row['book_id'];
                    $book_name = $row['book_name'];
                    $book_authorid = $row['book_author'];
                    $book_copiessold = $row['copies_sold'];
                    $book_publisherid = $row['book_publisher'];
                    array_push($para,[$book_id, $book_name, $book_authorid, $book_copiessold, $book_publisherid]);    
                }

                return $para;

                break;

            case 'publisher':
                $displayQuery = "SELECT * FROM $table";
                $this->result = mysqli_query($conn, $displayQuery);
                $para = [];
                while ($row = mysqli_fetch_assoc($this->result)) {
                    $publisher_id = $row['publisher_id'];
                    $publisher_name = $row['publisher_name'];
                    $publisher_address = $row['address'];
                    array_push($para,[$publisher_id, $publisher_name, $publisher_address]);
                }

                return $para;

                break;

        }
    }

    public function delete($table,$id){

        $columnIdentifier = ucfirst($table) ."_id";

        $sql="DELETE FROM $table WHERE $columnIdentifier = $id";  // $table ."_id"

        $conn = $this->connect();

        mysqli_query($conn, $sql);
    }

}
