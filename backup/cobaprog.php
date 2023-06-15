<?php
// Buat koneksi ke database MySQL
$host = 'localhost'; // Ganti dengan host database Anda
$username = 'root'; // Ganti dengan username database Anda
$password = ''; // Ganti dengan password database Anda
$database = 'testing'; // Ganti dengan nama database Anda

$koneksi = mysqli_connect($host, $username, $password, $database);
if (!$koneksi) {
    die('Koneksi database gagal: ' . mysqli_connect_error());
}

// Query untuk mengambil nilai progress dari database
$query = "SELECT * FROM dteng ORDER BY id DESC LIMIT 1"; // Ganti dengan query yang sesuai dengan struktur database Anda
$result = mysqli_query($koneksi, $query);

if ($result) {
    $row = mysqli_fetch_assoc($result);
    $progress = $row['dtcore'];
} else {
    $progress = 0;
}

// Kembalikan nilai progress sebagai respons Ajax
$response = array('progress' => $progress);
header('Content-Type: application/json');
echo json_encode($response);

// Tutup koneksi database
mysqli_close($koneksi);
