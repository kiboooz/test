

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time16 = $_POST['time16'];


// simpan data waktu ke dalam database
$query = "UPDATE dtprod SET dtpin ='$time16' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

