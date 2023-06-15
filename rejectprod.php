<?php
// Membuat koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testing";

$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Memeriksa apakah ada request POST untuk menyimpan data counter
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $counters1 = $_POST["counters1"];
    $counters2 = $_POST["counters2"];
    $counters3 = $_POST["counters3"];
    $counters4 = $_POST["counters4"];
    $counters5 = $_POST["counters5"];
    $counters6 = $_POST["counters6"];
    $counters7 = $_POST["counters7"];
    $counters8 = $_POST["counters8"];

    // Menyimpan data counter ke database
    $sql = "UPDATE reject SET warmup = '$counters1', unfill = '$counters2', undercut = '$counters3', shrinkage = '$counters4',
     visual = '$counters5', pin = '$counters6', nempel = '$counters7', coating = '$counters8' ORDER BY id DESC LIMIT 1";

    if ($conn->query($sql) === TRUE) {
        echo "Data counter berhasil disimpan ke database.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Menutup koneksi ke database
$conn->close();
