$(document).ready(function () {

    $('#category1').click(function (e) {
        document.getElementById("author").style.display = "block";
        document.getElementById("book").style.display = "none";
        document.getElementById("publisher").style.display = "none";
        document.getElementById("table").style.display = "inline-block";

        e.preventDefault();

        $.ajax({

            type: "POST",

            url: 'display.php',

            data: { display: this.id },

            success: function (response) {

                $decoded_response = $.parseJSON(response);

                displaytable();

                function displaytable() {

                    $('#table').empty();

                    var heading = $('<tr><th>Author ID</th><th>Author Name</th><th>Date of Birth</th><th>Action</th></tr>');

                    $('#table').append(heading);

                    $.each($decoded_response, function (index, value) {

                        var row = $('<tr><td>' + value[0] + '</td><td>' + value[1]
                            + '</td><td>' + value[2] + '</td><td><button onclick="deleteauthor(' + value[0] + ')">Delete</button></td></tr>');

                        $('#table').append(row);
                    });

                }
            }
        });

    });

    $("#category2").click(function (e) {
        document.getElementById("author").style.display = "none";
        document.getElementById("book").style.display = "block";
        document.getElementById("publisher").style.display = "none";
        document.getElementById("table").style.display = "inline-block";
        e.preventDefault();

        $.ajax({
            type: "POST",

            url: 'display.php',

            data: { display: this.id },

            success: function (response) {

                $decoded_response = $.parseJSON(response);

                displaytable();

                function displaytable() {

                    $('#table').empty();

                    var heading = $('<tr><th>Book ID</th><th>Book Name</th><th>Author ID</th><th>Copies Sold</th><th>Publisher ID</th><th>Action</th></tr>');

                    $('#table').append(heading);

                    $.each($decoded_response, function (index, value) {

                        var row = $('<tr><td>' + value[0] + '</td><td>' + value[1]
                            + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td><td>' + value[4] + '</td><td><button onclick="deletebook(' + value[0] + ')">Delete</button></td></tr>');

                        $('#table').append(row);
                    });

                }
            }
        });
    });

    $("#category3").click(function (e) {
        document.getElementById("author").style.display = "none";
        document.getElementById("book").style.display = "none";
        document.getElementById("publisher").style.display = "block";
        document.getElementById("table").style.display = "inline-block";
        e.preventDefault();

        $.ajax({
            type: "POST",

            url: 'display.php',

            data: { display: this.id },

            success: function (response) {
                $decoded_response = $.parseJSON(response);

                displaytable();

                function displaytable() {

                    $('#table').empty();

                    var heading = $('<tr><th>Publisher ID</th><th>Publisher Name</th><th>Publisher Address</th><th>Action</th></tr>');

                    $('#table').append(heading);

                    $.each($decoded_response, function (index, value) {

                        var row = $('<tr><td>' + value[0] + '</td><td>' + value[1]
                            + '</td><td>' + value[2] + '</td><td><button onclick="deletepublisher(' + value[0] + ')">Delete</button></td></tr>');

                        $('#table').append(row);
                    });

                }

            }
        });
    });

    $("form").submit(function (e) {

        e.preventDefault();

        var formData = $(this).serializeArray();
        formData.push({ name: 'submit', value: this.id });
        $.ajax({

            type: "POST",

            url: 'insert.php',

            data: formData,

            success: function (response) {
                // console.log(response);
                alert(response);

            }

        });
    });

    $(".deletebutton").click(function (e) {

        // e.preventDefault();
        console.log("hello");
        // alert("hello");

        // $.ajax({

        //     type: "POST",

        //     url: 'delete.php',

        //     data: { delete: this.id },

        //     success: function (response) {

        //     }

        // });


    });

});

    function deleteauthor(id) {
        $.ajax({
            type: "POST",

            url: 'delete.php',

            data: {
                table: 'author',
                delete: id
            },

            success: function (response) {

                console.log(response);

            }

        });
    }

    function deletebook(id){
        $.ajax({
            type: "POST",

            url: 'delete.php',

            data: {
                table: 'book',
                delete: id
            },

            success: function (response) {

                console.log(response);

            }

        });

    }

    function deletepublisher(id){
        $.ajax({
            type: "POST",

            url: 'delete.php',

            data: {
                table: 'publisher',
                delete: id
            },

            success: function (response) {

                console.log(response);

            }

        });
    }
