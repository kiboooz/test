

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time7 = $_POST['time7'];


// simpan data waktu ke dalam database
$query = "UPDATE input SET hydraulic ='$time7' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

