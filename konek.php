<?php
// Connect to MySQL database
$conn = mysqli_connect("localhost", "id20777497_kiboooz", "Kulkasrusak@15", "id20777497_testing");

// Retrieve integer value from MySQL table
$result = mysqli_query($conn, "SELECT * FROM input ORDER BY id DESC LIMIT 1");
$row = mysqli_fetch_assoc($result);
$data = $row['shift'];

// Convert integer to word
// Output word
echo json_encode($data);
