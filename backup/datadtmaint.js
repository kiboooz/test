$(document).ready(function() {
    $.ajax({
        url: "get_data.php", // Ganti dengan URL ke skrip PHP yang akan mengambil data dari MySQL
        type: "GET",
        dataType: "json",
        success: function(data) {
            if (data) {
                // Menampilkan data ke dalam elemen HTML dengan ID "result"
                $("#result").html("ID: " + data.id + "<br>" +
                                   "Nama: " + data.nama + "<br>" +
                                   "Email: " + data.email);
            } else {
                $("#result").html("Tidak ada data yang ditemukan.");
            }
        },
        error: function() {
            $("#result").html("Terjadi kesalahan dalam permintaan AJAX.");
        }
    });
});
