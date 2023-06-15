<?php
// Connect to MySQL database
$conn = mysqli_connect("localhost", "root", "", "testing");

// Retrieve integer value from MySQL table
$result = mysqli_query($conn, "SELECT * FROM monitor ORDER BY id DESC LIMIT 1");
$row = mysqli_fetch_assoc($result);
$status = $row['alarm'];
$nilai = $row['counter'];

// Convert integer to word
if ($status == 0) {
    $word = 'Running';
} elseif ($status == 1) {
    $word = 'Stopped';
} else {
    $word = "Tidak Diketahui";
}

// Output word
echo json_encode($word);
