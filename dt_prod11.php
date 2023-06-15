

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time19 = $_POST['time19'];


// simpan data waktu ke dalam database
$query = "UPDATE dtprod SET dtsand ='$time19' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

