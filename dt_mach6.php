

<?php
// koneksi ke database MySQL
$conn = mysqli_connect("localhost", "root", "", "testing");

// ambil data waktu dari POST request
$time6 = $_POST['time6'];


// simpan data waktu ke dalam database
$query = "UPDATE input SET core ='$time6' ORDER BY id DESC LIMIT 1";

mysqli_query($conn, $query);


// tutup koneksi ke database
mysqli_close($conn);
?>

