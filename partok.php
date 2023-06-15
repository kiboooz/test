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
            SELECT (counter)  FROM monitor ORDER BY id DESC LIMIT 1
        ) AS total1,
        (
            SELECT (warmup + unfill + undercut + shrinkage + visual+ pin + nempel + coating) FROM reject ORDER BY id DESC LIMIT 1
        ) AS total2";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if ($result) {
    $total1 = $row["total1"];
    $total2 = $row["total2"];

    $hasil = $total1 - $total2;
    $progres = ($hasil / $total1) * 100;
    $progtotal = (int)$progres;

    $data = array(
        'hasil' => $hasil,
        'reject' => $total2,
        'progres' => $progtotal,
    );

    // Menggabungkan total dari dua tabel

}
echo json_encode($data);

// Menutup koneksi
mysqli_close($conn);
