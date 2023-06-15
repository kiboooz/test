$(document).ready(function () {
            $.ajax({
                url: "shift.php", // Ganti dengan URL skrip server Anda
                type: "GET",
                dataType: "json",
                success: function (response) {
                    if (response == 1) {
                        ubahWarna();
                        shift1();
                    } else if (response == 2) {
                        ubahWarna2();
                        shift2();
                    } else {
                        ubahWarna3();
                        shift3();
                    }
                },
                error: function (xhr, data, error) {
                    // Penanganan kesalahan jika terjadi
                    console.error(error);
                }
            });
        });