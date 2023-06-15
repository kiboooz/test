<?php
$nilai = $_POST['nilai'];
$conn = mysqli_connect("localhost", "root", "", "testing");
$query = "INSERT INTO notiftv (nilai) VALUES ($nilai)";
mysqli_query($conn, $query);
mysqli_close($conn);
