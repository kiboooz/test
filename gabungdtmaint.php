<?php
// Menghubungkan ke database
$koneksi = mysqli_connect("localhost", "root", "", "testing");

// Memeriksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Kueri SQL untuk menjumlahkan dua kolom
$sql = "SELECT (dtdie + tilting + ejector + ekstraktor + safetyh + core + hydraulic + electrical) AS total FROM input ORDER BY id DESC LIMIT 1";

// Menjalankan kueri SQL
$result = mysqli_query($koneksi, $sql);

// Memeriksa apakah kueri berhasil dijalankan
if ($result) {
    $row = mysqli_fetch_assoc($result);
    $total = $row['total'];
} else {
    echo "Error: " . mysqli_error($koneksi);
}

echo json_encode($total);
// Menutup koneksi
mysqli_close($koneksi);
