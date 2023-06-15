<?php
// Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "testing");

// Ambil data terakhir dari database
$result = mysqli_query($conn, "SELECT * FROM input ORDER BY id DESC LIMIT 1");
$data = mysqli_fetch_assoc($result);
$namkar = $data['nama'];
$nrpkar = $data['nrp'];
$partpro = $data['part'];
$target = $data['targetpart'];
$shift = $data['shift'];
$dtdie = $data['dtdie'];
$tilting = $data['tilting'];
$ejector = $data['ejector'];
$ekstraktor = $data['ekstraktor'];
$safetyh = $data['safetyh'];
$core = $data['core'];
$hydraulic = $data['hydraulic'];
$electrical = $data['electrical'];




// Mengirim data sebagai response
header('Content-Type: application/json');
echo json_encode($namkar);
echo json_encode($nrpkar);
echo json_encode($partpro);
echo json_encode($target);
echo json_encode($shift);
echo json_encode($dtdie);
echo json_encode($tilting);
echo json_encode($ejector);
echo json_encode($ekstraktor);
echo json_encode($safetyh);
echo json_encode($core);
echo json_encode($hydraulic);
echo json_encode($electrical);
