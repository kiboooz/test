

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time9 = $_POST['time9'];


// simpan data waktu ke dalam database
$query = "UPDATE dtprod SET dtwarm ='$time9' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

