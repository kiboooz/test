 $(document).ready(function () {
            // Ketika halaman dimuat, jalankan fungsi untuk mengambil nilai dari database menggunakan Ajax
            getProgressBarValue();
        });

        function getProgressBarValue() {
            $.ajax({
                url: 'partok.php', // Ganti dengan URL ke file PHP yang akan mengambil nilai dari database
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // Update nilai progress bar dengan nilai yang diterima dari server
                    var progressValue = parseInt(data.progres);
                    $('#progress-bar').css('width', progressValue + '%').attr('aria-valuenow', progressValue);
                    $("#angka").html(data.progres);
                },
                error: function () {
                    console.log('Error occurred while retrieving progress value.');
                }
            });

            // Panggil fungsi getProgressBarValue setiap 5 detik untuk memperbarui nilai progress bar secara otomatis
            setTimeout(getProgressBarValue, 5000);
        }