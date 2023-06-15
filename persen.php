<?php
// koneksi ke database
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'testing';
$conn = mysqli_connect($host, $username, $password, $database);

// query untuk mengambil data dari tabel pertama
$sql1 = "SELECT (counter) as total1 FROM monitor ORDER BY id DESC LIMIT 1";
$result1 = mysqli_query($conn, $sql1);
$row1 = mysqli_fetch_assoc($result1);
$total1 = $row1['total1'];

// query untuk mengambil data dari tabel kedua
$sql2 = "SELECT (targetpart) as total2 FROM input ORDER BY id DESC LIMIT 1";
$result2 = mysqli_query($conn, $sql2);
$row2 = mysqli_fetch_assoc($result2);
$total2 = $row2['total2'];

// menjumlahkan nilai dari kedua tabel
$total = $total1 / $total2 * 100;
$format_total = (int)$total;


echo json_encode($format_total);
