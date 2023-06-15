<?php
// Koneksi ke database MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testing";

$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$nama = $_POST['nama4'];
$nrp = $_POST['nrp4'];
$part = $_POST['part4'];
$target = $_POST['target4'];
$shift = $_POST['shift4'];

// Simpan data ke tabel
$sql = "INSERT INTO input (nama, nrp, part, targetpart, shift) VALUES ('$nama', '$nrp', '$part', '$target', '$shift')";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil disimpan.";
    header("Location: tablet.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup koneksi
$conn->close();
