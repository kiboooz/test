

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time10 = $_POST['time10'];


// simpan data waktu ke dalam database
$query = "UPDATE dtprod SET dtfill ='$time10' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

