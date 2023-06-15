<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testing";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Kueri SQL untuk menjumlahkan baris terakhir dari dua tabel
$sql =
    "SELECT (
            SELECT (safetyh + dtdie + tilting + ejector + ekstraktor + core +  hydraulic + electrical)  FROM input ORDER BY id DESC LIMIT 1
        ) AS total1,
        (
            SELECT (dteject +   dtlay + dtsand + dtretak) FROM dtprod ORDER BY id DESC LIMIT 1
        ) AS total2,
        (
            SELECT (dteject + dtcore + dtdies + dtdan + dtgas) FROM dteng ORDER BY id DESC LIMIT 1
        ) AS total3";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if ($result) {
    $total1 = $row["total1"];
    $total2 = $row["total2"];
    $total3 = $row["total3"];

    // Menggabungkan total dari dua tabel
    $hasil = $total1 + $total2 + $total3;
}
echo json_encode($hasil);

// Menutup koneksi
mysqli_close($conn);
