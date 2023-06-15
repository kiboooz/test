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
$sql1 = "INSERT INTO input (nama, nrp, part, targetpart, shift) VALUES ('$nama', '$nrp', '$part', '$target', '$shift')";
mysqli_query($conn, $sql1);

$sql2 = "INSERT INTO dtprod (shift) VALUES ('$shift')";
mysqli_query($conn, $sql2);

$sql3 = "INSERT INTO dteng (shift) VALUES ('$shift')";
mysqli_query($conn, $sql3);

$sql4 = "INSERT INTO reject (shift) VALUES ('$shift')";
mysqli_query($conn, $sql4);

header("Location: tablet.html");
exit();

// Tutup koneksi
$conn->close();
