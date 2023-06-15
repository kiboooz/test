<?php
// Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "testing");

// Ambil data terakhir dari database
$result = mysqli_query($conn, "SELECT * FROM notiftv ORDER BY id DESC LIMIT 1");
$data = mysqli_fetch_assoc($result);
$cek = $data['nilai'];



// Mengirim data sebagai response
header('Content-Type: application/json');
echo json_encode($cek);
