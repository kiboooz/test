

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time25 = $_POST['time25'];


// simpan data waktu ke dalam database
$query = "UPDATE dteng SET dtgas ='$time25' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

